const express = require("express");
const { leadValidation } = require("../models/leadModel");
const { appendLead } = require("../services/googleSheets");
const router = express.Router();

router.post("/leads", async (req, res) => {
  //input validation
  const { error } = leadValidation.validate(req.body);
  if (error) {
    res.status(400).send({
      message: "invalid input field",
      details: error.details.map((e) => e.message),
    });
    return;
  }
  try {
    const lead = {
      ...req.body,
      createdAt: new Date().toLocaleString("he-IL", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    await appendLead(lead);
    res.send("Successfully submitted!");
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Failed to save lead" });
  }
});

module.exports = router;
