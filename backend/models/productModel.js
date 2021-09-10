import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        nome_popular: { type: String, required: true, unique: true },
        nome_cientifico: { type: String, required: true, unique: false },
        imagem: { type: String, required: true },
        detalhes: { type: String, required: true },
        preco: { type: Number, required: true },
        estoque: { type: Number, required: true },
    },
    {
        timestamps: true,// informações de quando um registro foi criado e alterado.
    }
);
const Product = mongoose.model('Produto', productSchema);

export default Product;