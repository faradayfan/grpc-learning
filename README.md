# grpc-learning

## Introduction

This is an extremely basic example of using `grpc` in both Go and JavaScript, intended to help demonstrate the basics.

## Dependencies

I followed [this guide](https://grpc.io/docs/languages/go/quickstart/) to install the prerequisites for go.

[`protoc`](https://grpc.io/docs/protoc-installation/) is used to generate language specific files from the `.proto` definition files. I ended up only using the generated files for the  `go` client and server. The JavaScript client and server compiled the `.proto` file at load time.

## Go

Install dependencies

```sh

go mod download

```

Start the server

```sh

go run ./go/server/main.go

```

In a new terminal, send a your name with the client

```sh

go run ./go/client/main.go Robot

```

## Node

Install dependencies

```sh

npm install

```

Start the server

```sh

npm run server

```

send a your name with the client

```sh

npm run client Robot

```