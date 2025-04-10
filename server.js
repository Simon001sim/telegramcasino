const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.post('/api/save', (req, res) => {
  // Ваша логика сохранения
  res.json({ status: 'success' });
});

app.get('/api/user/:id', (req, res) => {
  // Ваша логика загрузки данных
  res.json({ balance: 100 });
});

// Все остальные запросы → фронтенд
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});