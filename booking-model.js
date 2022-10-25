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
sequelize
  .sync({ logging: console.log, force: true, timestamps: false })
  .then(() => {
    seedData();
  })
  .then(() => {
    console.log("Connection has been established!");
  })
  .catch((err) => {
    console.log("Uhh ohhh, unable to connect to db ", err);
  });

function seedData() {
  for (let booking of bookingData) {
    console.log(booking.title);
    Booking.create({
      title: booking.title,
      content: booking.content,
    });
  }
}
