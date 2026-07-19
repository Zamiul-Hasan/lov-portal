import Card from "../UI/Card";
import Button from "../UI/Button";
import SectionTitle from "../UI/SectionTitle";
import Container from "../UI/Container";
import projects from "../../data/projects";

function FeaturedProjects() {
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500";
      case "Ongoing":
        return "bg-yellow-500";
      case "Upcoming":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section className="bg-slate-950 py-20">
      <Container>

        <SectionTitle
          title="Featured Projects"
          subtitle="Explore our latest Bangla anime dubbing projects."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm text-white ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>

                <h3 className="text-white text-2xl font-bold mt-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {project.description}
                </p>

                <Button className="mt-6 w-full">
                  View Project
                </Button>
              </div>
            </Card>
          ))}
        </div>

      </Container>
    </section>
  );
}

export default FeaturedProjects;