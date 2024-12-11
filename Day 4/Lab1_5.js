const api_url = "https://randomuser.me/api/?results=5"

async function fetchUser(){
    try{
    const response = await fetch(api_url)
    const data = await response.json()
    const users = data.results;

    const userDetails = users.map((user) => {
        return `Name: ${user.name.first} ${user.name.last}
        Date: ${user.dob.date}
        City: ${user.location.city}`
    })

    console.log(userDetails);
}
catch(error){
    console.log("Error in fetching data: ",error);
    
}

}

fetchUser()