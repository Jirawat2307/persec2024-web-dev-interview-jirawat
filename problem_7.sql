SELECT 
    YEAR(o.order_date) AS "Year", 
    SUM(od.quantity * (unit_price - (od.quantity * od.discount))) AS Total_Price
FROM orders o
LEFT JOIN 
    order_details od ON od.order_id = o.order_id
LEFT JOIN 
    products p ON p.product_id = od.product_id
WHERE o.ship_region = "Western Europe"
GROUP BY YEAR(o.order_date)