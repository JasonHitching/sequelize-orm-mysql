import bookingModel from "../../api/";

const submitFormBtn = document.getElementById("submitBtn");
const typeForm = document.getElementById("bookingTypeInput");
const contentForm = document.getElementById("contentTextArea");

submitFormBtn.addEventListener("click", () => {
  let bookingTypeText = typeForm.value;
  let contentText = contentForm.value;

  if (bookingTypeText === "" || contentText === "") {
    return;
  }

  bookingModel.insertBooking(bookingTypeText, contentText);
});
