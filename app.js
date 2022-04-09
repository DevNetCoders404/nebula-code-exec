const express = require('express');
const app = express();
// Init Middleware
app.use(express.json({ extended: false }));

app.use('/codeUpload', require('./routes/codeUpload'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));