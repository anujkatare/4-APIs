import express from 'express';
import Productrouter from './routes/products.routes.js';
import ProductrouterById from './routes/products.routes.js'
import DBconnect from './db.js';
import ProductAdd from './routes/addProducts.routes.js';
import ProductUpdate from './routes/updateProducts.routes.js'
import ProductDelete from './routes/deleteProducts.routes.js'
const PORT = 3000;

const app = express();
await DBconnect();

app.use(express.json());

app.use('/api/v1/products', Productrouter);
app.use('/api/v1/products/:id', ProductrouterById);
app.use('/api/v1/products/add', ProductAdd);
app.use('/api/v1/products/update', ProductUpdate);
app.use('/api/v1/products/delete', ProductDelete);

app.listen(PORT, () => {
    console.log(`App is running on port : ${PORT}`);
});