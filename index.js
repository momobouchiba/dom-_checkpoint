let buttonplus = document.getElementsByClassName("fa-plus-square");
for (let plus of buttonplus) {
  plus.addEventListener("click", function () {
    plus.nextElementSibling.innerHTML++;
    shoppingTotal();
  });
}


let buttonminus = document.getElementsByClassName("fa-minus-square");
console.log(buttonminus);
for (let minus of buttonminus) {
  minus.addEventListener("click", function () {
    if (minus.previousElementSibling.innerHTML > 0) {
      minus.previousElementSibling.innerHTML--;
    }
    shoppingTotal();
  });
}


let buttonremove = document.getElementsByClassName("fa-times");
for (let rmv of buttonremove) {
  rmv.addEventListener("click", function () {
    rmv.parentNode.remove();
    shoppingTotal();
  });
}

index.js  

function shoppingTotal() {
  let quantity = document.getElementsByClassName("qte");
  let prices = document.getElementsByClassName("price");
  let total = document.getElementById("totalp");
  let sum = 0;

  for (let i = 0; i < prices.length; i++) {
    sum += quantity[i].innerHTML * prices[i].innerHTML;
  }
  return total.innerHTML = "Shooping Bag Total : $" + sum ;
  
}


let hearts = document.getElementsByClassName("fa-heart");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
     if (heart.style.color == "red") {
       heart.style.color = "gray";
    } else {
       heart.style.color = "red";
    }
  });
}



