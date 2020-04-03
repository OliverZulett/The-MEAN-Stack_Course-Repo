# entrar a la shell 
mongo -u root -p root
# crear base de datos 
use <db-name>
# crear una coleccion e insertar un documento y crear un campo
db.alumnos.insert({"name":"oliver","surname":"zulett"})
