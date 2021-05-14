<div align="center">

# flykra.ts

[![deno version](https://img.shields.io/badge/deno-^1.10.1-lightgrey?logo=deno&style=flat-square)](https://github.com/denoland/deno)
[![Discord](https://img.shields.io/discord/303195322514014210?color=697EC4&label=Discord&logo=discord&logoColor=FDFEFE&style=flat-square)](https://pengubot.com/support)
![GitHub License](https://img.shields.io/github/license/PenguBot/flykra.ts?style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/PenguBot/flykra.ts/deno?style=flat-square)

Pengu's Flykra API Client on Deno

</div>

## Example Usage

```js
import FlykraClient from "https://raw.githubusercontent.com/PenguBot/flykra.ts/main/mod.ts";

const flykra = new FlykraClient({ secret: "api secret token" });
await flykra.rainbow("https://cdn.discordapp.com/avatars/xyz/xyz.png?size=512");
```

## Endpoints

#### Generators

- batslap
- beautiful
- bobross
- evil
- facepalm
- garbage
- lio
- missing
- religion
- rip
- tinder
- triggered
- wanted

#### Overlays

- rainbow
- approved
- rejected

#### Text

- achievement
- changemymind
- illegal

## License

[Apache-2.0](https://github.com/PenguBot/flykra.ts/blob/main/LICENSE)
