let sortZtoA = document.getElementById("sortZ-A");

function nameZtoA(data){
    sortZtoA.addEventListener("click",(event)=>{
        tableContainer.innerHTML="";
        let table = document.createElement("table");
        tableHeadCreater(table);
        nameList.sort((a,b)=>b.localeCompare(a));
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