// password1=123123
// password2=321321
// actual=123123
// if(password1==actual || password2==actual)
// {
//     console.log("success")
// }
// else{
//     console.log("failed")
// }


//  else if

// let a = 10;
// if (a > 0) { 
//    console.log ("passtive number") }
// else if (a < 0) { console.log("negative number") }
// else {
//    console.log ("zero")
// }


// odd or even
// let a = 7;
// a % 2 == 0 ? console.log("even") : console.log("add");



// let head = document.getElementById('kid');

// let btn = document.getElementById('ll')


// btn.onclick = function( ) {
//    if( head.innerHTML === "<h1>hello</h1>"){
//     head.innerHTML = " "
//    }
//    else{
//      head.innerHTML = "<h1>hello</h1>"
//    }



// switch

// let n=8;
// switch (n)
// {
//     case 1:{
//         console.log("one")
//         break;
//     }
//     case 2:{
//         console.log("two")
//         break;
//     }
//     default :{("invalied value")}
// }

// console.log(typeof("10"))
// var a
// console.log(typeof(a))
// console.log(typeof(true))
// var a=null

// console.log(typeof(a))



// looping statment

// for(i=0;i<=100;i++)
//     console.log(i)


//  var i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }
// var i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<=10)

// let arr=[1,2,3,4,5];
// for(let a in arr){
//     console.log(a);
// }

// let obj ={1:"apple",2:"mango",3:"cherry"}
// for(let num in obj ){
//     console.log(obj,num)
// }

// continue and break
// for(i=0;i<=10;i++)
// {
//     if(i==5){
//     break;
//     }
//     console.log(i)
// }


// let str="welcome to #cadd cae com#puter"
// console.log(str.length);
// console.log(str.toUpperCase(str));
// console.log(str.toLowerCase(str))
// console.log(str.indexOf("e"))
// console.log(str.lastIndexOf("l"))
// console.log(str.substring(2,5))
// console.log(str.split("#"))
// console.log(str.trim())
// console.log(str.search("cadd"))
// console.log(str.includes("x"))
// console.log(str.repeat(4))
// console.log(str.replaceAll("to","was"))
// console.log(str.slice(2,5))
// console.log(str.charAt(17))
// console.log(str.startsWith('l'))
// console.log(str.endsWith("uter"))




// template literals

// let a = "muruga"
// let b = "ganesa"
// let text = `welcome to ${a} and ${b} the cadd cae computer center`;
// console.log(text);



// // nullies
// const obj = { "fname": "surya","sname": "" };
// obj.sname = "raja";
// console.log(obj)


// let obj1 = { "fname": "surya","sname": "" };
// obj1.sname ??= "raja";
// console.log(obj1)


// array 

// let a=[1,2,3,4,5,6]
// for(let sudarsan of a){
//   console.log(sudarsan)
// }

// let arr=[[10,20],[30,40]]
// for(let a of arr)
//   // for(let element of arr)
// {
//   console.log(element)
// }


// array of Object

// let arr=[
//   {"id":1,"name":"surya"},
//   {"id":2,"name":"raja"},
//   {"id":3,"name":"bala"}
// ];
// for(let a of arr){
//   console.log(0)
// }
// let cookies= true
// if(false) {
//   console.log("would you like a cookies")
// }
// else{
//   console.log("time to back more cookies")
// }

// if
// let wether="winter"
// if(wether=="spring"){
//   console.log("enjioy the blooming flower")
// }
// if (wether=="summer") {
//   console.log("have you fun the sun")
// } 
// if(wether=="autumu") {
//   console.log("enjoy the levae")
// }
// if(wether=="winter"){
//   console.log("bundle up stay warm")
// }

// let score =60;
// if(score<=50){
//   console.log("you need to improve")
// }
// else if(score>=50 && score<=70){
//   console.log("great job")
// }
// else if(score>=70){
//   console.log("extcellent preforemce")
// }


// let number = 601
// if (number%2==0) {
//   console.log("even num")
// }
// else {
//   console.log("odd num")
// }


// let charactor="a,e,i,o,u"
// if(charactor=="a,e,i,o,u"){
//     console.log("vouwel")
// }
// else if("container") {
//     console.log("normal letter")
// }


// 


// let fruits = [  ,"apple", "mango", "orange"]
// fruits.forEach((fruit)=>{
//     console.log(fruit.toLowerCase())
// })


// let arr =[
//     {"id":1,"name":"surya"},
//    {"id":2,"name":"raja"},
//    {"id":3,"name":"bala"}
// ];
// var user=arr.findIndex((a)=>a.id==3)
// console.log(user)


// let arr=[
//   {"id":1,"name":"surya"},
//   {"id":2,"name":"surya"},
//   {"id":3,"name":"surya"}
// ];
// const name=arr.find((a)=>a.id==1);
// console.log(name)






//object
// let obj={"fname":"deepak","sname":"saravanaraja"}
// let {fname,sname}=obj
// console.log(fname,sname)

//new object
// let user =new Object()
// user.firstname="sudarsan",
// user.age=22,
// user.secoundname="jayabalan",
// console.log()

//create object
// let banner ={"fname":"sudarsan","sname":"deepak"}
// let obj =Object .create(banner)
// console.log(obj.sname)

//assign
// let name={fname:"sudarsan",sname:"deepak"}
// let parra=Object.assign({id:1},{reg:123},name)
// console.log(parra)

// object
// let obj={
//     fname:"sudarsan",
//     language:["c","c++","java","python"],
//     age:22,
//     address:{
//         city:"dindigul",
//         pincoed:624003,
//     },
//     maritalstatus:false
// };
// console.log(obj.fname)
// console.log(obj.address.pincoed)
// console.log(obj.language[3])
// console.log(obj.maritalstatus)
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

//  class and object

// class main{
//     fname="deepak"

//     fun(){
//         console.log("welcome")
//     }
// }
// let =mainObject=new main()
// console.log(mainObject.fname)
// mainObject.fun()

// // no arg no ret function
// function output(){
//     console.log("welcome")
// }
// output()

// //with arg no ret
// function output(a,b){
// console.log(a+b)
// }
// output(10,20)

// // with arg with ret
// function output(a,b){
//     return a-b
// }
// d=output(1,20)
// console.log(d)

// funcation arbitary
// function pop(){
//     console.log(arguments)
// }
// pop(10);

// function as expertion
// let add=function(){
//     console.log("i want coffee")
// }
// add()


// windows property
// console.log(window.document)
// console.log(window.history)
// console.log(window.location)
// console.log(window.navigator)
// console.log(window.innerHeight)
// console.log(window.innerWidth)
// console.log(window.outerHeight)
// console.log(window.outerWidth)
// console.log(window.closed)
// console.log(window.screenX)
// console.log(window.screenY)
// console.log(window.self)

//  window.alert("welcome")
//  window.confirm("welcome")

//  const btn=document.querySelector("button")
//  let div =document.querySelector("div")
//  btn.addEventListener("click",()=>{
//     div.innerText=getSelection()
//  })

// const btn =document.querySelector("button");
// btn.addEventListener("click",()=>{
//    const frame =window .open("cadd.html","_blank","width=500px,height=500px");
//    frame.moveBy(100,100);
//    frame.focus();
// })

// settimeout
// setTimeout(()=>{
//    console.log("welcome sudarsan")
// },5000);

// setinterval
// setInterval(()=>{
//    console.log("welcome to cadd cae center")
// },1000)

// claerinterval
// i=1
// const name=setInterval(()=>{
//    console.log("weelcome surya",i)
//    i++
//    if(i==10){
//       clearInterval(name)
//    }
// },1000)


// element seleter
// const main=document.getElementById("name")
// console.log(main)
// const quree=document.querySelector("p-tag")
// console.log(quree)

// let title = document.getElementById("one")
// console.log(title.textContent)

// function change(){
//     title.textContent="bye world"
// }




// var box1 = document.getElementById("num1")
// var box2 = document.getElementById("num2")

// var answer = document.getElementById("result")

// var sudar = Number(box1.value)
// var san =Number(box2.value)


// var total = sudar + san
// console.log(total)


// function add() {
//     answer.textContent =total
// }


// let select=document.querySelector("#p-tag")
// console.log(select)
 

// document.write("welcome")
// document.write("<h1>welcome</h1>")

// var set=document.querySelector("div > p")

// // console.log(set.parentElement)
// // console.log(set.parentNode)
// console.log(set.firstChild)
// console.log(set.firstElementChild)


// console.log(set.lastChild)
// console.log(set.lastElementChild)

const btn=document.querySelector("button")
console.log(btn.nextSibling)
console.log(btn.nextElementSibling)
console.log(btn.previousSibling)
console.log(btn.previousElementSibling)


