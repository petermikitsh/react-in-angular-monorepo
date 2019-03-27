# react-angular-monorepo

This monorepo demos how to use a React application within an Angular shell. It is divided into two packages, `react-app` and `angular-shell`.

## `@demo/react-app`

The React app is a fully featured SPA: it has routing (react-router), and uses CSS Modules, TypeScript, Redux, Code Splitting (via `import()`), linting, and hot module reloading. 

Entry file `src/client/index.tsx` exposes a default function whose first parameter is an `HTMLElement`. This function will be used to render the React tree within Angular:

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

## `@demo/angular-shell`

The `app.component.ts` implements the `AfterViewInit` lifecycle hook. Here, we call the render function.

```js
import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import ReactApp from '@demo/react-app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  @ViewChild('container') container;

  ngAfterViewInit() {
    ReactApp(this.container.nativeElement);
  }
}
```

The container is defined in `app.component.html`:

```html
<div #container></div>
```

The CSS is imported in `app.component.scss`:

```scss
@import "@demo/react-app/dist/styles.css";
```



### Development

```sh
npm i

## cd to packages/react-app
## To start the React dev server (http://localhost:8080):
npm start

## To build the React app:
npm run build

## cd to ../angular-shell
## To start the Angular dev server (http://localhost:4200):
npm start

## To build the application:
npm run build
```

You can even :zap: **hot reload** :zap: inside the Angular server:

```sh
# in packages/react-app
npm run watch

# in a new terminal
# in packages/angular-shell
npm start
```

