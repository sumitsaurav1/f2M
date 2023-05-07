let sortMarks = document.getElementById("marks-Sort")

function marksSort(data){
    sortMarks.addEventListener("click",(event)=>{
        tableContainer.innerHTML="";
        let table = document.createElement("table");
        tableHeadCreater(table);
        function comapre(a,b){
            return a-b;
        }
        marksList.sort(comapre);
        marksList.forEach((e)=>{
            data.forEach((i)=>{
                if(e==i.marks){
                    tableRowCreater(table,i);
                }
            })
        })
        tableContainer.appendChild(table)
    })
}