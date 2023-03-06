<h1 align="center" color="cyan" style="size:100px;"> <bold> Whisper</bold> </h1>

### • Installation
```bash
npm i @nicat.dcw/whisper -g
```

### • Updates
> 06:03:2023 - First Release

### • Setup
```js
import { WhisperClient } from '@nicat.dcw/whisper'

const whisper = new WhisperClient({
    key:"OPENAI ACCESS TOKEN HERE",
    debug:"" // for debugging. Options: true or false
})
```

### • Start Whisper
```js
whisper.start({
    file:"FILE NAME AND FILE DIRECTORY GOES HERE",
    language:"en"
})
```

### • Stop Whisper
```js
whisper.stop()
```

## IMPORTANT! 
```md
This package only Es Module (ESM), no CommonJS.
```

## Contact: [website](https://nicat-dcw.me)

