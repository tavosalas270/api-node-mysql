import { Router } from "express";
import { MovieController } from "../controllers/movies.js";

export const createMovieRouter = ({movieModel}) => {
    const moviesRouter = Router()

    const movieController = new MovieController({movieModel})
    
    moviesRouter.get('/', movieController.getAll)
    moviesRouter.get('/:id', movieController.getById)
    moviesRouter.post('/create', movieController.create)
    moviesRouter.delete('/:id', movieController.delete)
    moviesRouter.patch('/update/:id', movieController.update)

    return moviesRouter
}

