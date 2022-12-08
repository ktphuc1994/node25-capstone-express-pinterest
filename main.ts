import express from 'express';
const app = express();
app.use(express.json());
app.use(express.static('.'));
app.listen(8080);

// import local routes
import rootRoute from './src/routes/rootRoute';

app.use('/', rootRoute);
