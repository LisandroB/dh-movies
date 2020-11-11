const {sequelize, dataType} = require('sequelize');

module.exports= (sequelize, dataType) => {
    const genre = sequelize.define("Genre", {
        name: dataType.STRING,
        ranking: dataType.INTEGER,
        active: dataType.INTEGER
    }, {
        timestamps: false
    })
    genre.associate = (models => {
        genre.hasMany(models.Movie);
    })
    return genre;
}