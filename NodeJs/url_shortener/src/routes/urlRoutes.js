import express from "express";
import { generateShortId, getUrlAnalytics } from "../controllers/url.js";
import { redirectToShortId } from "../controllers/redirectToShortId.js";

const router = express.Router();

router.post('/', generateShortId);
router.get('/analytics/:shortId', getUrlAnalytics);
router.get('/:shortId', redirectToShortId);

export default router;