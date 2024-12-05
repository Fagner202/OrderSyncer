const express = require('express');
const webhookRoutes = require('./src/routes/webhook');
const app = express();
app.use(express.json()); // Para parsear JSON
app.use('/api', webhookRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));