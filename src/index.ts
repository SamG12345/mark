import express from 'express';
import home from "./pages/home";

const app = express();
app.use(express.json());

app.use('/home', home);

app.get('/', (req, res) => {
    res.send("hwllo world, updated");
});

app.listen(3000, () => {
    console.log('server ready at localhost:3000');
})