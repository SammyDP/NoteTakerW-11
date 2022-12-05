const router = require("express").Router();
const store = require("../db/store");

// GET route for notes
router.get("/notes", (req, res) => {
  store.getNotes().then((notes) => {
    return res.json(notes);
  });
});
// Post notes
router.post("/notes", (req, res) => {
  store.addNote(req.body).then((note) => res.json(note));
});

module.exports = router;
