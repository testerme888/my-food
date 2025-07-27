import path from "path";
import fs from "fs";

export default function handler(req, res) {
  const {
    query: { slug },
  } = req;

  try {
    const filePath = path.join(process.cwd(), "data", "states.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const allStates = JSON.parse(jsonData);

    const stateData = allStates.find(
      (state) => state.slug.toLowerCase() === slug?.toLowerCase()
    );

    if (stateData) {
      res.status(200).json(stateData);
    } else {
      res.status(404).json({ message: "State not found" });
    }
  } catch (error) {
    console.error("Error reading state data:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
