import {Schema, model} from 'mongoose';
import {Enum_Rol} from './enums';
//TypeScript

interface user{
    correo: string,
    identificacion: string,
    nombre: string, 
    apellido: string,
}

const userSchema = new Schema({
    correo: {
        type: String,
        required:true,
        validate:{
            validator: (email) =>{
                return /\S+@\S+\.\S+/.test(email)
             /*   if(email.includes('@') && email.include('.')){
                    return true;
                }else{
                    return false
                } */
            },
            message: 'Correo invalido',
        }
    },
    identificacion:{
        type:String,
        required:true,
        unique: true,
    },
    nombre:{
        type: String,
        required: true
    },

    apellido:{
        type: String,
        required: true
    },
    rol:{
        type: String,
        required: true,
        enum: Enum_Rol,

    }

});

const userModel = model('user', userSchema);

export  {userModel};

