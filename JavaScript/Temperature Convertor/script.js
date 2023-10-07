const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

function calculate(event){
    console.log(event.target.id)
    console.log(event.target.value)

    const currVal = +event.target.value  //+ to convert string to int

    switch (event.target.id) {
        case "celsius":
            fahrenheit.value = currVal*1.8 +32
            kelvin.value = currVal + 273.15
            break;
        case "fahrenheit":
            celsius.value = (currVal - 32) *0.56
            kelvin.value = ((currVal - 32) *0.56) + 273.15
            break;
        case "kelvin":
            fahrenheit.value = (currVal - 273.15)*1.8 +32
            celsius.value = currVal - 273.15
            break;
    
        default:
            break;
    }

}