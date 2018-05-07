"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = require("nativescript-plugin-firebase");
var ServiceFirebase = /** @class */ (function () {
    function ServiceFirebase() {
    }
    ServiceFirebase.prototype.ngOnInit = function () {
    };
    /**
     * consultarDatosUsuario
     * En esta funcion se consultan los datos del usuario de la tabla despues de haber guardado
     */
    /**
      *
      */
    ServiceFirebase.prototype.searchData = function () {
        console.log("Inicia Consulta ");
        var data;
        var options = {
            singleEvent: true,
            // order by company.country
            orderBy: {
                type: firebase.QueryOrderByType.CHILD,
                value: 'since' // mandatory when type is 'child'
            },
        };
        return firebase.query(function (queryResult) {
            if (queryResult.value) {
                console.log("Respuesta al consultar el ID" + queryResult.value);
                return (JSON.stringify(queryResult.value));
            }
        }, '/examples/', options);
    };
    return ServiceFirebase;
}());
exports.ServiceFirebase = ServiceFirebase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1REFBMEQ7QUFJMUQ7SUFBQTtJQXdDQSxDQUFDO0lBdkNHLGtDQUFRLEdBQVI7SUFFQSxDQUFDO0lBR0Q7OztPQUdHO0lBQ0o7O1FBRUk7SUFDSSxvQ0FBVSxHQUFqQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQztRQUNULElBQUksT0FBTyxHQUEwQjtZQUNqQyxXQUFXLEVBQUUsSUFBSTtZQUNqQiwyQkFBMkI7WUFDM0IsT0FBTyxFQUFFO2dCQUNMLElBQUksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSztnQkFDckMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxpQ0FBaUM7YUFDbkQ7U0FDSixDQUFBO1FBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQ2pCLFVBQUEsV0FBVztZQUNQLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMvQyxDQUFDO1FBQ0wsQ0FBQyxFQUNELFlBQVksRUFBRSxPQUFPLENBQ3hCLENBQUM7SUFDTixDQUFDO0lBT0wsc0JBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDO0FBeENZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlRmlyZWJhc2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIGNvbnN1bHRhckRhdG9zVXN1YXJpb1xyXG4gICAgICogRW4gZXN0YSBmdW5jaW9uIHNlIGNvbnN1bHRhbiBsb3MgZGF0b3MgZGVsIHVzdWFyaW8gZGUgbGEgdGFibGEgZGVzcHVlcyBkZSBoYWJlciBndWFyZGFkb1xyXG4gICAgICovXHJcbiAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZWFyY2hEYXRhKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW5pY2lhIENvbnN1bHRhIFwiKTtcclxuICAgICAgICB2YXIgZGF0YTtcclxuICAgICAgICBsZXQgb3B0aW9uczogZmlyZWJhc2UuUXVlcnlPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzaW5nbGVFdmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gb3JkZXIgYnkgY29tcGFueS5jb3VudHJ5XHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLlF1ZXJ5T3JkZXJCeVR5cGUuQ0hJTEQsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ3NpbmNlJyAvLyBtYW5kYXRvcnkgd2hlbiB0eXBlIGlzICdjaGlsZCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpcmViYXNlLnF1ZXJ5KFxyXG4gICAgICAgICAgICBxdWVyeVJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlSZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3B1ZXN0YSBhbCBjb25zdWx0YXIgZWwgSURcIiArIHF1ZXJ5UmVzdWx0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKEpTT04uc3RyaW5naWZ5KHF1ZXJ5UmVzdWx0LnZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICcvZXhhbXBsZXMvJywgb3B0aW9uc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0iXX0=