// Your code here
class Polygon {
  constructor(arr) {
    this.sides = arr;
  }
  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    return this.sides.reduce((a, b) => a + b);
  }
}

class Triangle extends Polygon {
  get isValid() {
    const [a, b, c] = this.sides;
    if (this.sides.length != 3) {
      return false;
    } else if (a + b < c || b + c < a || c + a < b) {
      return false;
    } else {
      return true;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    return this.sides.reduce((a, b) => a + b) / 4 === this.sides[0];
  }
  get area() {
    return this.sides[0] * this.sides[1];
  }
}
