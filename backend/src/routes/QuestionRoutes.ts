import { Router } from "express";
import QuestionController from "../controllers/QuestionController";


const router = Router();

router.post("/create", QuestionController.create);
router.get("/", QuestionController.getAll);
router.get("/getQuiz", QuestionController.getQuiz);
router.get("/getQuizOptions", QuestionController.getQuizOptions);

export default router;
