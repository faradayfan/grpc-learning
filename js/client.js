
var grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const PROTO_PATH = "./helloworld/helloworld.proto";

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const { helloworld } = grpc.loadPackageDefinition(packageDefinition);

const client = new helloworld.Greeter(
    "localhost:30001",
    grpc.credentials.createInsecure()
);

client.SayHello({ name: process.argv[2] || 'world' }, (err, { message }) => {
  console.log(message)
})