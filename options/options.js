const timeOption = document.getElementById("time-option");

timeOption.addEventListener("change", (event) => {
  const val = event.target.value;
  if (val < 1 || val > 60) {
    timeOption.value = 25;
  }
});

const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", (event) => {});
