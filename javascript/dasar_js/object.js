// Membuat objek pada javascript
// Object literal
var mhs1 = {
    nama: "Bembem",
    nrp : "123821",
    email : "bembem@.com",
    jurusan : "Teknik Informatika"
}

var mhs2 = {
    nama: "Galih",
    nrp : "9983218",
    email : "galih@.com",
    jurusan : "Teknik Industri"
}

// Function Declaration
function buatObjekMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjekMahasiswa('Bembem','000129321','galih@.com','Teknik Industri');
var mhs4 = buatObjekMahasiswa('Haykal','923789123','haykal@.com','Teknik Informatika');
console.log(mhs3);
console.log(mhs4);

// Constructor Function (keyword new)
function Mahasiswa (nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs5 = new Mahasiswa('Khojin','021938013','khojin@gmail.com','Teknik Meisin');
var mhs6 = new Mahasiswa('Faedah','221938013','faedah@gmail.com','Teknik Otomotif');
console.log(mhs5);
console.log(mhs6);

// Object.create()


