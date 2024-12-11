const api_url = "https://randomuser.me/api/?results=3"

fetch(api_url)
.then(response => response.json())
.then(data => {
    const users = data.results;

    const userDetails = users.map(user => {
        return `Name: ${user.name.first} ${user.name.last}
        Date: ${user.dob.date}
        City: ${user.location.city}`
    })
    console.log(userDetails)
})
.catch( (err) => console.log("error in fetching data",err))