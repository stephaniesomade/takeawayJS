'use strict'

class Order { 
  constructor() {
    this.currentOrder = []
    this.Pepperoni = 0;
    this.Margarita = 0;
    this.Hawaiian = 0;
  }
  viewCurrentOrder() {
    this.currentOrder;
  }
  plusOnePepperoni() {
    this.Pepperoni += 1
  }
  plusOneMargarita() {
    this.Margarita += 1
  }
  plusOneHawaiian() {
    this.Hawaiian += 1
  }
  add(item, price){
    let obj = {};
      obj[item]= price;
      this.currentOrder.push(obj);
  }
  showReceipt() {
    let array = [];
    this.currentOrder.forEach(meal => {
      for(let key in meal) {
        array.push(`${key}: £${meal[key]}.`);
      }
    });
    return array.join(" ")
  }
  totalPrice() {
    let price = 0
    this.currentOrder.forEach(meal => {
      for(let key in meal) {
        let num = meal[key]
        price = num + price;
      }
    });
    return price.toFixed(2)
  }
  deleteMargarita() {
    if (this.currentOrder.some(element => element.Margarita)) {
    const index = this.currentOrder.findIndex(element => {
      return element.Margarita;
    });
    this.currentOrder.splice(index, 1);
    this.Margarita -= 1
    }
  }
  deletePepperoni() {
    if (this.currentOrder.some(element => element.Pepperoni)){
    const index = this.currentOrder.findIndex(element => {
      return element.Pepperoni
    });
    this.currentOrder.splice(index, 1)
    this.Pepperoni -= 1
    }
  }
  deleteHawaiian() {
    if (this.currentOrder.some(element => element.Hawaiian)) {
    const index = this.currentOrder.findIndex(element => {
      return element.Hawaiian
    });
    this.currentOrder.splice(index, 1)
    this.Hawaiian -= 1
    }
  }
};
