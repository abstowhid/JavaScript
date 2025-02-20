// Array of objects
const products = [
    { name: 'Laptop', price: 800, category: 'Electronics' },
    { name: 'Phone', price: 500, category: 'Electronics' },
    { name: 'Shirt', price: 30, category: 'Clothing' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
    { name: 'Watch', price: 200, category: 'Accessories' },
];

// 1. map - Create an array of product names
const productNames = products.map((product) => product.name);
console.log('Product Names:', productNames);

// 2. filter - Get all products in the 'Electronics' category
const electronics = products.filter(
    (product) => product.category === 'Electronics'
);
console.log('Electronics:', electronics);

// 3. reduce - Calculate the total price of all products
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log('Total Price:', totalPrice);

// 4. find - Find the first product that costs more than $100
const expensiveProduct = products.find((product) => product.price > 100);
console.log('Expensive Product:', expensiveProduct);

// 5. forEach - Print each product's name and price
products.forEach((product) =>
    console.log(`${product.name} costs $${product.price}`)
);

// 6. some - Check if there are any products cheaper than $20
const hasCheapProduct = products.some((product) => product.price < 20);
console.log('Has cheap product:', hasCheapProduct);

// 7. every - Check if all products are below $1000
const allAffordable = products.every((product) => product.price < 1000);
console.log('All products are affordable:', allAffordable);

// 8. sort - Sort products by price in ascending order
const sortedByPrice = products.slice().sort((a, b) => a.price - b.price);
console.log('Products sorted by price:', sortedByPrice);

// 9. reverse - Reverse the order of the products array
const reversedProducts = [...products].reverse();
console.log('Reversed Products:', reversedProducts);

// 10. flatMap - Create an array of product names repeated twice
const repeatedNames = products.flatMap((product) => [
    product.name,
    product.name,
]);
console.log('Repeated Product Names:', repeatedNames);

// 11. includes - Check if the array of product names includes 'Phone'
console.log('Includes Phone:', productNames.includes('Phone'));

// 12. indexOf - Find the index of 'Shirt' in the product names array
console.log('Index of Shirt:', productNames.indexOf('Shirt'));

// 13. findIndex - Find the index of the first product with a price greater than 100
const expensiveIndex = products.findIndex((product) => product.price > 100);
console.log('Index of first expensive product:', expensiveIndex);

// 14. concat - Concatenate two arrays of product categories
const moreCategories = ['Furniture', 'Toys'];
const allCategories = products
    .map((product) => product.category)
    .concat(moreCategories);
console.log('All Categories:', allCategories);

// 15. slice - Get the first three products
const firstThreeProducts = products.slice(0, 3);
console.log('First three products:', firstThreeProducts);

// 16. splice - Remove the second product and insert a new one
const modifiedProducts = [...products];
modifiedProducts.splice(1, 1, {
    name: 'Tablet',
    price: 300,
    category: 'Electronics',
});
console.log('Modified Products:', modifiedProducts);
