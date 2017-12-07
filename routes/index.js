var express = require('express');
var router = express.Router();
var queries = require('../db/queries')
var fetch = require('node-fetch')


router.get('/', async(req, res) => {
  let comments = await queries.getAll()
  res.json(comments)
})

router.get('/page-2', async(req, res) => {
  let comments = await queries.getAll2()
  res.json(comments)
})

router.get('/page-3', async(req, res) => {
  let comments = await queries.getAll3()
  res.json(comments)
})

router.get('/page-4', async(req, res) => {
  let comments = await queries.getAll4()
  res.json(comments)
})

router.get('/page-5', async(req, res) => {
  let comments = await queries.getAll5()
  res.json(comments)
})

router.post('/', async function(req, res) {
  let comment = {
    name: req.body.name,
    comment: req.body.comment
  }
  let comments = await queries.create(comment)
  res.json(comments)
})

module.exports = router;
