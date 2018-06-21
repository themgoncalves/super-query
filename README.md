# 🎠 Super-Query
> A super `media-query` for styled-component. Intuitive and easy of use.

[![Build Status][travis-ci-image]][travis-ci-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![GitHub All Releases][releases-image]][releases-url]
[![GitHub stars][stars-image]][stars-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]
[![GitHub issues][issues-image]][issues-url]
[![NPM][npm-image]][npm-url]
[![Awesome][awesome-image]][awesome-url]

## Description

We all know that [`Media Query`](https://developer.mozilla.org/de/docs/Web/CSS/Media_Queries/Using_media_queries) is a very important part of your application; with that you can set **any kind of responsiveness** and **device control**.

Most of the developers only use simple `media feature` as part of the `media query` syntax, and for that simple use case, there's a [bunch of good approach for your `styled-component`](https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md#media-templates) based application.

> **Media Feature examples**:
> _width | min-width | max-width | height | min-height | max-height_

<br />

But how about control over the `screen orientation`, `aspect-ratio`, `resolution` and `tv` devices? Or even a interpolation between?

For those developers who need more control over the `styled-component` based application, we created the **`SuperQuery`** in order to provide a **full powerful and simple control over your media query**.

<br />

## Want a simple code demonstration?

How about create a `media query` that handles screen widths between `360px` and `1024px` ?

```javascript
SuperQuery().minWidth('360px').and().maxWidth('1024px').css`
    content: 'this is awesome!'
`
```

Cool, right? But it's even cooler to use our `built-in` breakpoints, let's rewrite it!

```javascript
SuperQuery().minWidth().sm().and().maxWidth().lg().css`
    content: 'this is even more awesome!'
`
```

Of even how about control the `screen orientation` over `mobile` devices ?

```javascript
SuperQuery().maxWidth().md().and().landscape().css`
    content: 'Yep! Your device is on landscape mode!'
`
```

Want a more `complex query` ?

```javascript
SuperQuery()
      .screen()
      .and()
      .deviceAspectRatio('16/9')
      .or()
      .screen()
      .and()
      .deviceAspectRatio('16/10')
      .css`
    content: 'this is awesome!'
`
```

Yeah! Now you know how `simple` and `powerful` is `SuperQuery`!

## Installation

Since we have experience some issues with NPM along the time, we strongly recomment the use of [YARN Package Manage](https://yarnpkg.com/en/);

**Download our NPM Package**

For YARN users:

```sh
yarn add @themgoncalves/super-query
```


For NPM users:

```sh
npm install @themgoncalves/super-query
```


Note that it **should not** be in the devDependencies.

<br />

## How to use

First we need to import the package into our component;

```javascript
import SuperQuery from '@themgoncalves/super-query';
```

Then, we are ready to mix it with `styled-component`:

```javascript
const Title = styled.h1`
  color: #666;
  font-size: 16px;
  ${SuperQuery().minWidth().lg().css`
    font-size: 20px;
  `};
  ${SuperQuery().minWidth().lg().and().landscape().css`
    font-size: 26px;
  `};
`;
```

See how easy to implement it is?


## API Documentation

This package follows the `css3 media query` rule, [click here to check it out](https://developer.mozilla.org/de/docs/Web/CSS/Media_Queries/Using_media_queries).


### The Media Query Syntax

A few motivating and useful examples of how your product can be used. Spice this up with code blocks and potentially more screenshots.

```regex
media_query: [[only | not]? <media_type> [ and <expression> ]*] |
             <expression> [ and <expression> ]*

expression: ( <media_feature> [: <value>]? )

media_type: all | aural | braille | handheld | print |
  projection | screen | tty | tv | embossed

media_feature: width | min-width | max-width
  | height | min-height | max-height
  | device-width | min-device-width | max-device-width
  | device-height | min-device-height | max-device-height
  | aspect-ratio | min-aspect-ratio | max-aspect-ratio
  | device-aspect-ratio | min-device-aspect-ratio | max-device-aspect-ratio
  | color | min-color | max-color
  | color-index | min-color-index | max-color-index
  | monochrome | min-monochrome | max-monochrome
  | resolution | min-resolution | max-resolution
  | scan | grid
```

### Built-in Breakpoints

| Type | How to Use | Size | Comes after of | Following options | Can set `css` after?  |
---|---|---|---|---|---|
| xs | `.xs()` | 0px | `Media Feature` | `Logical Operator` | ✔ |
| sm | `.sm()` | 576px | `Media Feature` | `Logical Operator` | ✔ |
| md | `.md()` | 768px | `Media Feature` | `Logical Operator` | ✔ |
| lg | `.lg()` | 992px | `Media Feature` | `Logical Operator` | ✔ |
| xl | `.xl()` | 1200px | `Media Feature` | `Logical Operator` | ✔ |

### Media Type

| Type | How to Use | Comes after of | Following options | Can set `css` after?  |
|---|---|---|---|---|
| all | `.all()` | `SuperQuery()`, `Logical Operator` | `Logical Operator`, `Media Feature` | ✖ |
| aural | `.aural()` | `SuperQuery()`, `Logical Operator` | `Logical Operator`, `Media Feature` | ✖ |
| braille | `.braille()` | `SuperQuery()`, `Logical Operator` | `Logical Operator`, `Media Feature` | ✖ |
| handheld | `.handheld()` | `SuperQuery()`, `Logical Operator` | `Logical Operator`, `Media Feature` | ✖ |
| print | `.print()` | `SuperQuery()`, `Logical Operator` | `Logical Operator`, `Media Feature` | ✖ |
| projection | `.projection()` | `SuperQuery()`, `Logical Operator` | `Logical Operator`, `Media Feature` | ✖ |
| screen | `.screen()` | `SuperQuery()`, `Logical Operator` | `Logical Operator`, `Media Feature` | ✖ |
| tty | `.tty()` | `SuperQuery()`, `Logical Operator` | `Logical Operator`, `Media Feature` | ✖ |
| tv | `.tv()` | `SuperQuery()`, `Logical Operator` | `Logical Operator`, `Media Feature` | ✖ |
| embossed | `.embossed()` | `SuperQuery()`, `Logical Operator` | `Logical Operator`, `Media Feature` | ✖ |

### Media Feature

| Type | How to Use | Optional Argument Example | Comes after of | Following options | Can set `css` after?  |
|---|---|---|---|---|---|
| width |`.width()` | `.width('100px')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| min-width | `.minWidth()` | `.minWidth('100px')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| max-width |`.maxWidth()` |`.maxWidth('100px')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| height | `.height()` | `.height('340px')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| min-height | `.minHeight()` | `.minHeight('340px')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| max-height | `.maxHeight()` | `.maxHeight('340px')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| device-width | `.deviceWidth()` | `.deviceWidth('960px')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| min-device-width | `.minDeviceWidth()` | `.minDeviceWidth('960px')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| max-device-width | `.maxDeviceWidth()` | `.maxDeviceWidth('960px')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| device-height | `.height()` | `.height('320px')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| min-device-height | `.minDeviceHeight()` | `.minDeviceHeight('340px')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| max-device-height | `.maxDeviceHeight()` | `.maxDeviceHeight('340px')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| aspect-ratio | `.aspectRatio()` | `.aspectRatio('1/1')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| min-aspect-ratio | `.minAspectRatio()` | `.minAspectRatio('1/1')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| max-aspect-ratio | `.maxAspectRatio()` | `.maxAspectRatio('1/1')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| device-aspect-ratio | `.deviceAspectRatio()` | `.deviceAspectRatio('16/9')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| min-device-aspect-ratio | `.minDeviceAspectRatio()` |  `.minDeviceAspectRatio('16/9')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| max-device-aspect-ratio | `.maxDeviceAspectRatio()` | `.maxDeviceAspectRatio('16/9')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| color | `.color()` | `n/a` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| min-color | `.minColor()` | `.minColor('4')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| max-color | `.maxColor()` | `.maxColor('4')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| color-index | `.colorIndex()` | `.colorIndex('256')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| min-color-index | `.minColorIndex()` | `.minColorIndex('256')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| max-color-index | `.maxColorIndex()` | `.maxColorIndex('256')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| monochrome | `.monochrome()` | `n/a` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| min-monochrome | `.minMonochrome()` | `.minMonochrome('8')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| max-monochrome | `.maxMonochrome()` | `.maxMonochrome('8')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| resolution | `.resolution()` | `.resolution('300dpi')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| min-resolution | `.minResolution()` | `.minResolution('300dpi')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| max-resolution | `.maxResolution()` | `.maxResolution('300dpi')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| scan | `.scan()` | `.scan('progressive')` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |
| grid | `.grid()` | `n/a` | `SuperQuery()`, `Logical Operator`, `Media Type` | `Logical Operator`, `Breakpoints` | ✔ |


### Screen Orientation

| Type | How to Use | Comes after of | Following options | Can set `css` after?  |
|---|---|---|---|---|
| landscape |`.landscape()` | `Logical Operator` | `Logical Operator` | ✔ |
| portrait |`.portrait()` | `Logical Operator` | `Logical Operator` | ✔ |


### Logical Operator

| Type | How to Use | Comes after of | Following options | Can set `css` after?  |
|---|---|---|---|---|
| and |`.and()` |  `Media Feature`, `Screen Orientation`, `Breakpoints` | `Media Type`, `Media Feature`, `Screen Orientation` | ✖ |
| or |`.or()` | `Media Feature`, `Screen Orientation`, `Breakpoints` | `Media Type`, `Media Feature`, `Screen Orientation` | ✖ |
| not |`.not()` | `SuperQuery()` | `Media Type` | ✖ |
| only |`.only()` | `SuperQuery()` | `Media Type` | ✖ |

### Render CSS

Simply call the `css` function as the last iteration and pass the `css syntax` throw `ES6 Tagged Template Literals`:

```javascript
SuperQuery().minWidth().md().css`
  color: white;
  font-size: 14px;
  text-decoration: none;
`
```


### How to create custom breakpoints?

One of the coolest features we have on SuperQuery is the possibility to overwrite our default breakpoints into your own custom.

Here is how to do:

```javascript

// first we need to import the `configureBreakpoints` function
import { configureBreakpoints } from '@themgoncalves/super-query';

// here is an example of a custom breakpoint
const customBreakpoints = {
  extraSmall: 360,
  small: 640,
  medium: 960,
  large: 1024,
  extraLarge: 1200,
  superExtraLarge: 1600,
};

// then just import your custom breakpoints into the `configureBreakpoints` and you are ready to go!
configureBreakpoints(customBreakpoints);

```

After that, you should be able to use it in the same conditions as the default ones.


```javascript

// first we need to import the `configureBreakpoints` function
import { configureBreakpoints } from '@themgoncalves/super-query';

// here is an example of a custom breakpoint
const customBreakpoints = {
  extraSmall: 360;
  small: 640;
  medium: 960,
  large: 1024,
  extraLarge: 1200,
  superExtraLarge: 1600,
};

// then just import your custom breakpoints into the `configureBreakpoints` and you are ready to go!
configureBreakpoints(customBreakpoints);
```

Then you should be able to use it in the same conditions as the default breakpoints.

See a demonstration of the above code:

```javascript
SuperQuery().minWidth().superExtraLarge().css`
    content: 'You just called your own custom breakpoints!'
`
```

<br />

### NEW: `Orientation`

We have added in the `version 1.0.0` a new feature: `Orientation`, which is a `Screen Orientation manager`.

This feature is an implementation of the Web API `Screen.orientation` available in the modern browser.

Note that this feature might not work on a several environments, like in the `iOS`.
For more information, [click here and check the browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation)

**How to use**

```javascript
import { Orientation } from '@themgoncalves/super-query';

// or you can import direct the module

import Orientation from '@themgoncalves/super-query/orientation';
```

**Listening for screen orientation change**

```javascript
Orientation.onChange((orientation) => {
    console.inf('Screen orientation has changed to: ', orientation);
});
```

**Get the `current orientation`**

```javascript
const currentOrientation = Orientation.current();
console.info('Current screen orientation: ', currentOrientation);
```

**Locking the orientation**

```javascript
// screen orientations available to be locked:
// landscape-primary
// landscape-secondary
// portrait-primary
// portrait-secondary

const wasScreenLocked = Orientation.lock('portrait-primary');

// or you can pass an array with the orientations to be locked
const wasScreenLocked = Orientation.lock(['portrait-primary', 'portrait-secondary']);

console.info('Was screen locked? ', wasScreenLocked);
```

**Unlocking the screen**

```javascript
const wasScreenUnlocked = Orientation.unlock();
console.info('Was screen unlocked? ', wasScreenUnlocked);
```

**Check if the screen orientation was `locked` before**

```javascript
const wasScreenOrientationLocked = Orientation.isLocked();
console.info('Was screen orientation locked before? ', wasScreenOrientationLocked);
```

<br />

## Release History
* 1.0.0
    * Stable version
    * NEW: Created `Orientation` - Screen Orientation management
    * NEW: Created `Example` (Demo) of Super-Query
    * Improved folder structure
* 0.1.1
    * Fixed typo in the `ToString` method used for tests
    * Minor fixes and improvement in the project's documentation
* 0.1.0
    * First release
    * NEW: Created `configureBreakpoints()` to set custom breakpoints
* 0.0.1
    * Work in progress

<br />

## Meta

### Author
**Marcos Gonçalves** – [LinkedIn](http://linkedin.com/in/themgoncalves/) – [Website](http://www.themgoncalves.com)

### License
Distributed under the MIT license. [Click here](/LICENSE) for more information.

[https://github.com/themgoncalves/super-query](https://github.com/themgoncalves/super-query)

## Contributing

1. Fork it (<https://github.com/themgoncalves/super-query/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -m ':zap: Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->

[vulnerabilities-image]: https://snyk.io/test/github/themgoncalves/super-query/badge.svg
[vulnerabilities-url]: https://snyk.io/test/github/themgoncalves/super-query
[issues-image]: https://img.shields.io/github/issues/themgoncalves/super-query.svg
[issues-url]: https://github.com/themgoncalves/super-query/issues
[stars-image]: https://img.shields.io/github/stars/themgoncalves/super-query.svg
[stars-url]: https://github.com/themgoncalves/super-query/stargazers
[forks-image]: https://img.shields.io/github/forks/themgoncalves/super-query.svg
[forks-url]: https://github.com/themgoncalves/super-query/network
[awesome-image]: https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg
[releases-image]: https://img.shields.io/github/downloads/atom/atom/total.svg
[releases-url]: https://github.com/themgoncalves/react-redux-async-starter-kit
[awesome-url]: https://github.com/themgoncalves/super-query
[wiki]: https://github.com/yourname/yourproject/wiki
[travis-ci-image]: https://travis-ci.org/themgoncalves/super-query.svg?branch=master
[travis-ci-url]: https://travis-ci.org/themgoncalves/super-query
[coveralls-image]: https://coveralls.io/repos/github/themgoncalves/super-query/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/themgoncalves/super-query?branch=master
[npm-image]: https://img.shields.io/npm/v/@themgoncalves/super-query.svg
[npm-url]: https://www.npmjs.com/package/@themgoncalves/super-query
