let a=document;
a=document.all;
a=document.body;
a=document.forms;
Array.from(a).forEach(function(element)
{
    console.log(element);
})
a=document.links;
a=document.images;
console.log(a);