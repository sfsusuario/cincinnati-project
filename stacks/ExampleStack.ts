import { Api, NextjsSite, StackContext, Table } from "sst/constructs";
import { RDS } from "sst/constructs";

export function ExampleStack({ stack }: StackContext) {
  /*new RDS(stack, "Database", {
    engine: "postgresql11.13",
    defaultDatabaseName: "acme",
    migrations: "migration",
  });*/

  const table = new Table(stack, "Counter", {
    fields: {
      counter: "string",
    },
  
    primaryIndex: { partitionKey: "counter" },
  });
    // Add your first construct// Create a Next.js site
  const site = new NextjsSite(stack, "Site", {
    path: "frontend",
    environment: {
      // Pass the table details to our app
      REGION: "us-east-1",
      TABLE_NAME: table.tableName,
    },
  });

  // Allow the Next.js API to access the table
  site.attachPermissions([table]);

  // Show the site URL in the output
  stack.addOutputs({
    URL: site.url,
  });
}

