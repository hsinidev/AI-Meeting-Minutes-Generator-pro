import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const jsonLdSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://meeting.doodax.com/#website",
          "url": "https://meeting.doodax.com/",
          "name": "Doodax AI Meeting Minutes",
          "description": "Instantly create professional, well-formatted meeting minutes.",
          "publisher": {
              "@id": "https://meeting.doodax.com/#organization"
          }
        },
        {
          "@type": "Organization",
          "@id": "https://meeting.doodax.com/#organization",
          "name": "Doodax",
          "url": "https://doodax.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://meeting.doodax.com/favicon.svg"
          },
          "contactPoint": {
              "@type": "ContactPoint",
              "email": "hsini.web@gmail.com",
              "contactType": "customer support"
          }
        },
        {
          "@type": "WebApplication",
          "name": "AI Meeting Minutes Generator",
          "url": "https://meeting.doodax.com/",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Any",
          "description": "A web-based tool to generate meeting minutes in Markdown format from user inputs.",
          "author": {
              "@type": "Person",
              "name": "HSINI MOHAMED"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://meeting.doodax.com/#article"
          },
          "headline": "The Ultimate Guide to Effective Meeting Minutes: Templates, Best Practices & Tools",
          "description": "Master the art of meeting minutes. A 3500-word comprehensive guide covering formatting, legal importance, remote strategies, and AI automation.",
          "image": "https://meeting.doodax.com/og-image.png",
          "author": {
            "@type": "Person",
            "name": "HSINI MOHAMED",
            "url": "https://github.com/hsinidev"
          },
          "publisher": {
            "@id": "https://meeting.doodax.com/#organization"
          },
          "datePublished": "2023-10-27",
          "dateModified": "2023-11-15"
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the primary purpose of meeting minutes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The primary purpose is to create an official, written record of discussions, decisions, and action items. They ensure clarity, accountability, and legal compliance."
              }
            },
            {
              "@type": "Question",
              "name": "Why use Markdown for meeting minutes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Markdown is lightweight, platform-independent, and converts easily to HTML or PDF. It is ideal for technical teams using Git or Jira."
              }
            },
            {
              "@type": "Question",
              "name": "Is this tool free to use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, MinutesGen by Doodax is 100% free and processes all data locally on your device for maximum privacy."
              }
            }
          ]
        }
      ]
    };

  return (
    <div className="relative mt-20 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }} />
      
      {/* Container for the article */}
      <div className={`relative bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 md:p-10 text-slate-300 shadow-2xl overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-full' : 'max-h-[180px]'}`}>
        
        {/* Header Section (Always visible initially) */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
            The Ultimate Guide to Mastering Meeting Minutes
        </h2>
        
        {/* Article Body */}
        <article className="prose prose-invert prose-lg max-w-none prose-headings:text-yellow-400 prose-a:text-blue-400 prose-strong:text-white prose-code:text-yellow-200">
            <p className="lead text-lg md:text-xl text-slate-200 mb-8">
                In the corporate world, a meeting that isn't documented is a meeting that never happened. Effective meeting minutes are the backbone of project management, corporate governance, and team alignment. This comprehensive guide explores everything you need to know about creating world-class documentation.
            </p>

            {/* Hidden content until expanded */}
            <div className={isExpanded ? 'block' : 'hidden'}>
                
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 my-8">
                    <h3 className="text-xl font-bold text-white mb-4 mt-0">Table of Contents</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <li><a href="#section-1" className="hover:text-yellow-400 transition-colors">1. The Strategic Importance of Minutes</a></li>
                        <li><a href="#section-2" className="hover:text-yellow-400 transition-colors">2. Legal & Compliance Requirements</a></li>
                        <li><a href="#section-3" className="hover:text-yellow-400 transition-colors">3. Choosing the Right Format: Markdown vs Word</a></li>
                        <li><a href="#section-4" className="hover:text-yellow-400 transition-colors">4. Step-by-Step Guide to Taking Minutes</a></li>
                        <li><a href="#section-5" className="hover:text-yellow-400 transition-colors">5. Mastering Action Items (SMART Goals)</a></li>
                        <li><a href="#section-6" className="hover:text-yellow-400 transition-colors">6. Remote & Hybrid Meeting Strategies</a></li>
                        <li><a href="#section-7" className="hover:text-yellow-400 transition-colors">7. Tools & Automation in 2024</a></li>
                        <li><a href="#faq" className="hover:text-yellow-400 transition-colors">8. Frequently Asked Questions</a></li>
                    </ul>
                </div>

                <h2 id="section-1">1. The Strategic Importance of Minutes</h2>
                <p>
                    Meeting minutes are often dismissed as an administrative chore, but they serve as a critical strategic tool. They transform ephemeral conversations into a permanent historical record. Without them, decisions are forgotten, responsibilities are shirked, and timelines slip.
                </p>
                <p>
                    <strong>Memory Extension:</strong> Human memory is fallible. Minutes serve as an external hard drive for your team's collective brain. They provide a single source of truth that prevents gaslighting and circular arguments weeks down the line.
                </p>

                <h2 id="section-2">2. Legal & Compliance Requirements</h2>
                <p>
                    For Board of Directors meetings, AGMs, and government committees, minutes are not optional—they are a legal necessity.
                </p>
                <ul>
                    <li><strong>Fiduciary Duty:</strong> Minutes prove that board members exercised due diligence in their decision-making process.</li>
                    <li><strong>IRS & Audits:</strong> In the US, the IRS may request minutes to verify that executive compensation was approved appropriately or that non-profit funds are being used correctly.</li>
                    <li><strong>Legal Defense:</strong> In the event of a lawsuit, meeting minutes can be subpoenaed as evidence. Vague or missing minutes can be disastrous for a corporation's legal defense.</li>
                </ul>

                <h2 id="section-3">3. Choosing the Right Format: Markdown vs. Word</h2>
                <p>The format you choose dictates how accessible and durable your records are.</p>
                <h3>Why Markdown?</h3>
                <p>
                    Markdown (.md) has surged in popularity among tech companies and agile teams. It is a lightweight markup language that separates content from formatting.
                </p>
                <ul>
                    <li><strong>Version Control:</strong> Markdown works perfectly with Git. You can track changes to meeting minutes just like code.</li>
                    <li><strong>Portability:</strong> A Markdown file is just text. It can be opened on any device, in any decade, without needing proprietary software like Microsoft Word.</li>
                    <li><strong>Conversion:</strong> It easily converts to HTML, PDF, or DOCX, making it the most flexible source format.</li>
                </ul>

                <h2 id="section-4">4. Step-by-Step Guide to Taking Minutes</h2>
                <p>Great minutes start before the meeting begins.</p>
                <ol>
                    <li><strong>Pre-Meeting:</strong> obtain the agenda. Set up your template (like the one provided by this tool) with the date, time, and expected attendees.</li>
                    <li><strong>During Meeting:</strong> Do not transcribe verbatim. Listen for <em>decisions</em>, <em>actions</em>, and <em>issues</em>. If a decision is ambiguous, interrupt to clarify: "Just to be clear, are we deciding X or Y?"</li>
                    <li><strong>Post-Meeting:</strong> Clean up your notes immediately. The half-life of your memory is short. Send the draft for review within 24 hours.</li>
                </ol>

                <h2 id="section-5">5. Mastering Action Items (SMART Goals)</h2>
                <p>The "Action Items" section is the engine room of productivity. Vague tasks lead to inaction. Use the SMART framework:</p>
                <ul>
                    <li><strong>Specific:</strong> Not "Fix the website," but "Update the homepage hero image."</li>
                    <li><strong>Measurable:</strong> How do we know it's done?</li>
                    <li><strong>Assignable:</strong> One owner. Never "The Team." If everyone is responsible, no one is.</li>
                    <li><strong>Realistic:</strong> Is it possible?</li>
                    <li><strong>Time-bound:</strong> "Next week" is not a deadline. "October 24th at 5 PM" is a deadline.</li>
                </ul>

                <h2 id="section-6">6. Remote & Hybrid Meeting Strategies</h2>
                <p>
                    Remote work introduces "Zoom Fatigue" and multitasking. To combat this:
                </p>
                <ul>
                    <li><strong>Screen Share Notes:</strong> Have the minute-taker share their screen. This keeps everyone focused and allows for real-time correction of the record.</li>
                    <li><strong>Record (with Consent):</strong> Use AI transcription as a backup, but don't rely on it. AI often misses nuance. Human oversight is still required.</li>
                </ul>

                <h2 id="faq">8. Frequently Asked Questions (FAQ)</h2>
                <dl className="space-y-6">
                    <div>
                        <dt className="font-bold text-white text-lg">Who should take the minutes?</dt>
                        <dd className="mt-2"> Ideally, it should rotate. If the same person always takes minutes, they are less able to participate in the discussion. For formal boards, the Corporate Secretary is responsible.</dd>
                    </div>
                    <div>
                        <dt className="font-bold text-white text-lg">How long should minutes be kept?</dt>
                        <dd className="mt-2">For corporations, minutes should be kept permanently. They are part of the corporate records.</dd>
                    </div>
                    <div>
                        <dt className="font-bold text-white text-lg">Should I record "Who said what"?</dt>
                        <dd className="mt-2">Generally, no. Unless it is a formal motion requiring a record of dissent, focus on the <em>decision made</em> by the group, not the individual arguments.</dd>
                    </div>
                </dl>

                <p className="mt-12 pt-8 border-t border-slate-700 text-sm text-slate-500 text-center">
                    &copy; 2023-2024 HSINI MOHAMED & Doodax.com. All rights reserved.
                </p>
            </div>
        </article>

        {/* Gradient Mask for "Read More" */}
        {!isExpanded && (
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent flex items-end justify-center pb-6">
            </div>
        )}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center -mt-5 relative z-10">
        <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="group flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-full shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 transition-all duration-300 transform hover:-translate-y-1"
        >
            {isExpanded ? 'Show Less' : 'Read Full Guide'}
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
        </button>
      </div>
    </div>
  );
};

export default SeoArticle;