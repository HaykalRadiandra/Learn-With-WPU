let item = prompt("Tolong masukkan makanan yang sehat : \n 1. Ayam Geprek \n 2. Sayur \n 3. Nasi Goreng" );

switch (item) {
    case "Sayur":
    case "Nasi Goreng":
        alert("Makanan Sehat");
        break;
    case "Ayam Geprek":
        alert("Tidam Makanan Sehat");
        break;
    default:
        alert("Tidak ada di daftar menu makanan sehat");
        break;
}