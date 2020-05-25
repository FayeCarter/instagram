const express = require('express');
const cors = require('cors')
const path = require('path')
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const app = express();

app.use(express.json());

app.get('/api/', cors(), async (req, res) => {
  res.json({ status: 'success', message: 'It is working' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;
