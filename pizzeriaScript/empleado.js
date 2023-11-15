
db.createCollection( 'empleado', {validator: {$jsonSchema: {bsonType: 'object',title:'empleado',required: [         'id',          'nombre',          'apellido',          'dni',          'telefono',          'tienda'],properties: {id: {bsonType: 'objectId'},nombre: {bsonType: 'string'},apellido: {bsonType: 'string'},dni: {bsonType: 'string'},telefono: {bsonType: 'int'},tienda: {bsonType: 'objectId'}}         }      },
autoIndexId:true
});  