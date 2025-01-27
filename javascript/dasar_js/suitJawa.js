var ulangi = true;
while (ulangi) {
    // Pilihan Player
    var p = prompt("GAME SUIT JAWA \nPilih Salah Satu: \n- Gajah \n- Semut \n- Orang");

    // Pilihah Computer
    var comp = Math.random();
    if (comp < 0.34) {
        comp = 'Gajah';
    } else if (comp >= 0.34 && comp <= 0.67) {
        comp = 'Semut';
    } else {
        comp = 'Orang';
    }

    var hasil = '';
    if (p == comp) {
        hasil = "SERI!";
    } else if (p == 'Gajah') {
        if (comp == 'Orang') {
            hasil = "MENANG!";
        } else {
            hasil = "KALAH!"
        }
    } else if (p == 'Orang') {
        hasil = (comp == 'Semut') ? "MENANG!" : "KALAH!";
    } else if (p == 'Semut') {
        hasil = (comp == 'Gajah') ? "MENANG!" : "KALAH!";
    } else {
        hasil = "memasukkan pilihan yang salah!!"
    }

    alert("Kamu memilih : " + p + " dan Komputer memilih : " + comp + "\nMaka hasilnya : Kamu " + hasil);

    ulangi = confirm("Mau ulangi lagi kah?");
}

alert("Terimakasih sudah datang")