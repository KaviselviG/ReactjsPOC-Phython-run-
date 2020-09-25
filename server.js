const express = require ('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const {spawn} = require('child_process');
app.use(cors());

app.get("/", (req, res) => { 
    var pythonprocess = spawn('py', ["runPythonScript.py", req.query.name, req.query.age]);
    pythonprocess.stdout.on('data', data => {
        res.json(data.toString());
    });

    pythonprocess.stderr.on('data', data => {
        console.log(data.toString());
    });

    pythonprocess.on('close', code => {
        console.log(`Python close code ${code}`);
    });
})


 app.listen(PORT, ()=>{console.log(`app is running on port: ${PORT}`)});