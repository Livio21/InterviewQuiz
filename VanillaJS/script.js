const timeForm = document.getElementById("time-form");
const timeSelect = document.getElementById("time-select");
const detailsForm = document.getElementById("details-form");
const continueBtn = document.getElementById("continue-btn");
const form = document.querySelector("form");
const submitBtn = document.getElementById("submit-btn");

const timeArray = [
  "8 AM CST",
  "9 AM CST",
  "10 AM CST",
  "11 AM CST",
  "12 PM CST",
  "1 PM CST",
  "2 PM CST",
  "3 PM CST",
  "4 PM CST",
  "5 PM CST",
];

const dataObj = {
  'time': "",
  'surname': "",
  'name': "",
  'email': "",
  'phone': "",
};

continueBtn.addEventListener("click", () => {
  timeForm.style.display = "none";
  detailsForm.style.display = "flex";
});

for (let i = 0; i < timeArray.length; i++) {
  const timeOption = document.createElement("option");
  timeOption.className = "time-option";
  timeOption.innerHTML = timeArray[i];
  timeOption.value = timeArray[i];
  timeSelect.appendChild(timeOption);
}

submitBtn.addEventListener("click", (e) => {
  dataObj.time = timeSelect.value;
  dataObj.name = document.getElementById("name").value;
  dataObj.surname = document.getElementById("surname").value;
  dataObj.email = document.getElementById("email").value;
  dataObj.phone = document.getElementById("phone").value;

  alert(`${JSON.stringify(dataObj)}`);
  console.log(dataObj);
});
