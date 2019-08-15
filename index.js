class Polygon {
    constructor (array){
        this.array = array
    }
    get countSides (){
        return this.array.length
    }
    get perimeter (){
        return this.array.reduce(function(a,b){return a+b},0)
    }
}

class Triangle extends Polygon {
    get isValid () {
        this.array = this.array.sort(function(a,b){return b-a});
        if (this.array[0] > this.array[1]+this.array[2]){
            return false
        }
        else {
            return true
        }
    }
}

class Square extends Polygon {
    get isValid (){
        if (this.array[0] === this.array[1]){
            if (this.array[0] === this.array[2]){
                if (this.array[0]=== this.array[3]){
                    return true
                }
                else {
                    return false
                }
            }else {
                return false
            }
        }else {
            return false
        }  
    }
    get area (){
        return this.array[0]*this.array[0]
    }
}