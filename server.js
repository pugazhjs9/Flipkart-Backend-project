const express = require('express');
const authRoutes = require('./src/routes/authRoutes');
const songRoutes = require('./src/routes/songRoutes');
const homeRoutes = require('./src/routes/homeRoutes');
const app = require('./src/Services/app');
const {connectDB} = require('./src/config/db')

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', songRoutes);
app.use('/api', homeRoutes);

const PORT = process.env.PORT || 5003;
connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });
