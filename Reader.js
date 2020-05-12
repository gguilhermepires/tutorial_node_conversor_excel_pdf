const fs = require("fs");
const util = require("util");

class Reader {

    constructor() {
        this.reader = util.promisify(fs.readFile);
    }

    async Read(filapath) {
        try {
            return await this.reader(filapath, "utf-8");

        } catch (error) {
            console.log("erro ao ler o arquivo");
            return undefined
        }
    }
}

module.exports = Reader;