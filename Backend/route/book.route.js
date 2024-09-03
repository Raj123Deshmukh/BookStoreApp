import express from "express";
// i { getBook } from "../controller/book.controller";
import {getBook} from "../../Backend/controller/book.controller.js"


const router=express.Router();

router.get("/",getBook);

export default router;

