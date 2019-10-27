# Postman tester server

A simple test api.

## Installation

```sh
git clone https://github.com/nobitagit/postman-tester.git && cd $_
yarn
```

## Running the api

```sh
yarn start
```

The server will listen on port 3000 by default.

## Extending the api

If you want to add some endpoints of tweak the responses you can run the server with:

```
yarn watch
```

This will restart the server on each change you will make.
This server uses [json-server](https://github.com/typicode/json-server), so you can refer to its docs in case you need it.
