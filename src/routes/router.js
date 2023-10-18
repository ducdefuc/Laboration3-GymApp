import express from 'express'
import { router as homeRouter } from './homeRouter.js'

export const router = express.Router()

// Use the home router for all routes starting with '/'.
router.use('/', homeRouter)
