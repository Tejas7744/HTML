//click event

function f_valid_fn()
{
    let fname = document.getElementById("msg").value;
    let mname = document.getElementById("msg-01").value;
    let lname = document.getElementById("msg-03").value;
    let address = document.getElementById("msg-04").value;
    let dob = document.getElementById("msg-05").value;
  if (fname == "" || fname == null)
  {
    document.getElementById("msg-1").innerHTML = "Enter First Name"
    return false;
  }
  else if (mname == "" || mname == null)
  {
    document.getElementById("msg-2").innerHTML = "Enter Middle Name"
    return false;
  }
  else if (lname == "" || lname == null)
  {
    document.getElementById("msg-3").innerHTML = "Enter Last Name"
    return false;
  }
  else if (address == "" || address == null)
  {
    document.getElementById("msg-4").innerHTML = "Enter Address"
    return false;
  }
  else if (dob == "" || dob == null)
  {
    document.getElementById("msg-5").innerHTML = "Fill The Date"
    return false;
  } 
  else
  {
    document.getElementById("msg-1").innerHTML = ""
    document.getElementById("msg-2").innerHTML = ""
    document.getElementById("msg-3").innerHTML = ""
    document.getElementById("msg-4").innerHTML = ""
    document.getElementById("msg-5").innerHTML = ""
    // return false;
  }
  let male = document.getElementById("male").checked;
  let female = document.getElementById("female").checked;
  if (male == false && female == false) 
  {
    document.getElementById("msg-6").innerHTML = "Select Gender"
    return false;
  }
  else
  {
    document.getElementById("msg-6").innerHTML = "";
  }

  let experiance = document.getElementById("exp").value; 
  if (experiance == "-1")
  {
    document.getElementById("msg-7").innerHTML = "Select Experiance"
    return false;
  } 
  else
  {
    document.getElementById("msg-7").innerHTML = "";
  } 
  let mobile = document.getElementById("mobile").value;
  if (mobile == "")
  {
     document.getElementById("mobilee").innerHTML =
       "Enter User Mobile Number!!!";
     return false;
  }
  if (isNaN(mobile))
  {
     document.getElementById("mobilee").innerHTML = "Enter Digits Only!!!";
     return false;
  }
  if (mobile.length < 10 || mobile.length > 10)
  {
     document.getElementById("mobilee").innerHTML = "Enter 10-Digits Only"; //10 Se upar bhi nahi or 10 se kam bhi nahi sirf 10 digit are allowed
     return false;
   }
   // if(mobile.length<10)
   // {
   //     document.getElementById("mobilee").innerHTML="Enter Atleast 10-Digit!!!";
   //     return false;
   // }
   // if(mobile.length>10)
   // {
   //     document.getElementById("mobilee").innerHTML="Enter 10-Digits Only!!!"
   //     return false;
   // }
  else
  {
      document.getElementById("mobilee").innerHTML = "";
  }
    let email = document.getElementById("mail").value;
    if(email == ""|| email == null)
    {
      document.getElementById("maill").innerHTML = "Enter Proper Mail";
      return false;
    }
    else
    {
      document.getElementById("maill").innerHTML = ""
    }

      let pass = document.getElementById("pass").value;
    
    if (pass == "") {
      document.getElementById("passs").innerHTML = "Enter User Password!!!";
      return false;
    }
    if (pass.length < 8) {
      document.getElementById("passs").innerHTML =
        "Enter Atleast 8-Characters!!!";
      return false;
    }
    if (pass.search(/[0-9]/) == -1) {
      document.getElementById("passs").innerHTML =
        "Enter Atleast 1 Numeric Characters!!!";
      return false;
    }
    if (pass.search(/[a-z]/) == -1) {
      document.getElementById("passs").innerHTML =
        "Enter Atleast 1 Lower Case Character!!!";
      return false;
    }
    if (pass.search(/[A-Z]/) == -1) {
      document.getElementById("passs").innerHTML =
        "Enter Atleast 1 Upper Case Character!!!";
      return false;
    }
  if (pass.search(/[!\@\#\$\%\^\*\|\&\(\_\-\,\)]/) == -1)
  {
      document.getElementById("passs").innerHTML =
        "Enter Atleast 1 Special Symbol!!!";
      return false;
  } else
  {
      document.getElementById("passs").innerHTML = "";
  }
}

// Blur Event
function formvalidation(blnk, span_id)
{
  if (blnk.value == "" || blnk.value == null || blnk.value == -1)
  {
    document.getElementById(span_id).innerHTML = "Please Fill These Fields!!!";
    return false;
  }
}

//==========keyboards events===========
//Name Validation
function regex_name(inputex,span_id)
{
  let regex = /^[a-z A-Z]+$/;
  if (!(regex.test(inputex.value)) || (inputex.value.length<2))
  {
    document.getElementById(span_id).innerHTML = "false";
    return false;
  }
  else
  {
    document.getElementById(span_id).innerHTML = "";
    return false;
  }
}

//Address validation
function add_fn()
{
  let add = document.getElementById("msg-04").value;
  if (add.length<=50)
  {
    document.getElementById("msg-4").innerHTML = "Enter Address Must Be 50-Characters!!!"
      return false;  
  }
  else
  {
    document.getElementById("msg-4").innerHTML = ""
    return false;
  }
}

// email Validation
  function mail_fn()
  {
    let mail = document.getElementById("mail").value;
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(mail)) {
      document.getElementById("maill").innerHTML = ""
      return false;
    } else {
      document.getElementById("maill").innerHTML = "Enter Valid Mail"
      return false;
    }
  }

// Others
function showpass() {
  var showpasscode = document.getElementById("pass");
  if (showpasscode.type == "password") {
    showpasscode.type = "text";
  } else {
    showpasscode.type = "password";
    return false;
  }
}