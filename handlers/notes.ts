import { Context, APIGatewayProxyCallback, APIGatewayEvent } from 'aws-lambda';
import { DynamoDBClient, BatchExecuteStatementCommand, PutItemCommand , } from "@aws-sdk/client-dynamodb";
import { marshall } from"@aws-sdk/util-dynamodb";
import { v4 as uuidv4 } from 'uuid';

const TableName = "notes";

export const addNote =  async (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback)  =>  {

  try {
    
      const dynamo = new DynamoDBClient({
      region: "127.0.1.1",
      endpoint: "http://127.0.1.1:8000"
    });
    
    const { title , content , date, userId } = JSON.parse(event.body!);
    const noteId = uuidv4();
    const putCmd = new PutItemCommand({
      TableName,
      Item: marshall(
        {
        userId,
        noteId,
        title,
        content,
        date
      }
      )
    });
  
    const note = await dynamo.send(putCmd)
    
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Note Added Successfully',
        note,
      }),
    };
    
    return response;

  } catch(e) {
    
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'General Server Error',
        e,
      }),
    };
    return response;
  }    
}
