# Amazon Product Scraper API

Script for scraping Amazon products based on a search keyword.

## Features

- Fetches product information from Amazon based on a search keyword.
- Extracts key details like product name, rating, reviews, and image.
- Returns the scraped data as a structured JSON response.
- Uses JSDOM for HTML parsing and data extraction.

## API Endpoints

### `GET /api/scrape?keyword={keyword}`

- **Description**: Fetches product data from Amazon based on the provided search keyword.

- **Query Parameters**:

  - `keyword` (string): The keyword to search for products on Amazon.

- **Response Example**:

  ```json
  {
    "products": [
      {
        "name": "Product 1",
        "rating": "4.5",
        "reviews": "2000",
        "image_url": "https://example.com/image1.jpg"
      },
      {
        "name": "Product 2",
        "rating": "4.0",
        "reviews": "1500",
        "image_url": "https://example.com/image2.jpg"
      }
    ]
  }
  ```

# amazon-script

To install dependencies:
Make sure you have [Bun](https://bun.sh) installed.

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.6. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
