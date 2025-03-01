const express = require('express');
const app =  express();
const path = require(path);
const multer = require('multer');
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const publicPath = path.json(__dirname, '..', 'build');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage}).single('file');

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => {
    res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT"})
})