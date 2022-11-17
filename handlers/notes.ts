import { Context, APIGatewayProxyCallback, APIGatewayEvent } from 'aws-lambda';

export const addNote =  async (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback)  =>  {

  console.log(event)
  
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Adding Note....',
      input: event,
    }),
  };

  callback(null, response);
}

export async function getNote(event, context, callback) {

  
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Getting Note....',
        input: event,
      }),
    };
  
    callback(null, response);
  }