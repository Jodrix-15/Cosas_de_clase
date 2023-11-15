
db.createCollection( 'marca', {validator: {$jsonSchema: {bsonType: 'object',title:'marca',required: [         'id',          'proveedor'],properties: {id: {bsonType: 'objectId'},proveedor: {bsonType: 'objectId'}}         }      },
autoIndexId:true
});  