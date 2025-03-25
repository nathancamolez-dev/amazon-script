import { JSDOM } from "jsdom";

interface Product {
	title: string;
	rating: string;
	reviews: string;
	imageUrl: string;
}

export async function parseData(html: string) {
	const dom = new JSDOM(html);
	const document = dom.window.document;
	const products: Product[] = [];

	document
		.querySelectorAll(".s-main-slot .s-result-item")
		.forEach((product) => {
			const titleElement = product.querySelector("a h2 span");
			const ratingElement = product.querySelector(".a-icon-alt");
			const reviewsElement = product.querySelector(
				".s-link-style .s-underline-text",
			);
			const imageElement = product.querySelector(".s-image");

			// Ensure each element exists before accessing its properties
			const title = titleElement ? titleElement.textContent?.trim() : "N/A";
			const rating = ratingElement ? ratingElement.textContent?.trim() : "N/A";
			const reviews = reviewsElement ? reviewsElement.textContent?.trim() : "0";
			const imageUrl = imageElement ? imageElement.getAttribute("src") : null;

			// Only push product details if the title and image are present
			if (title && imageUrl) {
				products.push({
					title,
					rating: rating ? rating : "0",
					reviews: reviews ? reviews : "N/A",
					imageUrl,
				});
			}
		});
	return products;
}
