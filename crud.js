var selectedRow = null;

function onFormSubmit(){
    event.preventDefault()
    var formData = readFormData();
    if (selectedRow === null){
       insertNewRecord(formData);
    }
       else{
        updateRecord(formData);
        
       }
       resetForm();
    
}
//Retrieve the data
function readFormData(){
    var formData = {};
    formData["scenarioid"]=document.getElementById("scenarioid").value;
    formData["scenarioname"]=document.getElementById("scenarioname").value;
    formData["scenariotime"]=document.getElementById("scenariotime").value;
    formData["numberofvehicle"]=document.getElementById("numberofvehicle").value;
    formData["addvehicle"]=document.getElementById("addvehicle").value;
    return formData;
    // formData["Edit"]=document.getElementById("Edit").value;
    // formData["Delete"]=document.getElementById("Delete").value;
}
//insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML=data.scenarioid;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML=data.scenarioname ;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML=data.scenariotime;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML=data.numberofvehicle;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML=data.addvehicle;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML= '<a onclick="onEdit(this)">Edit</a>';
    var cell7 = newRow.insertCell(6);
        cell7.innerHTML= '<a onclick="onDelete(this)">Delete</a>';
        
    
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("scenarioid").value = selectedRow.cells[0].innerHTML;
    document.getElementById("scenarioname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("scenariotime").value = selectedRow.cells[2].innerHTML;
    document.getElementById("numberofvehicle").value = selectedRow.cells[3].innerHTML;
    document.getElementById("addvehicle").value = selectedRow.cells[4].innerHTML;


}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.scenarioid;
    selectedRow.cells[1].innerHTML = formData.scenarioname;
    selectedRow.cells[2].innerHTML = formData.scenariotime;
    selectedRow.cells[3].innerHTML = formData.numberofvehicle;
    selectedRow.cells[4].innerHTML = formData.addvehicle;
}
//delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record ?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        
    }
    resetForm();
    
}
function resetForm(){
    document.getElementById("scenarioid").value = "";
    document.getElementById("scenarioname").value = "";
    document.getElementById("scenariotime").value = "";
    document.getElementById("numberofvehicle").value = "";
    document.getElementById("addvehicle").value = "";
}
