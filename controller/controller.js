const { User, Profile, Product } = require("../models/index")
const { Op } = require('sequelize')


class Controller {
    static async home(req, res) {
        try {
            res.render('home')
        } catch (error) {
            res.send(error.message)
        }
    }
}
module.exports = Controller