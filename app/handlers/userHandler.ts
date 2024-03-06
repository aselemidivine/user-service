import { APIGatewayProxyEventV2 } from "aws-lambda";
import { UserService } from "app/service/userService";
import { ErrorResponse } from "app/utility/response";
import middy from "@middy/core";
import bodyParser from "@middy/http-json-body-parser";

const service = new UserService();

export const Signup = middy((event: APIGatewayProxyEventV2) => {
  return service.CreateUser(event);
}).use(bodyParser());

export const Verify = async (event: APIGatewayProxyEventV2) => {};
export const Login = async (event: APIGatewayProxyEventV2) => {
  //   return service.UserLogin(event);
};
export const Profile = async (event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext.http.method.toLowerCase();
  if (httpMethod === "post") {
    return service.CreateProfile(event);
  } else if (httpMethod === "put") {
    return service.EditProfile(event);
  } else if (httpMethod === "get") {
    return service.GetProfile(event);
  } else {
    return ErrorResponse(404, "requested method is not supported");
  }
};
export const Cart = async (event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext.http.method.toLowerCase();
  if (httpMethod === "post") {
    return service.CreateCart(event);
  } else if (httpMethod === "put") {
    return service.UpdateCart(event);
  } else if (httpMethod === "get") {
    return service.GetCart(event);
  } else {
    return ErrorResponse(404, "requested method is not supported");
  }
};
// export const Payment = async (event: APIGatewayProxyEventV2) => {
//   const httpMethod = event.requestContext.http.method.toLowerCase();
//   if (httpMethod === "post") {
//     return service.CreatePaymentMethod(event);
//   } else if (httpMethod === "put") {
//     return service.UpdatePaymentMethod(event);
//   } else if (httpMethod === "get") {
//     return service.GetPaymentMethod(event);
//   } else {
//     return ErrorResponse(404, "requested method is not supported");
//   }
// };
