import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello, world!');
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
	try {
		// some code that might throw an error
		res.send('Success!');
	} catch (error) {
		console.error(error);
		res.status(500).send('Internal Server Error');
	}
});

app.get('/', (req, res) => {
    try {
        res.send('success!');

    } catch (error) {
        console.error(error);
        res.status(500).send
    }
})