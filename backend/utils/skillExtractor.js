const SKILLS = [
  "javascript",
  "react",
  "node",
  "express",
  "mongodb",
  "sql",
  "html",
  "css",
  "python",
  "java",
  "c",
  "c++",
  "git",
  "docker",
  "aws"
];

function extractSkills(resumeText, jobText) {
  const resume = resumeText.toLowerCase();
  const job = jobText.toLowerCase();

  const requiredSkills = SKILLS.filter(skill => job.includes(skill));
  const matchedSkills = requiredSkills.filter(skill => resume.includes(skill));
  const missingSkills = requiredSkills.filter(skill => !resume.includes(skill));

  const matchScore =
    requiredSkills.length === 0
      ? 0
      : Math.round((matchedSkills.length / requiredSkills.length) * 100);

  return {
    matchScore,
    matchedSkills,
    missingSkills
  };
}

module.exports = extractSkills;
