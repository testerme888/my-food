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
    const filePath = path.join(process.cwd(), "data", "cuisine.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const allCuisine = JSON.parse(jsonData);

    if (!Array.isArray(allCuisine)) {
      throw new Error("Invalid cuisine data format");
    }

    const safeSlug = Array.isArray(slug) ? slug[0] : slug;
    const cuisineData = allCuisine.find(
      (state) => state.slug.toLowerCase() === safeSlug?.toLowerCase()
    );

    if (cuisineData) {
      res.status(200).json(cuisineData);
    } else {
      res.status(404).json({ message: "cuisine not found" });
    }
  } catch (error) {
    console.error("Error reading cuisine data:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

