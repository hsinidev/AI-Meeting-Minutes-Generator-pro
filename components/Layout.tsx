import React, { useEffect, useRef, useCallback } from 'react';
import Modal from './Modal';

interface Star {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  color: string;
  opacity: number;
  twinkleSpeed: number;
}

interface Nebula {
    x: number;
    y: number;
    radius: number;
    color: string;
    vx: number;
    vy: number;
}

interface LayoutProps {
  children: React.ReactNode;
  openModal: (type: string) => void;
  closeModal: () => void;
  modalContent: { title: string; content: React.ReactNode } | null;
}

const Layout: React.FC<LayoutProps> = ({ children, openModal, closeModal, modalContent }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback((ctx: CanvasRenderingContext2D, stars: Star[], nebulas: Nebula[]) => {
    // Clear with a very slight transparency for trail effect, or solid for clean redraw
    ctx.fillStyle = '#020617'; 
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Draw Nebulas (Soft background clouds)
    nebulas.forEach(nebula => {
        const gradient = ctx.createRadialGradient(nebula.x, nebula.y, 0, nebula.x, nebula.y, nebula.radius);
        gradient.addColorStop(0, `rgba(${nebula.color}, 0.12)`); // More subtle
        gradient.addColorStop(0.4, `rgba(${nebula.color}, 0.05)`);
        gradient.addColorStop(1, 'rgba(2, 6, 23, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
        ctx.fill();

        // Slow movement for nebulas
        nebula.x += nebula.vx;
        nebula.y += nebula.vy;

        // Wrap around logic
        if (nebula.x - nebula.radius > ctx.canvas.width) nebula.x = -nebula.radius;
        if (nebula.x + nebula.radius < 0) nebula.x = ctx.canvas.width + nebula.radius;
        if (nebula.y - nebula.radius > ctx.canvas.height) nebula.y = -nebula.radius;
        if (nebula.y + nebula.radius < 0) nebula.y = ctx.canvas.height + nebula.radius;
    });

    // Draw Stars
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${star.color}, ${star.opacity})`;
      ctx.fill();

      // Move stars
      star.x += star.vx;
      star.y += star.vy;
      
      // Twinkle effect
      star.opacity += star.twinkleSpeed;
      if (star.opacity > 1 || star.opacity < 0.2) {
          star.twinkleSpeed *= -1;
      }

      // Wrap stars
      if (star.x < 0) star.x = ctx.canvas.width;
      if (star.x > ctx.canvas.width) star.x = 0;
      if (star.y < 0) star.y = ctx.canvas.height;
      if (star.y > ctx.canvas.height) star.y = 0;
    });

    requestAnimationFrame(() => draw(ctx, stars, nebulas));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Vibrant galaxy colors
    const starColors = ['255, 255, 255', '255, 215, 0', '167, 139, 250', '56, 189, 248', '244, 114, 182'];
    
    const stars: Star[] = Array.from({ length: 300 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      color: starColors[Math.floor(Math.random() * starColors.length)],
      opacity: Math.random(),
      twinkleSpeed: (Math.random() * 0.02) * (Math.random() > 0.5 ? 1 : -1)
    }));
    
    // Deep cosmic colors
    const nebulaColors = [
        '76, 29, 149', // Violet
        '15, 118, 110', // Teal
        '190, 24, 93',  // Pink
        '30, 58, 138'   // Dark Blue
    ];
    
    const nebulas: Nebula[] = Array.from({ length: 6 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 400 + 300,
        color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)],
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
    }));
    
    let animationFrameId = requestAnimationFrame(() => draw(ctx, stars, nebulas));

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  const navLinks = ['About', 'Guide', 'Privacy', 'TOS', 'Contact'];

  return (
    <div className="relative min-h-screen bg-galaxy-900 text-slate-200 font-sans selection:bg-yellow-400 selection:text-slate-900">
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col min-h-screen backdrop-blur-[2px]">
        {/* Header */}
        <header className="bg-slate-950/40 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 transition-all duration-300">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-tr from-yellow-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-900" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="text-xl md:text-2xl font-extrabold tracking-tight text-white">Minutes<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Gen</span></div>
            </div>
            
            <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
              {navLinks.map(link => (
                <li key={link}>
                  <button onClick={() => openModal(link)} className="text-slate-300 hover:text-white hover:shadow-[0_0_15px_rgba(251,191,36,0.5)] transition-all duration-300">
                    {link === 'Privacy' ? 'Privacy Policy' : link === 'TOS' ? 'Terms' : link}
                  </button>
                </li>
              ))}
            </ul>
            
            <button onClick={() => openModal('Contact')} className="md:hidden text-slate-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col justify-center items-center w-full">
            {children}
        </main>

        {/* Footer */}
        <footer className="bg-slate-950/60 backdrop-blur-md border-t border-white/10 py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <div className="text-slate-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Doodax.com. All rights reserved.</p>
                </div>
                
                <div className="flex space-x-6 text-sm">
                    <button onClick={() => openModal('Privacy')} className="text-slate-400 hover:text-yellow-400 transition-colors">Privacy</button>
                    <button onClick={() => openModal('TOS')} className="text-slate-400 hover:text-yellow-400 transition-colors">Terms</button>
                    <button onClick={() => openModal('DMCA')} className="text-slate-400 hover:text-yellow-400 transition-colors">DMCA</button>
                </div>

                <div className="text-slate-400 text-sm">
                   Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-yellow-400 hover:text-yellow-300 transition-colors duration-300 hover:underline decoration-yellow-400/50 underline-offset-4">HSINI MOHAMED</a>
                </div>
            </div>
          </div>
        </footer>
      </div>
      {modalContent && <Modal title={modalContent.title} onClose={closeModal}>{modalContent.content}</Modal>}
    </div>
  );
};

export default Layout;