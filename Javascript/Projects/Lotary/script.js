let nameField = document.getElementById('nameField');
let partcipentList = document.getElementById('partcipentList');
let winnerList = document.getElementById('winnerList');
let participents = [];
let winners = [];


const addToList = () => {

    let participent = nameField.value;

    if(participent.length == 0){
        alert("Please Enter Participent Name")
    }else{

        if(participents.includes(participent)){
            alert("Participents Already Exists!!")
        }else{
            partcipentList.innerHTML = partcipentList.innerHTML + "<li>"+participent+"</li>";
            nameField.value = "";
            participents.push(participent);
        }

    }
}


const getWinner = () => {

    if(participents.length < 10){
        alert("Minimum 10 Participent Needed!!");
        return;
    }

    if(winners.length < 3){
        let winnerIndex = Math.random() * (participents.length - 1);
        winnerIndex = Math.round(winnerIndex);
    
        let winner = participents[winnerIndex];

        if(winners.includes(winner)){
            getWinner()
        }else{

            winnerList.innerHTML = winnerList.innerHTML + '<li>'+winner+'</li>';
            winners.push(winner);
        }

    }else{
        alert("We Got All Winners!!!")
    } 
}


const reset = () => {
    partcipentList.innerHTML = "";
    winnerList.innerHTML = "";
    participents = [];
    winners = []; 
}