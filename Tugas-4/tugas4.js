// Jawaban Soal No 1
var a = "LOOPING PERTAMA"
  console.log("LOOPING PERTAMA");

var a = 0;
while(a < 20) {
  a += 2;
  console.log(a + " I love coding")
}

var c = "LOOPING KEDUA"
  console.log("LOOPING KEDUA");

var a =22;
while(a > 0) {
  a -= 2;
  console.log(a + " I love coding")
}
// Akhir Jawaban Soal No 1

// Jawaban Soal No 2
var jumlah = 0;
for(var deret = 1; deret <= 20; deret++) {
  jumlah += 1;
  if(jumlah % 2 == 0) {
    console.log (jumlah + " Berkualitas")
  }
  else if (jumlah %3 == 0 && jumlah % 2 != 0){
    console.log (jumlah + " I Love Coding")
  }
  else {
    console.log(jumlah + " Santai")
  }
}
// Akhir Jawaban Soal No 2

// Jawaban Soal No 3
var s = '';
for(var i=0;i<7;i++){
  s+='#';
  console.log(s)
}

// Akhir Jawaban Soal No 3

// Jawaban Soal No 4
var kalimat="saya sangat senang belajar javascript"
var name = kalimat.split(' ')
console.log(name)
// Akhir Jawaban Soal No 4

// Jawaban Soal No 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var urutanBuah = daftarBuah.sort()
for(i=0;i<=urutanBuah.length-1;i++){
  console.log(urutanBuah[i])
}