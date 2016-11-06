(
function()
{
	var cntrls={};
	
	cntrls.firstName=document.getElementById("txtFirstName");
	cntrls.LastName=document.getElementById("txtLastName");
	cntrls.Register=document.getElementById("btnRegister");
	cntrls.Age=document.getElementById("ageNumber");
	
	
	function ReadData()
	{
		var profile={};
		profile.firstName=cntrls.firstName.value;
		profile.LastName=cntrls.LastName.value;
		profile.Register=cntrls.Register.value;
		profile.Age=cntrls.Age.value;
	}
	function changeColor() {
           cntrls.Register.style.backgroundColor="orange";
        };
	
    function alphabetsOnly(evt) 
	{
            console.log(evt);
            if (
			(evt.keyCode >= 65 && evt.keyCode <= 90) ||
            (evt.keyCode >= 97 && evt.keyCode <= 122)
               ) 
			   {
                console.log("Valid");
               } 
			   else 
			   {
                
				console.log("Invalid");
                evt.preventDefault();
               }

    }
function validateNumber(event) 
{
    console.log("event");
    if((event.keyCode>=47 && event.keyCode<=57)
		)
		{
			console.log("valid");
			
		}
		else
		{
			console.log("invalid");
			event.preventDefault();
		}
		
}//bindEvents 
	function bindEvents()
	{
		
		cntrls.Register.addEventListener("click", ReadData);
		cntrls.Register.addEventListener("mouseover",changeColor);
		cntrls.firstName.addEventListener("keypress",alphabetsOnly );
		cntrls.LastName.addEventListener("keypress",alphabetsOnly );
		cntrls.Age.addEventListener("keypress",validateNumber);
	
		
				}
	
	
	
	bindEvents();
	
	
	
	
	
	
	
	
})();