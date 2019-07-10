function myValidate()
{
var a = document.contactForm.name1.value;
var b = document.contactForm.email1.value;
var c = document.contactForm.phone1.value;

if (a=="" || a==null) {
    alert("Name can't be blank.");
}
    else {
        if (isNaN(a)) {
                if (b == null || b == "") {
                alert("Email can't be blank.");
                }
                    else {
                        if (c == null || isNaN(c) || c.length < 9 || c.length > 10) {
                         alert("Phone number must not be blank.  Only numbers are allowed.");
                        } 
                            else {
                                alert("Everything looks good.  Thanks for the information. Someone will be in contact soon!");
                                }
                        }
                    }
        else {
        alert("Names cannot include numbers.");
              }
            }
        }    


