const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/calendar', (req, res) => {
    // Use the Outlook API once IT User makes it available to devs
    res.sendFile(__dirname + '/calendar.json');
});


app.listen(port, () => {
    console.log(`Meetings are Toxic app listening on port ${port}`)
});
