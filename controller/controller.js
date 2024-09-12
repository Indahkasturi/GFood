const { User, Profile, Product, UserOrder } = require("../models/index")
const { Op } = require('sequelize')
const { formatRupiah } = require('../helper/helper')


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
            // res.send('Nama File view nya formLogin')
            let { error } = req.query;

            res.render('login', { error })
        } catch (error) {
            res.send(error.message)
        }
    }

    static async postLogin(req, res) {
        try {
            let { email, password } = req.body;
            let data = await User.findAll({
                where: { email, password }
            })

            if (data.length === 0) {
                // res.send('duer')
                throw new Error("username or password is incorrect");
            }
            res.send(data);
        } catch (error) {
            res.redirect(`/login?error=${error.message}`)
        }
    }

    // *START Register
    static async formRegister(req, res) {
        try {
            res.render('register')
        } catch (error) {
            res.send(error.message)
        }
    }

    static async postRegister(req, res) {
        try {
            let { email, password, name, address, age, role } = req.body;
            const user = await User.create({ email, password, role })
            await Profile.create({ name, address, age, UserId: user.id });
            res.redirect('/login')
        } catch (error) {
            res.send(error.message)
        }
    }

    // *END Register

    //* START Bagian Product
    static async products(req, res) {
        try {
            let { name } = req.query
            let find = { order: [['name', 'asc']] }
            if (name) {
                find.where = {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                }
            }
            let data = await Product.findAll(find)
            // res.send(data)

            // let rp = formatRupiah()
            res.render('products', { data, formatRupiah, name })
        } catch (error) {
            res.send(error.message)
        }
    }
    static async formAddProduct(req, res) {
        try {
            res.render('addProduct')
            // res.render('formAddProducts')
        } catch (error) {
            res.send(error.message)
        }
    }
    static async postAddProduct(req, res) {
        try {

            const { name, price, imageURL } = req.body
            await Product.create({ name, price, imageURL })
            res.redirect('/products')
            // res.render('formAddProducts')
        } catch (error) {
            res.send(error.message)
        }
    }
    //* END Bagian Product

    // *START Profile
    static async profile(req, res) {
        try {
            let { id } = req.params
            let data = await Profile.findByPk(+id)
            // res.send(' nama file view nya profile, isinya langsung form')
            res.render('profileEdit', { data })
        } catch (error) {
            res.send(error.message)
        }
    }
    static async postEditProfile(req, res) {
        try {
            let { name, address, age } = req.body
            let { id } = req.params
            await Profile.update({ name, address, age }, { where: { id: +id } })
            let data = await Profile.findByPk(+id)
            res.send(' /profile/:id');
            // res.redirect('/profile/:id')
        } catch (error) {
            res.send(error.message)
        }
    }
    // *END Profile

    // *START Profile
    static async cart(req, res) {
        try {
            const buy = await UserOrder.findAll({
                include: Product
            })
            res.send('Render ke "cart" ')
            // res.render('cart', {})
        } catch (error) {
            res.send(error.message)
        }
    }
    static async increaseOrder(req, res) {
        try {
            const { id } = req.params
            const qty = await UserOrder.findByPk(+id)
            await qty.increment("quantity", { by: 1 })
            res.redirect('/products')
            // res.send('Render ke "cart" ')
            // res.render('cart', {})
        } catch (error) {
            res.send(error.message)
        }
    }
    static async decreaseOrder(req, res) {
        try {
            const { id } = req.params
            const qty = await UserOrder.findByPk(+id)
            await qty.decrement("quantity", { by: 1 })
            res.redirect('/products')
            // res.send('Render ke "cart" ')
            // res.render('cart', {})
        } catch (error) {
            res.send(error.message)
        }
    }
    static async deleteOrder(req, res) {
        try {
            let { id } = req.params
            let deleteProfile = await Profile.findByPk(+id)

            await Profile.destroy({ where: { id: +id } })
            res.redirect('/products')
            // res.send('Render ke "cart" ')
            // res.render('cart', {})
        } catch (error) {
            res.send(error.message)
        }
    }
    // *END Profile
}
module.exports = Controller