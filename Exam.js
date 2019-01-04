var x1 = 10;
var x2 = 12;
var x3 = 9.5;
var x4 = 15;

function compute(x1,x2,x3,x4){
    var m = (x1+x2+x3+x4)/5.0;
    var n = m*12*m/2.;
    var o = n-0.94;
    return o/518;
}

var result = compute(x1,x2,x3,x4);
console.log(result);