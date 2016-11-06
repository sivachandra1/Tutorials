(function () {
    //step 1. create employee List
    //step 2: loop through the employees
    //step 3: get each employee
    //step 4: build tr tag
    //step 5: build td tags for id,fname,lname
    //step 6: append td to tr.
    //step 7  append tr to table.
    var ctrls = {};
    ctrls.empTable = document.getElementById("tblEmployees");
    var employees = [
	{       empId: 100,
            fName: "Kiran",
            lName: "PVS"
        },
        {
            empId: 101,
            fName: "Sneha",
            lName: "P"
			
        },{
			empId: 102,
            fName: "Sneha1",
            lName: "K"
			
		},
		{
			empId: 104,
            fName: "Sneha3",
            lName: "L"
			
		},
		{
			empId: 105,
            fName: "Sneha4",
            lName: "H"
			
		},
		{
			empId: 106,
            fName: "Sneha5",
            lName: "J"
			
		},
		{
			empId: 107,
            fName: "Sneha6",
            lName: "J"
			
		},
		{
			empId: 108,
            fName: "Sneha7",
            lName: "G"
			
		},
        {
			empId: 109,
            fName: "Sneha8",
            lName: "U"
			
		},
		{
			empId: 110,
            fName: "Sneha9",
            lName: "D"
			
		},
					
			
					  ];

    function buildTrTag(emp) {
        //step 4:
        var trForEmployee = document.createElement("tr");
        
         //step 5: build td tags for id,fname,lname
        var tdForEmpId = document.createElement("td");
        tdForEmpId.textContent=emp.empId;
        
        var tdForFName = document.createElement("td");
        tdForFName.textContent= emp.fName;
        
        var tdForLName = document.createElement("td");
        tdForLName.textContent=emp.lName;
        
       //step 6: append td to tr.
        trForEmployee.appendChild(tdForEmpId);
        trForEmployee.appendChild(tdForFName);
        trForEmployee.appendChild(tdForLName);
        console.log(trForEmployee);
        
        //step 7  append tr to table.
        ctrls.empTable.appendChild(trForEmployee);
        


    }



    function buildEmployeeTable() {
        //step2. 
        for (var i = 0; i < employees.length; i++)
			{
            var employee = employees[i];
            //step 3 build tr tag
            buildTrTag(employee);
        }
    }


    
	
        buildEmployeeTable();
    

   

})();