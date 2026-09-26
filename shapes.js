class Shape {
    area() {
        return 0;
    }

    perimeter() {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }

    toString() {
        return "Rectangle: Area = " + this.area() +
               ", Perimeter = " + this.perimeter();
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }

    perimeter() {
        return 4 * this.side;
    }

    toString() {
        return "Square: Area = " + this.area() +
               ", Perimeter = " + this.perimeter();
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }

    toString() {
        return "Circle: Area = " + this.area() +
               ", Perimeter = " + this.perimeter();
    }
}

export { Rectangle, Square, Circle };