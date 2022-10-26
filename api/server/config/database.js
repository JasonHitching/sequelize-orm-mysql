import Sequelize from "sequelize";

/**
 * Local database instance of MySQL needs to be running
 * {yourUsername} likely === root
 * {yourPassword} - whatever password you set within MySQL
 * {yourSchemaName} - whatever the name of your empty schema in your MySQL instance is
 */
const yourUsername = "<username-here>";
const yourPassword = "<password-here>";
const yourSchemaName = "<your-mysql-schema-name>";

/**
 * Instantiate sequelize object
 * with required args
 */
const sequelize = new Sequelize(yourSchemaName, yourUsername, yourPassword, {
  host: "127.0.0.1",
  dialect: "mysql",
});

export default sequelize;
