import path from "path";
import fs from "fs";

export default function handler(req, res) {
  const {
    query: { slug },
  } = req;
  if (!slug || (Array.isArray(slug) && slug.length === 0)) {
    return res.status(404).json({ message: "Slug not provided" });
  }
  try {
    const filePath = path.join(process.cwd(), "data", "products.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const allProducts = JSON.parse(jsonData);

    if (!Array.isArray(allProducts)) {
      throw new Error("Invalid products data format");
    }

    const safeSlug = Array.isArray(slug) ? slug[0] : slug;
    const productData = allProducts.find(
      (state) => state.slug.toLowerCase() === safeSlug?.toLowerCase()
    );

    if (productData) {
      res.status(200).json(productData);
    } else {
      res.status(404).json({ message: "products not found" });
    }
  } catch (error) {
    console.error("Error reading product data:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
