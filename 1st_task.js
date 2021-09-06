function addRow() { 
    var myName = document.getElementById("name"); 
    var email = document.getElementById("email"); 
    var password = document.getElementById("password"); 
    var table = document.getElementById("myTableData");
    var rowCount = table.rows.length; 
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML = myName.value; 
    row.insertCell(1).innerHTML= email.value; 
    row.insertCell(2).innerHTML= password.value;
    row.insertCell(3).innerHTML= '<input type="button" id="edit-button" value = "Edit" onClick="edit(this) ">';
    row.insertCell(4).innerHTML= '<input type="button" value = "Delete" onClick="deleteRow(this)">';} 
function deleteRow(obj) { 
     var index = obj.parentNode.parentNode.rowIndex; 
     var table = document.getElementById("myTableData"); 
     table.deleteRow(index); }
function edit(obj){
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData"); 
    table.rows[index].cells[0].innerHTML= '<input type="text" id="edit-name" value = ""></input>';
    table.rows[index].cells[1].innerHTML= '<input type="text" id="edit-email" value = ""></input>';
    table.rows[index].cells[2].innerHTML= '<input type="text" id="edit-password" value = ""></input>';
    table.rows[index].cells[3].innerHTML= '<input type="button" id="save-button" value = "Save" onClick="save(this) ">';}
function save(obj){
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    var edit_name = document.getElementById("edit-name").value;
    var edit_email = document.getElementById("edit-email").value;
    var edit_password = document.getElementById("edit-password").value;
    table.rows[index].cells[0].innerHTML= edit_name;
    table.rows[index].cells[1].innerHTML= edit_email;
    table.rows[index].cells[2].innerHTML= edit_password
    table.rows[index].cells[4].innerHTML= '<input type="button" id="edit-button" value = "Edit" onClick="edit(this) ">';}
