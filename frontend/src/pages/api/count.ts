
import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: process.env.REGION ?? "us-east-1",
});

const consultar = async () => {

  const getParams = {
    // Get the table name from the environment variable
    TableName: process.env.TABLE_NAME,
    // Get the row where the counter is called "hits"
    Key: {
      counter: "hits",
    },
  } as any;
  const results = await dynamoDb.get(getParams).promise();

  // If there is a row, then get the value of the
  // column called "tally"
  let count = results.Item ? results.Item.tally : 0;

  const putParams = {
    TableName: process.env.TABLE_NAME,
    Key: {
      counter: "hits",
    },
    // Update the "tally" column
    UpdateExpression: "SET tally = :count",
    ExpressionAttributeValues: {
      // Increase the count
      ":count": ++count,
    },
  } as any;

  await dynamoDb.update(putParams).promise();
  
  return count;
}

export default async function handler(req: any, res: any) {
  let count = 0;
  try{
    count = await consultar();
  } catch(e: any) {
    count = e.message;
  }
  res.status(200).send(count);
}