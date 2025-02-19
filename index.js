class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {

    this.items.push(item)
    this.items.sort((a, b) => a - b)


    this.length = this.items.length

  }

  get(pos) {
  
    if (pos > this.items.length) {
      throw new Error("OutOfBounds")
    } else {
      return this.items[pos]
    }

  }

  max() {

    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items[this.items.length - 1]
    }
  }

  min() {

    if (this.items.length === 0) {
      throw new Error("Empty SortedList")
    } else {
      return this.items[0]
    }
  }

  sum() {

    if (this.items.length === 0) {
      return 0
    } else {
      return this.items.reduce((accumulator, currentValue) => accumulator + currentValue)
    }
  }

  avg() {
    
    if (this.items.length === 0) {
      throw new Error("Empty SortedList")
    } else {
      const total = this.items.reduce((accumulator, currentValue) => accumulator + currentValue)

      return total / this.items.length
    }

  }
}

module.exports = SortedList;
