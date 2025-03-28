# DaisyUi vue kit

This is a vue kit for daisyui, it's a simple way to use daisyui in your vue project.
Originally forked from [@LaFibreDuDev/daisyui-vue-kit](https://github.com/LaFibreDuDev/daisyui-vue-kit) and upgraded to the latest version of dependencies.

## Installation

### Docker

Before you start, make sure you have [docker](https://docs.docker.com/get-started/get-docker/) installed on your machine.

```bash
docker compose up
```

### Local

Before you start, make sure you have a package manager like [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install) installed on your machine.

```bash
npm install && npm run dev
```

## Commands

### Docker Compose

Enter the container:

```bash
docker compose exec web bash
```

### NPM

Check oudated packages:

```bash
npm outdated
```

Update packages:

```bash
npm install $(npm outdated | cut -d' ' -f 1 | sed '1d' | xargs -I '$' echo '$@latest' | xargs echo)
```

For more commands, check official [npm documentation](https://docs.npmjs.com/cli-documentation/cli).

## License

DWTFYWPL
