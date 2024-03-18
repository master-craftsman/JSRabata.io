const {expect} = require("@playwright/test");
exports.Helpers = class Helpers {
    async generateEmail(length = 10, domain = "example.com") {
        /*
        Генерирует случайный адрес электронной почты.
        */
        let username = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            username += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        const email = `${username}@${domain}`;

        return email;
    }
    async Calculation(setValue) {
        const k = {
            'rabataStored': 59,
            // 'azureStored': 208,
            // 'amazonStored': 260,
            // 'googleStored': 230,
        };
        for (const key in k) {
            if (k.hasOwnProperty(key)) {
                const value = k[key];
                const calculatedStored = Math.ceil(setValue / 10 - 0.01) * value * 12;
                return calculatedStored
            }
        }
    }
}



