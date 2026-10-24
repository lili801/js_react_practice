//FUNCTION INSIDE METHOD ES5
var obj = {
    name :function(){
        console.log(this);

        function childfunc(){
            console.log(this);//YHA AAP OBJ KE NAME KO ACCESS NHI KR SAKTE
            //yha this ki value window aayegi


        }
        childfunc();
    }

}
obj.name();

//FUNCTION INSIDE METHOD-ES6
var obj6 ={
    name  :"yyyy",


   sayname : function(){
    const child = ()=> {//child is an arrow function
        console.log(this);//arrow function child ki value apne parent se leta hai yani uska parent hai sayname so sayname ka parent hai obj6 soo this yha obj6 ko refer krega this ki value object ke related ayi

    }
    child();

   }
}
obj6.sayname();

var hui ={
    name :"ghuguhf",
    sayname : ()=>{
        console.log(this);//now SAYNAME yha ek arrow funnction hai arrow function apni value parent se leta hai soo sayname ka parent hui hai so hui object yha global and global me this ki value windows hi rhehegi

    }
}
hui.sayname();
