export default class ErrorHTTP{
    statusCode: number
    message: string

    constructor(message: string, statusCode:number){
        this.message = message
        this.statusCode = statusCode
    }
}