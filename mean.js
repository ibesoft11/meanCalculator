/*Mean Calculator
Enter values seperated by comma
*/
function mean(values) {
    values = values.split(',');
    var sum=0;
    var meanValue=0;
    var count=0;
    values.forEach(function(value) {
        sum +=parseInt(value);
        count ++;
    });
    meanValue = sum / count;
    console.log(meanValue);   
}

//this should return 2
mean('2,2,2');