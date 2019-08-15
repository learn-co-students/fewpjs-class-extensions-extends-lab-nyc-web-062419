// Your code here
class Polygon {

    constructor (side_lengths) {
        this.side_lengths = side_lengths
    }

    get countSides () {
        return this.side_lengths.length
    }

    get perimeter () {
        return this.side_lengths.reduce((total, length) => total+length , 0)
    }

}

class Triangle extends Polygon {
    get isValid () {
        return this.countSides === 3
        && this.side_lengths[0] < this.side_lengths[1] + this.side_lengths[2]
        && this.side_lengths[1] < this.side_lengths[0] + this.side_lengths[2]
        && this.side_lengths[2] < this.side_lengths[1] + this.side_lengths[0]
    }
}

class Square extends Polygon {
    get isValid () {
        return this.countSides === 4 && this.side_lengths[0]===this.side_lengths[1] && this.side_lengths[1]===this.side_lengths[2] && this.side_lengths[2]===this.side_lengths[3]
    }

    get area () {
        return this.side_lengths[0] * this.side_lengths[0]
    }
}