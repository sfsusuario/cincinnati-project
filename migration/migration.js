async function up(db) {
    await db.schema
        .createTable("clients")
        .addColumn("id", "serial", (col) => col.primaryKey())
        .addColumn("name", "varchar", (col) => col.notNull())
        .execute();
    await db.schema
        .createTable("request")
        .addColumn("id", "serial", (col) => col.primaryKey())
        .addColumn("client_id", "integer", (col) => col.notNull())
        .foreign('client_id').references('id').inTable('clients')
        .addColumn("api_calls", "integer", (col) => col.notNull())
        .execute();
  }
  
  async function down(db) {
    await db.schema.dropTable("person").execute();
  }
  
  module.exports = { up, down };