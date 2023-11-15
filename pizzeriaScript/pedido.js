
db.createCollection( 'pedido', {validator: {$jsonSchema: {bsonType: 'object',title:'pedido',required: [         'id',          'fecha/hora',          'cantidad_productos',          'precio',          'tipo',          'cliente',          'tienda'],properties: {id: {bsonType: 'objectId'},fecha/hora: {bsonType: 'timestamp'},cantidad_productos: {bsonType: 'int'},precio: {bsonType: 'decimal'},tipo: {bsonType: 'string'},cliente: {bsonType: 'objectId'},tienda: {bsonType: 'objectId'}}         }      },
autoIndexId:true
});  