let player={
    Name:"SV",
    Chips:"6942"
}
let a
let b
let A=[]
let sum=0
let hasblackjack=false
let isalive=true
let message=""
let messageEl=document.querySelector("#message-el")
    let playerel=document.getElementById("player-el")
playerel.innerText=player.Name+": $"+player.Chips
function rendergame(){
    if(sum<21){
        message="Do you want to draw a new card❓"
    }
    else if(sum===21){
        message="!!You Won!!🥳"
        hasblackjack=true
        isalive=false
    }
    else{
        message="You Lost 😞"
        isalive=false   
        count=0
    }
    messageEl.textContent=message
    document.getElementById("Sum").textContent="Sum: "+sum
    let b=document.querySelector("#card")
    b.textContent="Card: "
    for(let i=0;i<A.length;i++){
        b.textContent=b.textContent+" "+A[i]
    }
}

    function newdeck(){
    if(isalive===true && hasblackjack===false){
        let x=getrandom()
        sum+=x
        A.push(x)    
        rendergame()
    }}

let count=0
function startgame(){
    if(count===0 && isalive===true){
        isalive=true
    let a=getrandom()
    A.push(a)
    let b=getrandom()
    A.push(b)
    sum=a+b
    rendergame()
    count++
}}
function getrandom(){
    let j= Math.floor((Math.random())*13)+1  
    if(j===1){
        j=11
    }
    else if(j==11 || j==12 || j==13){
        j=10
    }
    return j
}