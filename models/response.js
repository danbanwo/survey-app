var Sequelize = require('sequelize');
var sequelizeConnection = new Sequelize('postgres://Deeknows@localhost:5432/surveyapp');

var Question = require('./question')

const Response = sequelizeConnection.define("response", {
  choice: Sequelize.STRING
})

Response.belongsTo(Question);
Response.sync({force: false});





module.exports = Response;
