var app = require('express');
var router = app.Router();

router.get('/test',(req,res)=>{
	res.send("Connected from user route test");
});

var UsersController = require("../../controllers/v1/UsersController");

router.post('/login',UsersController.login);
router.post('/sign-up',UsersController.addUser);
router.get('/task-list',UsersController.getTaskList);
router.put('/edit-task',UsersController.editTask);
router.delete('/delete-task',UsersController.deleteTask);

module.exports = router;