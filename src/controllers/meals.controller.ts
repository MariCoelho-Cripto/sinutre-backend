import { Request, Response } from 'express';
import { MealChoice } from '@prisma/client';
import { prisma } from '../prisma';

const VALID_TYPES = Object.values(MealChoice);

// POST /meals
// Body esperado:
// {
//   "type": "LANCHE" | "ALMOCO" | "CAFE_DA_MANHA" | "JANTAR" | "OUTRO",
//   "eatTime": "2026-06-05T12:30:00.000Z",
//   "description": "Salada com frango grelhado"   // opcional
// }
export async function createMeal(req: Request, res: Response) {
  const userId = req.userId!;
  const { type, eatTime, description } = req.body as {
    type?: string;
    eatTime?: string;
    description?: string;
  };

  if (!type || !VALID_TYPES.includes(type as MealChoice)) {
    return res.status(400).json({
      error: `Campo "type" inválido. Use um de: ${VALID_TYPES.join(', ')}`,
    });
  }

  if (!eatTime || Number.isNaN(Date.parse(eatTime))) {
    return res
      .status(400)
      .json({ error: 'Campo "eatTime" inválido (use ISO 8601).' });
  }

  const meal = await prisma.meal.create({
    data: {
      type: type as MealChoice,
      eatTime: new Date(eatTime),
      description,
      userId,
    },
  });

  return res.status(201).json(meal);
}
