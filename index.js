const postsRoutes = require("./src/routes/postsRoutes")
const express = require('express');
const cors = require('cors')
const port = 3000

const app = express();

app.use(express.json())
app.use(cors())

//app.use(express.static('public'))

app.use(postsRoutes)

app.use('*', function (req, res) {
    res.send("Error. Intente nuevamente con otra ruta.");
});

// servicio que levanta servidor
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

