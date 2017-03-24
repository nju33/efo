# Efo

<!-- [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

[![Build Status](https://travis-ci.org/nju33/efo.svg?branch=master)](https://travis-ci.org/nju33/efo) -->

Good form? To make


![screenshot](https://github.com/nju33/efo/raw/master/images/screenshot.gif?raw=true)

## Install or Download

```sh
yarn add efo
npm i -S efo
```

Or access to [releases page](https://github.com/nju33/efo/releases).
Then, download the latest version.

## Usage

First, if you read as a separate file

```html
<script src="/path/tp/efo.js"></script>
```

Several new attributes will appear.

- `data-efo-name`  
  This will be the name of the input part.
  This can be substituted for name originally in `<input>`. This is used when you want to add a name to more than one `<input>`.
- `data-efo-error-class`  
  When an error occurs in the validation of the input form, add `.efo-error`. Also, when solving it add `.efo-resolved`.
- `data-efo-error-message`  
  Inserts an error message in `innerText` of the element set on error.
- `data-efo-set-default-height`  
  In error, specify the height of `clientHeight` in style with the element with that value. This can be used to apply the `transition` of CSS when `.efo-error` is gone and the height returns.

```html
<form id="form">
  <div class="form-group" data-efo-error-class="name" data-efo-set-default-height>
    <label for="name">Name</label>
    <input type="text" id="name" name="name">
    <div>
      <span class="error" data-efo-error-class="name" data-efo-error-message="name"></span>
    </div>
  </div>
  <div class="form-group" data-efo-error-class="address" data-efo-set-default-height>
    <label for="address">Adress</label>
    <div class="address-group">
      <input type="text" id="address" name="address1" data-efo-name="address">
      <span class="separator">-</span>
      <input type="text" id="address" name="address2" data-efo-name="address">
    </div>
    <div>
      <span class="error" data-efo-error-class="address" data-efo-error-message="address"></span>
    </div>
  </div>
  <input type="submit" id="submit-button">
</form>
```

`efo.validate` checks all elements. Returns a `Boolean`.

```js
const efo = new Efo({
  target: document.getElementById('form'),
  data: {
    // When solving the error, keep `.efo-error` 300ms
    leaveTransitionSec: 300,
    // key: string
    // Name `data-efo-name` or` name`
    //
    // value: (el1: HTMLElement, el2: HTMLElement, ...): [bool, string]
    // Elements with that name are all passed.
    // The return value is
    //   - Pass validation?
    //   - Error message
    tests: {
      name(el) {
        if (el.value.length >= 3) {
          return [true];
        }
        return [false, 'Three or more characters are required'];
      },
      address(el1, el2) {
        const val = el1.value + '-' + el2.value;
        const re = /^\d{3}-\d{4}/;
        if (re.test(val)) {
          return [true];
        }
        return [false, 'Invalid address'];
      },
    }
  }
});

document.getElementById('submit-button').addEventListener('click', ev => {
  ev.preventDefault();

  // `Scroll` means to scroll to the very first error element on error.
  const bool = efo.validate({scroll: true});

  if (bool) {
    form.submit();
  }
});
```

### Example

- `test/fixtures/index.js`
- `example/webpack/index.js`

## LICENSE

The MIT License (MIT)

Copyright (c) 2017 nju33 <nju33.ki@gmail.com>
