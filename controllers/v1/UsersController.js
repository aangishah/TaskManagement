var { AppController } = require('./AppController');

class UsersController extends AppController{
	constructor(){
		super();
	}

	addUser(req,res){
		try{
			//res.send("user added");
		}
		catch(error){
			console.log("error:",error);
		}
	}

	login(req,res){
		try{

		}
		catch(error){

		}

	}

	getTaskList(req,res){
		try{
			res.status(500).json("list");
		}
		catch(error){

		}

	}

	editTask(req,res){
		try{

		}
		catch(error){

		}

	}

	deleteTask(req,res){
		try{

		}
		catch(error){

		}

	}
}

module.exports = new UsersController();