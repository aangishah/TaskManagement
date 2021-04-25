var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UsersModel=require('./UsersModel.js');

var TaskSchema = new Schema({
	_id:Schema.Types.ObjectID,
	task_title: {type:String,required:true},
	task_description:String,
	created_at:{type: Date, default: Date.now() },
	user_id:{type: Schema.Types.ObjectId, ref: UsersModel},
	deleted_at:{type:Date,default:null},
	updated_at:{type:Date,default:null}
},{
	collection:'tasks'
});


module.exports = mongoose.model('task', TaskSchema,'Tasks');