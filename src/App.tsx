import React, { useState } from 'react';
import { ChevronDown, Play, Users, Brain, TrendingUp, MessageCircle, Linkedin, Facebook, Instagram, Phone, Mail, ExternalLink, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Mind & Media</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('introduction')} className="text-gray-700 hover:text-blue-600 transition-colors">Introduction</button>
              <button onClick={() => scrollToSection('videos')} className="text-gray-700 hover:text-blue-600 transition-colors">Videos</button>
              <button onClick={() => scrollToSection('research')} className="text-gray-700 hover:text-blue-600 transition-colors">Main Takeaways</button>

              <button onClick={() => scrollToSection('conclusion')} className="text-gray-700 hover:text-blue-600 transition-colors">Conclusion</button>
              <button onClick={() => scrollToSection('author')} className="text-gray-700 hover:text-blue-600 transition-colors">About Us</button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <button onClick={() => scrollToSection('introduction')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Introduction</button>
              <button onClick={() => scrollToSection('research')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Main Takeaways</button>
              <button onClick={() => scrollToSection('videos')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Videos</button>
              <button onClick={() => scrollToSection('conclusion')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Conclusion</button>
              <button onClick={() => scrollToSection('author')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Brain className="h-20 w-20 mx-auto mb-6 text-cyan-300" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Digital Mind
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cyan-100 leading-relaxed">
            Uncovering the Hidden Impact of Media Companies on Mental Health
          </p>
          <button
            onClick={() => scrollToSection('introduction')}
            className="inline-flex items-center px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Go Deeper
            <ChevronDown className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Introduction</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 mb-8 border-l-4 border-blue-500">
              <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed italic">
                "In an era where the average person spends over 7 hours daily consuming digital media,
                have we fully grasped the psychological toll of our connected world?"
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-2 text-blue-600" />
                  Guiding Question
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  How does social media use impact mental health, and to what extent is this shaped by the way we engage with digital platforms?
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-cyan-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Brain className="h-6 w-6 mr-2 text-cyan-600" />
                  Why This Matters
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  As mental health crises reach unprecedented levels, particularly among young adults,
                  understanding the role of digital media becomes crucial for developing effective
                  interventions and policy recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Video Section */}
      <section id="videos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Videos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch TED comprehensive video presentations covering key findings and implications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative group cursor-pointer">

                <div className="relative w-full max-w-3xl mx-auto" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/Czg_9C7gw0o?si=GF66RH77aG0tTogY"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">"Is Social Media Hurting Your Mental Health?"   by Bailey Parnell</h3>
                <p className="text-gray-600">
                  Bailey Parnell explores the negative psychological effects of social media, especially among young people. She explains how users often post only the highlights of their lives—what she calls the "highlight reel"—which leads others to make unfair comparisons and feel inadequate. Parnell also discusses the impact of FOMO (Fear of Missing Out), which can create anxiety and a constant sense of being left out. She highlights other harmful effects such as cyberbullying, social media addiction, and increased levels of depression. However, she clarifies that social media itself isn’t inherently bad; rather, it’s how we use it that matters. As a solution, she introduces the idea of "Digital Wellbeing," encouraging people to manage their online behavior consciously. Her suggestions include auditing your social feeds, curating positive content, and setting healthy boundaries. Parnell concludes that awareness and intentional use are key to protecting our mental health in the digital age.
                </p>

              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative group cursor-pointer">
                <div className="relative w-full max-w-3xl mx-auto" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/CxCsk-rvfTQ?si=gy7eNL4XNibwNcNY"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>


              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">"Social media isn’t bad,  you’re just using it wrong" by Eva Amin</h3>
                <p className="text-gray-600">
                  Eva Amin argues that social media itself is not harmful, but rather the way people choose to engage with it determines its impact. She explains that algorithms are designed to respond to user behavior—what we like, watch, or follow—meaning we shape the content we see. Eva shares her own experience of turning her feed into a source of inspiration and education by unfollowing negative or toxic accounts and replacing them with creators who promote learning, growth, and positivity. She emphasizes the importance of being intentional: curating your online environment just like you would curate your physical space. According to her, blaming the platforms is less effective than taking responsibility for our choices and habits. Her key message is to “fix your feed, not your phone,” encouraging people to take control over what influences them daily. With conscious usage, social media can become a powerful tool for personal development rather than a source of stress or harm.
                </p>

              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Research Body Section */}
      <section id="research" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Main Takeaways</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive analysis reveals significant correlations between media consumption patterns and mental health outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Key Finding 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 mx-auto">
                <TrendingUp className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Algorithm Impact</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                According to both speakers, algorithms designed to boost engagement may contribute to feelings of anxiety, FOMO, and diminished self-worth—not due to the platforms alone, but as a result of how users interact with the content they’re shown.
              </p>
            </div>

            {/* Key Finding 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6 mx-auto">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Social Comparison</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Bailey Parnell explains that constant exposure to carefully curated images of others' lives and appearances can lead to harmful social comparison, affecting self-esteem and body image, especially among young people.
              </p>
            </div>

            {/* Key Finding 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                <Brain className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Attention Span</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Social media platforms promote rapid scrolling and short-form content, which can train the brain to seek constant stimulation. Over time, this may reduce our ability to focus deeply and stay engaged with long-form tasks or real-life conversations.


              </p>
            </div>
          </div>

          {/* Detailed Research Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Advice from the Speakers</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Bailey Parnell</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Regularly review the content and accounts you follow. Remove anything that makes you feel anxious, inadequate, or unhappy.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Use social media with care—set boundaries, limit screen time, and avoid mindless scrolling.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Encourage schools and communities to teach healthy social media habits and raise awareness about its mental health effects.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Eva Amin</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Instead of quitting social media altogether, take control by curating your feed to reflect your values and interests.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Log in with a purpose—whether it’s to learn, connect, or get inspired—rather than out of habit or boredom.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Surround yourself with positive, educational, and uplifting content that aligns with your personal and professional goals.


                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion" className="py-20 bg-gradient-to-br from-blue-900 to-cyan-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Conclusion</h2>
            <div className="w-24 h-1 bg-cyan-300 mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">

              <p className="text-lg leading-relaxed mb-6">

                This presentation explores how social media affects mental health, drawing on two TEDx talks by Bailey Parnell and Eva Amin. Both speakers agree that social media can impact users’ emotional well-being, but they offer different perspectives on the cause and the solution.

                Bailey Parnell focuses on the risks of unfiltered exposure to idealized lives, explaining how social comparison, FOMO, and cyberbullying can lead to anxiety, low self-esteem, and depression. She urges users to audit their feeds, set boundaries, and promote digital well-being through education.

                Eva Amin, on the other hand, argues that social media is not inherently harmful. Instead, she emphasizes personal responsibility: if we intentionally follow positive and educational content, the platforms can become a force for inspiration and growth.

                Together, the talks suggest that the key to mental well-being in the digital age is not to reject social media—but to use it wisely.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-cyan-300">Similarities in Sources</h4>
                  <p className="text-white/90">
                    Both Bailey Parnell and Eva Amin recognize that social media has a powerful influence on mental health, especially among young users. They agree that the platforms themselves are not inherently harmful, but that the way people use them plays a major role in shaping their impact.
                    Both speakers highlight the importance of user awareness and encourage people to take control over their digital experience by curating their feeds and being intentional about the content they consume.
                    In essence, both sources emphasize that mindful engagement is the key to reducing negative effects and promoting healthier social media habits.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-cyan-300">Differing Perspectives</h4>
                  <p className="text-white/90">
                    While both speakers agree that social media affects mental health, they approach the issue from different angles.
                    Bailey Parnell emphasizes the dangers of unfiltered use—highlighting the risks of social comparison, FOMO, and cyberbullying. She warns about the psychological consequences and advocates for protective measures and digital education.
                    In contrast, Eva Amin takes a more optimistic view, arguing that social media can be empowering if used intentionally. She focuses on the user’s ability to shape their feed and experience, encouraging proactive engagement rather than fear or avoidance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Recommendations & Future Directions</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-300" />
                  </div>
                  <h4 className="font-semibold mb-2">Policy Reform</h4>
                  <p className="text-sm text-white/80">
                    Encourage the creation of regulations that require mental health impact assessments before major algorithm changes are implemented on social media platforms.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-yellow-300" />
                  </div>
                  <h4 className="font-semibold mb-2">Design Ethics</h4>
                  <p className="text-sm text-white/80">
                    Promote user-centered design that puts mental well-being above engagement-driven metrics like likes, shares, or watch time.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-purple-300" />
                  </div>
                  <h4 className="font-semibold mb-2">Continued Research</h4>
                  <p className="text-sm text-white/80">
                    Support long-term studies that examine how social media affects diverse populations across different platforms and age groups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section id="author" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                {/* <Users className="h-24 w-24 text-white" /> */}
                <img style={{ borderRadius: "50%", width: "100%", height: "100%" }} src="./pic1.png" alt="" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Roi Azari</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Computer Science Lecturer & Software Department Head at ORT Singalovski College, Tel Aviv.
                  Holds a B.A. in Technology Management from Bar-Ilan University and is a Software Engineering graduate with honors from ORT Singalovski.
                  Passionate about education, innovation, and the ethical use of technology in society.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a
                    href="https://wa.me/972542412474?text=Hello%2C%20I%27d%20like%20to%20ask%20about%20the%20presentation"
                    className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </a>


                  <a href="https://www.linkedin.com/in/roi-azari/" target='_blank' className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>

                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-blue-200">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-700">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>roiazari148@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>+972542412474</span>
                </div>

              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 mt-2">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                {/* <Users className="h-24 w-24 text-white" /> */}
                <img style={{ borderRadius: "50%", width: "100%", height: "100%" }} src="./pic2.jpg" alt="" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ryan Choshha</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Project Manager with a Practical Engineering degree in Industrial Engineering and Management.
                  Experienced in overseeing operations, coordinating teams, and driving results in dynamic work environments.
                  Focused on process optimization, strategic planning, and effective team leadership.


                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a href="#" className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </a>
                  <a href="https://www.linkedin.com/in/ryan-choshha/" target='_blank' className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>

                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-blue-200">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-700">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>ryan1997ch@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>+972526760485</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="h-8 w-8 text-cyan-300" />
              <span className="text-xl font-bold">Mind&Media</span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2024 MindMedia Presentation. All rights reserved.</p>
              <p className="text-sm text-gray-500">
                Advancing the understanding of technology's impact on mental health
              </p>
              <p className="text-sm text-gray-500">
                Created by Ryan Choshha and Roi Azari
                Under the guidance of Dr. Maria Gefen


              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;