const fs = require("fs");
const pdf = require("pdf-parse");
const extractSkills = require("../utils/skillExtractor");

exports.analyzeResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const jobDescription = req.body.jobDescription;
    if (!jobDescription) {
      return res.status(400).json({ error: "Job description required" });
    }

    const buffer = fs.readFileSync(req.file.path);
    const data = await pdf(buffer);

    const resumeText = data.text;

    const result = extractSkills(resumeText, jobDescription);

    res.json({
      message: "Resume analyzed successfully",
      ...result
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Resume analysis failed" });
  }
};
