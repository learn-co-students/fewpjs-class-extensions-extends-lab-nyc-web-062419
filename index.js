// Your code here
class Polygon {
  constructor(arr) {
    this.sides = arr;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((acc, cv) => {
      return acc + cv;
    }, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3) {
      const a = this.sides[0];
      const b = this.sides[2];
      const c = this.sides[1];
      if (a + b > c && a + c > b && c + b > a) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    return this.sides[0] === this.sides[1] && this.sides[2] === this.sides[3]
      ? true
      : false;
  }

  get area() {
    return this.sides[0] * this.sides[0];
  }
}
