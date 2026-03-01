const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-100 pt-16 pb-8 px-6 md:max-w-xl mx-auto">
      {/* Top Section */}
      <div className="sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-medium text-gray-100 tracking-wide">
            Weather App
          </h2>
          <p className="text-gray-100 text-sm leading-relaxed">
            Real-time weather updates for every user around the world. Stay
            informed about current conditions.
          </p>
          {/* Socials */}
          <div className="flex gap-4 mt-2">
            {[
              { name: "Portfolio", url: "#" },
              { name: "GitHub", url: "https://github.com/twin-flash" },
              { name: "Instagram", url: "https://www.instagram.com/twin_flash/" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-gray-100 hover:text-white transition-colors duration-200 border border-gray-100 hover:border-gray-900 px-3 py-1 rounded-full"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>          
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-gray-100 text-xs">
          2026 Weather-
          App Powered OpenWeatherMap
        </p>
        <p className="text-gray-100 text-xs">
          Built with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
