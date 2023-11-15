
db.createCollection( 'bebida', {validator: {$jsonSchema: {bsonType: 'object',title:'bebida',required: [         'id',          'nombre',          'descripcion',          'imagen',          'precio',          'pedido'],properties: {id: {bsonType: 'objectId'},nombre: {bsonType: 'string'},descripcion: {bsonType: 'string'},imagen: {bsonType: 'string'},precio: {bsonType: 'decimal'},pedido: {bsonType: 'objectId'}}         }      },
autoIndexId:true
});  