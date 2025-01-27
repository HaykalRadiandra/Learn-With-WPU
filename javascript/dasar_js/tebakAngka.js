let angkaBenar = Math.round(Math.random() * 10);
let kesempatan = 3;

for (let i = 0; i < kesempatan; i++) {
    let angka = prompt("Masukkan angka tebakan 1-10 : \nkesempatan tersisa " + (kesempatan - i));

    if(angka == angkaBenar){
        alert("Selamat tebakan anda benar");
        break;
    } else if (angka > angkaBenar){
        alert("Tebakan anda terlalu besar \nkesempatan tersisa " + (kesempatan - i - 1));
    } else if (angka < angkaBenar){
        alert("Tebakan anda terlalu kecil \nkesempatan tersisa " + (kesempatan - i - 1));
    } else {
        alert("Tebakan anda bukan angka \nkesempatan tersisa " + (kesempatan - i - 1));
    }

    if (i == kesempatan - 1 ) {
        alert("Kesempatan anda habis");
    }   
}

if (confirm("Apakah anda ingin bermain lagi?")) {
    location.reload();  
} else{
    alert("Terima kasih telah bermain");
}
