/* Leer el contenido del archivo data.txt, renglon por renglon y pasarlo a un vector, imprimir el contenido del vector
y pasar al siguiente renglon del archivo*/ 
const fs =requiere('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err){
        console.error(err);
        return;
    }
    var cadena_split = data.cadena_split('\n');
    for cadena -> cadena_split
    cadena.split(',')
    console.log(cadena_split);
    console.log(data);
    
        console.log(data);
    
     });
