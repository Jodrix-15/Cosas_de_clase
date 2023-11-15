
db.createCollection( 'gafas', {validator: {$jsonSchema: {bsonType: 'object',title:'gafas',required: [         'id',          'precio',          'proveedor',          'marca',          'empleado_vende_gafas'],properties: {id: {bsonType: 'objectId'},precio: {bsonType: 'decimal'},color_cristal: {bsonType: 'string'},color_montura: {bsonType: 'string'},tipo_montura: {bsonType: 'string'},graduacion: {bsonType: 'decimal'},proveedor: {bsonType: 'objectId'},marca: {bsonType: 'objectId'},empleado_vende_gafas: {bsonType: 'objectId'}}         }      },
autoIndexId:true
});  