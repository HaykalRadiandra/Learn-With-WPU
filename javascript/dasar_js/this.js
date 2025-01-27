// membuat object

// cara 1 - function declaration
function halo(){
    console.log(this);
    console.log("halo bang");
}
halo();
// this pada function declaration mengembalikan objek Global

// cara 2 - object literal
var obj = { a : 10, nama : "bembem" };
obj.halo = function (){
    console.log(this);
    console.log("halooo");
}
obj.halo();
// this pada object literal mengembalikan objek yang bersangkutan

// cara 3 - constructor function
function Halo(){
    console.log(this);
    console.log("halo");
}
var obj1 = new Halo();
var obj2 = new Halo();
