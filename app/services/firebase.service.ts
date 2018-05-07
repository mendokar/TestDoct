import { OnInit } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");



export class ServiceFirebase implements OnInit {
    ngOnInit(): void {
        
    }
    

    /**
     * consultarDatosUsuario
     * En esta funcion se consultan los datos del usuario de la tabla despues de haber guardado
     */
   /**
     * 
     */
    public searchData() {
        console.log("Inicia Consulta ");
        var data;
        let options: firebase.QueryOptions = {
            singleEvent: true,
            // order by company.country
            orderBy: {
                type: firebase.QueryOrderByType.CHILD,
                value: 'since' // mandatory when type is 'child'
            },
        }
        return firebase.query(
            queryResult => {
                if (queryResult.value) {
                    console.log("Respuesta al consultar el ID" + queryResult.value);
                    return (JSON.stringify(queryResult.value));
                }
            },
            '/examples/', options
        );
    }






}