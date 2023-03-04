import { Api, NextjsSite, StackContext, Table } from "sst/constructs";
import { RDS } from "sst/constructs";

export function ExampleStack({ stack }: StackContext) {
  const DATABASE = "CounterDB";

  // Create the Aurora DB cluster
  const cluster = new RDS(stack, "Cluster", {
    engine: "postgresql10.14",
    defaultDatabaseName: DATABASE,
    migrations: "packages/migrations",
  });

  /*const table = new Table(stack, "Counter", {
    fields: {
      counter: "string",
    },
  
    primaryIndex: { partitionKey: "counter" },
  });*/

  // Add your first construct// Create a Next.js site
  const site = new NextjsSite(stack, "Site", {
    path: "frontend",
    environment: {
      // Pass the table details to our app
      REGION: "us-east-1",
      //TABLE_NAME: table.tableName,
    },
  });

  // Create a HTTP API
  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        bind: [cluster],
      },
    },
    routes: {
      "GET /clients": "packages/functions/src/clients.handler",
      "GET /test": "packages/functions/src/test.handler",
    },
  });

  // Show the resource info in the output
  stack.addOutputs({
    URL: site.url as any,
    ApiEndpoint: api.url,
    SecretArn: cluster.secretArn,
    ClusterIdentifier: cluster.clusterIdentifier,
  });
  // Allow the Next.js API to access the table
  //site.attachPermissions([table]);

  // Show the site URL in the output
  /*stack.addOutputs({
  });*/
}

