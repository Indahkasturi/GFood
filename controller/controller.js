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

    static async formLogin(req, res) {
        try {
            res.send('Nama File view nya formLogin')
            // res.render('formLogin')
        } catch (error) {
            res.send(error.message)
        }
    }

    // *START Register
    static async formRegister(req, res) {
        try {
            res.send('Nama File view nya formRegister')
            // res.render('formRegister')
        } catch (error) {
            res.send(error.message)
        }
    }
    static async postRegister(req, res) {
        try {
            res.send('Nama File view nya formRegister')
            // res.redirect('/login')
        } catch (error) {
            res.send(error.message)
        }
    }

    // *END Register

    //* START Bagian Product
    static async products(req, res) {
        try {
            res.send('Nama File view nya products')
            // res.render('products')
        } catch (error) {
            res.send(error.message)
        }
    }
    static async formAddProduct(req, res) {
        try {
            res.send('Nama File view nya formAddProducts')
            // res.render('formAddProducts')
        } catch (error) {
            res.send(error.message)
        }
    }
    static async postAddProduct(req, res) {
        try {
            res.send(' Redirect ke "/products" ')
            // res.render('formAddProducts')
        } catch (error) {
            res.send(error.message)
        }
    }
    //* END Bagian Product

    // *START Profile
    static async profile(req, res) {
        try {
            res.send(' nama file view nya profile, isinya langsung form')
            // res.render('profile')
        } catch (error) {
            res.send(error.message)
        }
    }
    static async postEditProfile(req, res) {
        try {
            res.send(' redirect ke /profile/:id');
            // res.redirect('/profile/:id')
        } catch (error) {
            res.send(error.message)
        }
    }
    // *END Profile

    // *START Profile
    static async cart(req, res) {
        try {
            res.send('Render ke "cart" ')
            // res.render('cart', {})
        } catch (error) {
            res.send(error.message)
        }
    }
    static async increaseOrder(req, res) {
        try {
            res.send('Render ke "cart" ')
            // res.render('cart', {})
        } catch (error) {
            res.send(error.message)
        }
    }
    static async decreaseOrder(req, res) {
        try {
            res.send('Render ke "cart" ')
            // res.render('cart', {})
        } catch (error) {
            res.send(error.message)
        }
    }
    static async deleteOrder(req, res) {
        try {
            res.send('Render ke "cart" ')
            // res.render('cart', {})
        } catch (error) {
            res.send(error.message)
        }
    }
    // *END Profile
}
module.exports = Controller