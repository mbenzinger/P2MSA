// DEPENDENCIES
const shoes = require('express').Router()
const db = require('../models')
const { Op } = require('sequelize')
const { Company, Model, Stock } = db

// FIND ALL SHOES
shoes.get('/', async (req, res) => {
    try {
        const foundShoes = await Shoe.findAll({
            order: [['company', 'ASC'], ['shoe_model', 'ASC']],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundShoes)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC SHOE
shoes.get('/:name', async (req, res) => {
    try {
        const foundShoe = await Shoe.findOne({
            where: { name: req.params.name },
            include: [
                {
                    model: ShoeModel,
                    as: "model",
                    where: { name: { [Op.like]: `%${req.query.event ? req.query.event : ''}%` } }
                }
            ]
        })
        res.status(200).json(foundShoe)
    } catch (error) {
        res.status(500).json(error)
    }
})


// CREATE A SHOE
shoes.post('/', async (req, res) => {
    try {
        const newShoe = await Shoe.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new shoe',
            data: newShoe
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE A SHOE
shoes.put('/:id', async (req, res) => {
    try {
        const updatedShoes = await Shoe.update(req.body, {
            where: {
                Shoe_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedShoes} shoe(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE A SHOE
shoes.delete('/:id', async (req, res) => {
    try {
        const deletedShoes = await Shoe.destroy({
            where: {
                shoe_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedShoes} shoe(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})


// EXPORT
module.exports = shoes
