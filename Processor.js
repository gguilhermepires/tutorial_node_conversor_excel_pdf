class Processor {

    static Process(data) {
        var a = data.split("\r\n")
        var rows = [];

        a.forEach(row => {
            var cells = row.split(",");
            rows.push(cells);
        });
        
        return rows;

    }
}

module.exports = Processor;