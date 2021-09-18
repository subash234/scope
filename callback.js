// // //callback function demostration
// // //javascript is a synchronous  single threaded  language.
// // // to make the js work as like asynchronous using the callback functions
// // console.log(setTimeout);
// // setTimeout(function(){
// //     console.log("call back file")
// // },5000);
// // function check (y){
// //     console.log("inside the check ");

// // }
// // check (function (){
// //     console.log("inside the y function");


// // })
//  //var count =0;
// function addEvent(){
//      let count;
// document.getElementById("clickme").addEventListener("click",function button(){
//     console.log("clicked the button",++count);
// })
// }
// addEvent();
// let a=10;
// var b=100;
// const c=1000;
// function check (){
//     let a=10;
//     var b=100;
//     const c=1000;
//     console.log("local scope",a,b,c);

// }
let a=10;
var b=100;
const c=1000;
// let outer = ()=>{
//     console.log(this);
//     let d=0.5;
let  check =()=>{
    console.log(this);
    let a=10;
    var b=1;
    const c=1000;
    console.log("local scope",a,b,c);
}
check();
// }
// outer();
console.log("in global scope",a,b,c);