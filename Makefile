build-go-protos:
	mkdir helloworld -p
	protoc \
		--go_out=. \
		--go_opt=paths=source_relative \
		--go-grpc_out=. \
		--go-grpc_opt=paths=source_relative \
		**/*.proto

go-server:
	go run ./go/server/main.go

go-client:
	go run ./go/client/main.go Robot

js-server:
	npm run server

js-client:
	npm run client Robot