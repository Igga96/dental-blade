const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'sql7.freemysqlhosting.net',
  user: 'sql7714723',
  password: 'JqBI68hCCG',
  database: 'sql7714723',
  connectTimeout: 60000,
  acquireTimeout: 60000,
  timeout: 60000,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database.');
    connection.release();
  }
});

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Medical Clinic API',
      version: '1.0.0',
      description: 'API для управления медицинской клиникой',
    },
    servers: [
      {
        url: `http://localhost:${port}/`,
        description: 'Локальный сервер',
      },
    ],
  },
  apis: ['./app.js'],
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /api/users:
 *   get:
 *   tags:
 *     -users
 *     summary: Получить список пользователей
 *     responses:
 *       '200':
 *         description: Успешный запрос, возвращает список пользователей
 *       '500':
 *         description: Внутренняя ошибка сервера
 */
app.get('/api/users', (req, res) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error', details: error.message });
    } else {
      res.json(results);
    }
  });
});

/**
 * @swagger
 * /api/doctors:
 *   get:
 *     summary: Получить список стоматологов
 *     responses:
 *       '200':
 *         description: Успешный запрос, возвращает список стоматологов
 *       '500':
 *         description: Внутренняя ошибка сервера
 */
app.get('/api/doctors', (req, res) => {
  pool.query('SELECT * FROM doctors', (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error', details: error.message });
    } else {
      res.json(results);
    }
  });
});

/**
 * @swagger
 * /api/services:
 *   get:
 *     summary: Получить список услуг
 *     responses:
 *       '200':
 *         description: Успешный запрос, возвращает список услуг
 *       '500':
 *         description: Внутренняя ошибка сервера
 */
app.get('/api/services', (req, res) => {
  pool.query('SELECT * FROM services', (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error', details: error.message });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});