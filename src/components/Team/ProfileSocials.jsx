import {
  FaFacebook,
  FaYoutube,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";

function ProfileSocials({ member }) {
  const social = member.social || {};

  const links = [
    {
      name: "Facebook",
      url: social.facebook,
      icon: <FaFacebook size={22} />,
    },
    {
      name: "Discord",
      url: social.discord,
      icon: <FaDiscord size={22} />,
    },
    {
      name: "YouTube",
      url: social.youtube,
      icon: <FaYoutube size={22} />,
    },
    {
      name: "GitHub",
      url: social.github,
      icon: <FaGithub size={22} />,
    },
  ].filter((item) => item.url);

  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-white mb-10">
          Social Links
        </h2>

        {links.length === 0 ? (
          <div className="bg-slate-900 border border-cyan-500/20 rounded-3xl p-10 text-center text-gray-400">
            No social links available.
          </div>
        ) : (
          <div className="flex flex-wrap gap-6">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-900 border border-cyan-500/20 hover:border-cyan-400 hover:bg-slate-800 transition duration-300 text-white"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default ProfileSocials;