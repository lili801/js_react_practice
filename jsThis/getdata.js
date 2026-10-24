function getData(dataId,getnextData){
    setTimeout(()=>{
        console.log(dataId);
        if (getnextData) {
            getnextData();
        }
    }, 2000);
}
getData(1,()=>{
    getData(2,()=>{
        console.log("data 2 has been fetched");
        getData(3,() => {
            console.log("all data has been fetched");
        });
   console.log("data 2 has been fetched");});
});//THIS IS CALLED CALLBACK HELLL
