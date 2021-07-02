
class Person{
    constructor(fname,lname){
        this.firstname=fname
        this.lastname=lname
    }
}

class Student extends Person{
    constructor(fname,lname,rollno){
        super(fname,lname)
        this.rollno=rollno
    }
}

let person1 = new Person('Pranesh', 'Meher')
console.log(person1)

let student1 = new Student('Pranesh','Meher',07)
console.log(student1)