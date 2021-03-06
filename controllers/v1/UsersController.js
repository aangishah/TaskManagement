var { AppController } = require('./AppController');

var mongoose = require('mongoose')

var url = `mongodb+srv://Aangi:aangidb@123@cluster0.qcptt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

var db = (url);


mongoose.Promise =  global.Promise;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(db,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


var UsersModel=require('../../models/UsersModel');
var TasksModel=require('../../models/TasksModel');


class UsersController extends AppController{
	constructor(){
		super();
	}

	addUser(req,res){
		try{

			console.log(UsersModel);
			var newUser = new UsersModel();
   			newUser._id = req.body.user_id;
   			newUser.username = req.body.username;
   			newUser.email = req.body.email;
   			newUser.phone_number = req.body.phone_number;
   			newUser.password = req.body.password;
     		newUser.save(function(err, data){
           	res.send("Data inserted");
       
   		});
		}
		catch(error){
			console.log("error:",error);
		}
	}

	
	getUserslist(req,res){
		try{
			
			UsersModel.find(function(err,data){
				if(err){
					console.log(err);
				}
				else{
					res.send(data);
				}
			})  

		}
		catch(err){

		}
	}

	addTask(req,res){
			try{
			var newTask = new TasksModel();
   			newTask.user_id = req.body.user_id;
   			newTask._id = req.body.task_id;
   			newTask.task_title = req.body.task_title;
   			newTask.task_description = req.body.task_description;
     		newTask.save(function(err, data){
           	res.send("Data inserted");
       
   		});
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
	//will return the list of all the tasks
	getTaskList(req,res){
		try{
			
			TasksModel.find(function(err,data){
				if(error){
					console.log(error);
				}
				else{
					res.send(data);
				}
			})  

		}
		catch(error){

		}

	}
	//editing task by id
	editTask(req,res){
		try{
			 TasksModel.findByIdAndUpdate(req.body.id, 
    		{	
    			//if(req.body.task_title)
    			task_title:req.body.task_title,
    			//if(req.body.task_description)
    			task_description:task_description,
    			updatedDate:Date.now()
    		}, function(err, data) {
        		if(err)
            		console.log(err);
        		else{
            		res.send(data);
            		console.log("Data updated!");
        		}
			})
		}
		catch(error)
		{

		}

	}
	//delete task by the id given by the user
	deleteTask(req,res){
		try{

			TasksModel.findByIdAndDelete(
				(req.body.id), 
  				function(err, data) {
        			if(err){
            			console.log(err);
        			}
       				else{
            			res.send(data);
            			console.log("Data Deleted!");
       				}
    		}); 
		}
		catch(error){

		}

	}
}

module.exports = new UsersController();