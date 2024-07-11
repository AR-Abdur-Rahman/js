// text change 
function textChange(){
    document.getElementById('t_c').innerHTML="Hello world"
}
// style color change
function colorChange(){
    document.getElementById('s_c').style.color="red";
}
// Bulb on/off
function bulbOn(){
    document.getElementById('b_m').src="img/on.gif";
}
function bulbOff(){
    document.getElementById('b_m').src="img/off.gif";
}
// show date
function shoeDate(){
    document.getElementById("s_d").innerHTML= Date();
}
// show hide display
function showText(){
    document.getElementById('s_t').style.display="block";
}
function hideText(){
    document.getElementById('s_t').style.display="none";
}
// document.write
function dWrite(){
    document.write("Hello world");
}
// window.alert
function winAlert(){
    window.alert("Hello world")
}
// shoe into console.log
function cLog(){
    console.log("Hello world")
}
// print page
function pPage(){
    window.print();
}
// show the result

let number1, number2;
number1 = 4;
number2 =5;

number1 += number2;
function reSult(){
    document.getElementById('r_s').innerHTML= number1;
}
//  show the constant array

const cars = ["Saab", "Volvo", "BMW"];

function arRay(){
    document.getElementById("a_s").innerHTML=cars[1];
}

// change the constant array

const carss ="car";

function chaNge(){
    document.getElementById("p").innerHTML = carss; 
}
//  puss the constant array

const car = ["Saab", "Volvo", "BMW"];

car.push("Audi");

function puSh(){
    document.getElementById("p_s").innerHTML = car; 
}
// constant object

const ca = {type:"Fiat", model:"500", color:"white"};

ca.owner = "Johnson";


function obJect(){
    document.getElementById("o_j").innerHTML = "Car owner is " + ca.owner;
}
//  const array
const cas = ["hino", "Volvo", "BMW"];

function aRray(){
    document.getElementById("a_r").innerHTML = cas;
}
// sort array method
const fruits = ["Banana", "Orange", "Apple", "Mango"];

 function fruit() {
    fruits.sort();
    document.getElementById("s_m2").innerHTML = fruits;
 }
// Reversing array method
const fruit_name = ["Banana", "Orange", "Apple", "Mango"];
function reVers(){
    fruit_name.reverse();
    document.getElementById("r_v").innerHTML = fruit_name;
}
// forEach() method 
const fruit_s = ["Apple", "Orange", "Apple", "Mango"];
let position = fruit_s.indexOf("Apple") + 1;

function inDex(){
    document.getElementById("f_m").innerHTML = "Apple is found in position " + position;
}
// find() Method
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

document.getElementById("f_d").innerHTML = "First number over 18 is " + first;

function myFunction(value, index, array) {
  return value > 18;
}
// getMonth() Method
const b = new Date("2024-02-15");
function daTe(){
    document.getElementById("g_d").innerHTML = b.getMonth() + 1;
}
// setDate() method
const d = new Date();
d.setDate(d.getDate() + 50);
function sEtdate(){
    document.getElementById("s_d").innerHTML = d;
}
// setHours()
const h = new Date();
h.setHours(22);
function seThour(){
    document.getElementById("h_d").innerHTML = h;
}
// setMinutes() Method
const m = new Date();
m.setMinutes(30);
function miNute(){
    document.getElementById("m_n").innerHTML = m;
}
// setSeconds() method
const s = new Date();
s.setSeconds(30);
function seCond(){
    document.getElementById("s_s").innerHTML = s;
}
// toExponential() method
let x = 9.656;
function toeXpon(){
    document.getElementById("t_e").innerHTML =
    x.toExponential() + "<br>" + 
    x.toExponential(2) + "<br>" + 
    x.toExponential(4) + "<br>" + 
    x.toExponential(6);
}
// number
let e = 3.14;
let y = 3;
function nUmber(){
    document.getElementById("n_m").innerHTML = e + "<br>" + y;
}
// Floating point arithmetic
let i = 0.2 + 0.1;
document.getElementById("p_t").innerHTML = "0.2 + 0.1 = " + i;
let z = (0.2*10 + 0.1*10) / 10;
document.getElementById("demo2").innerHTML = "0.2 + 0.1 = " + z;
// The focus Event
function myFunction(d) {
    d.style.background = "yellow";
}

// The blur Event

function myunction() {
    let x = document.getElementById("fname");
    xs.value = xs.value.toUpperCase();
}
// The oninput Event

function Function() {
    let text = document.getElementById("myInput").value;
    document.getElementById("mo").innerHTML = "You wrote: " + text;
}
// The onkeydown Even
function mYfunction() {
    document.getElementById("oN").innerHTML = "You pressed a key inside the input field";
}
// The onkeypress Even
function myfunCtion() {
    alert("You pressed a key inside the input field");
}
// The keyup Event
function deF() {
    let x = document.getElementById("fname");
    m.value = m.value.toUpperCase();
}
// The onload Event

// function myFunction() {
//     alert("Page is loaded");
// }
// form is submitted
function myfunctIon() {
    alert("The form was submitted");
}
// Open the details
function myFunction() {
    alert("The ontoggle event occured");
}
// text colour
function color(){
    document.getElementById('h').style.background='red';
}
// Text size change
function textShadow(){
    document.getElementById('shadow').style.textShadow="0px -4px 5px";
}
// textTransform
function textTransform(){
    document.getElementById('transForm').style.textTransform="uppercase";
}
// fontWeight
function fontWeight(){
    document.getElementById('fontWeight_change').style.fontWeight='700';
}

// fontStyle
function fontStyle(){
    document.getElementById('fontStyle_change').style.fontStyle='italic';
}
// submitting a search
function seaRch() {
    var x = document.getElementById("myInput");
    document.getElementById("dm").innerHTML = "You are searching for: " + x.value;
}
// reset the form
function reSet() {
    alert("The form was reset");
}
// 
function iOn() {
    let w = window.outerWidth;
    let h = window.outerHeight;
    let txt = "Window size: width=" + w + ", height=" + h;
    document.getElementById("demo").innerHTML = txt;
}
// number&string
let carName1 = "Volvo XC60";
let carName2 = 'Volvo XC60';

function sIngel(){
    document.getElementById("demo").innerHTML =
    carName1 + " " + carName2;
}
// 
function jDec(){
    let x=99;
    x--;
    z=x;
    document.getElementById('d_r').innerHTML=z;
}