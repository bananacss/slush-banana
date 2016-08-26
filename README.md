![Slush Banana Logo](https://github.com/bananacss/slush-banana/blob/master/logo.png)

# Slush [Banana](https://github.com/bananacss/bananacss)

> Front-End boilerplate generator with banana flavor.

## How to install and use the generator?

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
- Task Runner: [Gulp](http://gulpjs.com/)
- CSS Superset: [BananaCSS](https://github.com/bananacss/bananacss)
- JS Traspiler: [BabelJS](https://babeljs.io/)
- Test Runner: [Karma](https://www.npmjs.com/package/karma)
- CSS Reset: [Normalize](https://necolas.github.io/normalize.css/)

Folders Structure:

	.
	├── README.md
	├── app/
	|   ├── scripts/
	|   ├── styles/
	|   |   ├── css/
	|   |   └── bnn/
	|   |       ├── modules/
	|   |       └── main.bnn
	|   └── index.html
	├── gulpfile.js
	├── package.json
	└── .gitignore

Automatic Tasks:

- `$ npm build`: Compile the .bnn code.
- `$ npm start`: Watch the .bnn files to build and start a static server: [localhost:8080](http://localhost:8080/)

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/bananacss/slush-banana/issues/1) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/bananacss/slush-banana/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/bananacss/slush-banana/releases) for detailed changelog.

## License

[MIT License](https://github.com/bananacss/slush-banana/blob/master/LICENSE.md) © [Afonso Pacifer](http://afonsopacifer.com/)
