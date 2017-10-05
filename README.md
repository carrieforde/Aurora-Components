# Bov Web Components

## Description
A clean and simple CSS UI Framework with grab &amp; go UI components for web projects.

## Features
This project features a few goodies that will help improve your development workflow, so you can spend time on what you do best--developing websites--instead of configuring tools.

You will find a basic starter Sass framework within `assets/sass`. Within the `config` directory, there is a directory labelled `settings`, which contains various partials that will allow you to set up your project colors and fonts quickly and easily.

There is also a `components` folder, which contains several minimally styled user interface components with their markup, Sass, and JavaScript ready for use.

Finally, this framework is set up to work with Grunt, which is a taskrunner that simplifies various tasks, such as compiling Sass, concatenating JavaScript, and minifying styles, scripts, images, and icons.

## Getting Started
To get started, clone this repo to your computer:

```sh
git clone https://github.com/carrieforde/bov-web-components.git bov-web-components
```

Once you have cloned the project, you will want to move into the project directory and install all the Node dependencies:

```sh
cd bov-web-components
npm install
```

## Helpful Grunt Tasks
Once you have run `npm install`, you're ready to start using `grunt`. This framework includes several helpful taks to manage various aspects of development.

### `grunt styles`
This task lints against `.sass-lint.yml`, which outputs warnings and errors to the console, compiles our Sass into `style.css`, and processes `style.css` with PostCSS (autoprefixing and Media Query sorting).

### `grunt scripts`
This task concatenates all scripts in `assets/src/scripts`, transpiles any ES2015 or newer JavaScript through **Babel**, and lints files agains the `.eslintrc.js` file.

### `grunt icons`
Minify indiviual SVG icon files and concatenate the SVG into a single SVG sprite.

### `grunt minify` & `grunt minify:true`
Minifies styles, scripts, and icons, which outputs to the `dist` folder (meant for public distribution). Passing `true` to the task will also minify images, which are remain in `assets/images`.

### `grunt watch`
Automatically compile your Sass, concatenate your JavaScript, and minify + concatenate your SVG on save / change with this task. Utilize [Live Reload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) to see your updates in the browser as you develop.
