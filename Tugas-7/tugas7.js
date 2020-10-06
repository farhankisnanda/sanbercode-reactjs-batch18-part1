// Jawaban Soal No 1
// Release 0
class Animal {
    constructor (name, legs, cold_blooded){
        this._animalname= name
        this._animallegs = legs = 4
        this._animalcold_blooded = cold_blooded = false
    }
    get animalname () {
        return this._animalname;
    }
    set animalname(x){
        return this._animalname = x;
    }
    get animallegs () {
        return this._animallegs;
    }
    set animallegs(y){
        return this._animallegs = y;
    }
    get animalcold_blooded () {
        return this._animalcold_blooded;
    }
    set animalcold_blooded(z){
        return this._animalcold_blooded = z;
    }
}
 
var sheep = new Animal("shaun"); 
console.log(sheep.animalname) // "shaun"
console.log(sheep.animallegs) // 4
console.log(sheep.animalcold_blooded) //false
// Release 1
  class Frog extends Animal {
    constructor(name, jump) {
      super(name);
      this._frogjump = jump;
    }
    get frogjump (){
        return this._frogjump
    }
    set frogjump (x) {
        return this._frogjump = x
    }
    jump = ()=> {
        console.log("hop hop")
    } 
  }
var kodok = new Frog("buduk")
kodok.jump() // "hop hop"

class Ape extends Animal {
    constructor(name, yell, legs) {
      super(name);
      this._apeyel= yell
      this._apelegs= legs = 2
    }
    get apeyel (){
        return this._apeyel
    }
    set apeyell (x) {
        return this._apeyell = x
    }
    yell = ()=> {
        console.log("Auoooo")
    } 
    get apelegs (){
        return this._apelegs
    }
    set apeleg (a){
        return this._apelegs= a;
    }
  }
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
// Akhir Jawaban Soal No 1

// Jawaban Soal No 2
// function Clock({ template }) {
  
//     var timer;
  
//     function render() {
//       var date = new Date();
  
//       var hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       var mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       var secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       var output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     this.stop = function() {
//       clearInterval(timer);
//     };
  
//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };
  
//   }
  
//   var clock = new Clock({template: 'h:m:s'});
//   clock.start();
  class Clock {
    constructor({template}){
        this._template = template
        this.timer
    }
    render(){
        let date = new Date();
  
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        let output = this._template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);
    
        console.log(output);
    }
    stop(){
        clearInterval(this.timer);
      };
    
    start(){
        this.render();
        this.timer = setInterval(()=> this.render(),1000)
      }
}
var clock = new Clock({template: 'h:m:s'});
clock.start();  