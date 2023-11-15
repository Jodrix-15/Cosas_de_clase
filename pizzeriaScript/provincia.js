
db.createCollection( 'provincia', {validator: {$jsonSchema: {bsonType: 'object',title:'provincia',required: [         'id',          'nombre',          'localidad'],properties: {id: {bsonType: 'objectId'},nombre: {bsonType: 'string'},localidad: {bsonType: 'objectId'}}         }      },
autoIndexId:true
});  