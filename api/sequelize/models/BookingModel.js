import bookingData from "../data/booking-data.js";
import dbInstance from "../../server/config/database.js";
import { DataTypes } from "sequelize";

/**
 * Define our 'Model' (table) & columns
 * Prevent auto timestamping
 */
const Booking = dbInstance.define(
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
    // Sequelize model with db tables
    await dbInstance.sync({
      logging: console.log,
      force: true,
    });
    await Booking.bulkCreate(bookingData);
    const allValues = await selectAll();
    stringifyResult(allValues);
    const specificResult = await findSpecific("Physio");
    stringifyResult(specificResult);
  } catch (err) {
    // dB sync unsuccessful!
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
 * @param {titleVal} .. title to search for
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
 * Method for adding a single dB row
 * @param {*} bookingTitle
 * @param {*} bookingContent
 */
async function insertBooking(bookingTitle, bookingContent) {
  await Booking.create({
    title: bookingTitle,
    content: bookingContent,
  });
}

/**
 * Stringify a returned query result to console
 * @param {query result} output
 */
function stringifyResult(output) {
  console.log("\n" + JSON.stringify(output));
}

initialiseDB();

