let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;
// while (noAngkot <= angkotBeroperasi) {
//     console.log("Jasa Angkot No. " + noAngkot + " beroperasi dengan baik."); 
//     noAngkot++;
// }

// for (angkotBeroperasi += 1; angkotBeroperasi <= jmlAngkot ; angkotBeroperasi++) {
//     console.log("Jasa Angkot No. " + angkotBeroperasi + " sedang tidak beroperasi.");
// }

// for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
//     if (noAngkot <= angkotBeroperasi) {
//         console.log("Jasa Angkot No. " + noAngkot + " beroperasi dengan baik.");
//     } else {
//         console.log("Jasa Angkot No. " + noAngkot + " sedang tidak beroperasi.");
//     }
// }

// for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
//     if (noAngkot <= angkotBeroperasi) {
//         console.log("Jasa Angkot No. " + noAngkot + " beroperasi dengan baik.");
//     } else if ( noAngkot === 8) {
//         console.log("Jasa Angkot No. " + noAngkot + " sedang lembur.");
//     }else {
//         console.log("Jasa Angkot No. " + noAngkot + " sedang tidak beroperasi.");
//     }
// }

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
        console.log("Jasa Angkot No. " + noAngkot + " beroperasi dengan baik.");
    } else if ( noAngkot % 2 === 0 || noAngkot === 5) {
        console.log("Jasa Angkot No. " + noAngkot + " sedang lembur.");
    }else {
        console.log("Jasa Angkot No. " + noAngkot + " sedang tidak beroperasi.");
    }
}