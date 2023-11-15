
db.createCollection( 'localidad', {validator: {$jsonSchema: {bsonType: 'object',title:'localidad',required: [         'id',          'nombre'],properties: {id: {bsonType: 'objectId'},nombre: {bsonType: 'string'}}         }      },
autoIndexId:true
});  