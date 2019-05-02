# Intro Reactstrap

## Set-up

In a React application (for example generated with `npx create-react-app my-app`), you need to install 2 packages:

```sh
$ npm install bootstrap reactstrap
```

Import Bootstrap CSS in the `src/index.js` file:
```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

Import required reactstrap components within `src/App.js` file or your custom component files:

```js
import { Button } from 'reactstrap';
```


## Add SCSS and customize of Bootstrap

React created few months ago a very easy way to import SCSS. Everything is explained here: https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet

To use Sass, first install node-sass:

```sh
$ npm install node-sass
```

Now you can rename any ".css" file into ".scss". 

You should rename `src/index.css` to `src/index.scss` and update `src/index.js` to import `src/index.scss`. 

Then, you can make sure you don't import any bootstrap in `src/index.js`.

Instead, we will import Bootrap in `src/index.scss` and customize it!

```scss
// Change of default variables
$primary: #31b6f0;
$dark: black;

@import "~bootstrap/scss/bootstrap";

// ...
```



### More info

You can find below an example on how to import any file from a SCSS file.

```scss
@import 'styles/_colors.scss'; // assuming a styles directory under src/
@import '~nprogress/nprogress'; // importing a css file from the nprogress node module
```