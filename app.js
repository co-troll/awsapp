const express = require('express');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send("내가 보임?");
})

app.listen(3000, () => {
    console.log("server on~");
})