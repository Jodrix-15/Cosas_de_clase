
db.createCollection( 'tienda', {validator: {$jsonSchema: {bsonType: 'object',title:'tienda',required: [         'id',          'direccion',          'localidad'],properties: {id: {bsonType: 'objectId'},direccion: {bsonType: 'string'},localidad: {bsonType: 'objectId'}}         }      }});  