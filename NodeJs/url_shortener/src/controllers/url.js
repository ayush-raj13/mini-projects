import { nanoid } from "nanoid";
import URL from "../model/url.js";

export const generateShortId = async (req, res) => {
    try {
        if(!req.body.url) return res.status(400).json({ error: "url is required" });
        const shortId = nanoid(10);
        await URL.create({
            shortId: shortId,
            redirectURL: req.body.url,
            visitHistory: [],
        })
        return res.render('home', {
            shortId: shortId,
        })
        // return res.status(200).json({ shortId: shortId});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal Server Error." });
    }
}

export const getUrlAnalytics = async (req, res) => {
    try {
        const shortId = req.params.shortId;
        const result = await URL.findOne({ shortId });
        return res.status(200).json({ 
            totalClicks: result.visitHistory.length,
            analytics: result.visitHistory
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
}