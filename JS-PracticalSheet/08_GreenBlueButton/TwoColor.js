function pinkColorFn()
{
    var box1 = document.querySelector(".box1");
    if(box1.style.backgroundColor != "pink")
    {
        box1.style.backgroundColor = "pink";
    }
    else
    {
        box1.style.backgroundColor ="transparent";
        return false;
    }
    
}

function blueColorFn()
{
    var box2 = document.querySelector(".box2");
    if(box2.style.backgroundColor != "blue")
    {
        box2.style.backgroundColor = "blue";
    }
    else
    {
        box2.style.backgroundColor ="transparent";
        return false;
    }
    
}