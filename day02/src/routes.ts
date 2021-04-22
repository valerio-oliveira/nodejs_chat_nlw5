import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

routes.post("/settings", assync (request, response) => {
    const { chat, username } = request.body;

    const settingsRepository = getCustomRepository(SettingsRepository);

    const settings = settingsRepository.create({
        chat,
        username
    })

    await settingsRepository.save(settings);

    return response.json(settings);
});

export { routes }