let answer = JSON.parse(localStorage.getItem('calculation'));
    if (answer === null) {
      answer = {
        history: '0'
      }
    }
    // displayResult();


    let calculation = '';
    function updateCalculation(value) {
      if (value !== '=' && value !== 'Clear') {
        calculation += value;
        displayResult();
      }
      else if (value === '=') {
        calculation = eval(calculation);
        // console.log(calculation);
        displayResult();
        answer.history = calculation;

      } else {
        calculation = '';
        displayResult();
        // console.log(calculation);
      }

      localStorage.setItem("calculation", JSON.stringify(answer));
    }

    function displayResult() {
      document.querySelector('.js-screen')
        .innerHTML = `${calculation}`
    }
