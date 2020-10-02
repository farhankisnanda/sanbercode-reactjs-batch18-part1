// Jawaban Soal No 1
function halo (){
    return "Halo Sanbers!"
}
 
console.log(halo()) 
// Akhir Jawaban Soal No 1

// Jawaban Soal No 2
function kalikan(num1,num2){
    return num1 * num2
  }
  var num1 = 12
  var num2 = 4
  var hasilKali = kalikan(num1, num2)
  console.log(hasilKali);
// Akhir Jawaban Soal No 3

// Jawaban Soal No 3
function introduce(name, age, address, hobby){
    return kalimat;
  }
  var name = "John";
  var age = 30;
  var address = "jalan belum jadi";
  var hobby = "gaming";
  var kalimat = "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + " dan hobi saya adalah " + hobby;
  
  var perkenalan = introduce(name, age, address, hobby)
  console.log(perkenalan)
// Akhir Jawaban Soal No 3

// Jawaban Soal No 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var objectDaftarPeserta = {
    nama : "Asep",
    jenisKelamin :"laki-laki",
    hobi : "baca buku",
    tahunLahir : 1992
}
  console.log(objectDaftarPeserta)
// Akhir Jawaban Soal No 4

// Jawaban Soal No 5
var buah = [{nama: "strawberry", warna: "merah", adaBijinya: "tidak", harga: 9000}, {nama: "jeruk", warna: "orange", adaBijinya: "ada", harga: 8000}, {nama: "semangka", warna: "hijau dan merah", adaBijinya: "ada", harga: 10000}, {nama: "pisang", warna: "kuning", adaBijinya: "tidak", harga: 5000}]
console.log(buah[0]);
// Akhir Jawaban Soal No 5

// Jawaban Soal No 6
var dataFilm = []
function karakteristikFilm( nama,  durasi, genre, tahun){
  var objectFilm = {
    'nama' : nama,
    'durasi' : durasi,
    'genre' : genre,
    'tahun' : tahun,
  }
  dataFilm.push(objectFilm);
}
karakteristikFilm("harryPotte", "10 detik", "Komedi", "2020");
karakteristikFilm("tomJerry", "15 detik", "Komedi", "2000");
console.log(dataFilm)
