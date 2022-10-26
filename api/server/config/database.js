import Sequelize from "sequelize";

/**
 * Instantiate sequelize object
 * with required args
 */
const sequelize = new Sequelize("bookings_db", "root", "root1234", {
  host: "127.0.0.1",
  dialect: "mysql",
});

export default sequelize;
