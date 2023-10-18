import express from 'express'
import { router as homeRouter } from './homeRouter.js'
import { router as createWorkoutRouter} from './createWorkoutRouter.js'

export const router = express.Router()

router.use('/', homeRouter)

router.use('/createWorkout', createWorkoutRouter)
