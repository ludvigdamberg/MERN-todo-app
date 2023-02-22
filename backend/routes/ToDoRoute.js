const {Router} = require('express')
const {getTodo} = require('../controllers/ToDoController')
const {saveTodo} = require('../controllers/ToDoController')

const router = Router()

router.get('/', getTodo)
router.post('/save',saveTodo)

module.exports = router;