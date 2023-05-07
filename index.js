
async function loadData(){
    try{
        let Url =`https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json`
        let response=await fetch(Url)
        let data = await response.json();
       console.log(data)
       f(data);
       search(data);
       loadArray(data);
       nameAtoZ(data);
       nameZtoA(data);
       marksSort(data);
       passedSort(data);
       classSorting(data);
       genderSorting(data);
    }
    catch(error){
        console.log(error);
    }
};
loadData()



