function Phone( brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "." );
}
var SamsungGalaxyS6 = new Phone("Samsung", 2500, "black");
var iPhone6S = new Phone("Apple", 3500, "white");
var OnePlusOne = new Phone("OnePlus", 1200, "silver")

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();