// FOR LOOP

// Print 1 to 5
for(let i = 1; i <= 5; i++){
    console.log("Sohana Singh");
}

for(i=1; i<=5; i++){
    console.log("i = ", i);
}x
// Calculate the sum of 1 to n
let sum = 0;
let n = 6 ;
for ( let i = 1; i <= n; i++ ) {
    sum = sum + i;
}
console.log("sum = ", sum)
console.log("loop has ended");

//WHILE LOOP

let i = 1;
while(i <= 5){
    console.log("i = ", i);
    i++;
}

//FOR-OF LOOP

let str =" Sohana Singh";
   for (let i of str){
    console.log("i =", i);
   }

   //FOR-IN LOOP

   let student = {
    name:"Rahul Singh",
    age: 21,
    cgpa: 8.5,
    isPass: true
 };
  
for(let key in student){
    console.log("key =", key, "value =", student[key]);
} 

//PRACTICE SET 1
//Print all the even numbers 0 to 100?

for (let num = 0; num <=100; num++ ){
    console.log("num =", num);
}

