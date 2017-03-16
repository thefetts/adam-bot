const Sequelize = require('sequelize');
const Adam = require('./adam.js');

const vcap_services = JSON.parse(process.env.VCAP_SERVICES);
const sequelize = new Sequelize(vcap_services['p-mysql'][0].credentials.uri);

const Adamism = sequelize.define(
  'adamism',
  {message: {type: Sequelize.TEXT}},
  {freezeTableName: true}
);

Adamism.sync().then(function () {
  Adamism.findAll().then(adamisms => {
    const allAdamisms = adamisms.map(adamism => adamism.message);
    new Adam(allAdamisms).wakeUp();
  });
});
