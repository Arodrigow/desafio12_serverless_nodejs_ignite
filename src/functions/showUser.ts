import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "src/utils/dynamodbClient";

export const handle: APIGatewayProxyHandler = async (event) => {
    const { userid } = event.pathParameters;

    const response = await document.scan({
        TableName: "users",
        FilterExpression: "user_id = :user_id",
        ExpressionAttributeValues: {
            ":user_id": userid
        }
    }).promise();

    const todos = response.Items;

    return {
        statusCode: 200,
        body: JSON.stringify(todos),
    }
}