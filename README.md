<div align="center">

# @pengubot/flykra

![Depfu](https://img.shields.io/depfu/PenguBot/flykra.ts?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/@pengubot/flykra?style=flat-square)
[![Discord](https://img.shields.io/discord/303195322514014210?color=697EC4&label=Discord&logo=discord&logoColor=FDFEFE&style=flat-square)](https://pengubot.com/support)
![GitHub](https://img.shields.io/github/license/PenguBot/flykra.ts?style=flat-square)
![npm](https://img.shields.io/npm/v/@pengubot/flykra.ts?style=flat-square)

Pengu's Flykra API Client

</div>

## Example Usage

```js
import FlykraClient from "@pengubot/flykra";

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
