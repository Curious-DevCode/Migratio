export default function BlogPage() {
  const blogs = [
    {
      title: "Why Migration Decisions Fail Without Data",
      summary:
        "Most migration choices are driven by agents or hearsay. This article breaks down why structured data and scoring logic matter.",
      date: "Jan 2025",
    },
    {
      title: "Student vs Family Migration: Different Risk Profiles",
      summary:
        "Students and families face very different economic and social risks when migrating. Here's how to think about both.",
      date: "Dec 2024",
    },
    {
      title: "Cost of Living Is Not the Whole Story",
      summary:
        "Low cost countries can still be bad migration choices. We explain the hidden variables.",
      date: "Dec 2024",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">
        Insights & Research
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {blog.title}
            </h2>
            <p className="text-sm text-gray-500 mb-3">{blog.date}</p>
            <p className="text-gray-700">{blog.summary}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-gray-500 mt-12">
        Content is curated to support migration decision-making and does not
        constitute professional advice.
      </p>
    </div>
  );
}
