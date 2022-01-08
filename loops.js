for(i=0;i<50;i++)
{
     if(i%3==0)
    {
        continue;
    }
    console.log(i);
   
}
while(i<100)
{
     if(i%3==0)
    {
        continue;
    }
    console.log(i);
    i++;
}
do
{
     if(i%3==0)
    {
        //console.log(i%3);
        continue;
    }
    console.log(i);
    if(i==124)
    {
        break;
    }
    i++;
}while(i<150);

let arr=[2,3,4,5,6,7,8,9];
arr.forEach(function(element)
{
    console.log(element);
})

let obj={
    name:'pratik',
    prof:'student',
    age:22,
    os:'window'
}

for(let key in obj)
{
    console.log(obj[key]);
}
