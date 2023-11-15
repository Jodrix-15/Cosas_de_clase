
db.createCollection( 'empleado_vende_gafas', {validator: {$jsonSchema: {bsonType: 'object',title:'empleado_vende_gafas',required: [         'id'],properties: {id: {bsonType: 'objectId'}}         }      },
autoIndexId:true
});  