import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController {

    async create(request: Request, response: Response) {
        const { admin_id, text, user_id, } = request.body;

        const messagesService = new MessagesService();

        try {
            const messages = await messagesService.create( { 
                admin_id,
                text,
                user_id, 
            } );
            return response.json(messages);
        } catch (err) {
            return response.status(400).json({
                message: err.message,
            });
        }
    }
}

export { MessagesController }