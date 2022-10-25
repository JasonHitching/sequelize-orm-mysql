const Sequelize = require("sequelize");

const sequelize = new Sequelize("hello_world_db", "root", "root1234", {
  host: "127.0.0.1",
  dialect: "mysql",
  dialectModule: require("mysql2"),
});

/**
 * Method for instantiating database connection to app
 */
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established!");
  })
  .catch((err) => {
    console.log("Uhh ohhh, unable to connect to db ", err);
  });
