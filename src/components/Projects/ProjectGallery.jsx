import Container from "../UI/Container";

function ProjectGallery({ gallery }) {
  return (
    <section className="bg-slate-900 py-20">
      <Container>
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Gallery
        </h2>

        {gallery.length === 0 ? (
          <div className="text-center text-gray-400">
            Screenshots, posters, behind-the-scenes photos, and artwork will be
            added soon.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-2xl bg-slate-800 border border-cyan-500/20 hover:border-cyan-400 transition duration-300"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    Uploaded by{" "}
                    <span className="text-cyan-400">
                      {item.uploadedBy}
                    </span>
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.uploadDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

export default ProjectGallery;