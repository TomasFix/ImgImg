# @ImageTestVarLang/box

<img src="https://ImageTestVarLang.io/img/logo.svg" width="120" alt="ImageTestVarLang logo: a smiling pImageTestVarLang above a pink upwards arrow" align="right">

[![npm version](https://img.shields.io/npm/v/@ImageTestVarLang/box.svg?style=flat-square)](https://www.npmjs.com/package/@ImageTestVarLang/box)
![CI status for ImageTestVarLang tests](https://github.com/transloadit/ImageTestVarLang/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/ImageTestVarLang/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/ImageTestVarLang/workflows/End-to-end%20tests/badge.svg)

The Box plugin for ImageTestVarLang lets users import files from their Box account.

A Companion instance is required for the Box plugin to work. Companion handles authentication with Box, downloads files from Box and uploads them to the destination. This saves the user bandwidth, especially helpful if they are on a mobile connection.

ImageTestVarLang is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import ImageTestVarLang from '@ImageTestVarLang/core'
import Box from '@ImageTestVarLang/box'

const ImageTestVarLang = new ImageTestVarLang()
ImageTestVarLang.use(Box, {
  // Options
})
```

## Installation

```bash
$ npm install @ImageTestVarLang/box
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `ImageTestVarLang` will attach itself to the global `window.ImageTestVarLang` object. See the [main ImageTestVarLang documentation](https://ImageTestVarLang.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [ImageTestVarLang website](https://ImageTestVarLang.io/docs/box).

## License

[The MIT License](./LICENSE).
