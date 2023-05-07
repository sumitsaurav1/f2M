let nameList = [];
let marksList = [];
let passingList = [];
let classList = [];

function loadArray(data){
    data.forEach((e)=>{
        let fullName = `${e.first_name} ${e.last_name}`;
        if(nameList.includes(fullName)==false){
            nameList.push(fullName);
        }
        let studentMarks = e.marks;
        if(marksList.includes(studentMarks)==false){
            marksList.push(studentMarks)
        }
        let cls = e.class;
        if(classList.includes(cls)==false){
            classList.push(cls);
        }
    })
}
let sortAToz = document.getElementById("sort-A-Z");

function nameAtoZ(data){
    sortAToz.addEventListener("click",(event)=>{
        tableContainer.innerHTML="";
        let table = document.createElement("table");
        tableHeadCreater(table);
        nameList.sort();
        nameList.forEach((e)=>{
            data.forEach((i)=>{
                if(e==`${i.first_name} ${i.last_name}`){
                    tableRowCreater(table,i);
                }
            })
        })
        tableContainer.appendChild(table)
    })
}