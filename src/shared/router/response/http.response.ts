import { Response } from "express";

export enum HttpStatus {
    OK = 200,
    NOT_FOUND = 404,
    UNAUTORIZED = 401,
    FORBIDDEN = 403,
    INTERNAL_SERVER_ERROR = 500
}
export class HttpResponse {
    OK(res: Response, data?: any): Response{
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            statusMsg: "Success",
            data: data,
        });

    }
    NotFound(res: Response, data?: any): Response{
        return res.status(HttpStatus.NOT_FOUND).json({
            status: HttpStatus.NOT_FOUND,
            statusMsg: "Not Found",
            error: data,
        });

    }
    unautorized(res: Response, data?: any): Response{
        return res.status(HttpStatus.UNAUTORIZED).json({
            status: HttpStatus.UNAUTORIZED,
            statusMsg: "unautorized",
            error: data,
        });

    }
    forbidden(res: Response, data?: any): Response{
        return res.status(HttpStatus.FORBIDDEN).json({
            status: HttpStatus.FORBIDDEN,
            statusMsg: "forbidden",
            error: data,
        });

    }
    Error(res: Response, data?: any): Response{
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            statusMsg: "Internal Server Error",
            error: data,
        });

    }

}