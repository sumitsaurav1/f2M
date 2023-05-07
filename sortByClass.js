let sortClass = document.getElementById("class-sort");

function classSorting(data){
    sortClass.addEventListener("click",(event)=>{
        tableContainer.innerHTML="";
        let table = document.createElement("table");
        tableHeadCreater(table);
        function comapre(a,b){
            return a-b;
        }
        classList.sort(comapre);
        classList.forEach((e)=>{
            data.forEach((i)=>{
                if(e==i.class){
                    tableRowCreater(table,i);
                }
            })
        })
        tableContainer.appendChild(table)
    })
}