let array = [2,2,2,2,2,2,2,2,2,2]; // test case 1
// let array = [4,2,1,3]; // test case 2
// let array = [8,4,6,12] // test case 3
// let array = [2,4,8,20] // test case 4
let timeTaken = [];
function addAndPushLowestTwoNumbers(array) {
    let lowestNumber1 = 10000000;
    let lowestNumber2 = 10000000;
    let lowestNumber1Index = -1;
    let lowestNumber2Index = -1;

    for(let i=0;i<array.length;i++) {

        if(lowestNumber1>=array[i]) {
            lowestNumber1=array[i];
            lowestNumber1Index = i;
        }
    }
    array.splice(lowestNumber1Index, 1);
    for(let i=0;i<array.length;i++) {
        if(lowestNumber2>=array[i]) {
            lowestNumber2=array[i];
            lowestNumber2Index=i;
        }
    }
    array.splice(lowestNumber2Index,1);

    timeTaken.push(lowestNumber1+lowestNumber2);
    array.push(lowestNumber1+lowestNumber2);
    if(array.length>1) {
        addAndPushLowestTwoNumbers(array);
    }
    else 
        return timeTaken
}
array = array.sort(function(a,b) {
    return a-b;
})
addAndPushLowestTwoNumbers(array);
timeTaken = timeTaken.reduce((a,b)=>{
    return a+b;
})
console.log(timeTaken);

