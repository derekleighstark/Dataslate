import React, { useState, useRef, useEffect } from 'react';
import { Dataslate } from './components/Dataslate';
import { TextInput } from './components/TextInput';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Theme } from './types';
import { THEMES, DEFAULT_TEXT } from './constants';

// Declare htmlToImage library which is loaded from CDN in index.html
declare const htmlToImage: any;

type TextAlign = 'left' | 'center' | 'right';

// SVG Icons for new controls
const AlignLeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>;
const AlignCenterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="17" y1="6" x2="7" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="7" y2="18"></line></svg>;
const AlignRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="7" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line></svg>;
const UploadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>;
const TrashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>;

const App: React.FC = () => {
  const [text, setText] = useState<string>(DEFAULT_TEXT);
  const [theme, setTheme] = useState<Theme>(Theme.StarWars);
  const [scanLinesEnabled, setScanLinesEnabled] = useState<boolean>(true);
  const [textAlign, setTextAlign] = useState<TextAlign>('left');
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isWidescreen, setIsWidescreen] = useState<boolean>(true);

  const dataslateRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const currentThemeConfig = THEMES[theme];

  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const themeParam = urlParams.get('theme') as Theme;
      const scanlinesParam = urlParams.get('scanlines');
      const alignParam = urlParams.get('align') as TextAlign;
      const textParam = urlParams.get('text');

      if (themeParam && Object.values(Theme).includes(themeParam)) setTheme(themeParam);
      if (scanlinesParam) setScanLinesEnabled(scanlinesParam === 'true');
      if (alignParam && ['left', 'center', 'right'].includes(alignParam)) setTextAlign(alignParam);
      if (textParam) setText(decodeURIComponent(textParam));

    } catch (error) {
      console.error("Failed to parse URL params:", error);
    }
  }, []);

  const handleExport = async () => {
    if (!dataslateRef.current) return;
    try {
      const dataUrl = await htmlToImage.toPng(dataslateRef.current, { quality: 0.98, backgroundColor: 'transparent', pixelRatio: 2 });
      const link = document.createElement('a');
      link.download = `dataslate-${theme}-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Failed to export dataslate:', error);
      alert('Sorry, there was an error exporting the image.');
    }
  };
  
  const handleShare = () => {
    if (isCopied) return;
    const shareUrl = `${window.location.origin}${window.location.pathname}?theme=${theme}&scanlines=${scanLinesEnabled}&align=${textAlign}&text=${encodeURIComponent(text)}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }).catch(err => console.error('Failed to copy URL:', err));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setBackgroundImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 lg:p-8 font-sans bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/seed/space/1920/1080')"}}>
      <div className="absolute inset-0 bg-black/50"></div>
      <main className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6">
          <header className="bg-black/30 backdrop-blur-md p-4 rounded-lg border border-gray-700">
            <h1 className="text-3xl font-bold font-[Orbitron] text-cyan-300">Genre Dataslate & Document Creator</h1>
            <p className="text-gray-400 mt-1">Bring your stories to life across Sci-Fi, Fantasy, Horror, and more.</p>
          </header>
          
          <ThemeSwitcher currentTheme={theme} onThemeChange={setTheme} />

          <div className="bg-black/30 backdrop-blur-md p-4 rounded-lg border border-gray-700 space-y-4">
             <h2 className="text-lg font-bold text-gray-200 -mb-1">Display Options</h2>
             <div className="flex items-center justify-between">
                <label htmlFor="scanlines-toggle" className="font-medium text-gray-300">Scan Lines Effect</label>
                <button id="scanlines-toggle" role="switch" aria-checked={scanLinesEnabled} onClick={() => setScanLinesEnabled(!scanLinesEnabled)} className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800 ${scanLinesEnabled ? 'bg-cyan-600' : 'bg-gray-600'}`}>
                  <span aria-hidden="true" className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${scanLinesEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <label className="font-medium text-gray-300">Text Alignment</label>
                <div className="flex items-center gap-1 rounded-md bg-gray-900/50 p-1">
                  {(['left', 'center', 'right'] as const).map(align => (
                    <button key={align} onClick={() => setTextAlign(align)} className={`p-2 rounded transition-colors ${textAlign === align ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:bg-gray-700'}`} aria-label={`Align text ${align}`}>
                      {align === 'left' ? <AlignLeftIcon /> : align === 'center' ? <AlignCenterIcon /> : <AlignRightIcon />}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="widescreen-toggle" className="font-medium text-gray-300">Dataslate Orientation</label>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium transition-colors ${!isWidescreen ? 'text-cyan-400' : 'text-gray-400'}`}>Portrait</span>
                  <button id="widescreen-toggle" role="switch" aria-checked={isWidescreen} onClick={() => setIsWidescreen(!isWidescreen)} className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800 ${isWidescreen ? 'bg-cyan-600' : 'bg-gray-600'}`}>
                    <span aria-hidden="true" className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isWidescreen ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
                  <span className={`text-sm font-medium transition-colors ${isWidescreen ? 'text-cyan-400' : 'text-gray-400'}`}>Widescreen</span>
                </div>
              </div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-md p-4 rounded-lg border border-gray-700">
            <h2 className="text-lg font-bold text-gray-200 mb-3">Image Background</h2>
            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} className="hidden" />
            {backgroundImage ? (
              <div className="flex items-center gap-3">
                <img src={backgroundImage} alt="Background preview" className="w-20 h-12 object-cover rounded-md border border-gray-600" />
                <div className="flex-grow">
                  <p className="text-sm text-gray-300">Image loaded.</p>
                  <button onClick={() => { setBackgroundImage(null); if(fileInputRef.current) fileInputRef.current.value = ''; }} className="text-xs text-red-400 hover:text-red-300 font-semibold flex items-center gap-1">
                    <TrashIcon /> Remove
                  </button>
                </div>
              </div>
            ) : (
              <button onClick={() => fileInputRef.current?.click()} className="w-full flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 text-gray-200 font-bold py-3 px-4 rounded-md transition-all uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500">
                <UploadIcon />
                <span>Upload Image</span>
              </button>
            )}
          </div>
          
          <TextInput text={text} onTextChange={setText} />

          <div className="bg-black/30 backdrop-blur-md p-4 rounded-lg border border-gray-700">
            <h2 className="text-lg font-bold text-gray-200 mb-3">Actions</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={handleExport} className="w-full flex items-center justify-center gap-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-4 rounded-md transition-all uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500" aria-label="Export dataslate to PNG">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                <span>Export to PNG</span>
              </button>
              <button onClick={handleShare} disabled={isCopied} className={`w-full flex items-center justify-center gap-3 text-white font-bold py-3 px-4 rounded-md transition-all uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ${isCopied ? 'bg-green-700 focus:ring-green-600 cursor-not-allowed' : 'bg-green-600 hover:bg-green-500 focus:ring-green-500'}`} aria-label="Copy shareable link to clipboard">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path></svg>
                <span>{isCopied ? 'Link Copied!' : 'Share Link'}</span>
              </button>
            </div>
          </div>
          
        </div>

        <div className={`lg:sticky lg:top-8 self-start ${isWidescreen ? 'w-full flex justify-center' : 'mx-auto w-full max-w-[480px]'}`}>
          <Dataslate ref={dataslateRef} text={text} themeConfig={currentThemeConfig} scanLinesEnabled={scanLinesEnabled} textAlign={textAlign} backgroundImage={backgroundImage} isWidescreen={isWidescreen} />
        </div>
      </main>
       <footer className="relative z-10 text-center mt-12 text-gray-500 text-sm">
        <p>Built with React, Tailwind CSS, and a love for all genres.</p>
      </footer>
    </div>
  );
};

export default App;