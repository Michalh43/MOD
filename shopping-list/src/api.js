// src/api.js

export const createOrder = async (order) => {
    try {
        const response = await fetch('http://localhost:3004/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        alert('Success: ' + result.message);

        return result; // מחזיר את התוצאה
    } catch (error) {
        alert('Error: ' + error.message);
        return null; // מחזיר null במקרה של שגיאה
    }
};

// אם צריך פונקציה נוספת
export const setOrderData = (data) => {
    // כאן אתה יכול להוסיף קוד אם יש צורך
    console.log('Setting order data:', data);
};
