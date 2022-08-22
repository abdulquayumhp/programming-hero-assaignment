function getInputValue(inputValue){

    const inputValueField = inputValue.value;
    const inputValueFieldString = parseInt(inputValueField)
    return inputValueFieldString;

}
const perPlayerCount = document.getElementById("Total-added-player")





const cartArray = [];

function display(cartproduct){

    const tableBody = document.getElementById("player-selected");
    tableBody.innerHTML = "";

    for(let i = 0; i < cartproduct.length; i++){
       const numberOfPlayer = i;
       console.log(numberOfPlayer)
       
    if(numberOfPlayer < 5 ){
        const nameBox = cartArray[i].PlayerName;
   
        const tr = document.createElement("tr");

        tr.innerHTML=`
        <th>${i+1}</th>
        <td>${nameBox}</td>
        
        `;

        tableBody.appendChild(tr);
      
    }else{
        alert("please you can't take no more player")
        return numberOfPlayer;
       

    }
    document.getElementById("calculate-btn").addEventListener("click",function(){
        const addedPlayer = numberOfPlayer+1;
        console.log(addedPlayer)
    
        const perPlayeroutput = getInputValue(perPlayerCount);
    
        const playerExpenses = addedPlayer * perPlayeroutput;
        console.log(playerExpenses)
    
    
        const playerCalculate = document.getElementById("player-expanses");
    
    
        playerCalculate.innerText = playerExpenses;
    
    });
    

   }




}

const selectAllButton = document.querySelectorAll('.item');
for (const select of selectAllButton) {
    select.addEventListener('click', function (event) {
       
        event.target.disabled = true;
        event.target.style.background = "gray";
        const name = event.target.parentNode.children[0].innerText;
        

        const PlayerObj = {
            PlayerName : name,
            
        }
    
        cartArray.push(PlayerObj);
    
    
        display(cartArray);


        

        
        

    })
}




function getInputValue(inputValue){

    const inputValueField = inputValue.value;
    const inputValueFieldString = parseInt(inputValueField)
    return inputValueFieldString;

}







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