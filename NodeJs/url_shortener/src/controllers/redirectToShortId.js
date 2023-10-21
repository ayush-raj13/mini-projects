import URL from "../model/url.js";

export const redirectToShortId = async (req, res) => {
    try {
        const shortId = req.params.shortId;
        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visitHistory: { timestamp: Date.now() },
                } 
            }
        );
        res.redirect(entry.redirectURL);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ msg: "URL not found" });
    }
};