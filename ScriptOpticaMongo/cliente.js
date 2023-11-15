
db.createCollection( 'cliente', {validator: {$jsonSchema: {bsonType: 'object',title:'cliente',required: [         'id',          'nombre',          'CP',          'telefono',          'email',          'fecha_registro',          'cliente',          'empleado_vende_gafas'],properties: {id: {bsonType: 'objectId'},nombre: {bsonType: 'string'},CP: {bsonType: 'string'},telefono: {bsonType: 'int'},email: {bsonType: 'string'},fecha_registro: {bsonType: 'date'},cliente: {bsonType: 'objectId'},empleado_vende_gafas: {bsonType: 'objectId'}}         }      },
autoIndexId:true
});  