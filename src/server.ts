import axios from "axios";
import cors from "cors";
import express from "express";
import { parseData } from "./functions/parse-data";
const app = express();

app.use(
	cors({
		origin: "http://localhost:5173",
	}),
);

app.get("/api/scrape", async (req, res) => {
	const keyword = req.query.keyword;
	const amazonUrl = "https://www.amazon.com/s";
	const param = new URLSearchParams({ k: String(keyword) }).toString();

	try {
		const { data } = await axios.get(`${amazonUrl}?${param} `, {
			headers: {
				"User-Agent":
					"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"Accept-Language": "en-US,en;q=0.9",
			},
		});

		const response = await parseData(data);
		res.status(200).json({ products: response });
		return;
	} catch (e) {
		const errorMessage = e instanceof Error ? e.message : "Unkowwn error";
		console.log("Error on scraping", errorMessage);
		res.status(500).json({ error: errorMessage });
		return;
	}
});

app.listen(8080, () => {
	console.log("Server running on port 8080");
});
