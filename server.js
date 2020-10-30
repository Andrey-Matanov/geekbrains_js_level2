const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.static(__dirname + "/data"));
app.use(express.json());

const goodsRouter = express.Router();

app.get("/", (req, res) => res.send({ msg: "Hello, Vasya!" }));

goodsRouter.get("/:id", (req, res) => {
    fs.readFile("./data/catalog.json", (err, data) => {
        if (!err) {
            let good;
            try {
                const goods = JSON.parse(data);
                good = goods.find((good) => good.id == req.params.id);
            } catch (e) {
                res.status(500).json({ error: "error parsing datafile" });
            }

            if (good) {
                res.json({ good: good });
            } else {
                res.status(404).json("no such good with id " + req.params.id);
            }
        } else {
            res.status(500).json({ error: "no data file!" });
        }
    });
});

goodsRouter.post("/", (req, res) => {
    const newGood = req.body;
    fs.readFile("./data/catalog.json", (err, data) => {
        const goods = JSON.parse(data);

        if (goods.find((good) => good.id_product == newGood.id_product)) {
            res.status("400").json({
                error: "already have good with id " + newGood.id_product,
            });
        } else {
            goods.push(newGood);
            fs.writeFileSync(
                "./public/catalogData.json",
                JSON.stringify(goods, null, "\t")
            );
            res.json({ result: "added good ok", id: newGood.id_product });
        }
    });
});

app.use("/api", goodsRouter);

app.listen(3000, () => console.log("Listening on port 3000"));
