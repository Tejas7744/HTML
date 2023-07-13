function calculate() {
    var a = parseInt(document.getElementById("bookOne").value);
    var b = parseInt(document.getElementById("bookTwo").value);
    var c = parseInt(document.getElementById("bookThree").value);
    var d = parseInt(document.getElementById("bookFour").value);
    var e = parseInt(document.getElementById("bookFive").value);
    var f = parseInt(document.getElementById("bookSix").value);
    var g = parseInt(document.getElementById("bookSeven").value);
    if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100 || f > 100 || g > 100)
    {
        alert("Please Enter Correct Value");
    }
    else
    {
        var obtain = a + b + c + d + e + f + g;
        document.getElementById("obtain").innerHTML = obtain;
        var per = obtain / 700 * 100;
        document.getElementById("per").innerHTML = per;
        if(a>40 && b>40 && c>40 && d>40 && e>40 && d>40 && e>40 && f>40 && g>40)
        {
            document.getElementById("remarks").innerHTML =
              "<span style ='color:#292'><b>Pass</b></span>";    
        }
        else
        {
            document.getElementById("remarks").innerHTML = "<span style ='color:red'><b>Fail</b></span>";
        }
        if(per>=80)
        {
            document.getElementById("grade").textContent = "A";
        }
        else if (per >= 70)
        {
            document.getElementById("grade").textContent = "B";
        }
         else if (per >= 60)
        {
            document.getElementById("grade").textContent = "C";
        }
         else if (per >= 50)
        {
            document.getElementById("grade").textContent = "D";
        }
         else if (per >= 40)
        {
            document.getElementById("grade").textContent = "E";
        }
        else
        {
            document.getElementById("grade").textContent = "F";   
        }
    }
}