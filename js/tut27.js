console.log('welcome to tut27');

//objct literals for creating object

let car = {
    name:'Maruti 800',
    topSpeed:70,
    run: function (){
console.log("car is ruunning");
}
}
//constructor creation for car
console.log(car);

function GeneralCar(givenName,givenSpeed){
    this.name=givenName;
    this.speed=givenSpeed;
    this.run=function(){
        console.log(`${this.name} is running`);
    }
    this.analyze=function(){
        console.log(`This car is slower than ${200-this.speed} Ford`);
    }
}

car1=new GeneralCar('Nisaan',180);
car2=new GeneralCar('Alto',100);
console.log(car2);