// Complete the js code
function Car(make, model) {
    this.make = make
	this.model = model
        }
Car.prototype.getMakeModel = function(){
	return this.make + " " + this.model
     }

function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model)
	this.topSpeed = topSpeed;
}
Car.prototype.getTopSpeed = function(){
	return this.topSpeed
}
Object.setPrototypeOf(SportsCar.prototype, Car.prototype)