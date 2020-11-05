var express = require('express');
var router = express.Router();
let moviesController = require('../controllers/moviesController')

/* GET home page. */
router.get('/movies', moviesController.all)
router.get('/genres', moviesController.showGenre)
router.get('/actors', moviesController.showActor)
router.get('/episodes', moviesController.showEpisode);
router.get('/migrations', moviesController.showMigration);
router.get('/series', moviesController.showSerie);
router.get('/users', moviesController.showUser);
router.get('/seasons', moviesController.showSeason);
router.get('/movies/new', moviesController.showNew);
router.get('/movies/recommended', moviesController.showRecommended);
router.get('/movies/search', moviesController.search);
router.post('/movies/search', moviesController.searchIndex);
router.get('/movies/detail/:id', moviesController.findMovie);
module.exports = router;