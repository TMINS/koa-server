const mongoose = require("./db");
const MyModel = require("../model/user");

class Mongodb {
  constructor() {}
  // 查询全部
  query() {
    return new Promise((resolve, reject) => {
      MyModel.find({}, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }
  // 详细查询
  queryOne(obj) {
    return new Promise((resolve, reject) => {
      MyModel.findOne(obj, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }
  // 保存
  save(obj) {
    const m = new MyModel(obj);
    return new Promise((resolve, reject) => {
      m.save((err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
        console.log(res);
      });
    });
  }
}
module.exports = new Mongodb();
