// Seu script principal
import config from './config.js';

const api_key = config.api_key;

const resp = await fetch(
  "https://pixeldrain.com/api/user/files",
  {
    method: "GET",
    headers: {
      "Authorization": "Basic " + btoa(":" + api_key),
    },
  }
);

if (resp.status >= 400) {
  throw new Error(await resp.json());
}

const result = await resp.json();
console.log(result);
