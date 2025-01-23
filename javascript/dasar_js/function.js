// let a = 8;
// let b = 3;
// let volumeA;
// let volumeB;
// let total;

// volumeA = a * a * a;
// volumeB = b * b * b;
// total = volumeA + volumeB;
// console.log(total);

// function hitungVolumeDuaKubus(a,b) {
//     let total;

//     let volumeA = a * a * a;
//     let volumeB = b * b * b;
//     total = volumeA + volumeB;

//     return total;
// }

// Mode refactoring
function hitungVolumeDuaKubus(a,b) {
    return a * a * a + b * b * b;
}

console.log(hitungVolumeDuaKubus(8,3));