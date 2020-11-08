const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.static(__dirname + "/data"));
app.use(express.json());

app.get("/basket", (req, res) => {
    fs.readFile("./data/basket.json", (err, data) => {
        if (err) {
            res.send("Ошибка чтения файла");
        } else {
            const items = JSON.parse(data);
            res.send({ items });
        }
    });
});

app.post("/basket/add", (req, res) => {
    fs.readFile("./data/basket.json", (err, data) => {
        if (err) {
            res.send("Ошибка чтения файла");
        } else {
            const itemName = req.body.fullname;
            const basketItems = JSON.parse(data);
            let itemFound = false;
            for (let i = 0; i < basketItems.length; i++) {
                if (basketItems[i].fullname == itemName) {
                    basketItems[i].amount++;
                    fs.writeFileSync(
                        "./data/basket.json",
                        JSON.stringify(basketItems, null, "\t")
                    );
                    fs.readFile("./data/stats.json", (err, data) => {
                        const stats = JSON.parse(data);
                        const currentTime = new Date();
                        const currentTimeString = `${currentTime.toLocaleDateString()} ${currentTime.toLocaleTimeString()}`;
                        const newPost = {
                            name: basketItems[i].title,
                            type: "добавлен",
                            time: currentTimeString,
                        };
                        stats.push(newPost);
                        fs.writeFileSync(
                            "./data/stats.json",
                            JSON.stringify(stats, null, "\t")
                        );
                    });
                    res.send("ok");
                    itemFound = true;
                    break;
                }
            }
            if (!itemFound) {
                fs.readFile("./data/catalog.json", (err, data) => {
                    if (err) {
                        res.send("Каталог не найден");
                    } else {
                        const catalogItems = JSON.parse(data);
                        let newItem = catalogItems.find(
                            (good) => good.fullname == itemName
                        );
                        if (newItem) {
                            basketItems.push({ ...newItem, amount: 1 });
                            fs.writeFileSync(
                                "./data/basket.json",
                                JSON.stringify(basketItems, null, "\t")
                            );
                            fs.readFile("./data/stats.json", (err, data) => {
                                const stats = JSON.parse(data);
                                const currentTime = new Date();
                                const currentTimeString = `${currentTime.toLocaleDateString()} ${currentTime.toLocaleTimeString()}`;
                                const newPost = {
                                    name: newItem.title,
                                    type: "добавлен",
                                    time: currentTimeString,
                                };
                                stats.push(newPost);
                                fs.writeFileSync(
                                    "./data/stats.json",
                                    JSON.stringify(stats, null, "\t")
                                );
                                res.send("Статистика обновлена");
                            });
                            res.send("ok");
                        } else {
                            res.send("Такого товара нет в каталоге");
                        }
                    }
                });
            }
        }
    });
});

app.delete("/basket/delete", (req, res) => {
    fs.readFile("./data/basket.json", (err, data) => {
        if (err) {
            res.send("Ошибка чтения файла");
        }
        const item = req.body;
        console.log(req.body);
        let items = JSON.parse(data);

        items.forEach((current) => {
            if (current.fullname == item.fullname) {
                const name = current.title;
                current.amount--;
                fs.readFile("./data/stats.json", (err, data) => {
                    const stats = JSON.parse(data);
                    const currentTime = new Date();
                    const currentTimeString = `${currentTime.toLocaleDateString()} ${currentTime.toLocaleTimeString()}`;
                    const newPost = {
                        name,
                        type: "удален",
                        time: currentTimeString,
                    };
                    stats.push(newPost);
                    fs.writeFileSync(
                        "./data/stats.json",
                        JSON.stringify(stats, null, "\t")
                    );
                });
                if (current.amount == 0) {
                    const index = items.indexOf(current);
                    items.splice(index, 1);
                }
            }
        });
        fs.writeFileSync(
            "./data/basket.json",
            JSON.stringify(items, null, "\t")
        );
        res.send("delete request done");
    });
});

app.get("/catalog", (req, res) => {
    fs.readFile("./data/catalog.json", (err, data) => {
        if (err) {
            res.send("Ошибка чтения файла");
        } else {
            const items = JSON.parse(data);
            res.send({ items });
        }
    });
});

app.get("/catalog/:id", (req, res) => {
    fs.readFile("./data/catalog.json", (err, data) => {
        if (err) {
            res.send("Ошибка чтения файла");
        } else {
            const items = JSON.parse(data);
            const currentID = req.params.id;
            const good = items.find((good) => good.id == currentID);
            if (good) {
                res.send(good);
            } else {
                res.send("Такого товара нет в каталоге");
            }
        }
    });
});

app.listen(3000, () => console.log("Listening on port 3000"));
