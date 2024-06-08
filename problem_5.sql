SELECT 
    p.product_name, 
    SUM(od.quantity) AS sum_quantity_2016
FROM 
    products p
LEFT JOIN 
    order_details od ON od.product_id = p.product_id
LEFT JOIN 
    orders o ON o.order_id = od.order_id
WHERE 
    o.order_date BETWEEN '2016-01-01' AND '2016-12-31'
GROUP BY 
    p.product_name
ORDER BY 
    SUM(od.quantity) DESC
LIMIT(5)