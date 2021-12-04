import Product from "../models/productModels.js";

export const Home = (req, res) => {
    res.send('Welcome to Angin Ribut Official');
}

export const getAllProduct = (req, res) => {
    try {
        const products = Product.findAll();
        res.json(products);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getProductById = (req, res) => {
    try {
        const product = Product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(product[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createProduct = (req, res) => {
    try {
        Product.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateProduct = (req, res) => {
    try {
        Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteProduct = (req, res) => {
    try {
        Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}