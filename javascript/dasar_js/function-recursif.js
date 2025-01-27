// Implementasi Rekursif
// Semua looping bisa di buat rekursif, tapi tidak sebaliknya
//  Menggantikan looping
// Fibonacci
// Pencarian dan penelusuran pada struktur data list dan tree
// Bahasa pemrograman yanog tidak memiliki pengulangan atau perulangan contohnya Haskell, Prolog, dan Lisp.
// Dan lain-lain

function cetakAngka(n){
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}
cetakAngka(10);

function cetakAngkaRekursif(n) {
    if (n === 0) return;
    console.log(n);
    cetakAngkaRekursif(n - 1);
}
cetakAngkaRekursif(10);

function faktorial(n){
    let hasil = 1;
    for (let i = n; i > 0; i--){
        hasil *= i;
        console.log(i);
    }
    return hasil;
}
console.log(faktorial(5));

function faktorialRekursif(n){
    if (n === 0) return 1;
    console.log(n);
    return n * faktorialRekursif(n - 1);
}
console.log(faktorialRekursif(5));