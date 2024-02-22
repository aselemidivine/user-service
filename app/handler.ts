import { APIGatewayAuthorizerEvent, APIGatewayRequestAuthorizerEventV2 } from "aws-lambda";

export const Signup = async (event: APIGatewayRequestAuthorizerEventV2) => {
    console.log(event);
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            message: "response from signup",
            data: {}
        }),
    };
};