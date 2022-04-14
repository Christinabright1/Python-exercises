function ValidationForm() {
        let username = document.forms["myForm"]["fname"];
        let email = document.forms["myForm"]["Email"];
        let phoneNumber = document.forms["myForm"]["ftel"];
        let select = document.forms["myForm"]["fselect"];


        if(username.value == "" && isNaN(username.value)) {
          alert("Please enter your name.");
          username.focus();
          return false;
        }
        //email
       
        var atposition=email.indexOf("@");  
        var dotposition=email.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length || email.value == ""){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
          return false;
        }
        
        //telemovel
        if(phoneNumber.value == "" && (!isNaN(phoneNumber))) {
          alert("Please enter your telephone number.");
          phoneNumber.focus();
          return false;
        }
       
        if(select.selectedIndex < 1) {
          alert("Please enter your course.");
          select.focus();
          return false;
        }
        return true;
      }

      //reset

  function resetForm(){
   document.getElementById("myForm").reset();
 }
