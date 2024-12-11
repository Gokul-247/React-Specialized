var username = "editor"
var password = "ed123"

if((username == "admin") && (password == "admin")){
    console.log("Welcome super admin"); 
}
else if((username == "editor") && (password == "ed123")){
    console.log("Welcome.You have edit access"); 
}
else if((username == "viewer") && (password == "vi123")){
    console.log("Welcome.You only have view access"); 
}
else if((username == "user") && (password == "us123")){
    console.log("Welcome User"); 
}
else{
    console.log("Incorrect username or password"); 
}