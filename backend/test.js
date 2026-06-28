const dns = require("dns");

// Force Google DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://test:ResumeAnalyzer2026@airesumeroaster.zbupi4t.mongodb.net/?appName=AIResumeRoaster"
  )
  .then(() => {
    console.log("✅ Connected");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });