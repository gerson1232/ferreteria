const Product = require('../models/Product')
async function addProduct (req, res) {
    try {
        const{
            nombre,
            precio,
            cantidad_existente,
            categoria,
            descripcion
        } = req.body

        const product = Product({
            nombre,
            precio,
            cantidad_existente,
            categoria,
            descripcion
        })

        if (req.file){
            const { filename } = req.file
            product.setImgUrl(filename)
        }

        const productStore = await product.save()

        res.status(201).send({ productStore })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}
async function getProducts (req, res){
    const product = await Product.find().lean().exec()
    res.status(200).send({ product })
}

module.exports = {
    addProduct,
    getProducts
}