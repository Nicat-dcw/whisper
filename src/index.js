import fs from "node:fs";

import fetch from "node-fetch";

import FormData from "form-data";

export class WhisperClient {
  constructor({ key, debug }) {
    if (!key)
      throw new TypeError("Access token must be provided in the client.");

    if (key.length <= 2)
      throw new Error("Access token length must be higher than 2.");

    if (key.startsWith !== "sk-")  
      throw new Error("Invalid Access Token provided.")

    this.token = key;

    this.debug = debug || false;
  }

  async start({ file, language }) {
    if (!file) throw new TypeError("File is required for this action.");

    var files = fs.createReadStream(file);

    var data = new FormData();

    data.append("file", files);

    data.append("model", "whisper-1");

    data.append("language", language || "en");

    data.append("response_format", "text");

    const response = await fetch(
      "https://api.openai.com/v1/audio/transcriptions",
      {
        method: "POST",

        body: data,

        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    )
      .then((res) => res.text())

      .then((json) => {
        if (this.debug === "true") console.log(json);

        return json.text;
      });
  }

  stop() {
    process.exit(0);
  }
}
