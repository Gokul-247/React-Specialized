let products = ["Jam","Bread","Juice","table","lap"]

/*products[0] = "Pen"

console.log(products);

products.pop()

console.log(products)

products.push("Book")

console.log(products)*/

console.log("Before insertion\n",products);
console.log("After insertion\n",products);
products.splice(3,0,'blender')
console.log(products);
products.splice(3,2)
console.log("After deletion\n",products);
console.log("Sorting\n",products.sort());
let mynum = [8,66,3,90,3,45]
mynum.sort((a,b) => a-b)
console.log("Numbers after sorting\n",mynum);




