function Angkot (sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas; 

    this.penumpangTambahan = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length == 0) {
            console.log("Belum ada penumpang di dalam angkot.");
            return false;
        }

        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

var angkot1 = new Angkot ("Bagas", ["Jogja", "Bandung"], [], 0);
var angkot2 = new Angkot ("Dhimas", ["Semarang", "Surabaya"], [], 0);

console.log(angkot1.penumpangTambahan("Joni"));
console.log(angkot1.penumpangTambahan("Joni"));
console.log(angkot1.penumpangTambahan("Erik"));
console.log(angkot1.penumpangTurun("Joni", 2500));
console.log(angkot1.penumpangTurun("Joni", 10500));
console.log(angkot1.penumpangTurun("Erik", 50000));
console.log(angkot1.kas);
console.log(angkot2.kas);