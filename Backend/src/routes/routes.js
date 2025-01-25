import express from "express";
import verifyToken from "./middleware/verifyToken.js";
const router = express.Router();

router.get("/profile", verifyToken, async (req, res) => {
  try {
    const user = await findOrCreateUser(req.user);
    res.status(200).json({ message: "User authenticated", user });
  } catch (err) {
    res.status(500).send("Error handling user");
  }
});

export default router;