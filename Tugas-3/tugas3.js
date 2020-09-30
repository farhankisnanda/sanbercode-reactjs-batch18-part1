// Jawaban Soal No 1
var kataPertama = "saya ";
var kataKedua = "senang ";
var kataKetiga = "belajar ";
var kataKeempat = "Javascript ";

var a = kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1); 
var b = kataKeempat.toUpperCase();

console.log(kataPertama.concat(a).concat(kataKetiga).concat(b));
// Akhir Jawaban Soal No 1

// Jawaban Soal No 2
var kataPertama = Number("1");
var kataKedua = Number("2");
var kataKetiga = Number("4");
var kataKeempat = Number("5");

console.log(kataPertama+kataKedua+kataKetiga+kataKeempat);
// Akhir Jawaban Soal No 2

// Jawaban Soal No 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4,14);
var kataKetiga = kalimat.substring(15,18);
var kataKeempat = kalimat.substring(19,24);
var kataKelima = kalimat.substring(25,31)

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
// Akhir Jawaban Soal No 3

// Jawaban Soal No 4
var nilai = 75;
if ( nilai >= 80) {
    console.log(nilai + " indeksnya A")
} else if ( nilai >= 70 && nilai < 80) {
    console.log(nilai + " indeksnya B")
} else if ( nilai >= 60 && nilai < 70) {
    console.log(nilai + " indeksnya C")
} else if ( nilai >= 50 && nilai < 60) {
    console.log(nilai + " indeksnya D") 
} else {
    console.log(nilai + " indeksnya E")
}
// Akhir Jawaban Soal No 4

// Jawaban Soal No 5
var tanggal = 29;
var bulan = 1;
var tahun = 2001;

switch (bulan) {
    case 1: {console.log(tanggal +" Januari "+tahun);break;}
    case 2: {console.log(tanggal +" Februari "+tahun);break;}
    case 3: {console.log(tanggal +" Maret "+tahun);break;}
    case 4: {console.log(tanggal +" April "+tahun);break;}
    case 5: {console.log(tanggal +" Mei "+tahun);break;}
    case 6: {console.log(tanggal +" Juni "+tahun);break;}
    case 7: {console.log(tanggal +" Juli "+tahun);break;}
    case 8: {console.log(tanggal +" Agustus "+tahun);break;}
    case 9: {console.log(tanggal +" September "+tahun);break;}
    case 10: {console.log(tanggal +" Oktober "+tahun);break;}
    case 11: {console.log(tanggal +" November "+tahun);break;}
    case 12: {console.log(tanggal +" Desember "+tahun);break;}
}









