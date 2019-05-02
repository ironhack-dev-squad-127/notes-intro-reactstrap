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

Import required reactstrap components within src/App.js file or your custom component files:

```js
import { Button } from 'reactstrap';
```
