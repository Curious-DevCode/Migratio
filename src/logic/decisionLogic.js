export function getCountryScore(country, userProfile) {
  let score = 0;

  const {
    category,
    age,
    studentGoal,
    bachelorSkill,
    familyMembers,
  } = userProfile;

  // Base suitability
  if (country.suitableFor.includes(category)) score += 20;

  // Age advantage
  if (age && age >= 18 && age <= 35) score += 10;

  // Student-specific logic
  if (category === "student") {
    if (studentGoal === "education+job") score += 10;
    if (country.education.includes("low") || country.education.includes("zero"))
      score += 5;
  }

  // Bachelor logic
  if (category === "bachelor" && bachelorSkill) {
    if (country.jobs.some((job) =>
      job.toLowerCase().includes(bachelorSkill.toLowerCase())
    )) {
      score += 15;
    }
  }

  // Family logic
  if (category === "family" && familyMembers >= 3) {
    score += 10; // countries with welfare benefit families more
  }

  return score;
}

export function rankCountries(countries, userProfile) {
  return countries
    .map((country) => ({
      ...country,
      score: getCountryScore(country, userProfile),
    }))
    .sort((a, b) => b.score - a.score);
}
