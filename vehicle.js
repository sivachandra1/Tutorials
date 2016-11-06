(
    function () {
        var vehicleProfile = {
            vNumber: 1234,
            year: 1960,
			model:"A1",
			make:"Audi"
			
        };

        /*function displayProfile(){
            var fName=document.getElementById("txtFirstName");
            fName.value =profile.firstName;//set property
            lName =document.getElementById("txtLastName");
            lName.value=profile.lastName;
        }*/

        /*function displayProfile() {
            getElementsByTagName()
             This will give you an array of elements with
             the same tag name.
            
            var inputs = document.getElementsByTagName("input");
            console.log(inputs);
            for(var i=0;i<inputs.length;i++){
                inputs[i].value=profile.firstName;
                inputs[i].style.backgroundColor="red";
            }
        }*/
		var myButton = document.querySelector('button');
        function vehicleDisplayProfile(){
           var vin = document.getElementById("name");
		   vin.value=vehicleProfile.vNumber;
		   console.log(vin.value);
		   var vy =document.getElementById("year");
		   vy.value=vehi`cleProfile.year;
		   console.log(vy.value);
		   var vModel =document.getElementById("vehicleModel");
		   vModel.value=vehicleProfile.model;
		   console.log(vModel.value);
		   var vmake=document.getElementById("vehicleMake");
		   vmake.value=vehicleProfile.make;
		   console.log(vMake.value);
        
        }

        myButton.onclick = function() {
        vehicleDisplayProfile();
}
    }
)();