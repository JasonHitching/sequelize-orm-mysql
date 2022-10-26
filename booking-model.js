import bookingData from "./booking-data.js";
import { Sequelize, DataTypes } from "sequelize";

/**
 * Instantiate sequelize object
 * with required args
 */
const sequelize = new Sequelize("bookings_db", "root", "root1234", {
  host: "127.0.0.1",
  dialect: "mysql",
});

/**
 * Define our 'Model' (table) & columns
 * Prevent auto timestamping
 */
const Booking = sequelize.define(
  "Booking",
  {
    title: DataTypes.STRING(150),
    content: DataTypes.TEXT("medium"),
  },
  {
    timestamps: false,
  }
);

/**
 * Method for instantiating database connection to app,
 * authenticating success / failure and logging SQL commands
 */
let initialiseDB = async () => {
  try {
    await sequelize.sync({
      logging: console.log,
      force: true,
    });
    await Booking.bulkCreate(bookingData);
    const allValues = await selectAll();
    stringifyResult(allValues);
    const specificResult = await findSpecific("Physio");
    stringifyResult(specificResult);
  } catch (err) {
    console.log("uh ohhhh: ", err);
  }
};

/**
 * Select all rows from the data
 * ( SELECT * FROM bookings; )
 */
async function selectAll() {
  console.log("\n\nSELECT * FROM .. \n");
  return Booking.findAll();
}

/**
 * Find specific rows based on passed param
 * ( SELECT * FROM bookings WHERE title = {titleVal param} )
 * @param {value of desired title} titleVal
 */
async function findSpecific(titleVal) {
  console.log("\n\nSELECT * FROM bookings WHERE title = {titleVal param}\n");
  const specifiedFind = Booking.findAll({
    where: {
      title: titleVal,
    },
  });

  return specifiedFind;
}

/**
 * Stringify a returned query result to console
 * @param {query result} output
 */
function stringifyResult(output) {
  console.log("\n" + JSON.stringify(output));
}

initialiseDB();
