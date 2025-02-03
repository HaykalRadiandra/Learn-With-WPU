// DOM Manipulation
// Buat element baru
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('paragraf baru');

// Simpan tulisan ke dalam paragraf
pBaru.appendChild(textPBaru);
// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// Buat element baru
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
// simpan tulisan ke dalam paragraf
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);