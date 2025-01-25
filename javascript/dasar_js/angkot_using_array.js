// Array untuk menyimapn penumpang
var penumpang = [];

// Fungsi untuk menamabah penumpang
var tambahPenumpang = function (namaPenumpang, penumpang) {
    // jika penumpang kosong
    if (penumpang.length == 0) {
        // tambah penumpang awal array
        penumpang.push(namaPenumpang);
        console.log(`${namaPenumpang} ditambahkan di kursi pertama.`);
        // kembalikan penumpang
        return penumpang;
    } else {
        // Telusuri seluruh penumpang
        for ( var j = 0; j < penumpang.length; j++) {
            // jika penumpang kosong atau undefined atau empty
            if (penumpang[j] == undefined) {
                // isi penumpang yang kosong
                penumpang[j] = namaPenumpang;
                console.log(namaPenumpang + " ditambahkan di kursi nomer " + (j + 1));
                // kembalikan penumpang
                return penumpang;
                // jika penumpang sudah penuh
            } else if ( penumpang[j] == namaPenumpang) {
                console.log(namaPenumpang + " sudah ada di kursi nomer " + (j + 1));
                return penumpang;
            }
            else if (j == penumpang.length - 1){
                penumpang.push(namaPenumpang);
                // kembalikan penumpang
                return penumpang;
            }
        }
    }
}

console.log(tambahPenumpang("Bambang", penumpang));
console.log(tambahPenumpang("Dhimas", penumpang));
console.log(tambahPenumpang("Galih", penumpang));

var hapusPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tampilkan pesan bahwa angkot kosong, dan mungkin ada penumpang turun
        console.log("Angkot kosong, mungkin ada penumpang turun.");
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else  {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika nama penumpang sesuai
            if (namaPenumpang == penumpang[i]) {
                // hapus penumpang dengan mengubah namanya, menjadi undifined
                delete penumpang[i];
                // tampilkan pesan bahwa penumpang telah turun
                console.log(namaPenumpang + " telah turun.");
                // kembalikan isi array & keluar dari function
                return penumpang;
                // jika tidak ada nama yang sesuai
            } 
            else if (namaPenumpang != penumpang[i] && i == penumpang.length - 1) {
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + " tidak ada di dalam angkot.");
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}

console.log(hapusPenumpang("Bambang", penumpang));
console.log(hapusPenumpang("Dhimas", penumpang));
console.log(hapusPenumpang("Bagas", penumpang));
// console.log(tambahPenumpang("Bambang", penumpang));
