import conectarBD from "./backend/db"
import {userModel} from "./models/user"
import {Enum_Rol} from './models/enums';


//Crear Usuario
const main = async () =>{
    await conectarBD();

    // crear usuario 
 /*   await userModel.create({
        correo: "ana@gmail.com",
        identificacion: "1234",
        nombre: "Anabel",
        apellido: "Cortez",
    }).then((u) => {
        console.log('usuario creado', u)
    }).catch((e) =>{
        console.error("Error creando usuario", e);
    });*/

    //Obtener usuarios

   /* await userModel.find()
    .then((u) => {
    console.log("usuario", u);
    })
    .catch((e) => {
        console.log('error obteniendo usuarios')
    });*/

    //Editar Usuarios

    /*await userModel.findOneAndUpdate(
        {correo: 'ana@oal.com'},
        {nombre: 'Ana'}
    ).then((u) => {
        console.log('usuario Actualizando')
    }).catch((e) => {
        console.error('Error actualizando', e)
    }) */

    //Eliminar Usuario

   /* await userModel.findOneAndDelete(
        {correo: 'ana@gmail.com'})
        .then((u) => {
            console.log('usuario Eliminado')
        }).catch((e) => {
            console.error(e);
        })*/

    //Obtener Usuario 

    /*await userModel.findOne({correo: 'ana@gmail.com'})
    .then((u) => {
        console.log('usuario encontrado')
    }).catch((e) => {
        console.error(e);
    })*/

};

main();