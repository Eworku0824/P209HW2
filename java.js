document.getElementById("pizza_size").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const size = document.querySelector('input[name="size"]:checked').value;
    const toppings = document.getElementById("toppings").value;
  
    let price = 0;
  
    switch (size) {
      case "small":
        price = 7;
        break;
      case "medium":
        price = 10;
        break;
      case "large":
        price = 14;
        break;
    }
  
    switch (toppings) {
      case "1":
        price += 2;
        break;
      case "2":
        price += 3;
        break;
    }
  
    document.getElementById("total").textContent = `Total Price: $${price.toFixed(2)}`;
  });