"use strict";


const isHometown = (town) => {
  if (town === 'San Francisco') {
    return true
  }else {
    return false
  }

}

const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;

}

const calculateTotal = (basePrice, state, tax = 0.05) => {
  // const tax = 0.05
  let subtotal = basePrice * (1 + tax);
  let fee = 0;
  if (state === 'CA') {
    fee === 0.03 * subtotal;
  }else if (state === 'PA') {
    fee === 2;
  }else if (state === 'MA') {
      if (basePrice <= 100) {
        fee === 1;
      }else{
        fee == 3
      }
  }
  return subtotal + fee
}

// Define your function here;
isHometown('San Diego');
getFullName('Erica', 'Alejandra')
calculateTotal(150, 'CA')
