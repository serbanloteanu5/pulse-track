/*
Filename: SophisticatedCode.js
Description: This code demonstrates an advanced implementation of a customer management system for a fictional e-commerce website.
*/

// Class representing a customer
class Customer {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.orders = [];
  }

  addOrder(order) {
    this.orders.push(order);
  }
}

// Class representing an order
class Order {
  constructor(id, status, products) {
    this.id = id;
    this.status = status;
    this.products = products;
  }

  getProductCount() {
    return this.products.length;
  }
}

// Class representing the customer management system
class CustomerManagementSystem {
  constructor() {
    this.customers = [];
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  findCustomerById(id) {
    return this.customers.find((customer) => customer.id === id) || null;
  }

  findCustomerByEmail(email) {
    return this.customers.find((customer) => customer.email === email) || null;
  }
}

// Create some customers
const customer1 = new Customer(1, "John Doe", "john@example.com");
const customer2 = new Customer(2, "Jane Smith", "jane@example.com");

// Create some orders
const order1 = new Order(1, "Pending", ["Product A", "Product B"]);
const order2 = new Order(2, "Completed", ["Product C"]);

// Associate orders with customers
customer1.addOrder(order1);
customer2.addOrder(order2);

// Create the customer management system
const cms = new CustomerManagementSystem();

// Add customers to the system
cms.addCustomer(customer1);
cms.addCustomer(customer2);

// Usage examples
const customerById = cms.findCustomerById(1);
const customerByEmail = cms.findCustomerByEmail("jane@example.com");

console.log(customerById);
console.log(customerByEmail);