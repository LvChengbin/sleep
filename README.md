# Sleep

[![Greenkeeper badge](https://badges.greenkeeper.io/LvChengbin/sleep.svg)](https://greenkeeper.io/)

A sleep function for javascript.

## Start

```js
$ npm i @lvchengbin/sleep --save
```

To use it in nodejs:

```js
const sleep = reuqire( '@lvchengbin/sleep' );
```

Or to import it as an ES6 module:

```js
import sleep = require( '@lvchengbin/sleep' );
```

## Usage

```js
async () => {
    await sleep( 1000 ); // sleep for 1 second
}

sleep( 1000 ).then( () => {
    // execute after 1 second
} );
```
