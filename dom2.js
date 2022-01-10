let element=document.getElementById("myfirst");
console.log("hello from console");
//element=element.className;
//element=element.childNodes;
//element=element.parentNode;
element.style.color="red";
element.innerText="hello world";
element.innerHTML="<b>hello user</b>";


//console.log(element.innerText);


val=document.querySelector('#myfirst');
val=document.querySelector(".child");
val=document.querySelector("p");
val=document.querySelector("div");
val.style.color="green";
//console.log(val);

val=document.getElementsByClassName("child");
val=document.getElementsByClassName("container");
//console.log(val[0].getElementsByClassName("child"));

data=document.getElementsByTagName("div");
//console.log(data);

Array.from(data).forEach(element => {
   console.log(element);
   element.style.color="blue";
})