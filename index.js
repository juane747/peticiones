var botonPeticion = document.getElementById('peticion')
var tablaResultados = document.getElementById('tablaContenido')

botonPeticion.addEventListener('click',function(){
    fetch('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=civillight&output=json')
    .then(res=>res.json()) //aca es para obtener la direccion que daba un error
    //.then(resJson=>console.log(resJson)) //opcion para obtener el resultado del json y probar si podemos trabajar
    //.then(res=>res.json())//podemos colocar fuera del then si hay una promesa otro then y sigue funcionando

    .then(resJson=>{
        var dataSeries = resJson['dataseries']
        for(let i =0; i<dataSeries.length;i++){
            var dia= dataSeries[i]
            tablaResultados.innerHTML += "<tr>"+
                                                "<td>"+i+"</td>"+
                                                "<td>"+dia['date']+"</td>"+
                                                "<td>"+dia['weather']+"</td>"+
                                                "<td>"+dia['temp2m']['min']+"</td>"+
                                                "<td>"+dia['temp2m']['max']+"</td>"+
                                            "</tr>"
        }
    })
})