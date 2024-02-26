"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = exports.Profile = exports.Login = exports.Verify = exports.Signup = void 0;
const userService_1 = require("app/service/userService");
const response_1 = require("app/utility/response");
const service = new userService_1.UserService();
const Signup = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return service.CreateUser(event);
});
exports.Signup = Signup;
const Verify = (event) => __awaiter(void 0, void 0, void 0, function* () { });
exports.Verify = Verify;
const Login = (event) => __awaiter(void 0, void 0, void 0, function* () {
    //   return service.UserLogin(event);
});
exports.Login = Login;
const Profile = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if (httpMethod === "post") {
        return service.CreateProfile(event);
    }
    else if (httpMethod === "put") {
        return service.EditProfile(event);
    }
    else if (httpMethod === "get") {
        return service.GetProfile(event);
    }
    else {
        return (0, response_1.ErrorResponse)(404, "requested method is not supported");
    }
});
exports.Profile = Profile;
const Cart = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if (httpMethod === "post") {
        return service.CreateCart(event);
    }
    else if (httpMethod === "put") {
        return service.UpdateCart(event);
    }
    else if (httpMethod === "get") {
        return service.GetCart(event);
    }
    else {
        return (0, response_1.ErrorResponse)(404, "requested method is not supported");
    }
});
exports.Cart = Cart;
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
//# sourceMappingURL=userHandler.js.map