import { RDSDataService } from "aws-sdk";
import { Kysely } from "kysely";
import { DataApiDialect } from "kysely-data-api";
import { RDS } from "sst/node/rds";

interface Database {
  clients: {
    name: string;
    id: number;
  };
}

const db = new Kysely<Database>({
  dialect: new DataApiDialect({
    mode: "postgres",
    driver: {
      database: RDS.Cluster.defaultDatabaseName,
      secretArn: RDS.Cluster.secretArn,
      resourceArn: RDS.Cluster.clusterArn,
      client: new RDSDataService() as any,
    },
  }),
});

export async function handler() {
  const record = await db
    .selectFrom("clients")
    .select("id")
    //.where("counter", "=", "hits")
    .execute();

  return {
    statusCode: 200,
    body: JSON.stringify(record),
  };
}