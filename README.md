# bootstrap-gulp-jade-sass-static

An automated build environment for static websites making front-end development a breeze.

## Quick Start

Clone this repo
```bash
$ git clone https://github.com/gr8rizwan/bootstrap-gulp-jade-sass-static.git
$ cd bootstrap-gulp-jade-sass-static
```

Install dependencies
```bash
$ npm install
$ bower install
```

Start tasks for development
```bash
$ gulp dev
```

Open your web browser and navigate to [http://localhost:3001](http://localhost:3001)

---

Getting following Error:
```bash
Error: `libsass` bindings not found. Try reinstalling `node-sass`?
```
Try this:
```bash
npm uninstall --save-dev gulp-sass
npm install --save-dev gulp-sass@2
```