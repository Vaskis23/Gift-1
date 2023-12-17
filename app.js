class Gift {
    constructor (color, type, message) {
        console.log("Gift custom constructor was invoked")
        this.color = color
        this.type = type
        this.message = message
    }
}

let myGift = new Gift ("green", "paper", "HBTY")
let parentsGift = new Gift ("yellow", "crystal", "HBTY")