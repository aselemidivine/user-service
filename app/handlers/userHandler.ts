import { APIGatewayProxyEventV2 } from "aws-lambda";
import { UserService } from "app/service/userService";


const service = new UserService;

export const Signup = async (event: APIGatewayProxyEventV2) => {
    console.log(event);

    return service.CreateUser(event)
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
export const Verify = async (event: APIGatewayProxyEventV2) => {
    console.log(event);
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            message: "response from Verify",
            data: {}
        }),
    };
};
export const Login = async (event: APIGatewayProxyEventV2) => {
    console.log(event);
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            message: "response from Login",
            data: {}
        }),
    };
};
export const Profile = async (event: APIGatewayProxyEventV2) => {
    console.log(event);
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            message: "response from Profile",
            data: {}
        }),
    };
};
export const Cart = async (event: APIGatewayProxyEventV2) => {
    console.log(event);
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            message: "response from Cart",
            data: {}
        }),
    };
};
export const Payment = async (event: APIGatewayProxyEventV2) => {
    console.log(event);
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            message: "response from Payment",
            data: {}
        }),
    };
};