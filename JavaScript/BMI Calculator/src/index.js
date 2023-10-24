import("./tailwind.config").catch((error) => {
  console.log("Failed to load tailwind.config");
  console.log(error);
});

const _ = require("./constants/BMI_DATA");

// Reactive state
const _state = {
  sex: null,
  height: 165,
  weight: 50,
  birthdate: {
    day: null,
    month: null,
    year: null,
  },
  years: null,
  months: null,
};

const handler = {
  set(target, property, value) {
    target[property] = value;
    // console.log(
    //   `Property '${property}' set to: ${JSON.stringify(value, null, 2)}`
    // );
    if (!value) return;
    const ageLabelEl = document.getElementById("age-label");
    const errorEl = document.getElementById("error");
    errorEl.classList.add("hidden");

    switch (property) {
      case "birthdate":
        const { day, month, year } = value;
        if (!day || !month || !year) return;
        const date = new Date(year, month - 1, day);
        state.years = _dateTo(date, "years");
        state.months = _dateTo(date, "months");
        ageLabelEl.innerText = state.years;
        return;
      default:
        break;
    }
  },
};
const state = new Proxy(_state, handler);

const _setEventListeners = () => {
  const maleSexEl = document.getElementById("male-sex");
  const femaleSexEl = document.getElementById("female-sex");

  const heightLabelEl = document.getElementById("height-label");
  const heightEl = document.getElementById("height");

  const weightLabelEl = document.getElementById("weight-label");
  const weightEl = document.getElementById("weight");

  const dayEl = document.getElementById("age-day");
  const monthEl = document.getElementById("age-month");
  const yearEl = document.getElementById("age-year");

  const btnEl = document.getElementById("calculate-btn");

  maleSexEl.addEventListener("click", (event) => {
    // Update classes of target element
    maleSexEl.classList.add("border-primary-500");
    maleSexEl.classList.remove("border-transparent");
    // Update classes of the other element
    femaleSexEl.classList.remove("border-primary-500");
    femaleSexEl.classList.add("border-transparent");

    state.sex = "male";
  });

  femaleSexEl.addEventListener("click", (event) => {
    // Update classes of target element
    femaleSexEl.classList.add("border-primary-500");
    femaleSexEl.classList.remove("border-transparent");
    // Update classes of the other element
    maleSexEl.classList.remove("border-primary-500");
    maleSexEl.classList.add("border-transparent");

    state.sex = "female";
  });

  heightEl.addEventListener("input", (event) => {
    const value = event.target.value;
    heightLabelEl.innerText = `${value} cm`;
    state.height = value;
  });

  weightEl.addEventListener("input", (event) => {
    const value = event.target.value;
    weightLabelEl.innerText = `${value} Kg`;
    state.weight = value;
  });

  dayEl.addEventListener("input", (event) => {
    const _value = +event.target.value;
    let value = _value < 1 ? 1 : _value > 31 ? 31 : _value;

    const updatedValue = { ...state.birthdate };
    updatedValue.day = value;
    state.birthdate = updatedValue;
  });

  monthEl.addEventListener("input", (event) => {
    const _value = +event.target.value;
    let value = _value < 1 ? 1 : _value > 12 ? 12 : _value;

    const updatedValue = { ...state.birthdate };
    updatedValue.month = value;
    state.birthdate = updatedValue;
  });

  yearEl.addEventListener("input", (event) => {
    const _value = +event.target.value;
    let value = _value < 1900 ? 1900 : _value > 2100 ? 2100 : _value;

    const updatedValue = { ...state.birthdate };
    updatedValue.year = value;
    state.birthdate = updatedValue;
  });

  btnEl.addEventListener("click", (event) => {
    event.preventDefault();
    calculateBMI();
  });
};

const _isNumberBetween = (number, lowerBound, upperBound) => {
  return number >= lowerBound && number <= upperBound;
};

const _dateTo = (date, value) => {
  const currentDate = new Date();
  switch (value) {
    case "years":
      const diffInMilliseconds = currentDate - date;
      const years = diffInMilliseconds / (365.25 * 24 * 60 * 60 * 1000); // Approximate number of milliseconds in a year (accounting for leap years)
      return Math.floor(years);
    case "months":
      const diffInMonths =
        (currentDate.getFullYear() - date.getFullYear()) * 12 +
        (currentDate.getMonth() - date.getMonth());
      return diffInMonths;
    default:
      return 0;
  }
};

const _findClosestNumber = (target, numbers) => {
  numbers.sort((a, b) => a - b);

  let closest = numbers[0];
  let minDifference = Math.abs(target - closest);

  for (let i = 1; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    const difference = Math.abs(target - currentNumber);

    if (difference < minDifference) {
      closest = currentNumber;
      minDifference = difference;
    }
  }

  return closest;
};

const _getKeyByValue = (object, valueToFind) => {
  for (const key in object) {
    if (object.hasOwnProperty(key) && object[key] === valueToFind) {
      return key;
    }
  }

  return null;
};

const calculateBMI = () => {
  const errorEl = document.getElementById("error");
  const errorMsgEl = document.getElementById("error-msg");
  const hasValues = Object.values(state).every((x) =>
    typeof x === "number" ? x !== null : !!x
  );
  
  if (!hasValues) {
    errorMsgEl.innerText = "Please fill in all the info to continue";
    errorEl.classList.remove("hidden");
    return;
  }

  const bmiEl = document.getElementById("bmi");
  const bmiNumberEl = document.getElementById("bmi-number");
  const bmiResultEl = document.getElementById("bmi-result");

  const { height, weight, years, months, sex } = state;
  const _height = +height / 100;
  const bmi =
    Math.round((+weight / Math.pow(_height, 2) + Number.EPSILON) * 100) / 100;
  if (months >= 61 && months <= 228) {
    // Calulcations for teens
    if (sex === "male") {
      const _vv = _.MALE_DATA.find((x) => x.Month === months);
      const percentileData = Object.values(_vv).slice(4);
      const percentileNumber = _findClosestNumber(bmi, percentileData);
      const index = _getKeyByValue(_vv, percentileNumber);
      const result = _.BMI_TEENS.find((x) => x.value.includes(index));

      bmiEl.classList.remove("hidden");
      bmiNumberEl.innerText = bmi;
      bmiResultEl.innerText = result.type;
    } else if (sex === "female") {
      const _vv = _.FEMALE_DATA.find((x) => x.Month === months);
      const percentileData = Object.values(_vv).slice(4);
      const percentileNumber = _findClosestNumber(bmi, percentileData);
      const index = _getKeyByValue(_vv, percentileNumber);
      const result = _.BMI_TEENS.find((x) => x.value.includes(index));

      bmiEl.classList.remove("hidden");
      bmiNumberEl.innerText = bmi;
      bmiResultEl.innerText = result.type;
    } else {
      bmiEl.classList.remove("hidden");
      bmiNumberEl.innerText = "-";
      bmiResultEl.innerText = "Unable to calculate";
    }
  } else if (months > 228) {
    // Calculations for adults
    const result = _.BMI_ADULTS.find((x) => {
      const [min, max] = x.value;
      return _isNumberBetween(bmi, min, max);
    });

    bmiEl.classList.remove("hidden");
    bmiNumberEl.innerText = bmi;
    bmiResultEl.innerText = result.type;
  } else {
    bmiEl.classList.add("hidden");
    errorMsgEl.innerText = "We can only calculate BMI for >2 years old";
    errorEl.classList.remove("hidden");
  }
};

_setEventListeners();
