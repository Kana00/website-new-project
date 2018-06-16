# electron-new-project

![License](https://img.shields.io/badge/License-MIT-green.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)

`website-new-project` is a basic, solid template for creating a new project by
providing an already predefined set of features for the developers.

<p align='center'><img src='https://zupimages.net/up/18/24/8us2.jpg' style='width:100%'/></p>

---

### Installation

You must install [yarn](https://yarnpkg.com/en/docs/install) to have best performance (not `npm`).

After that

```bash
> yarn add global webpack webpack-cli
```

Finally, run the template and enjoy:

```bash
> git clone https://github.com/Kana00/website-new-project.git
> cd website-new-project
> yarn install
> yarn start
```


[![React](https://github.com/chentsulin/electron-react-boilerplate/blob/master/internals/img/react.png?raw=true)](https://facebook.github.io/react/)
[![Redux](https://github.com/chentsulin/electron-react-boilerplate/blob/master/internals/img/redux.png?raw=true)](http://redux.js.org/)
[![React Router](https://github.com/chentsulin/electron-react-boilerplate/blob/master/internals/img/react-router.png?raw=true)](https://github.com/ReactTraining/react-router)
[![Jest](https://github.com/chentsulin/electron-react-boilerplate/blob/master/internals/img/jest.png?raw=true)](https://facebook.github.io/jest/)
[![TypeScript](https://yt3.ggpht.com/-Z-HY_2zZwyw/AAAAAAAAAAI/AAAAAAAAAAA/qxqDsrqMTKg/s100-mo-c-c0xffffffff-rj-k-no/photo.jpg)](http://www.typescriptlang.org/)
[![Gulp](https://i1.wp.com/g00glen00b.be/wp-content/uploads/2014/10/gulp-logo.png?fit=100%2C100&ssl=1)](https://gulpjs.com/)

---

### Folder tree

+ __\_\_tests\_\___: where are the `Jest` unit tests.
+ __assets__ : where are the `images/fonts/animations`.
+ __components__: where are the components of react used in this app.
+ __config__: files that export javascript objects. they are called in several files. this allows to have a few parameters co-ordinate.
+ __i18n__: where are all translation, and the function that allow you to use I18n translations.
+ __redux__: stores the redux store, actions and reduce (a file `redux/action/listeAction` exist to avoid any collision of actions).
+ __routes__: react components that are displayed or hidden along the route. For this reason, these special components are in a special folder. We can say that these components are like screens that stores business react components.
+ __typings__: TypeScript provides you with variable typing. Sometimes, having a lot of typing and their javascript documentation is heavy to read. This folder stores all the variable definitions and modules of our application and imports them dynamically into all the application. Thus, our files remains legible to read.
+ __utils__: contains useful functions (or class) that are not react components. simply various tools (_e.g.:_ `colorTools`).

- **start.tsx**: where `webpack` start and display our window.
- **App.tsx**: where is stored the mount point of our react application.

---

### Make the app in production

As simple as that:
```bash
> yarn build
```

After that, link all bundle files in a web server like nodeJS-Express, nginx, apache2,... etc

---

**NOTE:** we advise you to install these 2 extensions to improve the development experience:

+ [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
+ [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=fr)

If you want to use this template with Electron.js, you can use this repository : [electron-new-project](https://github.com/Kana00/electron-new-project)

---

### License

Code is under the [MIT License](https://github.com/Kana00/electron-new-project/blob/master/LICENSE).
