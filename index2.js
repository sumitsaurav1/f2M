let tableContainer = document.getElementById("table-container")
function tableHeadCreater(tableName){
    let thead = document.createElement("thead");
            let th1= document.createElement("th");
            th1.innerText = "ID";
            thead.appendChild(th1);
            let th2= document.createElement("th");
            th2.innerText = "Name";
            thead.appendChild(th2);
            let th3= document.createElement("th");
            th3.innerText = "Gender";
            thead.appendChild(th3);
            let th4= document.createElement("th");
            th4.innerText = "Class";
            thead.appendChild(th4);
            let th5= document.createElement("th");
            th5.innerText = "Marks";
            thead.appendChild(th5);
            let th6= document.createElement("th");
            th6.innerText = "Passing";
            thead.appendChild(th6);
            let th7= document.createElement("th");
            th7.innerText = "Email";
            thead.appendChild(th7);
            tableName.appendChild(thead)
            // tableContainer.appendChild(tableName)
}
function tableRowCreater(table,i){
    let tr = document.createElement("tr");
            let id = document.createElement("td");
            id.innerText=i.id;
            tr.appendChild(id);
            let name = document.createElement("td")
                name.className="name";
                let img = document.createElement("img");
                img.src=i.img_src;
                name.appendChild(img);
                let span=document.createElement("span");
                span.innerText= `${i.first_name} ${i.last_name}`
                name.appendChild(span)
            tr.appendChild(name);
            let gender=document.createElement("td");
            gender.innerText=i.gender;
            tr.appendChild(gender);
            let cls = document.createElement("td");
            cls.innerText=i.class;
            tr.appendChild(cls);
            let marks = document.createElement("td");
            marks.innerText=i.marks;
            tr.appendChild(marks)
            let passing=document.createElement("td");
            if(i.passing==true){
                passing.innerText="Passed";
            }
            else{
                passing.innerText="Failed";
            }
            tr.appendChild(passing)
            let email = document.createElement("td");
            email.innerText=i.email;
            tr.appendChild(email)
            table.appendChild(tr)
}

function f(data){
    tableContainer.innerHTML="";
    let table = document.createElement("table");
    tableHeadCreater(table);
    data.forEach((e)=>{
        tableRowCreater(table,e);
    })
    tableContainer.appendChild(table)
}
let searchButton = document.getElementById("search-button");
let searchInput = document.getElementById("search-input");
function search(data){
    searchButton.addEventListener("click",(e)=>{
        tableContainer.innerHTML="";
        let table = document.createElement("table");
        let flag= false;
        data.forEach((i)=>{
            if(i.first_name.toLowerCase()==searchInput.value.toLowerCase().trim() || i.last_name.toLowerCase()==searchInput.value.toLowerCase().trim() || i.email==searchInput.value.toLowerCase().trim()){
               
               tableHeadCreater(table);
               tableRowCreater(table,i) 
               flag=true;
            }
        })
        if(flag==false){
            alert("Not found")
            f(data)
        }
        tableContainer.appendChild(table)
    })
    function fun(e){
        if(e.target.value==""){
         //  table.children[1].innerHTML=""
            f(data)
        }
    }
    searchInput.addEventListener("keyup",fun)
}