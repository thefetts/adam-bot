const Sequelize = require('sequelize');

module.exports = class Adamism {
  constructor(dbUri) {
    const sequelize = new Sequelize(dbUri);

    this.model = sequelize.define(
      'adamism',
      {message: {type: Sequelize.TEXT}},
      {freezeTableName: true}
    );
  }

  findAll(cb) {
    this.model.sync().then(() => {
      this.model.findAll().then(adamisms => {
        const allAdamisms = adamisms.map(adamism => adamism.message);
        cb(allAdamisms);
      });
    });
  }

  create(model, cb) {
    this.model.create(model).then(cb);
  }
};
