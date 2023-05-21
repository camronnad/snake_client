const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
conn.on("data", () => {
console.log("you ded cuz you idled")
})
conn.on("connect", () => {
console.log("Succesfully connected to game server")

conn.write("Move: up")
})


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");

module.exports = { connect }