import Product from "../models/poduct.model";

export const getproducts = async(req,res)=>{
    try {
        const products = await Product.find({})
        res.status(200).json({success:true,data:products})
    } catch (error) {
        console.log("error in fetching products:",error.massage)
        res.status(500).json({success:true,massage:"Server error"})
    }
}

export const createproduct = async (req,res) => {
    const product = req.body;
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false,message:"please provide all fields"});
    }
    const newProduct = new Product(product)
    try {
        await newProduct.save();
        res.status(201).json({success:true,data: newProduct});

    } catch (error){
        console.error("Error in create the product:", error.message);
        res.status(500).json({success:false,message:"server error"})

    }
    
}

export const updateproduct = async (req,res)=>{
    const { id } = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,massage:"Invalid Product Id"});
    }
    console.log("id:",id);
    try {
        const updatedproduct = await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true,data:updatedproduct});
    } catch (error) {
        res.status(500).json({success:false,massage:"Server Error"})
        
    }
}

export const deleteproduct = async (req,res)=>{
    const { id } = req.params;
    console.log("id:",id);
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,massage:"Product deleted"});
    } catch (error) {
        console.log("error in deleting product:",error.massage);
        res.status(404).json({success:false,massage:"Product not found"})
        
    }
}