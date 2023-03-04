import { RDSDataService } from "aws-sdk";
import { Kysely } from "kysely";
import { DataApiDialect } from "kysely-data-api";
import { RDS } from "sst/node/rds";

export async function handler() {
  return {
    statusCode: 200,
    body: "test",
  };
}