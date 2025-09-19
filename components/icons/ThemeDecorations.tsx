import React from 'react';

// --- Star Wars ---
const StarWarsGlyph = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-500 opacity-60">
    <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.42 20.24L12 17.27L7.58 20.24L8.45 13.97L4 9.27L9.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DecorativeLine = () => (
  <div className="w-full h-1 my-2 flex items-center justify-between gap-1 overflow-hidden">
    {[...Array(50)].map((_, i) => (
      <div key={i} className={`h-full ${i % 5 === 0 ? 'bg-cyan-600' : 'bg-cyan-800'} ${i % 3 === 0 ? 'w-2' : 'w-1'}`} style={{opacity: Math.random() * 0.5 + 0.3}}></div>
    ))}
  </div>
);

export const StarWarsHeader = () => <div className="mb-4"><DecorativeLine /></div>;

export const StarWarsControls = () => (
  <div className="p-2 border-t border-slate-700 bg-slate-900/50 flex items-center justify-between">
    <div className="flex items-center gap-1">
      <StarWarsGlyph /><StarWarsGlyph /><StarWarsGlyph /><StarWarsGlyph />
    </div>
    <div className="flex items-center gap-2">
      <button className="h-8 w-8 bg-slate-700 rounded border border-slate-600 text-cyan-400 flex items-center justify-center hover:bg-slate-600"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon></svg></button>
      <button className="h-8 w-8 bg-slate-700 rounded border border-slate-600 text-cyan-400 flex items-center justify-center hover:bg-slate-600"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg></button>
      <div className="px-3 py-1 bg-black text-cyan-400 text-xs rounded">0.00.0</div>
    </div>
  </div>
);

// --- Warhammer 40k ---
const SkullIcon = () => (
  <svg viewBox="0 0 64 64" className="h-10 w-10 text-amber-500 opacity-80" fill="currentColor">
    <path d="M22.1,38.5c-1.3-3.1-2.4-5.2-3.1-6.1c-1-1.1-2.2-1.9-4.2-2.3c-0.2,0-0.3-0.1-0.4-0.1c-1.3-0.3-2.6-0.3-3.9-0.1 c-0.8,0.1-1.6,0.4-2.4,0.7c-0.1,0-0.2,0.1-0.2,0.1c-0.1,0.1-0.2,0.1-0.3,0.2c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.2-0.2,0.3-0.2,0.5 c-0.3,0.8-0.5,1.7-0.5,2.6c0,1.2,0.3,2.4,0.8,3.5c0.6,1.1,1.3,2.1,2.2,2.9c1,0.8,2.1,1.5,3.3,2c0.2,0.1,0.3,0.1,0.5,0.2 c1.1,0.4,2.2,0.6,3.4,0.6c0.6,0,1.1-0.1,1.7-0.2c0.4-0.1,0.8-0.2,1.2-0.4c0.1,0,0.1-0.1,0.2-0.1c0.3-0.2,0.6-0.3,0.9-0.5 c0.1,0,0.2-0.1,0.2-0.1l0.2-0.2L22.1,38.5z M47.3,30c-2-0.4-3.2-1.1-4.2-2.3c-0.8-0.9-1.8-3-3.1-6.1l-1.3,1.3c0.1-0.2,0.2-0.3,0.2-0.5 c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.3c0.1,0,0.2-0.1,0.2-0.1c0.8-0.3,1.6-0.6,2.4-0.7c1.3-0.2,2.6-0.2,3.9,0.1 c0.1,0,0.3,0.1,0.4,0.1c1.2,0.2,2.4,0.7,3.4,1.4c0.2,0.1,0.3,0.2,0.5,0.3c1,0.8,1.8,1.7,2.5,2.8c0.6,1.1,1,2.4,1,3.7 c0,0.9-0.2,1.8-0.5,2.6c0-0.2-0.1-0.3-0.2-0.5c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1,0-0.2-0.1-0.2-0.1 c-0.3-0.2-0.6-0.3-0.9-0.5c-0.1,0-0.1-0.1-0.2-0.1c-0.4-0.2-0.8-0.3-1.2-0.4c-0.6-0.1-1.1-0.2-1.7-0.2c-1.2,0-2.3,0.2-3.4,0.6 c-0.2,0.1-0.3,0.1-0.5,0.2c-1.2,0.5-2.3,1.1-3.3,2C48.5,40.6,47.9,41.6,47.3,42.8L47.3,30z M32,0L32,0c-2.8,0-5.2,1.1-7.1,2.9 c-1.9,1.9-2.9,4.3-2.9,7.1c0,2.8,1.1,5.2,2.9,7.1c1.9,1.9,4.3,2.9,7.1,2.9l0,0c2.8,0,5.2-1.1,7.1-2.9c1.9-1.9,2.9-4.3,2.9-7.1 c0-2.8-1.1-5.2-2.9-7.1C37.2,1.1,34.8,0,32,0z M44,24.3c-2,1-4,1.8-6,2.3c-1.3,0.3-2.6,0.5-4,0.5s-2.7-0.2-4-0.5 c-2-0.5-4-1.3-6-2.3c-0.7-0.3-1.4-0.5-2-0.5c-0.8,0-1.6,0.3-2.2,0.8c-0.7,0.5-1.1,1.2-1.3,2c-0.2,0.8-0.1,1.7,0.4,2.4 c1.1,1.9,2.8,3.2,4.8,4.1c2,0.9,4.2,1.3,6.3,1.3h2c2.1,0,4.2-0.4,6.3-1.3c2-0.9,3.7-2.2,4.8-4.1c0.5-0.7,0.6-1.6,0.4-2.4 c-0.2-0.8-0.7-1.5-1.3-2C45.4,23.7,44.7,23.9,44,24.3z M38,44h-4v-2c0-1.1-0.9-2-2-2h-2v-2h6v-2h-6v-2h6v-2h-6v-2h6v-2h-8v12h-2 c-1.1,0-2,0.9-2,2v2h4v2c0,1.1,0.9,2,2,2h2v2h-6v2h6v2h-6v2h6v2h-4v2h12v-2h-4v-2h4v-2h-4v-2h4V44z M32,54c-1.1,0-2-0.9-2-2v-2h4 v2C34,53.1,33.1,54,32,54z M32,60c-1.1,0-2-0.9-2-2v-2h4v2C34,59.1,33.1,60,32,60z M32,64c-1.1,0-2-0.9-2-2v-2h4v2 C34,63.1,33.1,64,32,64z" />
  </svg>
);

export const WarhammerHeader = () => (
    <div className="flex justify-center items-center border-b-2 border-amber-800/50 mb-4 pb-2">
        <SkullIcon />
    </div>
);

export const WarhammerControls = () => (
  <div className="p-2 border-t-4 border-double border-amber-900/60 bg-stone-900/50 flex items-center justify-between">
    <div className="w-16 h-8 bg-black grid grid-cols-4 grid-rows-2 gap-px p-1 border border-amber-900/50">
        {[...Array(8)].map((_,i) => <div key={i} className={`bg-amber-600 ${Math.random() > 0.5 ? 'opacity-100':'opacity-30'}`}></div>)}
    </div>
    <div className="text-amber-600 font-[Orbitron] text-xs tracking-widest">
        [STATUS: OPERATIONAL]
    </div>
    <div className="w-16 h-8 bg-black grid grid-cols-4 grid-rows-2 gap-px p-1 border border-amber-900/50">
        {[...Array(8)].map((_,i) => <div key={i} className={`bg-amber-600 ${Math.random() > 0.5 ? 'opacity-100':'opacity-30'}`}></div>)}
    </div>
  </div>
);


// --- Star Trek ---
const LcarsBar = ({ color, height = 'h-8', width = 'w-24', rounded = 'rounded-full', className = '' }: { color: string; height?: string; width?: string; rounded?: string; className?: string}) => (
    <div className={`${width} ${height} ${color} ${rounded} ${className}`}></div>
);

export const StarTrekHeader = () => (
    <div className="flex items-start mb-4">
        <LcarsBar color="bg-orange-400" width="w-16" rounded="rounded-l-full" />
        <div className="flex flex-col ml-2">
            <div className="text-orange-400 text-sm font-bold font-[Antonio] tracking-widest">LCARS 3.4</div>
            <div className="text-cyan-300 text-xs font-[Antonio]">USS RESOLUTE</div>
        </div>
    </div>
);

export const StarTrekControls = () => (
  <div className="p-2 bg-slate-400 flex items-center">
    <LcarsBar color="bg-purple-500" width="w-16" rounded="rounded-l-full" />
    <div className="grid grid-cols-3 gap-2 mx-2">
        <LcarsBar color="bg-orange-400" width="w-12" height="h-6" rounded="rounded" />
        <LcarsBar color="bg-cyan-300" width="w-12" height="h-6" rounded="rounded" />
        <LcarsBar color="bg-orange-400" width="w-12" height="h-6" rounded="rounded" />
    </div>
  </div>
);

// --- Alien ---
const AlienGlyph = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 opacity-70">
    <path d="M12 4L4 8V16L12 20L20 16V8L12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 12L20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 12V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 12L4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 10L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const AlienHeader = () => (
    <div className="w-full h-2 bg-black/50 border-y border-green-900/50 my-2 flex items-center gap-1 p-[2px]">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="h-full flex-1 bg-green-500/80" style={{ opacity: Math.random() * 0.4 + 0.1, transform: `scaleY(${Math.random() * 0.5 + 0.5})` }}></div>
      ))}
    </div>
);

export const AlienControls = () => (
  <div className="p-2 border-t border-green-800/60 bg-black/50 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <AlienGlyph />
      <AlienGlyph />
    </div>
    <div className="flex-grow h-[2px] bg-green-900 mx-4">
       <div className="h-full bg-green-500 animate-pulse" style={{width: `${Math.floor(Math.random()*30+20)}%`}}></div>
    </div>
    <div className="flex items-center gap-2">
      <AlienGlyph />
      <AlienGlyph />
    </div>
  </div>
);

// --- Traveller ---
const FrameCorner = ({ className }: { className?: string }) => (
  <svg className={`absolute w-4 h-4 text-cyan-500 ${className}`} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0V16H14V2H0V0H16Z" fill="currentColor"/>
  </svg>
);

const TravellerDocIcon = () => (
    <svg width="24" height="16" viewBox="0 0 24 16" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 H18 L24 4 V16 H0 Z" />
    </svg>
);

const TravellerTab = ({ children, active = false }: { children: React.ReactNode; active?: boolean }) => (
    <div className={`relative px-4 text-sm uppercase tracking-wider flex items-center justify-center min-h-[28px] ${active ? 'bg-cyan-900/80 text-white' : 'bg-black/30 text-cyan-400'}`}>
      <div className="absolute -top-px -left-px w-full h-full" style={{
        clipPath: 'polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px)',
        background: active ? 'currentColor' : 'transparent',
        borderColor: 'currentColor',
        borderWidth: '1px',
        color: '#06b6d4' /* Tailwind cyan-500 */
      }}></div>
      <span className="relative z-10">{children}</span>
    </div>
);

export const TravellerHeader = () => (
  <div className="relative mb-4 h-6">
    <FrameCorner className="top-0 left-0" />
    <FrameCorner className="top-0 right-0 transform scale-x-[-1]" />
    <hr className="w-11/12 mx-auto border-t-2 border-cyan-800/70 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
  </div>
);

export const TravellerControls = () => (
  <div className="relative p-2 bg-black/30 border-t-2 border-cyan-800/50 flex items-center justify-between">
    <FrameCorner className="bottom-0 left-0 transform scale-y-[-1]" />
    <FrameCorner className="bottom-0 right-0 transform scale-x-[-1] scale-y-[-1]" />
    <div className="flex items-center gap-1">
      <TravellerTab active={true}><TravellerDocIcon /></TravellerTab>
      <TravellerTab>Skills</TravellerTab>
      <TravellerTab>Inventory</TravellerTab>
      <TravellerTab>Info</TravellerTab>
    </div>
    <div className="flex items-center gap-2 text-cyan-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-4.44a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.38a2 2 0 0 0-.59-1.41l-4.12-4.12a2 2 0 0 0-1.41-.59z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
    </div>
  </div>
);


// --- Superhero: Stark Tech ---
export const StarkTechHeader = () => (
  <div className="relative h-6 mb-4">
    <hr className="absolute top-1/2 left-0 w-full h-px bg-cyan-400/50 border-0" />
    <hr className="absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-cyan-300 border-0" style={{boxShadow: '0 0 8px #22d3ee'}}/>
  </div>
);
export const StarkTechFooter = () => (
  <div className="p-2 border-t border-cyan-600/50 bg-blue-950/30 flex items-center justify-between text-cyan-400 text-xs">
    <span>SYSTEM STATUS: ONLINE</span>
    <span>ARC REACTOR: 100%</span>
  </div>
);

// --- Superhero: Classified Dossier ---
export const DossierHeader = () => (
    <div className="relative mb-4 pb-2 border-b-2 border-gray-300">
        <h2 className="text-2xl font-bold text-gray-800">AGENCY DOSSIER</h2>
        <div className="absolute top-0 right-0 border-4 border-red-700 text-red-700 p-2 text-xl font-bold font-sans transform rotate-12">
            TOP SECRET
        </div>
    </div>
);
export const DossierFooter = () => (
    <div className="p-2 border-t-2 border-gray-300 text-sm text-gray-600">
       <p>For authorized personnel only. Unauthorized distribution is punishable by law.</p>
    </div>
);

// --- Superhero: Golden Age Comic ---
export const ComicHeader = () => (
    <div className="bg-yellow-300 border-2 border-black p-2 mb-4 text-black text-center text-xl tracking-wider">
        MEANWHILE...
    </div>
);

// --- Fantasy: Ancient Scroll ---
const OrnateBorder = ({ className }: { className?: string }) => (
    <svg className={`w-full h-8 text-amber-900/70 ${className}`} viewBox="0 0 100 10" preserveAspectRatio="none">
        <path d="M0 5 C 10 0, 20 10, 30 5 S 50 10, 60 5 S 80 10, 90 5, 100 5" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0 6 C 15 2, 25 12, 35 6 S 55 12, 65 6 S 85 12, 95 6, 100 6" fill="none" stroke="currentColor" strokeWidth="0.5" />
    </svg>
);
export const ScrollHeader = () => <div className="mb-2"><OrnateBorder /></div>;
export const ScrollFooter = () => <div className="mt-2"><OrnateBorder className="transform scale-y-[-1]" /></div>;

// --- Fantasy: Dwarven Stone ---
const RunicBorder = ({ className }: {className?: string}) => (
    <div className={`w-full h-4 bg-stone-700/50 flex items-center justify-center gap-4 text-stone-500 text-lg ${className}`}>
        <span>&#5794;</span><span>&#5805;</span><span>&#5800;</span><span>&#5822;</span>
        <span>&#5825;</span><span>&#5800;</span><span>&#5805;</span><span>&#5794;</span>
    </div>
);
export const DwarvenHeader = () => <div className="mb-4 border-y-4 border-stone-600"><RunicBorder /></div>;
export const DwarvenFooter = () => <div className="mt-4 border-y-4 border-stone-600"><RunicBorder /></div>;

// --- Fantasy: Elven Lumina ---
const VineBorder = ({ className }: {className?: string}) => (
    <svg className={`w-full h-6 text-teal-400/80 ${className}`} viewBox="0 0 120 10" preserveAspectRatio="none">
        <path d="M0,5 Q10,0 20,5 T40,5 Q50,0 60,5 T80,5 Q90,0 100,5 T120,5" stroke="currentColor" strokeWidth="1" fill="transparent" />
        <circle cx="20" cy="5" r="1.5" fill="currentColor" />
        <circle cx="60" cy="5" r="1.5" fill="currentColor" />
        <circle cx="100" cy="5" r="1.5" fill="currentColor" />
    </svg>
);
export const ElvenHeader = () => <div className="mb-2"><VineBorder /></div>;
export const ElvenFooter = () => <div className="mt-2"><VineBorder className="transform scale-y-[-1]" /></div>;

// --- Horror: Cursed Grimoire ---
const OccultSymbol = () => (
    <svg className="w-12 h-12 text-red-700/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3 L 6 15 H 18 Z" />
        <path d="M12 21 L 18 9 H 6 Z" />
    </svg>
);
export const GrimoireHeader = () => <div className="flex justify-center mb-4"><OccultSymbol /></div>;
export const GrimoireFooter = () => (
    <div className="text-center mt-4 text-red-300/50 font-[EB_Garamond] text-lg">
        - 666 -
    </div>
);

// --- Horror: Found Footage ---
export const CamcorderHeader = () => (
    <div className="absolute top-2 left-2 right-2 flex justify-between items-center text-red-500 font-bold text-lg z-30">
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
            <span>REC</span>
        </div>
        <span>01:13:37</span>
    </div>
);
export const CamcorderFooter = () => (
    <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-gray-400 font-bold text-lg z-30">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 10V8h-2V6h2V4h2v6h-2zm-3-6H7.17L5.17 6H2v12h18V4h-7zM7 17v-2h10v2H7z" />
        </svg>
        <span>PLAY</span>
    </div>
);

// --- Horror: Asylum Patient File ---
const FormLine = ({label, value = ''}: {label: string, value?: string}) => (
    <div className="flex items-end gap-2">
        <span className="font-bold">{label}:</span>
        <span className="flex-grow border-b border-gray-400 border-dotted text-center font-normal">{value}</span>
    </div>
);
export const AsylumHeader = () => (
    <div className="border-2 border-black p-2 mb-4 space-y-2 text-sm">
        <h2 className="text-center text-lg font-bold">ASYLUM PATIENT RECORD</h2>
        <FormLine label="PATIENT ID" value="734" />
        <FormLine label="ADMITTANCE DATE" value="10-31-1928" />
        <FormLine label="DOCTOR" value="DR. A. CRANE" />
    </div>
);