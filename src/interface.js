document.addEventListener("DOMContentLoaded", () => {
  const menu = new Menu();
  const order = new Order();

  const totalPrice = () => {
    document.querySelector('#total').innerText = order.totalPrice();
  }

  document.querySelector('#add-pepperoni').addEventListener('click',() => {
  menu.selectPepperoni(order);
  totalPrice();
  document.querySelector('#pepperoni-orders').innerText = order.Pepperoni;
  });

  document.querySelector('#delete-pepperoni').addEventListener('click',() => {
  order.deletePepperoni();
  totalPrice();
  document.querySelector('#pepperoni-orders').innerText = order.Pepperoni;
  });
 
  document.querySelector('#add-margarita').addEventListener('click', () => {
  menu.selectMargarita(order);
  totalPrice();
  document.querySelector('#margarita-orders').innerText = order.Margarita;
  });

  document.querySelector('#delete-margarita').addEventListener('click',() => {
  order.deleteMargarita();
  totalPrice();
  document.querySelector('#margarita-orders').innerText = order.Pepperoni;
  });

  document.querySelector('#add-hawaiian').addEventListener('click', () => {
  menu.selectHawaiian(order);
  totalPrice();
  document.querySelector('#hawaiian-orders').innerText = order.Hawaiian;
  });

  document.querySelector('#delete-hawaiian').addEventListener('click', () => {
  order.deleteHawaiian();
  totalPrice();
  document.querySelector('#hawaiian-orders').innerText = order.Hawaiian;
  });

  document.querySelector('#order-button').addEventListener('click',() => {
  document.querySelector('#title').innerText = "This is your Order:";
  document.querySelector('#confirmation').innerText = order.showReceipt();
  document.querySelector('#bill').innerText = "The bill is £" + order.totalPrice();
  });
});
