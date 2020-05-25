const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(express.json());

app.get('/api/', cors(), async (req, res) => {
  res.json({ status: 'success', message: 'It is working' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;
