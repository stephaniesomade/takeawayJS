'use strict'; 
describe('Menu', () => {

  let menu;
  let order; 

  beforeEach(() => {
    menu = new Menu();
    order = new Order();
  });

  it('shows the available dishes and prices', () => {
    expect(menu.viewMenu()).toEqual({"Pepperoni": 10, "Margarita": 9, "Hawaiian": 11})
  });

  it('selects some number of things off the menu', () => {
    let orderedItem = {};
    menu.selectItem(order, "Pepperoni")
    orderedItem.Pepperoni = 10
    expect(orderedItem).toEqual({Pepperoni: 10})
  });

  it('shows the reciept with the total', () => {
    menu.selectItem(order, "Pepperoni")
    menu.selectItem(order, "Margarita")
    expect(order.showReceipt()).toEqual("Pepperoni: £10. Margarita: £9.")
  });
});
