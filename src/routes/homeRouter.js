import express from 'express'
import { homeController } from '../controllers/homeController.js'

export const router = express.Router()

const controller = new homeController()

router.get('/', (req, res, next) => controller.index(req, res, next))
