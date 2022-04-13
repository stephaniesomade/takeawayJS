'use strict'; 

class Menu {
  constructor() {
    this.options = {"Pepperoni": 10, "Margarita": 9, "Hawaiian": 11};
  }
  viewMenu() {
    return this.options;
  }
  selectItem(order, item) {
    order.add(item, this.options[item])
  }
};

class Order { 
  constructor() {
    this.currentOrder = {}
  }
  add(item, price){
    this.currentOrder[item] = price
  }
  showReceipt() {
    let array = [];
    for (const [key, value] of Object.entries(this.currentOrder)) {
      array.push(`${key}: £${value}.`)
    }
    return array.join(" ")
  }
};
