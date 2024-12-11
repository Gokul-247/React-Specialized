let time = 20
let message;

switch(true){
    case (time >= 1 && time <= 11):
        message = "Good Morning"
        break;

    case (time >= 12 && time <= 15):
        message = "Good Afternoon"
        break;
            
    case (time >= 16 && time <= 19):
        message = "Good Evening"
        break;
            
    case (time >= 20 && time <= 24):
        message = "Good Night"
        break;
            
    default:
        message = ("Invalid Time")
        break;                          
}

console.log(message);