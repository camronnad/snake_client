const net = require("net");
const { IP, PORT, NAME } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on("data", (data) => {
    console.log(data);
  })
  conn.on("connect", () => {
    console.log("Succesfully connected to game server");
    conn.write("Name: " + NAME);
  })

  conn.setEncoding("utf8");
  return conn;
};

module.exports = { connect }