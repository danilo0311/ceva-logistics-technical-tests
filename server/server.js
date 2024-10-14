const express = require('express');
const usersRoutes = require('./app/routes/usersRoutes');
const cors = require('cors');

const app = express();
const port = 4201;

const corsOptions = {
	origin: 'http://localhost:4200'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(usersRoutes);

app.listen(port, () => {
	console.log(`Server up and running on http://localhost:${port}`);
});
