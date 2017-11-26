function Phone( brand, price, color, operatingSystem) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.operatingSystem = operatingSystem;
}
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price  + ". Operating system:" + this.operatingSystem);
}
var SamsungGalaxyS6 = new Phone("Samsung", 2500, "black", "Android 7.0");
var iPhone6S = new Phone("Apple", 3500, "white", "iOS");
var OnePlusOne = new Phone("OnePlus", 1200, "silver", "Android 6.0")

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();