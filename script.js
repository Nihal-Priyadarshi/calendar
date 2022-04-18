const date = new Date();

const currentMonth = date.getMonth();

function prev() {
  const prev = document.querySelector(".prev");

  if (date.getMonth() == currentMonth) {
    prev.style.color = "rgb(178, 188, 255)";
    prev.style.cursor = "not-allowed";
  }
  else {
    prev.style.color = "rgb(0, 22, 162)";
    prev.style.cursor = "pointer";
  }
}
prev();

function next() {
  const next = document.querySelector(".next");

  if (date.getMonth() == (currentMonth + 5) % 12) {
    next.style.color = "rgb(178, 188, 255)";
    next.style.cursor = "not-allowed";
  }
  else {
    next.style.color = "rgb(0, 22, 162)";
    next.style.cursor = "pointer";
  }
}
next();

function calendar() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  document.querySelector(".date p").innerHTML = new Date().toDateString();

  date.setDate(1);

  const monthDays = document.querySelector(".days");
  console.log(monthDays);

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();
  // console.log(firstDayIndex);

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  let nextDays = "";

  if (lastDay == 31) {
    if (firstDayIndex >= 0 && firstDayIndex <= 4) {
      nextDays = 14 - lastDayIndex - 1;
    }
    else {
      nextDays = 7 - lastDayIndex - 1;
    }
  }
  else if (lastDay == 30) {
    if (firstDayIndex >= 0 && firstDayIndex <= 5) {
      nextDays = 14 - lastDayIndex - 1;
    }
    else {
      nextDays = 7 - lastDayIndex - 1;
    }
  }
  else if (lastDay == 29) {
    if (firstDayIndex >= 0 && firstDayIndex <= 6) {
      nextDays = 14 - lastDayIndex - 1;
    }
    else {
      nextDays = 7 - lastDayIndex - 1;
    }
  }
  else {
    nextDays = 14 - lastDayIndex - 1;
  }

  let days = "";

  for (let j = firstDayIndex; j > 0; j--) {
    days += `<div class="prev-date flexbox">${prevLastDay - j + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()) {
      days += `<div class="today flexbox">${i}</div>`;
    } else {
      days += `<div class="flexbox">${i}</div>`;
    }
  }

  for (let k = 1; k <= nextDays; k++) {
    days += `<div class="next-date flexbox">${k}</div>`;
  }
  monthDays.innerHTML = days;
}

calendar();

document.querySelector(".prev").addEventListener("click", () => {
  if (date.getMonth() != currentMonth) {
    date.setMonth(date.getMonth() - 1);
    calendar();
  }
  prev();
  next();
});

document.querySelector(".next").addEventListener("click", () => {
  if (date.getMonth() != (currentMonth + 5) % 12) {
    date.setMonth(date.getMonth() + 1);
    calendar();
  }
  prev();
  next();
});
