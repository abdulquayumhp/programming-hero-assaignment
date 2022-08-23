
// input value golbaly function
// input value golbaly function

// univasal function for all scope function
// get value by call another function  

function getInputValue(inputValue){

    const inputValueField = inputValue.value;
    const inputValueFieldString = parseInt(inputValueField)
    return inputValueFieldString;

}

// addad player for multipul fuction 
const perPlayerCount = document.getElementById("Total-added-player")


// all button for array with parantNode accecs multipul funcion 
const PlayerArrayBox= [];



// palyer add and number count how much player add && select player
// palyer add and number count how much player add && select player


function displayPlayerOutPut(allPlayer){

    const tableBody = document.getElementById("player-selected");
    tableBody.innerHTML = "";

    for(let i = 0; i < allPlayer.length; i++){
       const numberOfPlayer = i;


    //    if condition for extra no more player add 
    //    if condition for extra no more player add 



    if(numberOfPlayer < 5 ){

        const PlayernameBox = PlayerArrayBox[i].PlayerName;
        const tr = document.createElement("tr");
        tr.innerHTML=`
        <th>${i+1}</th>
        <td>${PlayernameBox}</td>
        
        `;
        tableBody.appendChild(tr);
      
    }else{
        alert("please you can't take no more player,if you click more than 5 palyer with invalid input like write and - value , than error massage will be show exactly how much you click with")
        return numberOfPlayer;
    
    }

        // calculate player indivisual and per palyer cost multipication 
        // calculate player indivisual and per palyer cost multipication 

    document.getElementById("calculate-btn").addEventListener("click",function(){

        const addedPlayer = numberOfPlayer+1;
        const perPlayeroutput = getInputValue(perPlayerCount);
        const playerExpenses = addedPlayer * perPlayeroutput;
        const playerCalculate = document.getElementById("player-expanses");
        
        if(playerExpenses > 0){
            playerCalculate.innerText = playerExpenses;
        }
       
    
    });
   
   };

};



// all button with one css class by quarySelectorAll
// all button with one css class by quarySelectorAll
// all button with one css class by quarySelectorAll

const selectAllButton = document.querySelectorAll('.item');
for (const select of selectAllButton) {
    select.addEventListener('click', function (event) {


        
        // button disable 
        event.target.disabled = true;
        event.target.style.background = "skyblue";



        const PlayerIndivisualname = event.target.parentNode.children[0].innerText;
        
        // button and name value as a object 
        const PlayerObj = {
            PlayerName : PlayerIndivisualname,
            
        }
    
        PlayerArrayBox.push(PlayerObj);
    

        displayPlayerOutPut(PlayerArrayBox);


    })
}






// calculate all sub total 
// calculate all sub total 
// calculate all sub total 



document.getElementById("total-Calculate").addEventListener("click",function(){

        // get input  value by coling function manager and cotch
        // get input  value by coling function manager and cotch
        const managerExpanse = document.getElementById("manager-expanse");
        const coachExpanse = document.getElementById("coach-expanse");
        const  managerOutput = getInputValue(managerExpanse);
        const coachOutput = getInputValue(coachExpanse);


       if(managerOutput > 0 || coachOutput > 0 ) {
         // get result with palyer expenses 
         const  playerCalculateTwo = document.getElementById("player-expanses").innerText;
         const playerCalculateStrig =parseInt(playerCalculateTwo) 
 
 
         // all player and manager cotch subtotal 
         const perManagerOptput =  managerOutput + coachOutput + playerCalculateStrig ;
 
 
         const totalTeamExpanse = document.getElementById("total");
         totalTeamExpanse.innerText = perManagerOptput;
 
         managerExpanse.value="";
         coachExpanse.value="";

       }     
       else{
        alert("Please input your valid number !!")
       }


}); 