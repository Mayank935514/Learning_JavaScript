/** Inheritance */
class Laptop {
    constructor(ram, processor, generation) {
        this.ram = ram;
        this.processor = processor;
        this.generation = generation;
    }

    displaySpecs() {
        console.log(`Laptop Specs: RAM = ${this.ram}, Processor = ${this.processor}, Generation = ${this.generation}`);
    }
}
class Lenovo extends Laptop {
    constructor(ram, processor, generation, modelName, price) {
        super(ram, processor, generation);
        this.modelName = modelName;
        this.price = price;
    }

    displaySpecs() {
        super.displaySpecs();
        console.log(`Model Name = ${this.modelName}, Price = ${this.price}`);
    }
}

const lenovoLaptop = new Lenovo('16GB', 'AMD Ryzen 7', '5th Gen', 'Lenovo ThinkPad', 60000);
lenovoLaptop.displaySpecs();