function getSum(a, b, less, more) {
    console.log(`The first value is ${a}`);
    console.log(`The second value is ${b}`);
    let sumNum = a + b;

    if (sumNum < 7) {
        less();
    } else {
        more();
    }


    return sumNum;
}
function showLess() {
    console.log('ITS LESS');
}
function showMore() {
    console.log('ITS MORE');

}
getSum(7, 17, showLess, showMore);























