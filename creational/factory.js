
class Car{
    constructor(type,price){
        this.car=type
        this.price=price
    }
}

class CarFactory{
    constructor(type){
        switch(type){
            case 'Honda':
                return new Car(type, 10)
            case 'Tata':
                return new Car(type, 20)
        }
    }
}

let car1=new CarFactory('Honda')
console.log(car1)
