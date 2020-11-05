let {Movie, Genre, Actor, Episode, Migration, Serie, User, Season, sequelize} = require('../database/models')
let moviesController = {
    all: async function(req, res) {
        try {
            const movies = await Movie.findAll()
            res.render(await 'index', {movies: movies});
        } catch (error) {
            console.log(error);
        }
    },
    showGenre: async function(req, res) {
        try {
            const genres = await Genre.findAll()
            res.render(await 'genres', {genres: genres});

        } catch(error) {
            console.log(error);
        }
    },
    showActor: async function(req, res) {
        try {
            const actors = await Actor.findAll()
            res.render(await 'actors', {actors: actors});
        } catch(error) {
            console.log(error);
        }
    },
    showEpisode: async function(req, res) {
        try {
            const episodes = await Episode.findAll()
            res.render(await 'episode', {episodes: episodes})
        } catch(error) {
            console.log(error);
        }
    },
    showMigration: async function(req, res) {
        try {
            const migrations = await Migration.findAll();
            res.render(await 'migration', {migrations: migrations});
        } catch(error) {
            console.log(error);
        }
    },
    showSerie: async function(req, res) {
        try {
            const series = await Serie.findAll();
            res.render(await 'series', {series: series});
        } catch(error) {
            console.log(error);
        }
    },
    showUser: async function(req, res) {
        try {
            const users = await User.findAll();
            res.render(await 'users', {users: users})
        } catch(error) {
            console.log(error);
        }
    },
    showSeason: async function(req, res) {
        try {
            const seasons = await Season.findAll();
            res.render(await 'seasons', {seasons: seasons})
        } catch(error) {
            console.log(error);
        }
    },
    findMovie: async function(req, res) {
        let id = req.params.id
        try {
            const search = await Movie.findByPk(id)
            res.render(await 'list', {list: search})
        } catch(error) {
            console.log(error);
        }
    },
    showNew: async function(req, res) {
        try {
            const newMovies = await Movie.findAll({
                order: [
                    ['release_date', 'DESC']
                ],
                limit: 5
            })
            res.render(await 'newMovies', {newMovies: newMovies});
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = moviesController;