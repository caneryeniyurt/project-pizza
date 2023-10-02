// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let customerName = prompt("What is your name?");

alert(`Hi ${customerName} `);

// Step 2 - Food choice
// Your code goes here

let orderType= prompt(`What would like to order?
1) Pizza
2) Pasta 
3) Salad 
Please Click "Ok" to continue.`);


let text;
let selectedType;

switch(orderType) {
  case"1":
    text= (" Nice, so I will show you our Pizza options.");
    selectedType=["Pizza", " 1- Margherita", " 2- Hawaian", "3- Napolatana", "15 min" ];
    break;
  case"2":
    text= (" Nice, we are best in town for Pasta options.");
    selectedType=["Pasta", " 1- Spagethetti Carbonora", " 2- Fettucine Alfredo", "3- Cheesy Tortellini", "20 min" ];
    break;
  case"3":
    text= (" Nice, we are very healthy Salad options");
    selectedType=["Salad", " 1- Caesar Salad", " 2- Caprese Salad", "3- Mediterean Salad", "10 min" ];
    break;
  default:
    orderType= prompt("Please re-enter a valid number.  1)Pizza, 2)Pasta, 3)Salad: ");
};


alert("Click `OK` to continue");

let subOrderType = prompt(`Congratulate, we got your order. Since you ordered ${selectedType[0]}, today we can offer 
 ${selectedType[1]}
 ${selectedType[2]} 
 ${selectedType[3]} 
 Which one would you like to order? `);








// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
