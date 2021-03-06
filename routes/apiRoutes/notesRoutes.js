const fs = require('fs');
const path = require('path');
const router = require('express').Router();

const { createNewNote, findById, deleteNote } = require('../../lib/notes');

const { notes } = require('../../db/notes');

router.get('/notes', (req, res) => {
    let results = (notes);
    res.send(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    const deletedNote = deleteNote(req.params.id, notes);
    res.send(notes)
});

module.exports  = router;