// Manipulasi Array

// 1. menambahkan isi array
// var arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 4;
// arr[4] = 5;
// console.log(arr);

// 2. menghapus isi array
var arr = [1,2,3,4,5];
delete arr[2];
arr[3] = null;
arr[1] = undefined;
console.log(arr);

// 3. Menampilkan isi Array
var arrray = ["Bembem","Haykal","Bambang"];
for (var i = 0; i < arrray.length; i++) {
    console.log("Mahasiswa ke " + (i+1) + " : " +arrray[i]);
}

// Method pada array 
var arr = ["Bembem","Haykal","Bambang"];
// 1. join
console.log(arr.join(" - "));

// 2. push & pop ( menambah & menghapus elemen di akhir array)
arr.push("Kurniawan", "Dwi");
console.log(arr.join(" - "));
arr.pop();
console.log(arr.join(" - "));

// 3. unshift & shift ( menambah & menghapus elemen di awal array)
arr.unshift("Bambang");
console.log(arr.join(" - "));
arr.shift();
console.log(arr.join(" - "));

// 4. splice (menambah & menghapus elemen di tengah array)
// splice (indexAwal, mauDiHapusBerapa, elemenBaru1, elemenBaru2, elemenBaru3)
var arr = ["Bembem","Haykal","Bambang"];
arr.splice(0, 3, "Kurniawan", "Dwi");
console.log(arr.join(" - "));

// 5. slice
// slice (indexAwal, indexAkhir)
var arr = ["Bembem","Haykal","Bambang", "Kurniawan", "Dwi"];
var arr2 = arr.slice(2,4);
console.log(arr2.join(" - "));

// 6. forEach (tidak mengembalikan array baru dan pengganti looping)
var arr = ["Bembem","Haykal","Bambang", "Kurniawan", "Dwi"];
// for(var i = 0; i < arr.length; i++){
//     console.log("Mahasiswa ke " + (i+1) + " : " +arr[i]);
// }
arr.forEach(function(item, index) {
    console.log("Mahasiswa ke " + (index+1) + " : " +item);
});

// 7. map (mengembalikan array baru)
var angka = [1,2,3,4,5,6,7,8,9,10];
var angka2 = angka.map(function(item) {
    return item * 2;
});
console.log(angka.join(" - "));
console.log(angka2.join(" - "));

// 8. sort (mengurutkan array)
var angka = [1,12,2,3,11,4,5,6,7,8,9,10];
angka.sort(function(a,b){
    return a - b;
});
console.log(angka.join(" - "));

// 9. filter (mengembalikan banyak nilai dan mengembalikan array baru)
var angka = [1,12,2,3,11,4,5,6,7,8,9,10];
var angka2 = angka.filter(function(item){
    return item > 5;
})
angka2.sort(function(a,b){
    return a - b;
})
console.log(angka2.join(" - "));

// 10. find (hanya bisa mengembalikan satu nilai dan tidak mengembalikan array baru)
var angka = [1,12,2,3,11,4,5,6,7,8,9,10];
var angka2 = angka.find(function(item){
    return item > 5;
})
console.log(angka2);