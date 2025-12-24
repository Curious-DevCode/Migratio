const countries = [
  {
    id: "germany",
    name: "Germany",
    region: "europe",
    suitableFor: ["student", "bachelor", "family"],

    visa: "Opportunity Card / Student Visa / Blue Card",
    cost: "Medium (₹70k–₹90k/month)",
    language: "German (English sufficient in tech & academia)",

    people:
      "Highly disciplined, rule-following society. Work-life balance is respected. Integration requires effort but is rewarding.",

    jobs: [
      "Engineering",
      "IT & Software",
      "Manufacturing",
      "Automotive",
      "Research & Academia",
    ],

    education:
      "Public universities offer very low or zero tuition fees. Strong emphasis on research, engineering, and applied sciences.",

    economyInsight:
      "Germany faces an aging population and skilled labor shortage, creating long-term demand for migrants.",

    risks:
      "Language barrier outside professional environments. Bureaucracy can be slow.",

    why: {
      student:
        "Germany offers globally respected education with minimal tuition fees, making it ideal for students seeking ROI-driven migration.",
      bachelor:
        "High demand for skilled professionals with transparent PR pathways via the Blue Card system.",
      family:
        "Strong social security, healthcare, and child education systems make it family-friendly once settled.",
    },
  },

  {
    id: "canada",
    name: "Canada",
    region: "north-america",
    suitableFor: ["student", "bachelor", "family"],

    visa: "Study Permit / Express Entry / PNP",
    cost: "High (₹1L–₹1.4L/month)",
    language: "English / French",

    people:
      "Polite, multicultural, immigrant-friendly society. Integration is easier compared to Europe.",

    jobs: [
      "IT",
      "Healthcare",
      "Construction",
      "Logistics",
      "Finance",
    ],

    education:
      "Strong colleges and universities with clear post-study work pathways.",

    economyInsight:
      "Canada actively uses immigration to fuel economic growth and population stability.",

    risks:
      "High housing costs in major cities. Weather can be extreme.",

    why: {
      student:
        "Clear post-study work permits and PR pathways make Canada a top choice despite higher costs.",
      bachelor:
        "Points-based immigration favors young, skilled professionals with work experience.",
      family:
        "Excellent healthcare and education systems with strong long-term stability.",
    },
  },

  {
    id: "australia",
    name: "Australia",
    region: "australia",
    suitableFor: ["student", "bachelor", "family"],

    visa: "Student Visa / Skilled Independent Visa",
    cost: "High (₹1L–₹1.3L/month)",
    language: "English",

    people:
      "Relaxed, outdoors-oriented culture with strong emphasis on quality of life.",

    jobs: [
      "Healthcare",
      "Construction",
      "Hospitality",
      "IT",
      "Mining",
    ],

    education:
      "High-quality education with good global recognition.",

    economyInsight:
      "Skill shortages in healthcare and construction drive immigration needs.",

    risks:
      "Visa rules change frequently. Distance from home country.",

    why: {
      student:
        "Strong universities with work rights during and after study.",
      bachelor:
        "Skill assessment-based migration favors certified professionals.",
      family:
        "Safe environment, good schools, and healthcare make it attractive for families.",
    },
  },
];

export default countries;
