const ProductModel = require('./model')

const getCategory = async (req, res) => {
    try {
        const productName = req.query.productName.trim().toLowerCase();

        // Find the product by name
        const product = await ProductModel.findOne({ name: productName });

        // If the product is found, get the category
        if (product) {
            return res.status(200).send(product.category);
        } else {
            return res.status(404).send("Category of input text not found. Please add it in database.")
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, msg: "Error", error: error.message });
    }
}

const addCategory = async (req, res) => {
    try {
        let data = req.body
        let { name, category } = data

        if ((Object.keys(data).length == 0)) {
            return res.status(400).send({ status: false, message: "Please provide name and category" })
        }

        if (!name || !category) {
            return res.status(400).send({ status: false, message: "Invalid request body" })
        }

        let newData = {}

        if (!name) {
            return res.status(400).send({ status: false, message: "Name is required" })
        }
        newData.name = name.trim().toLowerCase()

        if (!category) {
            return res.status(400).send({ status: false, message: "Category is required" })
        }
        newData.category = category.trim().toLowerCase()

        let newProduct = await ProductModel.create(newData)
        return res.status(201).send({ status: true, message: "Product added successfully", data: newProduct });
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, msg: "Error", error: error.message });
    }
}

module.exports = { getCategory, addCategory }