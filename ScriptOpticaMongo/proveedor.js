
db.createCollection( 'proveedor', {validator: {$jsonSchema: {bsonType: 'object',title:'proveedor',required: [         'id',          'direccion',          'telefono',          'dni'],properties: {id: {bsonType: 'objectId'},direccion: {bsonType: 'string'},telefono: {bsonType: 'int'},fax: {bsonType: 'int'},dni: {bsonType: 'int'}}         }      },
autoIndexId:true
});  