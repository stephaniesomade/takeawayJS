'use strict'; 

class Menu {
  constructor() {
    this.options = {"Pepperoni": 10, "Margarita": 9, "Hawaiian": 11};
  }
  viewMenu() {
    return this.options;
  }
  selectPepperoni(order) {
    order.add("Pepperoni", this.options["Pepperoni"]);
    order.plusOnePepperoni();
  }
  selectMargarita(order) {
    order.add("Margarita", this.options["Margarita"]);
    order.plusOneMargarita();
  }
  selectHawaiian(order) {
    order.add("Hawaiian", this.options["Hawaiian"]);
    order.plusOneHawaiian();
  }
};
