console.log("Starting");
// saySomething();
setTimeout(doAnything, 5000);
console.log("Finally done");

function doAnything(){
   for(i = 0; i<2000; i++){
       console.log("Whats up");
   }
}