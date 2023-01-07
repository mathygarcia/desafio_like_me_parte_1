const postsControllers = require('./../controllers/postsControllers')

const express = require('express');
const router = express.Router();

router.use(express.static("public"));

router.get('/', postsControllers.index)

router.get('/posts', postsControllers.show)

router.post('/posts', postsControllers.create)

router.put('/posts/like/:id', postsControllers.modify)

router.delete('/posts/:id', postsControllers.remove)

module.exports = router;