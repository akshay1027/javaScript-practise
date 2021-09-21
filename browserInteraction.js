alert("Answer the next question"); // Browser will alert this as a statement
let a = prompt("What is your name?", 'akshay'); // Browser will ask input from user. Here the second argument (eg: 'akshay') is the default value of input box.
let b = confirm(`Your name is ${a}?`); // Browser will return either trur or false depending on user click.
alert(`Your name is ${a} and that is ${b}.`); 
