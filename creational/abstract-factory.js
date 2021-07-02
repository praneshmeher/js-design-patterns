
class Car{
    constructor(type,price){
        this.car=type
        this.price=price
    }
}

class Truck{
    constructor(type,price){
        this.truck=type
        this.price=price
    }
}

class CarFactory{
    constructor(type){
        switch(type){
            case 'car1':
                return new Car(type, 10)
            case 'car2':
                return new Car(type, 20)
        }
    }
}

class TruckFactory{
    constructor(type){
        switch(type){
            case 'truck1':
                return new Truck(type, 10)
            case 'truck1':
                return new Truck(type, 20)
        }
    }
}


class Vehiclefactory{
    constructor(type,model){
        switch(type){
            case 'car':
                return new CarFactory(model)
            case 'truck':
                return new TruckFactory(model)
        }
    }
}

let vehicle1 = new Vehiclefactory('truck','truck1')
console.log(vehicle1)
