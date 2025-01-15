const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

// Endpoint to handle file uploads
app.post('/confirm-bank-transfer', upload.single('payment-proof'), (req, res) => {
    const file = req.file;
    if (file) {
        console.log('Payment proof received:', file);
        res.send('Payment proof uploaded successfully!');
    } else {
        res.status(400).send('File upload failed.');
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
