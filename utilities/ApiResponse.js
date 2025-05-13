export class ApiResponse {
    constructor({ statusCode = 200, success = true, message = 'Task Completed!', data = null }) {
        this.statusCode = statusCode;
        this.success = success;
        this.message = message;
        this.data = data;
    }

    send(res) {
        return res.status(this.statusCode).json({
            statusCode: this.statusCode,
            success: this.success,
            message: this.message,
            data: this.data
        });
    }
}
