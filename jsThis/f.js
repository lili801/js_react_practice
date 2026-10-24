str = `hloo`;
console.log(str);
arrr =  ["lili",6,7,7,7];
console.log(arrr);
arrr[0] = "ee";
console.log(arrr);
arrr.splice(1, 2,3,4,4,4);
console.log(arrr);
a = [1,2,3,3];
let n = a.map((x) => { return x * 2; });
console.log(n);
let b = a.filter((x) => { return x > 2; });
console.log(b);
let c = a.reduce((acc, x) => { return acc + x; }, 0);
console.log(c);
let d = a.find((x) => { return x > 2; });
console.log(d);
let e = a.findIndex((x) => { return x > 2; });
console.log(e);
let f = a.every((x) => { return x > 0; });
console.log(f);             
let g = a.some((x) => { return x > 2; });
console.log(g); 
let h = a.sort((x, y) => { return x - y; });
console.log(h);
let i = a.reverse();
console.log(i);
let j = a.join("-");
console.log(j);
let k = a.slice(1, 3);
console.log(k);
let l = a.concat([4, 5, 6]);
console.log(l);
let m = a.includes(2);
console.log(m);
let o = a.indexOf(3);
console.log(o);
let p = a.lastIndexOf(3);
console.log(p);
let headings = document.querySelectorAll("p");
console.log(headings);
console.dir(document.body.firstChild);
console.dir(document.body.lastChild);
let divs = document.querySelector("div");

let cd = divs.getAttribute("id");
console.log(cd);
let ig = divs.setAttribute("class", "new-class");
console.log(ig);
let ig2 = divs.removeAttribute("class");
console.log(ig2);
let el =document.createElement("button");
console.log(el);
el.innerText = "CLICK ME";

let elr =document.createElement("button");
console.log(elr);
elr.innerText = "jrllu";
let r = document.querySelector("div");
r.appendChild(el);
alert("STOP");
r.after(elr);
//r.removeChild(el);
r.before(elr);
r.replaceChild(elr, el);
let js = document.querySelector("#js");
/*  js.addEventListener("click", function() {
    alert("button clicked oooooooooooooooooooooooooooo");
}); 

js.addEventListener("click", function() {
    alert("i love youuuuu");
}); js.addEventListener("click", function() {
    alert("life is gorgeous");
}); js.addEventListener("click", function() {
    alert("button clicked life is beautiful");
}); */ 
js.onclick = () =>{
console.log("button clicked     teriiiiiiiiiiiiiiiiiiiiiii");
}
js.onclick = () => {
    alert("button clicked");
    console.log("chutiyaa");
}
js.onclick = () =>{
console.log("button clicked   khi");
}
let hi = document.querySelector("#lili");

hi.onmouseover = function () {

    console.log("Mouse entered");

    hi.style.backgroundColor = "red";

};

hi.onmouseout = function () {

    console.log("Mouse left");

    hi.style.backgroundColor = "yellow";

};
class dipali {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }   
    start()
{
    console.log("start");

}
}
let dipali1 = new dipali("dipali", 20);
console.log(dipali1.name);
console.log(dipali1.age);
dipali1.start();
class f2 extends dipali {
    constructor(name, age, gender) {
        super(name, age);
        this.gender = gender;
    }
    grif(){
        console.log("grif");
    }
}
let you = new f2("you", 21, "female");
console.log(you.name);
console.log(you.age);   
you.start();
const gi = {
    name:"LILI",
    age :function() {
        console.log("age");
    }
}
console.log(gi.name);
gi.age();
const gi2 = {
    name:"LILI",
    j :() => {
        console.log("age");
    }
}
console.log(gi2.name);

gi2.__proto__= gi;
gi2.age();

let mam =10;
let bab = 5;
console.log(mam + bab);
console.log(mam - bab);
console.log(mam * bab);
try{


console.log(mam / bab);}catch (e){console.log("error");}
console.log(mam % bab);
console.log(mam ** bab);





async function hello(){
    console.log("helooo");
}