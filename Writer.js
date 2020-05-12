const fs = require("fs");
const util = require("util");

class Writer{

    constructor() {
        this.writer = util.promisify(fs.writeFile);
    }

    async Write(filapath,data) {

        try {
            await this.writer(filapath, data);
            return true;
        } catch (error) {
            console.log("erro ao escrever o arquivo");
            return false
        }
    }
}
module.exports = Writer;