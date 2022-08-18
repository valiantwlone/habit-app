const router = require('express').Router();
let Task = require('../models/DailyTask');

const requireAuth = require("../middleware/requireAuth")
//require auth for all wokrout
router.use(requireAuth)

router.route('/').get((req, res) => {
  const {username} = req.query
  Task.find({username : username})
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id = req.body.id;
  const username = req.body.username; // token in client
  const body = req.body.body;
  const ticked = req.body.ticked;

  const newTask = new Task({id,username,body,ticked});

  newTask.save()
    .then(() => res.json('Task added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Task.findById(req.params.id)
      .then(task => res.json(task))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Task.findByIdAndDelete(req.params.id)
      .then(() => res.json('Task deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    console.log(req.params.id)
    Task.findById(req.params.id)
      .then(task => {
        task.id = req.body.id;
        task.username = req.body.username;
        task.body = req.body.body;
        task.ticked = req.body.ticked;
  
        task.save()
          .then(() => res.json('Task updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;