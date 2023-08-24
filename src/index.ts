import express from 'express';
import userRoutes from "./pages/userRoutes";
import tweetRoutes from "./pages/tweetRoutes"

const app = express();
app.use(express.json());

app.use('/user', userRoutes);
app.use('/tweet', tweetRoutes);

app.get('/', (req, res) => {
    res.send("hwllo world, updated");
});

app.listen(3000, () => {
    console.log('server ready at localhost:3000');
})