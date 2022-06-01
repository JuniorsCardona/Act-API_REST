const dotenv = require('dotenv').config();
const app = require('./app');
const {  mongoConn } = require('./databases/configuration');


app.set('port', process.env.PORT || 3000);

const conn = mongoConn()

app.listen(app.get('port'), () => {
    console.log(`El servidor arranca en el puerto : ${app.get('port')}`)
});