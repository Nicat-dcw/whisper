
import { WhisperClient } from './index.js'

const client = new WhisperClient({
  key: process.env.key,
  debug: "true"
})

client.start({
  language: 'en',
  file: './The Downtown Fiction - I Just Wanna Run (Sped Up) (128K).mp3'
})