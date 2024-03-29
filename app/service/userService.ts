import { APIGatewayProxyEventV2 } from "aws-lambda";
import {SuccessResponse, ErrorResponse} from "../utility/response";
import {UserRepository} from "../repository/userRepository";
import { autoInjectable } from "tsyringe";
import { plainToClass } from "class-transformer";
import { SignupInput } from "../models/dto/Signup";
import { AppValidationError } from "../utility/errors";


// Inject any dependency needed to create the userservice.
@autoInjectable()
export class UserService {
    repository: UserRepository;
    constructor( repository: UserRepository) {
        this.repository = repository;
    }

    // User creation, validation and login
        async CreateUser(event: APIGatewayProxyEventV2) {
            const input = plainToClass(SignupInput, event.body);
            const error = await AppValidationError(input); 
            if (error) return ErrorResponse(404, error);

            // await this.repository.CreateUserOperation();
            return SuccessResponse(input);
        }
        async UserLogin(event: APIGatewayProxyEventV2) {
            return SuccessResponse({message: "Response from login user"});
        }
        async VerifyUser(event: APIGatewayProxyEventV2) {
            return SuccessResponse({message: "Response from verify user"});
        }

        // User profile
        async CreateProfile(event: APIGatewayProxyEventV2) {
            return SuccessResponse({message: "Response from create user"});
        }
        async GetProfile(event: APIGatewayProxyEventV2) {
            return SuccessResponse({message: "Response from get user"});
        }
        async EditProfile(event: APIGatewayProxyEventV2) {
            return SuccessResponse({message: "Response from edit user"});
        }

        // Cart Section
        async CreateCart(event: APIGatewayProxyEventV2) {
            return SuccessResponse({message: "Response from verify user"});
        }
        async GetCart(event: APIGatewayProxyEventV2) {
            return SuccessResponse({message: "Response from verify user"});
        }
        async UpdateCart(event: APIGatewayProxyEventV2) {
            return SuccessResponse({message: "Response from verify user"});
        }

        // Payment section
        async CreatePaymentMethod(event: APIGatewayProxyEventV2) {
            return SuccessResponse({message: "Response from payment"});
        }
}