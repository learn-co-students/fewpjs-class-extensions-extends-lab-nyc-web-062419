// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides;
        this.count = this.sides.length
    }
    get countSides() {
        return this.sides.length
    }
    get perimeter() {
        if (!Array.isArray(this.sides)) return;
        let sum = 0;
        for (var side of this.sides) {
            sum += side
        }
        return sum
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (!Array.isArray(this.sides)) return;
        if (this.count !== 3) return;

        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        return ((a + b > c) && (b + c > a) && (c + a > b))
    }
}

class Square extends Polygon {
    get isValid() {
        if (!Array.isArray(this.sides)) return;
        if (this.count !== 4) return;
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        let d = this.sides[3]
        return ((a == b) && (b == c) && (c == d))
    }
    get area() {
        if (!Array.isArray(this.sides)) return;
        return this.sides[0] ** 2
    }
}


