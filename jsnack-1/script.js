const newArray = []
let sum = 0;
while (sum < 50){
    const userNumber = parseInt(prompt=(`Type a number`));
    if(!isNaN(userNumber)){
        sum += userNumber;
        newArray.push(userNumber);
    }
}
console.log(newArray, sum);