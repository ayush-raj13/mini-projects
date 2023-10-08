import { onSnake, expandSnake, getSizeIncreses } from "./snake.js";
import { getRandomGridPosition } from "./grid.js";

let food = getRandomFoodPosition()
const EXPANSION_RATE = 1 ;  

export function update(){
    if(onSnake(food)){
        if(getSizeIncreses() == 5)
            expandSnake(2*EXPANSION_RATE)
        else
            expandSnake(EXPANSION_RATE)
            
        food = getRandomFoodPosition()
    }
}
 
export function draw(gameBoard){
     if(getSizeIncreses() == 4){
      
      const foodElement = document.createElement('div');
      foodElement.style.gridRowStart = food.y ;
      foodElement.style.gridColumnStart = food.x ;
      foodElement.classList.add('large-food')
      gameBoard.appendChild(foodElement)
      
      console.log(getSizeIncreses())
      return ;
     }

     const foodElement = document.createElement('div');
     foodElement.style.gridRowStart = food.y ;
     foodElement.style.gridColumnStart = food.x ;
     foodElement.classList.add('food')
     gameBoard.appendChild(foodElement)

     console.log(getSizeIncreses())
      
 }

function getRandomFoodPosition() {
    let newFoodPosition 
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = getRandomGridPosition()
    }
    return newFoodPosition 
}