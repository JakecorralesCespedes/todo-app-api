import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();

router.get("/mirar", async (req, res) => {
	try {
		const mirar = await prisma.todo.findMany({
			include: {
				category: true,
			},
		});
		res.json(mirar);
	} catch (error) {
		next(error);
	}
});

router.post("/agregar", async (req, res) => {
	try {
		const todo = await prisma.todo.create({
			data: req.body,
		});
		res.json(todo);
	} catch (error) {
		next(error);
	}
});

router.get("/mirar/:id", async (req, res) => {
	const todo = await prisma.todo.findUnique({
		where: {
			id: Number(req.params.id),
		},
		
	});
	res.json(todo);
});

router.delete("/borrar/:id", async (req, res) => {
	const todo = await prisma.todo.delete({
		where: {
			id: Number(req.params.id),
		},
	});
	res.json(todo.quantity);
});

router.patch("/update/:id", async (req, res) => {
	try {
		const todo = await prisma.todo.update({
			where: {
				id: Number(req.params.id),
			},
			data: req.body,
		});
		res.json(todo);
	} catch (error) {
		next(error);
	}
});

export default router;
