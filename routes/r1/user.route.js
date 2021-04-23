var app = require('express');
var router = app.Router();

router.get('/test',(req,res)=>{
	res.send("Connected from user route test");
});

router.post('/login',/*give the corresponding controller*/);
router.post('/sign-up',/*give the corresponding controller*/);
router.get('/task-list',/*give the corresponding controller*/);
router.put('/edit-task',/*give the corresponding controller*/);
router.delete('/delete-task',/*give the corresponding controller*/);

module.exports = router;