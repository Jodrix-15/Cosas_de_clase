
db.createCollection( 'pizza', {validator: {$jsonSchema: {bsonType: 'object',title:'pizza',required: [         'id',          'nombre',          'descripcion',          'imagen',          'precio',          'categoria',          'pedido'],properties: {id: {bsonType: 'objectId'},nombre: {bsonType: 'string'},descripcion: {bsonType: 'string'},imagen: {bsonType: 'string'},precio: {bsonType: 'decimal'},categoria: {bsonType: 'objectId'},pedido: {bsonType: 'objectId'}}         }      },
autoIndexId:true
});  