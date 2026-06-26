// class Ring{
//   constructor(color, gem){
//     this.color = color;
//     this.gem = gem
//   }
//   print(){
//     console.log(`${this.color} ${this.gem} ring`)
//   }
// }

// const sapphireRing = new Ring('gold', 'sapphire')
// const rubyRing = new Ring('gold', 'ruby')
// const diamondRing = new Ring('gold', 'diamond')

// sapphireRing.print()
// rubyRing.print()
// diamondRing.print()

class Car{
  constructor(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  getAge(){
    const currentYear = new Date().getFullYear()
    const age = currentYear - this.year
    return age
  }
  print(){
    console.log(`This ${this.brand} ${this.model} is ${this.getAge()} years old`)
  }
}

const Toyota = new Car('Toyota', 'Corolla', '2005')

Toyota.print()