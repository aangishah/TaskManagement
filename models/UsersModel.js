var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	_id:Schema.Types.ObjectID,//primary key
	username: {type:String,required:true},
	joinedDate:{type: Date, default: Date.now() },
	email:{type:String},
	phone_number:{type:Number},
	password:{type:String}//encryption
},{
	collection:'users'
});

//module.exports = User = mongoose.model('user', UserSchema);
module.exports = mongoose.model('user', UserSchema,'Users');

