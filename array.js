// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0
// for (let val of marks){
//     sum = sum+ val;
    
// }
// sum = sum/marks.length;
// console.log(`The Average Marks Are ${sum}`);



// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for (let val of items){
//     let offer = val/10;
//     items[i] = items[i] - offer;
//     console.log(`The Final Price of Items After Discount is ${items[i]}`);
//     i++;
// }


// same thing different approach

// let items = [250, 645, 300, 900, 50];
// for(let i = 0; i< items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }

// console.log(`The Final Value of Items After Offer is ${items}`);


let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

companies.shift();
console.log(`After Removing First Company =  ${companies}`)

companies.splice(1, 1, "Ola");
console.log(`After Changing Uber To Ola =  ${companies}`);

companies.push("Amazon");
console.log(`After Adding Amazon At The End =  ${companies}`);
