
db.createCollection( 'cliente', {validator: {$jsonSchema: {bsonType: 'object',title:'cliente',required: [         'id',          'nombre',          'apellido',          'direccion',          'codigo_postal',          'telefono',          'Repartidor_pedido'],properties: {id: {bsonType: 'objectId'},nombre: {bsonType: 'string'},apellido: {bsonType: 'string'},direccion: {bsonType: 'string'},codigo_postal: {bsonType: 'int'},telefono: {bsonType: 'int'},Repartidor_pedido: {bsonType: 'objectId'}}         }      },
autoIndexId:true
});  