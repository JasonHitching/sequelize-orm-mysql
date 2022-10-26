import Sequelize from "sequelize";

/**
 * Local database instance of MySQL needs to be running
 * {yourUsername} likely === root
 * {yourPassword} - whatever password you set within MySQL
 */
const yourUsername = "<username-here>";
const yourPassword = "<password-here>";

/**
 * Instantiate sequelize object
 * with required args
 */
const sequelize = new Sequelize("bookings_db", yourUsername, yourPassword, {
  host: "127.0.0.1",
  dialect: "mysql",
});

export default sequelize;
