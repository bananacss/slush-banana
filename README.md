<!-- ![Slush Banana Logo](https://github.com/bananacss/slush-banana/blob/master/logo.png) -->

# Slush [Banana](https://github.com/bananacss/bananacss)

> Front-End boilerplate generator with banana flavor.

[![npm](https://img.shields.io/npm/v/slush-banana.svg)](https://www.npmjs.com/package/slush-banana)
[![npm](https://img.shields.io/npm/dt/slush-banana.svg)](https://www.npmjs.com/package/slush-banana)

## How to install and use the generator?

Install the BananaCSS CLI:

```sh
$ [sudo] npm install -g bananacss
```

Install the slush:

```sh
$ [sudo] npm install -g slush
```

Install the tangerine generator:

```sh
$ [sudo] npm install -g slush-banana
```

Use the generator:

```sh
$ slush banana
```

## The generated boilerplate

Stack based in NodeJS:

- Generator: [Slush](http://slushjs.github.io/#/)
- CSS Superset: [BananaCSS](https://github.com/bananacss/bananacss)
- CSS Reset: [Normalize](https://necolas.github.io/normalize.css/)
- JS Compiler: [BabelJS](https://babeljs.io/)
- Task runner: [GulpJS](http://gulpjs.com/)

Folders Structure:

	.
	├── README.md
	├── src/
	|   ├── scripts/
	|   ├── styles/
	|   |   |   modules/
	|   |   └── main.bnn
	├── out/
	|   ├── scripts/
	|   ├── styles/
	|   |   └── main.css
	|   └── index.html
	├── package.json
	└── .gitignore

Automatic Tasks:

- `$ gulp serve`: Start a static server and Watch files for livereload.
- `$ gulp build`: Build with bananaCSS and Babel.

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/bananacss/slush-banana/issues/1) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/bananacss/slush-banana/blob/master/CONTRIBUTING.md).

## License

[MIT License](https://github.com/bananacss/slush-banana/blob/master/LICENSE.md) © [Afonso Pacifer](http://afonsopacifer.com/)
