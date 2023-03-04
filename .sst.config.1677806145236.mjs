import { createRequire as topLevelCreateRequire } from 'module';const require = topLevelCreateRequire(import.meta.url);
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// stacks/ExampleStack.ts
import { NextjsSite, Table } from "sst/constructs";
function ExampleStack({ stack }) {
  const table = new Table(stack, "Counter", {
    fields: {
      counter: "string"
    },
    primaryIndex: { partitionKey: "counter" }
  });
  const site = new NextjsSite(stack, "Site", {
    path: "frontend",
    environment: {
      REGION: "us-east-1",
      TABLE_NAME: table.tableName
    }
  });
  site.attachPermissions([table]);
  stack.addOutputs({
    URL: site.url
  });
}
__name(ExampleStack, "ExampleStack");

// sst.config.ts
var sst_config_default = {
  config(_input) {
    return {
      name: "nextjs-app",
      region: "us-east-1"
    };
  },
  stacks(app) {
    app.stack(ExampleStack);
  }
};
export {
  sst_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3RhY2tzL0V4YW1wbGVTdGFjay50cyIsICJzc3QuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBBcGksIE5leHRqc1NpdGUsIFN0YWNrQ29udGV4dCwgVGFibGUgfSBmcm9tIFwic3N0L2NvbnN0cnVjdHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEV4YW1wbGVTdGFjayh7IHN0YWNrIH06IFN0YWNrQ29udGV4dCkge1xuICBjb25zdCB0YWJsZSA9IG5ldyBUYWJsZShzdGFjaywgXCJDb3VudGVyXCIsIHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIGNvdW50ZXI6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgXG4gICAgcHJpbWFyeUluZGV4OiB7IHBhcnRpdGlvbktleTogXCJjb3VudGVyXCIgfSxcbiAgfSk7XG4gICAgLy8gQWRkIHlvdXIgZmlyc3QgY29uc3RydWN0Ly8gQ3JlYXRlIGEgTmV4dC5qcyBzaXRlXG4gIGNvbnN0IHNpdGUgPSBuZXcgTmV4dGpzU2l0ZShzdGFjaywgXCJTaXRlXCIsIHtcbiAgICBwYXRoOiBcImZyb250ZW5kXCIsXG4gICAgZW52aXJvbm1lbnQ6IHtcbiAgICAgIC8vIFBhc3MgdGhlIHRhYmxlIGRldGFpbHMgdG8gb3VyIGFwcFxuICAgICAgUkVHSU9OOiBcInVzLWVhc3QtMVwiLFxuICAgICAgVEFCTEVfTkFNRTogdGFibGUudGFibGVOYW1lLFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vIEFsbG93IHRoZSBOZXh0LmpzIEFQSSB0byBhY2Nlc3MgdGhlIHRhYmxlXG4gIHNpdGUuYXR0YWNoUGVybWlzc2lvbnMoW3RhYmxlXSk7XG5cbiAgLy8gU2hvdyB0aGUgc2l0ZSBVUkwgaW4gdGhlIG91dHB1dFxuICBzdGFjay5hZGRPdXRwdXRzKHtcbiAgICBVUkw6IHNpdGUudXJsLFxuICB9KTtcbn1cblxuIiwgImltcG9ydCB7IFNTVENvbmZpZyB9IGZyb20gXCJzc3RcIjtcbmltcG9ydCB7IEV4YW1wbGVTdGFjayB9IGZyb20gXCIuL3N0YWNrcy9FeGFtcGxlU3RhY2tcIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbmZpZyhfaW5wdXQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogXCJuZXh0anMtYXBwXCIsXG4gICAgICByZWdpb246IFwidXMtZWFzdC0xXCIsXG4gICAgfTtcbiAgfSxcbiAgc3RhY2tzKGFwcCkge1xuICAgIGFwcC5zdGFjayhFeGFtcGxlU3RhY2spXG4gIH0sXG59IHNhdGlzZmllcyBTU1RDb25maWc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7OztBQUFBLFNBQWMsWUFBMEIsYUFBYTtBQUU5QyxTQUFTLGFBQWEsRUFBRSxNQUFNLEdBQWlCO0FBQ3BELFFBQU0sUUFBUSxJQUFJLE1BQU0sT0FBTyxXQUFXO0FBQUEsSUFDeEMsUUFBUTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1g7QUFBQSxJQUVBLGNBQWMsRUFBRSxjQUFjLFVBQVU7QUFBQSxFQUMxQyxDQUFDO0FBRUQsUUFBTSxPQUFPLElBQUksV0FBVyxPQUFPLFFBQVE7QUFBQSxJQUN6QyxNQUFNO0FBQUEsSUFDTixhQUFhO0FBQUEsTUFFWCxRQUFRO0FBQUEsTUFDUixZQUFZLE1BQU07QUFBQSxJQUNwQjtBQUFBLEVBQ0YsQ0FBQztBQUdELE9BQUssa0JBQWtCLENBQUMsS0FBSyxDQUFDO0FBRzlCLFFBQU0sV0FBVztBQUFBLElBQ2YsS0FBSyxLQUFLO0FBQUEsRUFDWixDQUFDO0FBQ0g7QUF6QmdCOzs7QUNDaEIsSUFBTyxxQkFBUTtBQUFBLEVBQ2IsT0FBTyxRQUFRO0FBQ2IsV0FBTztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPLEtBQUs7QUFDVixRQUFJLE1BQU0sWUFBWTtBQUFBLEVBQ3hCO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
