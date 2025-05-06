const express = require("express");
const multer = require("multer");
const User = require("../models/user");
const auth = require("../middleware/auth");

const router = new express.Router();

createAdmin = async () => {
  console.log("Connected to MongoDB");

  const name = process.env.ADMIN_NAME;
  const password = process.env.ADMIN_PASSWORD;
  const email = process.env.ADMIN_EMAIL;
  try {
    if (name && password && email) {
      try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
          const user = new User({ name, password, email });
          await user.save();
          console.log("Admin created successfully");
        } else {
          console.log("Admin already exists");
        }
      } catch (error) {
        console.error("Error creating admin:", error);
      }
    } else {
      console.error("Environment variables for user creation are not set");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

createAdmin();

router.post("/users", auth, async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send({ user });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});

router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();

    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});

router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid update!" });
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/users/me", auth, async (req, res) => {
  try {
    //const user = await User.findOneAndDelete({ _id: req.user._id });
    const user = await req.user.deleteOne();
    res.send(req.user);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
