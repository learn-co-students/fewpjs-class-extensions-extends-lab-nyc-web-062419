// Your code here

class Polygon {
    constructor(array) {
        this.array = array
    }
    
    get countSides() {
        return this.array.length
    }

    get perimeter() {
        return this.array.reduce((sum, num) => sum + num)
    }
}

class Triangle {
    constructor(array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get isValid(){
        let sorted = this.array.sort()
        if (sorted[0] + sorted[1] <= sorted[2]){
            return false
        } else {
            return true
        }
    }

    get perimeter() {
        return this.array.reduce((sum, num) => sum + num)
    }
}

class Square extends Polygon {

    get area(){
        return this.array[0] * this.array[0]
    }

    get isValid(){
        if (this.array[0] === this.array[1]){
            return true
        } else {
            return false
        }
    }
}