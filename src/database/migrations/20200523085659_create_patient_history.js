
exports.up = function(knex) {
  return knex.schema.createTable('patient_history', function (table){
    table.string('cpf', 11).notNullable()
    table.integer('score').notNullable()
    table.string('priority').notNullable()
    table.timestamp('createdAt').defaultTo(knex.fn.now())

    table.primary(['cpf', 'createdAt'])
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('patient_history');
};
