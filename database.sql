select c.CustomerName, sum( o.OrderAmount) TotalSpent
from  Customers c  Orders o
group by o.CustomerID 
having c.CustomerID = o.CustomerID 