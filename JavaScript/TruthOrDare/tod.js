const add = document.getElementById('addplay');
const play = document.getElementById('Player');
const newplay = document.getElementById('players');

function addPlayer() {
  const newelee = document.createElement('p');
  newelee.innerHTML = play.value;
  newelee.setAttribute('class', 'madplay');
  newplay.appendChild(newelee);
  play.value = "";
}

add.addEventListener('click', addPlayer);

play.addEventListener('keydown', function(event) {
  if (event.keyCode === 13 || event.key === 'Enter') {
    addPlayer();
  }
});


var finalplayers = document.getElementsByClassName('madplay');
var Myplayers = [];
var curplayer;
var mm; 

var stat = document.getElementById('start');

stat.addEventListener('click' , () => {

    stat.innerHTML='Continue';
    mm =  Math.floor(Math.random()*finalplayers.length);
    curplayer = finalplayers[mm].textContent;
    document.getElementById('itsTurn').textContent=  " It's " + curplayer + " 's  Turn";


});

const truth = document.getElementById('tru');
truth.addEventListener('click', ()=>{
    
  fetch("https://api.truthordarebot.xyz/v1/truth")
  .then((response)=> response.json())
  .then((data)=> truth2(data))
  .catch(()=>trutherror());
});

  function truth2(data){

    document.getElementById('tsk').innerHTML= '<br>' + curplayer + " 's Truth "  + data.question;
    var his = document.getElementById('History');
    var newele = document.createElement('p');
    newele.innerHTML=  finalplayers[mm].textContent + " 's " + " Truth : " + data.question;
    his.appendChild(newele);

  }

const dare = document.getElementById('dar');
dare.addEventListener('click', ()=>{
    
  fetch("https://api.truthordarebot.xyz/api/dare")
  .then((response)=> response.json())
  .then((data)=> dare2(data))
  .catch(()=>trutherror());
});

 function dare2(data){
  document.getElementById('tsk').innerHTML= '<br>'+ curplayer + " 's Dare  " + data.question;
    var his = document.getElementById('History');
    var newele = document.createElement('p');
    newele.innerHTML=  finalplayers[mm].textContent + " 's " + "Dare : " + data.question;
    his.appendChild(newele);
 }



var ButHis = document.getElementById('ShowHis');
ButHis.addEventListener('click', ()=>{
    var his = document.getElementById('History')
    if(his.style.display === 'none')
    {
    his.style.display="block";
    }
    else{
        his.style.display="none";
    }
});
