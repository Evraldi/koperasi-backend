const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const routes = require('./routes');
const { errorHandler } = require('./middlewares/error');

const dummyDataRoute = require('./dummy/dummy_data');

const app = express();

app.set('trust proxy', 1);

app.use(express.urlencoded({ extended: true }));


app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = ['https://koperasihegar.my.id', 'http://localhost:8080'];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`❌ CORS Blocked: ${origin}`);
      callback(new Error('CORS Policy Blocked'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https://koperasihegar.my.id"],
      connectSrc: ["'self'", "http://localhost:8080", "https://koperasihegar.my.id"],
      formAction: ["'self'", "http://localhost:8080", "https://koperasihegar.my.id"],
      frameAncestors: ["'self'"]
    }
  }
}));

app.use(mongoSanitize());
app.use(xss());

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { error: 'Terlalu banyak request, coba lagi nanti.' },
});

app.use('/api', apiLimiter);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/api', routes);
app.use('/api', dummyDataRoute);

app.use(errorHandler);
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});


app.use((err, req, res, next) => {
  console.error('❌ Error:', err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

module.exports = app;
