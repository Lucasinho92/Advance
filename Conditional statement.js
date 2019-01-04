var num = 10;
if(num == 10){
    num = 20;
}
console.log('if statement, \n num>>' + num)

// if else statement
var num = 10;
if (num > 10){
    num = 20;
}
else {num = 0
}
console.log('if else statement, \n num>>' + num)
// Question 
// how to replace this code by an expression using one operator.
var max;
var min;
// var min = 1;
if(min){
    max = min + 10;
}else {
    max = 10;
}
console.log('question 1 \n max'+ max);

// Switch Statement
var gear = "";
var cloudColor;
 var cloudColor = 'white';
//  var cloudColor = 'black'
switch(cloudColor){
    case 'green': gear += 'spacesuit';
    break;
    case 'black' : gear += 'boots';
    break;
    case 'grey' :gear += 'umbrella';
    break;
    case 'white' : gear += 'jacket';
    break;
    default : gear += 'watch';

}
console.log('switch 2 /n gear' + gear)

var max;
var min;
min = 1
max = (min)? min + 10 : 10; {
    console.log('question 1 \ n num>>' + max)

}

/*CONDITIONAL STATEMENTS*/
/*3 examples which are equivalent*/

//try to change foo value 
// var foo=1;
// var foo=2; 
// var foo=1000;
// var foo=0;
var foo='1';

var bar1,bar2,bar3;

//example 1 
if(foo===1){
  bar1='one';
}
else if(foo===2){
  bar1='two';
}
else{
  bar1='something';
}

//example 2
bar2 = (foo===1)?'one':(foo===2)?'two':'something';

//example 3
switch(foo){
  case 1 :
    bar3='one';
    break;
  case 2 : 
    bar3 ='two';
    break;
  default:
    bar3 ='something';
}

//now we print results :

console.log('example1,\n bar1 >> ' + bar1);
console.log('example2,\n bar2 >> ' + bar2);
console.log('example3,\n bar3 >> ' + bar3);


