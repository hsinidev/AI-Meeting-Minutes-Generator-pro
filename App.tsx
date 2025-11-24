import React, { useState } from 'react';
import Layout from './components/Layout';
import MinutesGenerator from './components/MinutesGenerator';
import SeoArticle from './components/SeoArticle';

const App: React.FC = () => {
  const [modalContent, setModalContent] = useState<{ title: string; content: React.ReactNode } | null>(null);

  const openModal = (type: string) => {
    const contactEmail = "hsini.web@gmail.com";
    const websiteUrl = "https://doodax.com";

    const contentMap: { [key: string]: { title: string, content: React.ReactNode } } = {
        'About': { 
            title: 'About MinutesGen', 
            content: (
                <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>Welcome to <strong>MinutesGen</strong>, a premier productivity tool designed by <strong>HSINI MOHAMED</strong> and the team at <strong>Doodax.com</strong>.</p>
                    <p>In the modern fast-paced work environment, documentation often falls by the wayside. Our mission is to eliminate the friction of post-meeting administration. By leveraging client-side technology, we provide a secure, instant, and formatted way to generate meeting minutes without your data ever leaving your browser.</p>
                    <p>Whether you are a project manager, a developer, or a board secretary, this tool is crafted to save you time and ensure professional consistency.</p>
                </div>
            ) 
        },
        'Contact': { 
            title: 'Contact Us', 
            content: (
                <div className="space-y-4 text-slate-300">
                    <p>We value your feedback and are here to assist with any inquiries.</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Email:</strong> <a href={`mailto:${contactEmail}`} className="text-yellow-400 hover:underline">{contactEmail}</a></li>
                        <li><strong>Website:</strong> <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">doodax.com</a></li>
                    </ul>
                    <p className="text-sm text-slate-500 mt-4">Support hours: Monday - Friday, 9:00 AM - 5:00 PM (UTC).</p>
                </div>
            ) 
        },
        'Guide': { 
            title: 'User Guide', 
            content: (
                <div className="space-y-4 text-slate-300">
                    <p>Generate minutes in 3 simple steps:</p>
                    <ol className="list-decimal pl-5 space-y-3">
                        <li><strong>Input Details:</strong> Fill in the meeting metadata (Title, Date, Time) and list your Attendees.</li>
                        <li><strong>Document Content:</strong> Use the text areas to log the Agenda and the key outcomes in the "Discussion & Decisions" section.</li>
                        <li><strong>Assign Actions:</strong> Use the "Add Action Item" button to create tracked tasks with owners and due dates.</li>
                    </ol>
                    <p>The Markdown preview on the right updates instantly. When finished, click <strong>Copy Markdown</strong> or <strong>Download DOCX</strong>.</p>
                </div>
            ) 
        },
        'Privacy': { 
            title: 'Privacy Policy', 
            content: (
                <div className="space-y-4 text-sm text-slate-300 h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                    <h3 className="text-lg font-semibold text-white">1. Introduction</h3>
                    <p>At Doodax.com ("we", "our", or "us"), we prioritize your privacy. This Privacy Policy explains how we handle your information when you use the AI Meeting Minutes Generator.</p>
                    
                    <h3 className="text-lg font-semibold text-white">2. Data Processing</h3>
                    <p><strong>Client-Side Execution:</strong> This application is built with a privacy-first architecture. All data entry, processing, and file generation occur locally within your web browser. We do not transmit your meeting notes, attendee lists, or action items to any external server or database.</p>
                    
                    <h3 className="text-lg font-semibold text-white">3. Information Collection</h3>
                    <p>Since the application functions client-side, we do not collect, store, or share the personal content you input into the generator forms.</p>
                    
                    <h3 className="text-lg font-semibold text-white">4. Cookies and Analytics</h3>
                    <p>We may use basic, non-intrusive cookies or local storage solely for the purpose of preserving your preferences (such as UI themes). We may use anonymous analytics to understand site traffic, but this is not linked to your meeting content.</p>
                    
                    <h3 className="text-lg font-semibold text-white">5. Contact</h3>
                    <p>For privacy-related concerns, please contact: {contactEmail}</p>
                    
                    <p className="text-xs text-slate-500 mt-4">Last Updated: October 2023</p>
                </div>
            ) 
        },
        'TOS': { 
            title: 'Terms of Service', 
            content: (
                <div className="space-y-4 text-sm text-slate-300 h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                    <p>By using the AI Meeting Minutes Generator provided by Doodax.com, you agree to these terms.</p>
                    
                    <h3 className="text-lg font-semibold text-white">1. License to Use</h3>
                    <p>We grant you a non-exclusive, revocable license to use this tool for personal or commercial documentation purposes.</p>
                    
                    <h3 className="text-lg font-semibold text-white">2. Disclaimer of Warranties</h3>
                    <p>This service is provided "AS IS" without any warranty of any kind. We do not guarantee that the generated templates will meet specific legal requirements in your jurisdiction.</p>
                    
                    <h3 className="text-lg font-semibold text-white">3. Limitation of Liability</h3>
                    <p>In no event shall HSINI MOHAMED or Doodax.com be liable for any data loss, business interruption, or damages arising from the use of this tool.</p>
                    
                    <h3 className="text-lg font-semibold text-white">4. User Responsibility</h3>
                    <p>You are solely responsible for the data you input. Since we do not host your data, we cannot recover lost information if you close your browser without saving.</p>
                </div>
            ) 
        },
        'DMCA': { 
            title: 'DMCA Policy', 
            content: (
                <div className="space-y-4 text-slate-300">
                    <p>Doodax.com respects the intellectual property rights of others. If you believe that material available on our site infringes on your copyright, please notify us.</p>
                    <p>Send a written notice to <strong>{contactEmail}</strong> containing:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Identification of the copyrighted work.</li>
                        <li>Identification of the infringing material.</li>
                        <li>Your contact information.</li>
                        <li>A statement that you have a good faith belief that the use is not authorized.</li>
                    </ul>
                </div>
            ) 
        },
    };
    setModalContent(contentMap[type]);
  };

  const closeModal = () => setModalContent(null);

  return (
    <Layout openModal={openModal} modalContent={modalContent} closeModal={closeModal}>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>
          <h1 className="relative text-5xl md:text-7xl font-black text-white tracking-tight drop-shadow-2xl mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">Effortless</span> <span className="text-yellow-400">Meeting Minutes</span>
          </h1>
          <p className="relative mt-6 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            The professional standard for documentation. Turn chaotic notes into structured, searchable Markdown templates instantly. <span className="text-yellow-400 font-medium">Free. Private. Fast.</span>
          </p>
        </header>

        <main className="max-w-7xl mx-auto space-y-24">
          <MinutesGenerator openGuide={openModal} />
          <SeoArticle />
        </main>
      </div>
    </Layout>
  );
};

export default App;