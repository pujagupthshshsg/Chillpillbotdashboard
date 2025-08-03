'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Support() {
  const faqs = [
    {
      question: 'How do I invite Chill Pill Bot to my server?',
      answer: 'Click the "Invite Bot" button on our homepage or use the invite link. Make sure you have "Manage Server" permissions on your Discord server.'
    },
    {
      question: 'What permissions does the bot need?',
      answer: 'The bot requires Administrator permissions for full functionality, including moderation, music playback, and message management features.'
    },
    {
      question: 'How do I set up music commands?',
      answer: 'Join a voice channel and use "_play <song name>" to start playing music. The bot will automatically join your voice channel and begin playback.'
    },
    {
      question: 'Can I customize the bot prefix?',
      answer: 'Currently, the bot uses "_" as the default prefix. Custom prefix functionality is planned for future updates.'
    },
    {
      question: 'How does the economy system work?',
      answer: 'Users earn coins through daily rewards, working, and playing games. Coins can be spent in the shop or used for gambling games like slots and blackjack.'
    },
    {
      question: 'Is the bot free to use?',
      answer: 'Yes! Chill Pill Bot is completely free to use with all features available to every server.'
    },
    {
      question: 'How do I report bugs or suggest features?',
      answer: 'Join our Discord support server or contact us through the methods below. We welcome all feedback and bug reports.'
    },
    {
      question: 'What should I do if the bot is offline?',
      answer: 'Check our Discord server for status updates. If the issue persists, please report it in our support server.'
    }
  ];

  const supportOptions = [
    {
      icon: 'ri-discord-fill',
      title: 'Discord Support Server',
      description: 'Join our official Discord server for real-time help and community support',
      action: 'Join Server',
      link: 'https://discord.gg/chillpillontop',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: 'ri-github-fill',
      title: 'GitHub Issues',
      description: 'Report bugs or request features through our GitHub repository',
      action: 'View GitHub',
      link: '#',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: 'ri-mail-fill',
      title: 'Email Support',
      description: 'Send us an email for detailed questions or business inquiries',
      action: 'Send Email',
      link: 'mailto:support@chillpillbot.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-twitter-fill',
      title: 'Twitter',
      description: 'Follow us for updates and quick support through social media',
      action: 'Follow Us',
      link: '#',
      color: 'from-sky-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Need Help?</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're here to help! Find answers to common questions or get in touch with our support team.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Get Support</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${option.color} rounded-xl mx-auto mb-4`}>
                  <i className={`${option.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{option.title}</h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">{option.description}</p>
                <a
                  href={option.link}
                  className={`inline-block bg-gradient-to-r ${option.color} text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer`}
                >
                  {option.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 rounded-xl transition-colors">
                      <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-arrow-down-s-line text-gray-400 text-xl group-open:rotate-180 transition-transform"></i>
                      </div>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Quick Help</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 rounded-xl mb-4">
                  <i className="ri-book-open-fill text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Getting Started Guide</h3>
                <p className="text-gray-300 mb-4">
                  New to Chill Pill Bot? Our comprehensive getting started guide will help you set up the bot and understand its features.
                </p>
                <a href="/commands" className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer">
                  View Commands →
                </a>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mb-4">
                  <i className="ri-bug-fill text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Report Issues</h3>
                <p className="text-gray-300 mb-4">
                  Found a bug or having trouble with a command? Report issues directly to our development team for quick resolution.
                </p>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer">
                  Report Bug →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is ready to assist you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://discord.gg/chillpillontop"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-discord-fill mr-2"></i>
              Join Discord Server
            </a>
            <a
              href="mailto:support@chillpillbot.com"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all whitespace-nowrap cursor-pointer"
            >
              <i className="ri-mail-fill mr-2"></i>
              Email Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}