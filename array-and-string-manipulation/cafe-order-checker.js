// My cake shop is so popular, I'm adding some tables and hiring wait staff so folks can have a cute sit-down cake-eating experience.

// I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe. All the customer
// orders get combined into one list for the kitchen, where they should be handled first-come, first-served.

// Recently, some customers have been complaining that people who placed orders after them are getting their food
// first. Yikes—that's not good for business!

// To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:

// The take-out orders as they were entered into the system and given to the kitchen. (takeOutOrders)
// The dine-in orders as they were entered into the system and given to the kitchen. (dineInOrders)
// Each customer order (from either register) as it was finished by the kitchen. (servedOrders)
// Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in
// the same order customers requested it.

// We'll represent each customer order as a unique integer.

// As an example,

// Take Out Orders: [1, 3, 5]
// Dine In Orders: [2, 4, 6]
// Served Orders: [1, 2, 4, 6, 5, 3]

// would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

// But,

// Take Out Orders: [1, 3, 5]
// Dine In Orders: [2, 4, 6]
// Served Orders: [1, 2, 3, 5, 4, 6]

// would be first-come, first-served.















// Tests

let desc = 'both registers have same number of orders';
let actual = isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
assertEquals(actual, true, desc);

desc = 'registers have different lengths';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'one register is empty';
actual = isFirstComeFirstServed([], [2, 3, 6], [2, 3, 6]);
assertEquals(actual, true, desc);

desc = 'served orders is missing orders';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'served orders has extra orders';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8]);
assertEquals(actual, false, desc);

desc = 'one register has extra orders';
actual = isFirstComeFirstServed([1, 9], [7, 8], [1, 7, 8]);
assertEquals(actual, false, desc);

desc = 'one register has unserved orders';
actual = isFirstComeFirstServed([55, 9], [7, 8], [1, 7, 8, 9]);
assertEquals(actual, false, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}