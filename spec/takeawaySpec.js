'use strict'; 
describe('Menu', () => {

  let menu; 

  beforeEach(() => {
    menu = new Menu();
  });

  it('shows the available dishes and prices', () => {
    expect(menu.viewMenu()).toEqual("Pepperoni: £10, Margarita: £9, Hawaiian: £11")
  });

  // it('selects some number of things off the menu', () => {
  //   let order = new Order();
  //   let orderedItem = {};
  //   let item;
  //   menu.selectItem(order, "Pepperoni")
  //   item = orderedItem.Pepperoni = 10
  //   expect(orderedItem).toBe({Pepperoni: 10})
  // });
});

