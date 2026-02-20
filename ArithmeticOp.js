const express = require('express');
const app = express();

const PORT = 9000;

// Addition Op
app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Please provide valid numbers for a and b" });
    }

    res.json({ result: a + b });
});

// Subtraction Op
app.get('/subtract', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Please provide valid numbers for a and b" });
    }

    res.json({ result: a - b });
});

// Multiplication Op
app.get('/multiply', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Please provide valid numbers for a and b" });
    }

    res.json({ result: a * b });
});

// Division Op
app.get('/divide', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Please provide valid numbers for a and b" });
    }

    if (b === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }

    res.json({ result: a / b });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});