/*function divide(a,b){
    try{
        if(b==0){
            throw new Error("Cant divide by Zero")
        }
        var result = a/b;
        console.log("Result is ", result);
    }
    catch(error){
        console.log("Error : ",error.message);
        
    }
}

divide(10,0)
divide(10,8)*/

var age;

function license(age){
    try{
        if(age<16){
            throw new Error("Not eligible for license")
        }
        else if(age>=16 && age<=17){
            console.log("Elgible for gearless license")
        }
        else if(age>=18){
            console.log("Elgible for normal license")
        }
    }
    catch(error){
        console.log("Error : ",error.message);
        
    }
}

license(15)
license(17)
license(20)