


// function allButtonSelect(){
//     let buttton =  document.querySelectorAll(".item");
   
//     const playerselected = document.getElementById("player-selected");
//     for(let i = 0; i < buttton.length; i++){
//         const index =  buttton[i];
//         index.addEventListener("click",function(e){
//             const item = e.target.parentNode.children[0].innerText;
        
//             const tr = document.createElement("tr");

//             playerselected.innerHTML = `
          
//             <th>${i+1}</th>
//             <td>${item}</td>
           
//             `;
//             playerselected .appendChild(tr);
            
//         })
//     }
    
// }


// allButtonSelect();

// let array = [];
// console.log

//     let buttton =  document.querySelectorAll(".item");

//     for(let i = 0; i < buttton.length; i++){
//         const index =  buttton[i];
//         index.addEventListener("click",function(e){
//             const item = e.target.parentNode.children[0].innerText;
//             const playerName ={
//                 name : item
//             }
//             array.push(playerName);

//             playerName();
           
//         });
//     };

//     function playerName(){

//             const playerselected = document.getElementById("player-selected");
//         playerselected.innerHTML = `
//                     <tr>
//                      <th>${i+1}</th>
//                      <td>${item}</td>
//                     </tr>
                   
//                     `;

        

//     }



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