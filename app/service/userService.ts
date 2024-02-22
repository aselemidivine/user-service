import { APIGatewayProxyEventV2 } from "aws-lambda";
import {SuccessResponse, ErrorResponse} from "../utility/response";

export class UserService {
    constructor() {}
        async CreateUser(event: APIGatewayProxyEventV2) {
            return SuccessResponse({message: "Response from create user"});
        }
}