# nota acerca de volumenes:
para habilitar la creacion de volumenes en en windows ir a la configuracion de la aplicacion 
de docker a la seccion de Resources -> File sharing y seleccionamos alguna unidad que tengamos 
en nuestro sistema que no sea la C: o la unidad en la que tengamos instalado el sistema.

# para crear volumenes desde windows:
- para crear volumenes desde desde comandos 
agregar el flag: -v <path del host ex.: d:/docker/data/:>:<path del container ex.: /sharedData/>
- para crear volumenes desde el docker-compose
agegar una seccion la seccion volumenes dentro de cada servicio ex.:
    volumes:
        - <path del host 1 ex.: d:/docker/data/:>:<path del container ex.: /sharedData1/>
        - <path del host 2 ex.: d:/docker/data/:>:<path del container ex.: /sharedData2/>
        .
        .
        - <path del host n ex.: d:/docker/data/:>:<path del container ex.: /sharedDatan/>

# notas acerca del dockerfile:
el dockerfile es un archivo que nos permite crear una imagen a partir de otra descargada desde
docker-hub, en la cual especificamos las operaciones que realizaremos al crear un contenedor
