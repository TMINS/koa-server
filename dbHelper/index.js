const mongoose = require("./db");
const Schema = mongoose.Schema;
// 测试数据模型
const ceshiSchema = new Schema({
  date: Date,
  password: String,
  name: String,
});

const MyModel = mongoose.model("ceshi", ceshiSchema);
var model = new MyModel({
  _id: new mongoose.Types.ObjectId(),
  date: "2021-12-10",
  password: "123456",
  name: "test",
});
model.save();

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
  queryOne(object) {
    return new Promise((resolve, reject) => {
      MyModel.findOne(object, (err, res) => {
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
