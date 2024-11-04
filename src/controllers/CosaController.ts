import { Router } from "express";
import { InMemoryCosaRepository } from "../repositories/cosa/InMemoryCosaRepository";

const router = Router();
const repository = new InMemoryCosaRepository();

router.get("/", async (req, res) => {
  try {
    const cosas = await repository.getAll();
    res.json(cosas);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al obtener las cosas");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const cosa = await repository.get(req.params.id);
    res.json(cosa);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al obtener la cosa");
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const cosa = await repository.create(data);
    res.json(cosa);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al crear la cosa");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const data = req.body;
    const cosa = await repository.update(data);
    res.json(cosa);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al actualizar la cosa");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const cosa = await repository.delete(req.params.id);
    res.json(cosa);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al eliminar la cosa");
  }
});

export default router;