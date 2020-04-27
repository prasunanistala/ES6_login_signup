PassValidate = ()=>{
    console.log(document.getElementById("p1").value,document.getElementById("p2").value)
    if(document.getElementById("p1").value == document.getElementById("p2").value )
    {
        console.log("equal");
        document.getElementById("pass_err").innerText="";
    }
    else
        document.getElementById("pass_err").innerText="Password didnt match!!";
}
Validate = ()=>{ //arrow function
    let val=document.getElementById("id").value;
    let pass=document.getElementById("pass").value;
    if((val > 999999 || val < 0) && pass.length < 8 )
    {
        document.getElementById("err").innerText="Staff Id or Password is Incorrect"
    }
        
}