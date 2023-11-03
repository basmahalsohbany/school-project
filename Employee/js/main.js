document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value;
};



// let btnCreate = document.getElementById("contant-create");
// let create = document.getElementById("contant-create-list");
// btnCreate.addEventListener('click' , () =>{
//     create.classList.add('active');
// })



//  create Funaction
let submit = document.getElementById("submit"),
First = document.getElementById("first"),
Last = document.getElementById("last"),
Address = document.getElementById("address"),
Phone = document.getElementById("phone"),
Email = document.getElementById("email"),
Sex = document.getElementById("sex");
let data, tmp, mood = 'create';

 
if(localStorage.Employee !=null){
    data =JSON.parse(localStorage.Employee);
}else{
    data =[];
}

submit.onclick = function(){
    let newEmp = {
        First: First.value.toLowerCase(),
        Last: Last.value.toLowerCase(),
        Address: Address.value.toLowerCase(),
        Phone: Phone.value,
        Email: Email.value,
        Sex: Sex.innerText,
    }
    if(First.value != "" && Last.value != "" && Address.value != "" && Phone.value != ""&& Email.value != ""&& Sex.value != ""){
        if(mood === 'create'){
            if(newEmp.count > 1){
                for(let i=0 ; i<newEmp.count ; i++){
                    data.push(newEmp);
                }
            }else{
                data.push(newEmp);
            }
        }else{
            data[tmp]= newEmp;
            mood = 'create';
            submit.innerHTML="Create";
            count.style.display = "block";
        }
        clearData();
    }
    
    
    localStorage.setItem('Employee' , JSON.stringify(data));
    localStorage.setItem('Student' , JSON.stringify(data));
    showDate();
}

//read
function showDate()
{
    let table ='';
    for(let i=1 ; i<data.length ; i++){
        table += `<tr>
                    <td>${i}</td>
                    <td>${data[i].First}</td>
                    <td>${data[i].Last}</td>
                    <td>${data[i].Address}</td>
                    <td>${data[i].Phone}</td>
                    <td>${data[i].Email}</td>
                    <td>${data[i].Sex}</td>
                    <td><button class="btn btn-primary" onclick="updateData(${i})" id="update">update</button></td>
                    <td><button class="btn btn-danger" onclick="deleteData(${i})" id="delete">delete</button></td>
                    </tr>`;
    }
    document.getElementById('tbody').innerHTML = table;
    let btndeletAll = document.getElementById('deletAll');

    if(data.length>0){
        btndeletAll.style.display="block";
        btndeletAll.innerHTML = `
        <div onclick = "deletAll()"> Delet All (${data.length})</div>`
    }
    else{
        btndeletAll.innerHTML ='';
    }
}
showDate();

//clear inputs
function clearData(){
    First.value="";
    Last.value="";
    Address.value="";
    Phone.value="";
    Email.value="";
    Sex.value="";
}
// delet all

function deletAll(){
    localStorage.clear();
    data.splice(0);
    showDate();
}

//  view Funaction

//  edit Funaction
function updateData(i){
   First.value = data[i].First;
   Last.value = data[i].Last;
   Address.value = data[i].Address;
   Phone.value = data[i].Phone;
   Email.value = data[i].Email;
   Sex.value = data[i].Sex;
    count.style.display = "none";
    submit.innerHTML="Update";
    mood = "update";
    tmp = i;
    scroll({
        top:0,
        behavior: 'smooth'
    })



}

//  delete Funaction
function deleteData(i){
    data.splice(i,1);
    localStorage.product = JSON.stringify(data);
    showDate();
}

