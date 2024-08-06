// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.


const myNums = [1, 2, 3]

const mytotal = myNums.reduce(function(acc, curval) {
    console.log(`acc: ${acc} and curval ${curval}`);
    
    return acc + curval
}, 1)   // i is initl val od acc

console.log(mytotal);

// acc: 1 and curval 1
// acc: 2 and curval 2
// acc: 4 and curval 3
// 7

// using arrow fun same result
const newtotal = myNums.reduce((acc, curval) => acc + curval, 0)

const shoppingCart = [
    {
        itemname: "js course",
        price: 3999
    },

    {
        itemname: "python course",
        price: 999
    }, 

    {
        itemname: "Mobile  course",
        price: 2999
    }, 

    {
        itemname: "data science course",
        price: 6999
    }
]

const totalprice = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(totalprice);  //14996

