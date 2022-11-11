

var counter = 1
var people = [];

function input() {

    if (document.getElementById("display").innerText == "Submit") {
        submit();
        
    }
    else {
        id = document.getElementById("person_id").innerText;
        update(id);
    
    }
}

function edit(id) {

    // var SingleRow = people.find((e) => {
    //     return e.id == id;
    // });

    for (let i = 0; i < people.length; i++) {

        if (people[i].id == id) {

            document.getElementById('Input1').value = people[i].id;
            document.getElementById('Input1').value = people[i].firstName;
            document.getElementById('Input2').value = people[i].lastName;
            document.getElementById('Input3').value = people[i].email;
            document.getElementById('Input4').value = people[i].contact;
            document.getElementById('Input5').value = people[i].age;
 
            document.getElementById("display").innerText = "Update";
            document.getElementById("person_id").innerText = id;

        }
    }
    
    
}

function submit() {

    var firstNamei = document.getElementById('Input1').value;
    var lastNamei = document.getElementById('Input2').value;
    var emaili = document.getElementById('Input3').value;
    var contacti = document.getElementById('Input4').value;
    var agei = document.getElementById('Input5').value;



    if (firstNamei == "" || lastNamei == "" || emaili == "" || contacti == "" || agei == "") {
        alert("All fields name must be filled out");
        return false;
    }
    if ((firstNamei.length < 5 || firstNamei.length > 20) || (firstNamei.length < 5 || firstNamei.length > 20)) {
        alert("Name length should be between 5 and 20 characters");
        return false;
    }


    let person = {
        id: counter,
        firstName: firstNamei,
        lastName: lastNamei,
        email: emaili,
        contact: contacti,
        age: agei
    }
    people.push(person)
    counter += 1;

    // console.log("PEOPLE ARE:", people);

    onLoadData(people);


    document.getElementById('Input1').value = "";
    document.getElementById('Input2').value = "";
    document.getElementById('Input3').value = "";
    document.getElementById('Input4').value = "";
    document.getElementById('Input5').value = "";

}


function update(id) {

    var firstNamei = document.getElementById('Input1').value;
    var lastNamei = document.getElementById('Input2').value;
    var emaili = document.getElementById('Input3').value;
    var contacti = document.getElementById('Input4').value;
    var agei = document.getElementById('Input5').value;


    if (firstNamei == "" || lastNamei == "" || emaili == "" || contacti == "" || agei == "") {
        alert("All fields name must be filled out");
        return false;
    }
    if ((firstNamei.length < 5 || firstNamei.length > 20) || (firstNamei.length < 5 || firstNamei.length > 20)) {
        alert("Name length should be between 5 and 20 characters");
        return false;
    }


    for (let i = 0; i < people.length; i++) {
        if (people[i].id == id) {
            
            people[i].id = id;
            people[i].firstName = firstNamei;
            people[i].lastName = lastNamei;
            people[i].email = emaili;
            people[i].contact = contacti;
            people[i].age = agei;
        }
    }
    
    onLoadData(people);


    document.getElementById('Input1').value = "";
    document.getElementById('Input2').value = "";
    document.getElementById('Input3').value = "";
    document.getElementById('Input4').value = "";
    document.getElementById('Input5').value = "";
    document.getElementById("display").innerText = "Submit";

}
function onLoadData(people) {
   // var tableBody = 
    document.getElementById("body").innerHTML=createTable(people);
    // var res = createTable(people);
    // tableBody.innerHTML = res;
//  tableBody.innerHTML=createTable(people);
}

function deleteData(id){

    for(let i = 0 ; i< people.length; i++){

        if(people[i].id == id){

            people.splice(i,1);
        }
    }

    onLoadData(people);

}



function createTable(people) {
    // console.log("tABLE DATA")
    // console.log(people)

    var row = "<tr>";
    people.forEach((value) => {
        row += `<td>${value.id}</td>`;
        row += `<td>${value.firstName}</td>`;
        row += `<td>${value.lastName}</td>`;
        row += `<td>${value.email}</td>`;
        row += `<td>${value.contact}</td>`;
        row += `<td>${value.age}</td>`;
        row += `<td><button type="button"  id="display" onclick="edit(${value.id})" class="btn btn-outline-primary">Edit</button></td>`;
        row += `<td><button type="button"  id="display" onclick="deleteData(${value.id})" class="btn btn-outline-danger">Delete</button></td></tr>`;
    });
    return row;
}

