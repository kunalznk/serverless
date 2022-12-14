import { Context, APIGatewayProxyCallback, APIGatewayEvent } from 'aws-lambda';
import { DeleteItemCommand, GetItemCommand, QueryCommand, UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBClient, PutItemCommand , DynamoDBClientConfig} from "@aws-sdk/client-dynamodb";
import { marshall } from"@aws-sdk/util-dynamodb";
import { v4 as uuidv4 } from 'uuid';

const TableName = "notes";

const clientOpt : DynamoDBClientConfig = {
  region: "127.0.1.1",
  endpoint: "http://127.0.1.1:8000"
}

export const addNote =  async (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback)  =>  {

  try {
    
    const dynamo = new DynamoDBClient(clientOpt);
    
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

export const getNotes =  async (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback)  =>  {

  try {
    
      const dynamo = new DynamoDBClient(clientOpt);
      
      const user = "kunalznk-1";
      
      
      const getCmd = new QueryCommand({
        TableName,
          KeyConditionExpression: "userId = :user",
          ExpressionAttributeValues: {
            ":user" : { "S" : user }
          }
      })
    
    const notes = await dynamo.send(getCmd);
    
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Notes Fetched Successfully',
        notes,
      }),
    };
    
    return response;

  } catch(e) {
    console.log(e)
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

export const getNoteById =  async (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback)  =>  {

  try {
    
      const dynamo = new DynamoDBClient(clientOpt);
      const noteId = event.pathParameters?.noteId
      
      const userId = "kunalznk-1";
      
      const getCmd = new GetItemCommand({
        TableName,
        Key: marshall({
          userId,
          noteId
        })
      })
    
    const note = await dynamo.send(getCmd);
    
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: note?.Item ? 'Note Fetched Successfully' : 'Note not found',
        note,
      }),
    };
    
    return response;

  } catch(e) {
    console.log(e)
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

export const updateNoteById =  async (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback)  =>  {

  try {
    
      const dynamo = new DynamoDBClient(clientOpt);
      const {title , content , date } = JSON.parse(event.body!);
      const noteId = event.pathParameters?.noteId
      
      const userId = "kunalznk-1";
      // const noteId = "6a784ffb-de67-4cff-871d-b3d6a44855da"
      const updateCmd = new UpdateItemCommand({
        TableName,
        Key: {
          noteId : {
            "S": noteId!,
          },
          userId: {
            "S": userId
          }
        },
        UpdateExpression: "set title = :t, content = :c, #date = :d",
        ExpressionAttributeNames: {
          "#date": "date"
        },
        ExpressionAttributeValues: {
          ":t" : {
            "S": title
          },
          ":c" : {
            "S": content
          },
          ":d": {
            "S": date
          },
        },
        ReturnValues: "ALL_NEW"
      })
    
    const notes = await dynamo.send(updateCmd);
    console.log(notes)
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Note Updated Successfully',
        notes,
      }),
    };
    
    return response;

  } catch(e) {
    console.log(e)
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

export const deleteNoteById = async (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback)  =>  {

  try {
    
      const dynamo = new DynamoDBClient(clientOpt);
      const noteId = event.pathParameters?.noteId
      
      const userId = "kunalznk-1";
      const deleteCmd = new DeleteItemCommand({
        TableName,
        Key: {
          noteId : {
            "S": noteId!,
          },
          userId: {
            "S": userId
          }
        },
      })
    
    await dynamo.send(deleteCmd);
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Note Deleted Successfully',
      }),
    };
    
    return response;

  } catch(e) {
    console.log(e)
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
