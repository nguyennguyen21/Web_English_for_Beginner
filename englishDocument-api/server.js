//server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');

//take api by topics 
app.get('/api/topics',(req,res)=>
{
    fs.readFile(path.join(DATA_DIR, 'topics.json'), 'utf8', (err, data) => 
    {
        if (err) return res.status(500).json({error: 'Failed to read topics file'});
        res.json(JSON.parse(data));
    });
});

//take api vocabulary by topic
app.get('/api/vocabulary/:topic', (req,res) =>{
   fs.readFile(path.join(DATA_DIR, 'vocabulary.json' ) ,'utf8',(err,data) =>
   {
    const vocabList = JSON.parse(data);
    const { topic } = req.params;
    if (!topic) {
      return res.status(400).json({ message: 'missing parameter topic in URL' });
    }
    if (err) return res .status(500).json({error: 'Failed to read vocabulary file'});
  const filtered = vocabList.filter(v => v.topic === topic.toLowerCase());
  res.json(filtered);
   });
});

//take api by tenses 
app.get('/api/tenses', (req, res) =>{
    fs.readFile(path.join(DATA_DIR, 'tenses.json'), 'utf8' , (err,data) => {
        if (err) return res.status(500).json({error: 'Failed to read tenses file'});
        res.json(JSON.parse(data))
    })
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});