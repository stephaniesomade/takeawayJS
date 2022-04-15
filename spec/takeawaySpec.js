'use strict'; 
describe('Menu', () => {

  let menu;
  let order;

  beforeEach(() => {
    menu = new Menu();
    order = new Order();
  });

  it('shows the available dishes and prices', () => {
    expect(menu.viewMenu()).toEqual({"Pepperoni": 10, "Margarita": 9, "Hawaiian": 11});
  });

  it('adds an item to the current order', () => {
    menu.selectPepperoni(order);
    expect(order.currentOrder).toEqual([{"Pepperoni": 10}])
  });

  it('adds multiple items to the current order', () => {
    menu.selectPepperoni(order);
    menu.selectMargarita(order);
    expect(order.currentOrder).toEqual([{"Pepperoni": 10}, {"Margarita": 9}])
  });

  it('shows the receipt total', () => {
    menu.selectPepperoni(order);
    menu.selectMargarita(order);
    menu.selectHawaiian(order);
    menu.selectPepperoni(order);
    expect(order.showReceipt()).toEqual("Pepperoni: £10. Margarita: £9. Hawaiian: £11. Pepperoni: £10.")
  });

  it('counts the number of times the meal has been ordered', () => {
    menu.selectPepperoni(order);
    menu.selectPepperoni(order);
    menu.selectMargarita(order);
    menu.selectHawaiian(order);
    expect(order.Pepperoni).toEqual(2)
    expect(order.Margarita).toEqual(1)
    expect(order.Hawaiian).toEqual(1)    
  });

  it('calculates the total Price of the current Order', () => {
    menu.selectPepperoni(order);
    menu.selectPepperoni(order);
    menu.selectMargarita(order);
    menu.selectHawaiian(order);
    expect(order.totalPrice()).toEqual("40.00")
  })
  
  it('removes unwanted items from the current order', () => {
    menu.selectPepperoni(order);
    menu.selectPepperoni(order);
    menu.selectMargarita(order);
    menu.selectHawaiian(order);
    order.deleteMargarita();
    expect(order.showReceipt()).toEqual("Pepperoni: £10. Pepperoni: £10. Hawaiian: £11.")
    expect(order.currentOrder).toEqual([{"Pepperoni": 10}, {"Pepperoni": 10}, {"Hawaiian": 11}])
    expect(order.totalPrice()).toEqual("31.00")
  })

  it('removes unwanted items from the current order', () => {
    menu.selectPepperoni(order);
    menu.selectPepperoni(order);
    menu.selectHawaiian(order);
    order.deleteMargarita();
    expect(order.showReceipt()).toEqual("Pepperoni: £10. Pepperoni: £10. Hawaiian: £11.")
    expect(order.currentOrder).toEqual([{"Pepperoni": 10}, {"Pepperoni": 10}, {"Hawaiian": 11}])
    expect(order.totalPrice()).toEqual("31.00")
    expect(order.Margarita).toEqual(0)
  })
});
