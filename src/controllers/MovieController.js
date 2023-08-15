const Movie = require('../models/Movie');

module.exports = {
    async list(req, res){
        try {
            const movies = await Movie.findAll()
            return res.json(movies);
        }catch(error){
            return console.err("Erro na listagem:", error);
        }
    },

    async create(req, res){
        const {title, poster, overview} = req.body;

        try{
            const movie = await Movie.create({title, poster, overview});
            return res.json(movie);
        } catch(error) {
            return console.err("Erro na criação", error)
        }
    },

    async update(req, res){
        const Sequelize = requre('sequelize');
        const Op = Sequelize.Op
        const { title, poster, overview} = req.body;
        const { id } = req.params
        try{
            await Movie.update({title, poster, overview}, {where: {id: {[Op.req]: id}}});
            return res.json({msg: `Filme ${title} atualizado com sucesso!`});
        } catch(error){
            return res.json({msg: `Filme ${title} não foi atualizado`}, err);
        }
    },

    async delete(req, res){
        try{
            await Movie.destroy({where: {id: req.params.id}});
            return res.json({msg: `Exclusão de item de ID ${req.params.id} feita com sucesso`})
        } catch(error) {
            return console.err('Erro de exclusão', err);
        }
    }
}