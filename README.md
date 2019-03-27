# react-angular-monorepo

This monorepo demos how to use a React application within Angular. It is divided into two packages, `react-app` and `angular-wrapper`.

## `react-app`

Entry file `src/client/index.tsx` exposes a default function that accepts an `HTMLElement`. This function will be used to render the React Tree within Angular:

```js
export default function render(container: HTMLElement) {
  ReactDOM.render(<App />, container);
}
```

- Dev mode
  - uses `webpack-dev-server`
- Production builds
  - babel the `src/client` directory to `/dist`
  - Creates a `dist/styles.css` containing all project css

## `angular-wrapper`

The `app.component.ts` implements the `AfterViewInit` lifecycle hook. Here, we call the render function.

```js
import ReactApp from '@demo/react-app';

export class AppComponent implements AfterViewInit {
  @ViewChild('container') container;

  ngAfterViewInit() {
    ReactApp(this.container.nativeElement);
  }
}
```

### Development

```sh
npm i

## cd to packages/react-app
## To start the React dev server:
npm start

## To build the React app:
npm run build

## cd to ../angular-wrapper
## To start the Angular dev server:
npm start

## To build the application:
npm run build
```
