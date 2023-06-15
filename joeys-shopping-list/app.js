const shoppingList = [
  { name: "bacon", unitPrice: 10.99, quantity: 1, store: "woolworths" },
  { name: "eggs", unitPrice: 3.99, quantity: 1, store: "woolworths" },
  { name: "cheese", unitPrice: 6.99, quantity: 1, store: "woolworths" },
  { name: "chives", unitPrice: 1.0, quantity: 2, store: "costco" },
  { name: "wine", unitPrice: 11.99, quantity: 6, store: "danmurpys" },
  { name: "brandy", unitPrice: 17.55, quantity: 6, store: "danmurpys" },
  { name: "bananas", unitPrice: 0.69, quantity: 3, store: "costco" },
  { name: "ham", unitPrice: 2.69, quantity: 3, store: "costco" },
  { name: "tomatoes", unitPrice: 3.26, quantity: 3, store: "costco" },
  { name: "tissue", unitPrice: 8.45, quantity: 5, store: "costco" },
];

// Compute the per line item subTotal using the map function then print the result in the console using forEach
const subTotal = shoppingList
  .map((item) => `${item.name}: ${(item.unitPrice * item.quantity).toFixed(2)}`)
  .forEach((item) => console.log(item));

// Compute the grand total of his shopping list using the reduce function then print the result in the console
const total = shoppingList.reduce(
  (acc, item) => acc + item.unitPrice * item.quantity,
  0
);
console.log(`Total: ${total}`);

// Joey is on his way to Woolworths. Using the filter function, narrow down the shopping list to only show the
// items found at Woolworths, then sort the items by name alphabetically and print the result in the console
// using forEach
const woolworthsList = shoppingList
  .filter((item) => item.store === "woolworths")
  .sort((a, b) => (a.name > b.name ? 1 : -1))
  .forEach((item) => console.log(item.name));

// Help Joey organise his shopping list by store using the reduce function then print the result in the console using forEach
const organisedList = shoppingList
  .reduce((acc, item) => {
    let idx = 0;
    while (idx < acc.length && item.store > acc[idx].store) idx++;
    acc.splice(idx, 0, item);
    return acc;
  }, [])
  .forEach((item) => console.log(`${item.store}: ${item.name}`));

// Joey received a call from his wife asking if there were items costing more than $10. Help him answer
// this question using the some function
const expensiveItems = shoppingList.some((item) => item.unitPrice > 10);
console.log(`Are there items costing more than $10? ${expensiveItems}`);

// All the stores are located next to each other alphabetically. Help Joey
// organise his shopping list by sorting the list by store and then by item
// name then print the result in the console using forEach
const organisedShops = shoppingList
  .sort((a, b) => {
    a.store > b.store ? 1 : -1;
  })
  .sort((a, b) => {
    if (a.store === b.store) {
      return a.name > b.name ? 1 : -1;
    }
  })
  .forEach((item) => console.log(`${item.store}: ${item.name}`));
