import React, { useState, useEffect } from "react";

const TechForge: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden w-full">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-10 py-4">
          <div className="text-2xl font-bold tracking-wider">TechBlackboard</div>
          <ul className="hidden md:flex gap-8">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:opacity-80 transition-opacity"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:opacity-80 transition-opacity"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("features")}
                className="hover:opacity-80 transition-opacity"
              >
                Why Us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:opacity-80 transition-opacity"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white min-h-screen flex flex-col justify-center items-center pt-24 px-6 text-center overflow-hidden"
      >
        {/* Animated background dots */}
        <div className="absolute inset-0 opacity-10">
          <div className="animate-pulse">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Transform Your Ideas Into Reality
          </h1>
          <p
            className={`text-lg sm:text-xl md:text-2xl mb-10 opacity-95 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            We build cutting-edge web and mobile applications that drive your
            business forward
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className={`inline-block bg-white text-purple-600 px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-6 sm:px-10 max-w-7xl mx-auto w-full"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {[
            {
              icon: "🌐",
              title: "Web App Development",
              desc: "Custom web applications built with modern technologies. Scalable, secure, and responsive solutions tailored to your business needs.",
            },
            {
              icon: "📱",
              title: "Mobile App Development",
              desc: "Native and cross-platform mobile applications for iOS and Android. Beautiful interfaces with seamless user experiences.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border-t-4 border-purple-600"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-600">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="bg-gray-50 py-20 px-6 sm:px-10 w-full flex justify-center"
      >
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "⚡",
                title: "Fast Delivery",
                desc: "Quick turnaround times without compromising quality",
              },
              {
                icon: "💡",
                title: "Innovative Solutions",
                desc: "Cutting-edge technology and creative approaches",
              },
              {
                icon: "🛡️",
                title: "Secure & Reliable",
                desc: "Industry-standard security and reliable performance",
              },
              {
                icon: "🎯",
                title: "Client-Focused",
                desc: "Your success is our priority",
              },
            ].map((f, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-5xl mb-4 text-purple-600">{f.icon}</div>
                <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center py-20 px-6 sm:px-10 bg-white w-full"
      >
        <div className="max-w-2xl w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg mb-8 text-gray-600">
            Have a project in mind? Get in touch with us today!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 transition-colors"
            />
            <textarea
              placeholder="Tell us about your project"
              required
              rows={6}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 transition-colors resize-y"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-12 py-4 rounded-full font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-8 w-full">
        <p>&copy; 2025 TechForge Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TechForge;
