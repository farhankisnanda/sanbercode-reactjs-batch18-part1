// Jawaban Soal No 1
const lingkaran = (r) => {
    let hasil = 22/7 * r * r;
    return hasil
}
const kelilingLingkaran = (r) => {
    let hasilKeliling = 22/7 * r * 2;
    return hasilKeliling;
}
console.log("Hasil luas dan keliling lingkaran adalah " + lingkaran(7) + " dan "+ kelilingLingkaran(7))
// Akhir Jawaban Soal No 2

// Jawaban Soal No 2
let kalimat = ""
const panggilKata = (kata) => {
   kalimat += `${kata}` 
}
panggilKata("saya");
panggilKata(" adalah");
panggilKata(" seorang");
panggilKata(" frontend");
panggilKata(" developer");
console.log(kalimat)
// Akhir Jawaban Soal No 2

// Jawaban Soal No 3
const newFunction = (firstName, lastName) =>{
    return {
      firstName,
      lastName,
      fullName:function(){
        console.log(firstName + " " + lastName)
        return 
      }
    }
  }
  newFunction("William", "Imoh").fullName() 
// Akhir Jawaban Soal No 3

// Jawaban Soal No 4
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }
const {firstName, lastName, destination, occupation, spell} = newObject;
console.log(firstName, lastName, destination, occupation)
// Akhir Jawaban Soal No 4

// Jawaban Soal No 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combinedArray = [...west, ...east]
console.log(combinedArray)