function greet(name,thank="have a nice day")
{
    console.log(` good morning ${name} ${thank}`);
}

let name = "pratik";
greet(name);

function greet1(name,thank="have a nice day")
{
   return ` good morning ${name} ${thank}`;
}
let name1 = "pratik";
val=greet1(name);
console.log(val);

const greet2=function(name,thank="have a nice day")
{
   return ` good morning ${name} ${thank}`;
}
let name2 = "pratik";
val=greet2(name);
console.log(val);

obj = {
    name:'pratik',
    game:function()
    {
        return "GTA";
    }
}

console.log(obj.game());

const fruits=['apple','mango','orange','watermelon'];
fruits.forEach(function(element,index,array)
{
    console.log(index,element,array);
})
