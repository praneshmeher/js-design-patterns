
let instance= null

class Person{
    constructor(fname, lname){
        if(instance)
            return instance
        else{
            this.firstname=fname
            this.lastname=lname
            instance = this
        }
    }
}

let person1 = new Person('Pranesh','Meher')
let person2 = new Person('John','Rambo')

console.log(person1)
console.log(person2)
