import { connect } from "mongoose";


const conectarBD = async () => {
    return await connect(
        'mongodb+srv://Ciclo4:Ciclo4@ciclo4.jechm.mongodb.net/Ciclo4?retryWrites=true&w=majority'
    ) .then(() => {
        console.log('Conexion exitosa');

    })
    .catch((e) => {
        console.error('Error conectando a la bd', e)
    })
    }

export default conectarBD;