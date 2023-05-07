let sortGender = document.getElementById("gender-sort");

function genderSorting(data){
    sortGender.addEventListener("click",()=>{
        tableContainer.innerHTML="";
        let tableMale = document.createElement("table");
        let tableFemale = document.createElement("table");
        let maleDiv = document.createElement("div");
        maleDiv.classList.add('divMale')
        let femaleDiv = document.createElement("div");
        femaleDiv.classList.add('divFemale');
        let maleH2 = document.createElement("h2");
        maleH2.innerText="Male Student List";
        maleDiv.appendChild(maleH2);
        let femaleH2 = document.createElement("h2");
        femaleH2.innerText="Female Student List";
        femaleDiv.appendChild(femaleH2);
        tableHeadCreater(tableMale)
        tableHeadCreater(tableFemale)
        data.forEach((e)=>{
            if(e.gender=="Male"){
                tableRowCreater(tableMale,e)
            }
            if(e.gender=="Female"){
                tableRowCreater(tableFemale,e)
            }
        })
        maleDiv.appendChild(tableMale);
        femaleDiv.appendChild(tableFemale);
        tableContainer.appendChild(maleDiv);
        tableContainer.appendChild(femaleDiv);
    })
}