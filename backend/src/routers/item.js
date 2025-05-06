const express = require("express");
const Item = require("../models/item");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/items", auth, async (req, res) => {
  const item = new Item({
    ...req.body,
  });

  try {
    await item.save();
    res.status(201).send(item);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/items", async (req, res) => {
  const match = {};
  const sort = {};
  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(":");
    sort[parts[0]] = parts[1] === "desc" ? -1 : 1;
  }

  try {
    const items = await Item.find({});
    res.status(200).send(items);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/items/:id", auth, async (req, res) => {
  const _id = req.params.id;

  try {
    const item = await Item.findOne({ _id });

    if (!item) {
      return res.status(404).send();
    }

    res.status(200).send(item);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch("/items/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "title", "price", "image", "category"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid update!" });
  }

  try {
    const item = await Item.findOne({ _id: req.params.id });

    if (!item) {
      return res.status(404).send();
    }

    updates.forEach((update) => (item[update] = req.body[update]));
    await item.save();
    res.send(item);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/items/:id", auth, async (req, res) => {
  try {
    const item = await Item.findOneAndDelete({ _id: req.params.id });

    if (!item) {
      return res.status(404).send();
    }

    res.send(item);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
