-- https://leetcode.com/problems/customers-who-never-order/

-- Suppose that a website contains two tables, the Customers table and the Orders table. Write a SQL query to find all customers who never order anything.

-- Table: Customers.

-- +----+-------+
-- | Id | Name  |
-- +----+-------+
-- | 1  | Joe   |
-- | 2  | Henry |
-- | 3  | Sam   |
-- | 4  | Max   |
-- +----+-------+
-- Table: Orders.

-- +----+------------+
-- | Id | CustomerId |
-- +----+------------+
-- | 1  | 3          |
-- | 2  | 1          |
-- +----+------------+

-- this query selects all customer names from the customer table where their id does not show up as a
-- foreign key in the orders table
SELECT customers.name as 'Customers' FROM customers
  WHERE customers.id NOT IN (SELECT customerId FROM orders);

-- this query performs a left join of the customers and orders table so that all entries in the customers
-- table will appear, and if a customer does not have a foreign key in the orders table, there will be a null field in orders
-- the WHERE clause is selecting all customers who have a NULL field for the orders portion of the joined table
SELECT Name AS 'Customers' FROM customers
  LEFT JOIN orders ON customers.Id = orders.customerId
  WHERE orders.customerId IS NULL;

