var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");

const PROTO_PATH = "./helloworld/helloworld.proto";

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

var helloworldProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.addService(helloworldProto.helloworld.Greeter.service, {
    SayHello: (arg, callback) => {
      const { name } = arg.request
      console.log(`Received:`, name)
      callback(null, { message: `Hello ${name}` });
    }
});

server.bindAsync("127.0.0.1:30001", grpc.ServerCredentials.createInsecure(), () => {
  console.log("Server running at http://127.0.0.1:30001");
  server.start();
});