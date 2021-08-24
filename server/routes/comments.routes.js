const express = require('express')
const router = express.Router()
const Comment = require('../models/comment.model');
const { isLoggedIn, isValidId } = require('../middleware/custom-middleware')

//Get comments by id
router.get('/getCourseComments/:id', isValidId, (req, res) => {
    Comment
        .find({ course: req.params.id })
        .populate('user')
        .sort({ 'createdAt': -1 })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//Post new comment
router.post('/newComment', isLoggedIn, (req, res) => {
    Comment
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})

//Edit a previous comment
router.put('/editComment/:id', isLoggedIn, isValidId, (req, res) => {
    Comment
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})

//Delete comment
router.delete('/deleteComment/:id', isLoggedIn, isValidId, (req, res) => {
    Comment
        .findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: 'Comment Deleted' }))
        .catch(err => res.status(500).json(err))

})

module.exports = router;