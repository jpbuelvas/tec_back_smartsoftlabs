import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import {createConnection} from 'typeorm'

import userRoutes from './routes/user.routes'
import productRoutes from './routes/product.routes'
import authRoutes from './routes/purchase.routes'

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(authRoutes);
app.use(userRoutes);
app.use(productRoutes);

app.listen(3000);
console.log('Server on port', 3000);