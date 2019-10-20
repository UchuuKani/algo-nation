-- https://leetcode.com/problems/employees-earning-more-than-their-managers

-- The Employee table holds all employees including their managers. Every employee has an Id, and there is also a column for the manager Id.

-- +----+-------+--------+-----------+
-- | Id | Name  | Salary | ManagerId |
-- +----+-------+--------+-----------+
-- | 1  | Joe   | 70000  | 3         |
-- | 2  | Henry | 80000  | 4         |
-- | 3  | Sam   | 60000  | NULL      |
-- | 4  | Max   | 90000  | NULL      |
-- +----+-------+--------+-----------+
-- Given the Employee table, write a SQL query that finds out employees who earn more than their managers. For the above table, Joe is the only employee who earns more than his manager.

-- +----------+
-- | Employee |
-- +----------+
-- | Joe      |
-- +----------+

-- this query performs a self-join (using an inner-join) on the employees table to join employees who are not managers
-- with the employees who are their managers. The query is filtered to only show employees who have a higher salary than
-- their manager

-- inner join will attempt to join the two tables based on the join condition "e.managerId = m.id", and if the condition evaluates
-- to true for any row, that combined row from the two tables is returned. Else if no condition evaluates to true
-- an empty record is returned
SELECT e.name as 'Employee'
  FROM employee e
  INNER JOIN employee m ON e.managerId = m.id
  WHERE e.salary > m.salary;