
//javaScript API
//console.log("hello world");
// console.warn("this is warning");
//ctr+/=for single,for multicomment/*comment*/********************************** */
// 3 javaScript Variable== container to store data values************************
var num1 = 23;
var num2 = 32;
//console.log(num1+num2);
// 4.datatypte in js
var str1 = "This is String";
var str2 = 'var is used for varible apply all varible';
//Object
var marks = {
    ravi: 34,
    maya: 88
}
//console.log(str1);
//console.log(marks)

//boolean 
var a = true;
var b = false;
//console.log(a,b);
//undefined var
//var und =undefined;
var und
//console.log(und);

//2 type of datatype**********************************************************
// 1.primitive datatype=undefined,null,number,string,boolean,symbol;
// 2.Reference datatype=Array and Object;

//Array
var arr = [1, 2, 'String', 3, 4];
//console.log(arr);

//operator in js*************************************************************
//1.Arithmatic operator
//2.Assignment operator
//3.Comparison operator
//4.Logical operator
//console.log( true && true);
//console.log(true || false);
function avg(a, b) {
    return (a + b) / 2;

}
c = avg(4, 6);
//console.log(c);

//Conditionals in js*********************************************************
var age = 3;
/*if(age > 4)
{
console.log('you are not kid');
}
else
{
console.log('you are a kid');
}*/
var arr = [1, 2, 3, 4, 5, 6];
//console.log(arr);
//for(var i=0;i<=arr.length;i++)
//{
// console.log(arr[i]);
//}

//new retrition method*************************
//arr.forEach(function(element)
//{
// console.log(element);
//})
let j = 0;
 //while(j<4)
    //{
    //console.log(arr[j]);
    //j++;
    //}

    //array Method********************************************************

let arr1=[23,45,"maya",null,true];
//console.log(arr1)
//length
//last element remove'
arr1.pop();
arr1.push("pranu")
//console.log(arr1);
//String in js*************************************************
let str="maya jondhale";
//console.log(str.length)
//console.log(str.indexOf('maya'));
//console.log(str.lastIndexOf("maya"));
//console.log(str.slice(1,4));
//d=str.replace("maya",'Rohan');
//console.log(d,str);
//***********************************************************************
myDate=new Date();
//console.log(myDate);

//DOM Manipulation***********************************************************
let elem=document.getElementById('click');
console.log(elem);
let elemClass =document.getElementsByClassName("container");
console.log(elemClass);
elemClass[0].style.background= "red";