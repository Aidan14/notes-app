const router = require("express").Router();
const Notes = require("../models/notes.model");

// Getting all

router.get("/", async (req, res) => {
  try {
    const notes = await Notes.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting One

router.get("/:id", getNote, (req, res) => {
  res.json(res.note);
});

// Creating One

router.post("/", async (req, res) => {
  const note = new Notes({
    content: req.body.content,
    category: req.body.category,
  });

  try {
    const newNote = await note.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating One

router.patch("/:id", getNote, async (req, res) => {
  if (req.body.content != null) {
    res.note.content = req.body.content;
  }

  if (req.body.category != null) {
    res.note.category = req.body.category;
  }

  try {
    const updatedNote = await res.note.save();
    res.json(updatedNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting One

router.delete("/:id", getNote, async (req, res) => {
  try {
    await res.note.remove();
    res.json({ message: "Deleted Note" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Searching Any

router.get("/search/:search", async (req, res) => {
  try {
    const re = new RegExp(req.params.search, "i");
    const notes = await Notes.find({
      $or: [{ content: re }, { category: re }],
    });
    res.json(notes);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

async function getNote(req, res, next) {
  let note;
  try {
    note = await Notes.findById(req.params.id);
    if (note == null) {
      return res.status(404).json({ message: "Cannot find note" });
    }
  } catch (err) {
    return res.status(505).json({ message: err.message });
  }

  res.note = note;
  next();
}

module.exports = router;
