let sortPassed = document.getElementById("sort-passed");

function passedSort(data){
    sortPassed.addEventListener("click",(event)=>{
        tableContainer.innerHTML="";
        let table = document.createElement("table");
        tableHeadCreater(table);
        data.forEach((e)=>{
            if(e.passing == true){
                tableRowCreater(table,e)
            }
        })
        tableContainer.appendChild(table)
    })
}