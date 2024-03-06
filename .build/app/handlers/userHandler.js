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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = exports.Profile = exports.Login = exports.Verify = exports.Signup = void 0;
const tsyringe_1 = require("tsyringe");
const userService_1 = require("../service/userService");
const response_1 = require("../utility/response");
const core_1 = __importDefault(require("@middy/core"));
const http_json_body_parser_1 = __importDefault(require("@middy/http-json-body-parser"));
const service = tsyringe_1.container.resolve(userService_1.UserService);
exports.Signup = (0, core_1.default)((event) => {
    return service.CreateUser(event);
}).use((0, http_json_body_parser_1.default)());
// export const Signup = async (event: APIGatewayProxyEventV2) => {
//   return service.CreateUser(event);
// };
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