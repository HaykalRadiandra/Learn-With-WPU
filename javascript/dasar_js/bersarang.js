let s = "";
for (let i = 1; i <= 8; i++) {
    for(let k = 0; k < 8 - i; k++){
        s += " ";
    }
    for (let j = 0; j < i; j++) {
        s += "*";
    }
    s += "\n";
}

// Batasan

for (let i = 8; i >= 0; i--) {
    for(let k = 0; k < 8 - i; k++){
        s += " ";
    }
    for (let j = 0; j < i; j++) {
        s += "*";
    }
    s += "\n";
}

// Batasan

for (let i = 1; i <= 8; i++) {
    for (let j = 0; j < i; j++) {
        s += "*";
    }
    s += "\n";
}

// Batasan

for (let i = 8; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
        s += "*";
    }
    s += "\n";
}

// Batasan

for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8 - i; j++) {
      s += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      s += "*";
    }
    s += "\n";
  }

// Batasan

for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= 8 - i; j++) {
    s += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    s += "*";
  }
  s += "\n";
}
for (let i = 8; i >= 0; i--) {
  for (let j = 1; j <= 8 - i; j++) {
    s += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    s += "*";
  }
  s += "\n";
}

// Batasan

for (let i = 8; i >= 0; i--) {
    for (let j = 1; j <= 8 - i; j++) {
      s += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      s += "*";
    }
    s += "\n";
  }

console.log(s);

let pagar = "";
for (let i = 1; i <= 10; i++) {
    for (let j = 0; j < 5; j++) {
        if (i % 2 === 0){
            pagar += " #";
        } else {
            pagar += "# ";
        }
    }
    pagar += "\n";
}
console.log(pagar);


let rows = 5; // Jumlah baris segitiga Pascal
let output = "";

// Perulangan untuk setiap baris
for (let i = 0; i < rows; i++) {
    // Tambahkan spasi di awal setiap baris untuk membentuk segitiga
    for (let j = 0; j < rows - i - 1; j++) {
        output += "-";
    }

    let value = 1; // Nilai awal di setiap baris adalah 1

    // Perulangan untuk setiap elemen di baris tersebut
    for (let k = 0; k <= i; k++) {
        output += value + "-"; // Tambahkan nilai ke dalam output
        value = value * (i - k) / (k + 1); // Hitung nilai selanjutnya di segitiga Pascal
    }

    output += "\n"; // Pindah ke baris berikutnya
}

console.log(output);
