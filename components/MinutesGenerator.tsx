import React, { useState, useMemo } from 'react';
import { generateMarkdown, type MeetingData, type ActionItem } from '../lib/TemplateGenerator';

const initialActionItem: ActionItem = { id: Date.now(), task: '', owner: '', dueDate: '' };

interface MinutesGeneratorProps {
  openGuide: (type: string) => void;
}

const MinutesGenerator: React.FC<MinutesGeneratorProps> = ({ openGuide }) => {
  const [meetingDetails, setMeetingDetails] = useState<Omit<MeetingData, 'actionItems'>>({
    title: 'Quarterly Review Meeting',
    date: new Date().toISOString().split('T')[0],
    time: '10:00',
    location: 'Virtual (Zoom)',
    attendees: 'Alice Johnson (Project Manager)\nBob Williams (Lead Developer)\nCharlie Brown (UX Designer)',
    absentees: 'Diana Prince (QA Engineer)',
    agenda: '1. Review of Q2 Performance\n2. Planning for Q3 Projects\n3. Open Floor for Discussion',
    discussion: '- Q2 performance exceeded targets by 15%.\n- Key projects for Q3 include the new mobile app launch and a website redesign.\n- The team discussed resource allocation for the upcoming quarter.',
  });
  const [actionItems, setActionItems] = useState<ActionItem[]>([
    { id: 1, task: 'Finalize Q3 project roadmap', owner: 'Alice Johnson', dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] },
    { id: 2, task: 'Draft technical specifications for mobile app', owner: 'Bob Williams', dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] },
  ]);

  const [copySuccess, setCopySuccess] = useState('');

  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMeetingDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleActionItemChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setActionItems(prev => prev.map(item => item.id === id ? { ...item, [name]: value } : item));
  };
  
  const addActionItem = () => {
    setActionItems(prev => [...prev, { ...initialActionItem, id: Date.now() }]);
  };

  const removeActionItem = (id: number) => {
    setActionItems(prev => prev.filter(item => item.id !== id));
  };

  const generatedMarkdown = useMemo(() => {
    return generateMarkdown({ ...meetingDetails, actionItems });
  }, [meetingDetails, actionItems]);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMarkdown).then(() => {
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    }, () => {
      setCopySuccess('Failed!');
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  const handleDownload = () => {
      console.log("DOCX download simulation triggered.");
      alert("This is a simulated DOCX download. In a real application, this would generate and download a .docx file.");
  };

  const InputField: React.FC<{ label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string; }> = ({ label, name, value, onChange, type = 'text' }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-slate-300 mb-1">{label}</label>
        <input type={type} id={name} name={name} value={value} onChange={onChange} className="w-full bg-slate-800 border border-slate-600 rounded-lg shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"/>
    </div>
  );

  const TextAreaField: React.FC<{ label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; rows?: number; placeholder?: string }> = ({ label, name, value, onChange, rows = 3, placeholder='' }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-slate-300 mb-1">{label}</label>
        <textarea id={name} name={name} value={value} onChange={onChange} rows={rows} placeholder={placeholder} className="w-full bg-slate-800 border border-slate-600 rounded-lg shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"></textarea>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/70 backdrop-blur-lg border border-slate-800 rounded-2xl shadow-lg shadow-blue-500/10 p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Input Form */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
              <h2 className="text-xl font-semibold text-white">Meeting Inputs</h2>
              <button onClick={() => openGuide('Guide')} title="How to use" className="text-slate-400 hover:text-yellow-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
              </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <InputField label="Meeting Title" name="title" value={meetingDetails.title} onChange={handleDetailChange} />
            <InputField label="Date" name="date" value={meetingDetails.date} onChange={handleDetailChange} type="date" />
            <InputField label="Time" name="time" value={meetingDetails.time} onChange={handleDetailChange} type="time" />
          </div>
          <InputField label="Location" name="location" value={meetingDetails.location} onChange={handleDetailChange} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextAreaField label="Attendees" name="attendees" value={meetingDetails.attendees} onChange={handleDetailChange} placeholder="One name per line"/>
            <TextAreaField label="Absentees" name="absentees" value={meetingDetails.absentees} onChange={handleDetailChange} placeholder="One name per line"/>
          </div>

          <TextAreaField label="Agenda Items" name="agenda" value={meetingDetails.agenda} onChange={handleDetailChange} rows={4} placeholder="Use numbered or bulleted lists for clarity."/>
          <TextAreaField label="Discussion & Decisions" name="discussion" value={meetingDetails.discussion} onChange={handleDetailChange} rows={6} placeholder="Capture key points, outcomes, and decisions made."/>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Action Items</h3>
            <div className="space-y-4">
              {actionItems.map((item) => (
                <div key={item.id} className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_1fr_auto] gap-3 items-end p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                  <input type="text" name="task" placeholder="Action Item Task" value={item.task} onChange={(e) => handleActionItemChange(item.id, e)} className="col-span-full w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"/>
                  <input type="text" name="owner" placeholder="Owner" value={item.owner} onChange={(e) => handleActionItemChange(item.id, e)} className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"/>
                  <input type="date" name="dueDate" value={item.dueDate} onChange={(e) => handleActionItemChange(item.id, e)} className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"/>
                  <button onClick={() => removeActionItem(item.id)} className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-700 rounded-md transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                  </button>
                </div>
              ))}
            </div>
            <button onClick={addActionItem} className="mt-4 text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition-colors">+ Add Action Item</button>
          </div>
        </div>

        {/* Output Panel */}
        <div className="lg:sticky top-24 h-full">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-white">Markdown Output</h3>
              <div className="flex items-center space-x-2">
                 <button onClick={handleCopy} className="relative text-sm bg-slate-700 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-md">
                  {copySuccess || 'Copy Markdown'}
                 </button>
                 <button onClick={handleDownload} className="text-sm bg-yellow-500 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-900 font-bold py-2 px-4 rounded-lg transition-all duration-300 shadow-md">Download DOCX</button>
              </div>
            </div>
            <pre className="flex-grow bg-slate-950 border border-slate-700 rounded-lg p-4 overflow-auto text-sm text-slate-200 font-mono whitespace-pre-wrap">
              <code>{generatedMarkdown}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinutesGenerator;