function validate(){
    var fname=document.getElementById("firstname").value;
    var lname=document.getElementById("lastname").value;
    var mobile=document.getElementById("mobile").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;

    var f=/^([A-Za-z]){2,30}$/;
    var l=/^([A-Za-z]){2,30}$/;
    var m=/^[6-9]\d{9}$/;
    var e=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var p=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    
       if(f.test(fname)){
           document.getElementById("err1").innerHTML=" ";
       }
       else{
           document.getElementById("err1").innerHTML="Invalid firstname";
       }
       
       if(l.test(lname)){
           document.getElementById("err2").innerHTML=" ";
       }
       else{
           document.getElementById("err2").innerHTML="Invalid lastname";
       }
   
       if(m.test(mobile)){
           document.getElementById("err3").innerHTML=" ";
       }
       else{
           document.getElementById("err3").innerHTML="Invalid mobile number";
       }

       if(e.test(email)){
           document.getElementById("err4").innerHTML=" ";
       }
       else{
           document.getElementById("err4").innerHTML="Invalid email address";
       }

       if(p.test(pass)){
        document.getElementById('err5').innerHTML=" ";
       }
       else{
        document.getElementById('err5').innerHTML="Invalid password";
       }
   
}