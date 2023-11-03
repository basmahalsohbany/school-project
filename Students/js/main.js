//  create Funaction
let submit = document.getElementById("submit"),
First = document.getElementById("first"),
Last = document.getElementById("last"),
Address = document.getElementById("address"),
Phone = document.getElementById("phone"),
Email = document.getElementById("email"),
Sex = document.getElementById("sex"),
Job = document.getElementById("job"),
Education = document.getElementById("education"),
Experience = document.getElementById("year"),
File = document.getElementById("uploadFile"),
Communication = document.getElementById("communication<");
let data,dataEdu, tmp, mood = 'create';

 
if(localStorage.Student !=null){
    data =JSON.parse(localStorage.Student);
}else{
    data =[];
}
if(localStorage.StudentEdu !=null){
    dataEdu =JSON.parse(localStorage.StudentEdu);
}else{
    dataEdu =[];
}

submit.onclick = function(){
    let newStu= {
        First: First.value.toLowerCase(),
        Last: Last.value.toLowerCase(),
        Address: Address.value.toLowerCase(),
        Phone: Phone.value,
        Email: Email.value,
        Sex: Sex.value,
    }
    let newStudentEdu= {
        Job: Job.value.toLowerCase(),
        Education:Education.value,
        Experience :Experience.value,
        File:File.innerHTML,
        Communication:Communication.value,
    }
    if(First.value != "" && Last.value != "" && Address.value != "" && Phone.value != ""&& Email.value != "" && Sex.value != ""){
        if(mood === 'create'){
            if(newStu.count > 1){
                for(let i=0 ; i<newStu.count ; i++){
                    data.push(newStu);
                }
            }else{
                data.push(newStu);
            }
        }else{
            data[tmp]= newStu;
            mood = 'create';
            submit.innerHTML="Create";
            count.style.display = "block";
        }
        if(Job.value != "" && Education.value != "" && Experience.value != "" && Communication.value != ""){
            if(mood === 'create'){
                if(newStudentEdu.count > 1){
                    for(let i=0 ; i<newStudentEdu.count ; i++){
                        data.push(newStudentEdu);
                    }
                }else{
                    data.push(newStudentEdu);
                }
            }else{
                data[tmp]= newStudentEdu;
                mood = 'create';
                submit.innerHTML="Create";
                count.style.display = "block";
            }
        clearData();
    }
    
    
    localStorage.setItem('Student' , JSON.stringify(data));
    localStorage.setItem('StudentEdu' , JSON.stringify(dataEdu));
    showDate();
}
}
//read
function showDate()
{
    let table ='',table_1 ='';
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
    for(let i=1 ; i<dataEdu.length ; i++){
        table_1 += `<tr>
                    <td>${i}</td>
                    <td>${data[i].Job}</td>
                    <td>${data[i].Education}</td>
                    <td>${data[i].Experience}</td>
                    <td>${data[i].File}</td>
                    <td>${data[i].Communication}</td>
                    <td><button class="btn btn-primary" onclick="updateData(${i})" id="update">update</button></td>
                    <td><button class="btn btn-danger" onclick="deleteData(${i})" id="delete">delete</button></td>
                    </tr>`;
    }
    document.getElementById('tbody_1').innerHTML = table_1;
    let btndeletAll = document.getElementById('deletAll');

    if(data.length>0){
        btndeletAll.style.display="block";
        btndeletAll.innerHTML = `
        <div onclick = "deletAll()"> Delet All (${data.length})</div>`
    }
    else{
        btndeletAll.innerHTML ='';
    }

    if(dataEdu.length>0){
        btndeletAll.style.display="block";
        btndeletAll.innerHTML = `
        <div onclick = "deletAll()"> Delet All (${dataEdu.length})</div>`
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
    Email.value=" ";
    Sex.value=" ";
    Job.value=" ";
    Education.value="";
    Experience.value=" ";
    File.value=" ";
    Communication.value=" ";
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
   Job.value = dataEdu[i].Job;
   Education.value = dataEdu[i].Education;
   Experience.value = dataEdu[i].Experience;
   File.value = dataEdu[i].File;
   Communication.value = dataEdu[i].Communication;
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
    localStorage.Student = JSON.stringify(data);
    localStorage.StudentEdu = JSON.stringify(dataEdu);
    showDate();
}

