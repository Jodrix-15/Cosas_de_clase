
db.createCollection( 'Repartidor_pedido', {validator: {$jsonSchema: {bsonType: 'object',title:'Repartidor_pedido',required: [         'id',          'fecha',          'empleado'],properties: {id: {bsonType: 'objectId'},fecha: {bsonType: 'date'},empleado: {bsonType: 'objectId'}}         }      },
autoIndexId:true
});  