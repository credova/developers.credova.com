# Credova Developer Documentation

The [Credova](https://credova.com/) developer documentation. This site is hosted at [developers.credova.com](https://developers.credova.com/)

### Installation

```
bun install
```

### Local Development

```
bun run start
```

This command starts a local development server at http://localhost:3000/ and opens up a browser window.
Most changes are reflected live without having to restart the server.

> **Note:** The search box stays disabled with a "Loading..." placeholder in local development. `docusaurus-lunr-search` only builds and loads its search index during a production build, so search does not work under `bun run start`. To test search locally, run `bun run build` followed by `bun run serve` (see [Build](#build) below).

### Generate Update API Documentation

```
bun run regenerate-docs
```

This pulls the API reference from the **live** OpenAPI specs at `api.publicsquare.com`, not from application source code. If a recently merged API change is missing after running this command, the change has not deployed to that environment yet — wait for the deploy, then run the command again.

### Build

```
bun run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

To preview the production build locally, including working search:

```
bun run serve
```
