
db.createCollection( 'categoria', {validator: {$jsonSchema: {bsonType: 'object',title:'categoria',required: [         'id',          'nombre'],properties: {id: {bsonType: 'objectId'},nombre: {bsonType: 'string'}}         }      },
autoIndexId:true
});  