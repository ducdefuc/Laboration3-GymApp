import express from 'express'
import { createWorkoutController } from '../controllers/createWorkoutController.js'

export const router = express.Router()

const controller = new createWorkoutController()

router.get('/', (req, res, next) => controller.index(req, res, next));
router.post('/create', (req, res, next) => controller.createWorkoutPost(req, res, next));
