const { Router } = require("express");
const getArtworks = require("../controllers/artworkController");
const createArtwork = require("../controllers/artworkPostController");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const { title } = req.query;
    const getArtwork = await getArtworks();
    if (title) {
      const artworkByName = getArtwork.filter((e) =>
        e.title.toUpperCase().includes(title.toUpperCase())
      );
      if (artworkByName.length) res.send(artworkByName);
      else res.status(400).send({ message: "Artwork does not found" });
    } else res.send(getArtwork);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get("/:idArtwork", async (req, res) => {
  try {
    const { idArtwork } = req.params;
    const getArtwork = await getArtworks();
    const artworkById = getArtwork.filter((e) => e.id === idArtwork);
    if (artworkById.length === 0)
      res.status(400).send({ message: "Artwork does not found" });
    else res.send(artworkById);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      id,
      title,
      date,
      collecting_institution,
      image,
      creator,
      dimensions,
      medio,
      price,
    } = req.body;
    const postArtwork = await createArtwork(
      id,
      title,
      date,
      collecting_institution,
      image,
      creator,
      dimensions,
      medio,
      price
    );
    res.send("Artwork created succesfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
