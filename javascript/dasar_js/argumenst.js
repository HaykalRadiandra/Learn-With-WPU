function tambah (a,b){
    let hasil = 0;
    for(let i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
}

var hasil = tambah(1,2,3,4,5);
console.log(hasil);