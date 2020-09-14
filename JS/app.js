// Global selectors
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
 


// images src
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spacehDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
// Global variables
let numClosedDoor = 3;
let openDoor1 ;
let openDoor2 ; 
let openDoor3 ;

// Play door functions

const isClicked = (door) =>{
    if( door.src === closedDoorPath){
        return false
    } else {
        return true
    }
}
const playDoor = () => {
    numClosedDoor --;
    if(numClosedDoor === 0) {
        gameOver();
    }
}


// random generator
const randomDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoor);
    if(choreDoor === 0){
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath; 
        openDoor3 = spacehDoorPath;
    } else if (choreDoor === 1){
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spacehDoorPath;
    } else {
        openDoor3 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor1 = spacehDoorPath;
    }
}

doorImage1.onclick = () => {
    if (!isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor()
    }
}

doorImage2.onclick = () => {
    if (!isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor()
    }
}

doorImage3.onclick = () => {
    if (!isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor()
    }
}



// invoking the functions
randomDoorGenerator();