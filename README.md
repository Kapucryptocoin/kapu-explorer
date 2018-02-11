![KapuExplorer](https://github.com/gsilvestri/kapu-explorer/blob/2.0/KAPU_EXPLORER.jpg)

[![Build Status](https://travis-ci.org/gsilvestri/kapu-explorer.svg?branch=2.0)](https://travis-ci.org/gsilvestri/kapu-explorer)

# KAPU Block Explorer

> A redesigned frontend of KAPU Blockchain Explorer using AngularJS and TypeScript.

You can access it at [https://explorer.kapunode.net/](https://explorer.kapunode.net/).

The feel of the [old explorer](https://github.com/ArkEcosystem/old-ark-explorer) is retained in the new version, under the hood things are completely revamped. The frontend of the Explorer itself has been redone using [AngularJS framework](https://angular.io) and [TypeScript programming language](http://www.typescriptlang.org/).

## Installation

```bash
git clone https://github.com/gsilvestri/kapu-explorer.git
cd kapu-explorer
npm install
```

You will want to edit the config file [src/app/app.config.ts](https://github.com/gsilvestri/kapu-explorer/blob/master/src/app/app.config.ts) depending on whether you want **MAINNET** or **DEVNET**. If you are pointing your explorer instance to your own KAPU node, update the **NODE** property.

#### Custom KAPU node

Due to performance factors, the explorer works best when pointing to a specific version of the KAPU node **which is not forging**.

Once you have setup your explorer and given it the address for the node API, you will want to go into the kapu-node directory and change the branch. On the machine that is running your KAPU node, run the following commands:

```bash
cd ~/kapu-node
git pull
git checkout explorer
```

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`

## Contributing

* If you find any bugs, submit an [issue](../../issues) or open [pull-request](../../pulls), helping us catch and fix them.
* Engage with other users and developers on [KAPU Slack](https://slack.kapu.one).
* Join the #development channel on Slack or contact our developer Lúcio (@lorenzo).
- [Giovanni Silvestri](https://github.com/gsilvestri)
* [Contribute bounties](./CONTRIBUTING.md).

## License

KAPU Explorer is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
