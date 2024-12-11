//spread operator

const frontend_course = ["HTML","CSS","Bootstrap"]

const backend_course = ["node.js","python","java"]

const fullstack = [...frontend_course,...backend_course]

console.log(fullstack);

const user = {
    name: "gokul",
    dob:"27/10/90",
    email: "gokul@gmail.com"
}

const rolebasedUser = {...user,role: 'normaluser'}

console.log(rolebasedUser);

const myUser = {
    id: 1,
    username: "ggg",
    email: "ggg@gmail.com",
    password: "1234567"
}

const {id,username,...otherdetails} = myUser;

console.log(id,username);
console.log(otherdetails);

const product = {
    p_id: 190,
    p_name: "maggie",
    p_qty: 70,
    p_price: 20,
    p_reviews: {
        rating: "4.5/5",
        customer_satisfaction: "4/5",
        negative_reviews: "2/5"
    }
}
var {p_id,p_name,p_qty,p_price,...otherdetails1} = product
console.log(p_id,p_name,otherdetails1);

