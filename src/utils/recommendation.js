import { regions } from "../data/regions";

export function recommendCountry(user, countries) {
  if (!regions[user.toRegion]) return [];

  const allowed = regions[user.toRegion];

  return countries
    .filter(c => allowed.includes(c.id))
    .map(c => {
      let score = 0;

      if (user.category === "student")
        score += c.scores.studentFriendly * 2;

      if (user.category === "family")
        score += c.scores.familyFriendly * 2;

      if (user.category === "bachelor") {
        score += c.scores.bachelorFriendly * 2;
        score += c.scores.jobMarket;
      }

      score += c.scores.visaEase;
      score += (10 - c.scores.costIndex);

      return { ...c, score };
    })
    .sort((a, b) => b.score - a.score);
}
