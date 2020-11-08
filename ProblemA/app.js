const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {reorderInputs} = require ('./reorderInputs');
app.use(bodyParser.json());
app.post('/api/words', (req, res) => {
    let numberCases = req.body.number_cases;
    let cases = req.body.cases;
    reorderInputs(numberCases, cases).then(resultReorder => {
        res.status(200).send({
            errorcode: 200,
            message: resultReorder,
          });
    }).catch(err => {
        res.status(400).send({
            errorcode: 400,
            message: `There was a error${err}`,
          });
   })
})

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server Start Successfully On port ${port}`)
});