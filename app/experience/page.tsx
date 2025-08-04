const experiences = [
  {
    title: "Experience 1",
    description: "Description of experience 1",
    metrics: "Metrics for experience 1",
  },
  {
    title: "Experience 2",
    description: "Description of experience 2",
    metrics: "Metrics for experience 2",
  },
]

const ExperiencePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">My Experiences</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{exp.title}</h2>
            <p className="text-gray-600 mb-4">{exp.description}</p>
            {/* rest of code here */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperiencePage
