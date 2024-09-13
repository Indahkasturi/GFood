const { User, Profile, Product, UserOrder } = require("../models/index")
const { Op } = require('sequelize')
const { compareHashed } = require('../helper/helper')
const sendBulkEmails = require('../mvp/nodeMailer')
const product = require("../models/product")

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
            await User.findOne({ where: { email } })
                .then(async data => {

                    if (data) {
                        const validatePassword = await compareHashed(password, data.password);


                        if (validatePassword) {

                            // console.log(req.session);
                            req.session.userId = data.id
                            console.log(data.id);

                            return res.redirect('/products')

                        } else {
                            let errorMsg = "Incorrect email or password";
                            return res.redirect(`/login?error=${errorMsg}`);
                        }
                    } else {
                        let errorMsg = "Incorrect email or password";
                        return res.redirect(`/login?error=${errorMsg}`);
                    }
                })
                .catch(error => {
                    res.send(error)
                })
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

            // const subject = `Status pendaftaran`
            //  const message = `Selamat ${name}, kamu telah berhasil mendaftar`
            // await sendBulkEmails(email, subject, message)

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
            let userId = req.session.userId
            res.render('products', { data, name, userId })
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
            let data = await Profile.findOne({
                where: { UserId: +id }
            }) //{"id":1,"name":"saya","address":"Jakarta Barat","age":20,"UserId":1}
            // res.send(data)
            // id = +id

            res.render('profileEdit', { data, id })
        } catch (error) {
            res.send(error.message)
        }
    }
    static async postEditProfile(req, res) {
        try {

            console.log(req.params);
            let { id } = req.params

            let { name, address, age } = req.body
            await Profile.update({ name, address, age }, { where: { id: +id } })
            let data = await Profile.findByPk(+id)
            // res.send(error.message);
            res.redirect(`/products`)
        } catch (error) {
            res.send(error.message)
        }
    }
    // *END Profile

    // *START Cart
    static async cart(req, res) {
        try {
            const data = await UserOrder.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['id']
                    },
                    {
                        model: Product,
                        attributes: ['id', 'name', 'price']
                    }
                ]
            })
            // res.send('Render ke "cart" ')?
            res.render('cart', { data })
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
            let deleteProfile = await Product.findByPk(+id)

            await Product.destroy({ where: { id: +id } })
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