const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.static(__dirname + "/data"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Main");
});

app.delete("/", (req, res) => {
    fs.readFile("./data/basket.json", (err, data) => {
        if (err) {
            throw err;
        }
        const item = req.body;
        console.log(req.body);
        let items = JSON.parse(data);

        items.forEach((current) => {
            if (current.fullname == item.fullname) {
                current.amount--;
            }
        });
        fs.writeFileSync(
            "./data/basket.json",
            JSON.stringify(items, null, "\t")
        );
        res.send("delete request done");
    });
});

app.get("/basket", (req, res) => {
    fs.readFile("./data/basket.json", (err, data) => {
        const items = JSON.parse(data);
        res.send({ items });
    });
});

app.post("/basket", (req, res) => {
    fs.readFile("./data/basket.json", (err, data) => {
        if (err) {
            throw err;
        }
        const item = req.body;
        let items = JSON.parse(data);
        let itemFound = false;
        items.forEach((current) => {
            if (current.fullname == item.fullname) {
                current.amount++;
                itemFound = true;
            }
        });
        if (!itemFound) {
            items.push(item);
        }
        fs.writeFileSync(
            "./data/basket.json",
            JSON.stringify(items, null, "\t")
        );
        res.send("ok");
    });
});

app.get("/catalog", (req, res) => {
    fs.readFile("./data/catalog.json", (err, data) => {
        const items = JSON.parse(data);
        res.send({ items });
    });
});

app.listen(3000, () => console.log("Listening on port 3000"));
