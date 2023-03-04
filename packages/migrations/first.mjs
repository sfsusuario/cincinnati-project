import { Kysely } from "kysely";

/**
 * @param db {Kysely<any>}
 */
export async function up(db) {
  try {
    //await db.schema.dropTable("request").execute();
    //await db.schema.dropTable("clients").execute();
  } catch(e) {}
  
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
  await db
    .insertInto("clients")
    .values({
      id: 1,
      name: "sam",
    })
    .values({
      id: 2,
      name: "doug",
    });
  
  await db
    .insertInto("request")
    .values({
      id: 1,
      client_id: 1,
      api_calls: 0,
    })
    .values({
      id: 2,
      client_id: 2,
      api_calls: 0,
    })
}

/**
 * @param db {Kysely<any>}
 */
export async function down(db) {
  await db.schema.dropTable("request").execute();
  await db.schema.dropTable("clients").execute();
}