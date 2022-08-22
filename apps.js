
const cartArray = [];



function display(cartproduct){

    const tableBody = document.getElementById("player-selected");
    tableBody.innerHTML = "";

   for(let i = 0; i < cartproduct.length; i++){
       const numberOfPlayer = i;
       

    if(numberOfPlayer <= 4 ){
        const nameBox = cartArray[i].PlayerName;
   
        const tr = document.createElement("tr");

        tr.innerHTML=`
        <th>${i+1}</th>
        <td>${nameBox}</td>
        
        `;

        tableBody.appendChild(tr);
      
    }else{
        console.log("ami pagol")

    }
   
    
  
   }
}

const selectAllButton = document.querySelectorAll('.item');
for (const select of selectAllButton) {
    select.addEventListener('click', function (event) {
       

        const name = event.target.parentNode.children[0].innerText;
        

        const PlayerObj = {
            PlayerName : name,
            
        }
    
        cartArray.push(PlayerObj);
    
    
        display(cartArray);


        event.target.disabled = true;

        document.querySelectorAll('.item').disabled = true;
        // document.querySelectorAll('.item').style.background = 'gray';

    })
}

function getInputValue(inputValue){

    const inputValueField = inputValue.value;
    const inputValueFieldString = parseInt(inputValueField)
    return inputValueFieldString;

}

const perPlayerCount = document.getElementById("Total-added-player")




document.getElementById("calculate-btn").addEventListener("click",function(){
    const addedPlayer = 5;


    const perPlayeroutput = getInputValue(perPlayerCount);



    const playerExpenses = addedPlayer * perPlayeroutput;


    const playerCalculate = document.getElementById("player-expanses");


    playerCalculate.innerText = playerExpenses;

    perPlayerCount.value="";
});


document.getElementById("total-Calculate").addEventListener("click",function(){
        const managerExpanse = document.getElementById("manager-expanse");

        const coachExpanse = document.getElementById("coach-expanse");




        const  managerOutput = getInputValue(managerExpanse);



        const coachOutput = getInputValue(coachExpanse);

        const  playerCalculateTwo = document.getElementById("player-expanses").innerText;

        const playerCalculateStrig =parseInt(playerCalculateTwo) 



        const perManagerOptput =  managerOutput + coachOutput + playerCalculateStrig ;




        const totalTeamExpanse = document.getElementById("total");


        totalTeamExpanse.innerText = perManagerOptput;


        managerExpanse.value="";
        coachExpanse.value="";





}); 