import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "../utils/dynamodbClient";
import { v4 as uuid } from "uuid"

interface ICreateUser {
    title: string,
    deadline: Date,
}

export const handle: APIGatewayProxyHandler = async (event) => {
    const { userid } = event.pathParameters;
    const { title, deadline } = JSON.parse(event.body) as ICreateUser;

    await document.put({
        TableName: "users",
        Item: {
            id: uuid(),
            user_id: userid,
            title,
            done: false,
            deadline: new Date(deadline).toDateString(),
        }
    }).promise();

    return {
        statusCode: 201,
        body: JSON.stringify({
            message: "User successfuly created",
        }),
        headers: {
            "content-type": "application/json"
        }
    }
}