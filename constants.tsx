import React from 'react';
import { Theme, ThemeConfig } from './types';
import { 
  StarWarsControls, WarhammerControls, StarTrekControls, AlienControls, TravellerControls, 
  StarWarsHeader, WarhammerHeader, StarTrekHeader, AlienHeader, TravellerHeader,
  StarkTechHeader, StarkTechFooter, DossierHeader, DossierFooter, ComicHeader,
  ScrollHeader, ScrollFooter, DwarvenHeader, DwarvenFooter, ElvenHeader, ElvenFooter,
  GrimoireHeader, GrimoireFooter, CamcorderHeader, CamcorderFooter, AsylumHeader
} from './components/icons/ThemeDecorations';

export const THEMES: Record<Theme, ThemeConfig> = {
  // Sci-Fi
  [Theme.StarWars]: {
    name: 'Star Wars Datapad',
    frameBg: 'bg-slate-800/80 backdrop-blur-sm',
    screenBg: 'bg-[#021014]',
    textColor: 'text-cyan-300',
    textShadow: '0 0 4px #67e8f9, 0 0 8px #67e8f9',
    font: 'font-[Share_Tech_Mono]',
    borderColor: 'border-slate-600',
    buttonStyles: 'bg-slate-700 hover:bg-cyan-900/50 text-cyan-300 border-cyan-700',
    activeButtonStyles: 'bg-cyan-800/80 text-white border-cyan-400 ring-2 ring-cyan-400',
    accentColor: 'text-cyan-300',
    headerElement: <StarWarsHeader />,
    footerElement: <StarWarsControls />,
  },
  [Theme.Warhammer]: {
    name: '40k Cogitator',
    frameBg: 'bg-stone-900/80 backdrop-blur-sm',
    screenBg: 'bg-black',
    textColor: 'text-amber-400',
    textShadow: '0 0 3px #fde047, 0 0 5px #f59e0b',
    font: 'font-[Orbitron]',
    borderColor: 'border-yellow-900/50',
    buttonStyles: 'bg-stone-800 hover:bg-amber-800/50 text-amber-400 border-amber-800',
    activeButtonStyles: 'bg-amber-700/80 text-stone-900 border-amber-400 ring-2 ring-amber-400',
    accentColor: 'text-amber-400',
    headerElement: <WarhammerHeader />,
    footerElement: <WarhammerControls />,
  },
  [Theme.StarTrek]: {
    name: 'Starfleet PADD',
    frameBg: 'bg-slate-300/90 backdrop-blur-sm',
    screenBg: 'bg-black',
    textColor: 'text-gray-100',
    textShadow: 'none',
    font: 'font-[Antonio]',
    borderColor: 'border-slate-500',
    buttonStyles: 'bg-slate-200 hover:bg-blue-300 text-slate-800 border-slate-400',
    activeButtonStyles: 'bg-blue-500 text-white border-blue-400 ring-2 ring-blue-400',
    accentColor: 'text-blue-500',
    headerElement: <StarTrekHeader />,
    footerElement: <StarTrekControls />,
  },
  [Theme.Alien]: {
    name: 'Alien Terminal',
    frameBg: 'bg-gray-900/90 backdrop-blur-sm',
    screenBg: 'bg-black',
    textColor: 'text-green-400',
    textShadow: '0 0 5px #4ade80, 0 0 10px #4ade80',
    font: 'font-[Share_Tech_Mono]',
    borderColor: 'border-green-800/60',
    buttonStyles: 'bg-gray-800 hover:bg-green-900/50 text-green-400 border-green-700',
    activeButtonStyles: 'bg-green-700/80 text-black border-green-400 ring-2 ring-green-400',
    accentColor: 'text-green-400',
    headerElement: <AlienHeader />,
    footerElement: <AlienControls />,
  },
  [Theme.Traveller]: {
    name: 'Traveller Interface',
    frameBg: 'bg-gray-900/80 backdrop-blur-sm',
    screenBg: 'bg-black/50',
    textColor: 'text-cyan-200',
    textShadow: '0 0 3px #99f6e4, 0 0 6px #5eead4',
    font: 'font-[Orbitron]',
    borderColor: 'border-cyan-500/50',
    buttonStyles: 'bg-gray-800 hover:bg-cyan-900/50 text-cyan-300 border-cyan-700',
    activeButtonStyles: 'bg-cyan-600/90 text-white border-cyan-400 ring-2 ring-cyan-400',
    accentColor: 'text-cyan-400',
    headerElement: <TravellerHeader />,
    footerElement: <TravellerControls />,
  },

  // Superhero
  [Theme.StarkTech]: {
    name: 'Stark Tech HUD',
    frameBg: 'bg-blue-950/50 backdrop-blur-md',
    screenBg: 'bg-black/70',
    textColor: 'text-cyan-200',
    textShadow: '0 0 6px #22d3ee, 0 0 10px #22d3ee',
    font: 'font-[Share_Tech_Mono]',
    borderColor: 'border-cyan-400/70',
    buttonStyles: 'bg-blue-900/50 text-cyan-300 border-cyan-600',
    activeButtonStyles: 'bg-cyan-500 text-black border-cyan-300 ring-2 ring-cyan-300',
    accentColor: 'text-cyan-300',
    headerElement: <StarkTechHeader />,
    footerElement: <StarkTechFooter />,
  },
  [Theme.ClassifiedDossier]: {
    name: 'Classified Dossier',
    frameBg: 'bg-[#eaddc7]',
    screenBg: 'bg-[#f5f5f5]',
    textColor: 'text-gray-800',
    textShadow: 'none',
    font: 'font-[Special_Elite]',
    borderColor: 'border-gray-400/80',
    buttonStyles: 'bg-gray-300 text-gray-800 border-gray-400',
    activeButtonStyles: 'bg-red-700 text-white border-red-800 ring-2 ring-red-800',
    accentColor: 'text-red-700',
    headerElement: <DossierHeader />,
    footerElement: <DossierFooter />,
  },
  [Theme.GoldenAgeComic]: {
    name: 'Golden Age Comic',
    frameBg: 'bg-yellow-100',
    screenBg: 'bg-yellow-50',
    textColor: 'text-black',
    textShadow: 'none',
    font: 'font-[Bangers]',
    borderColor: 'border-black border-4',
    buttonStyles: 'bg-blue-500 hover:bg-blue-600 text-white border-black border-2',
    activeButtonStyles: 'bg-red-500 text-white border-black border-2 ring-4 ring-yellow-400',
    accentColor: 'text-blue-600',
    headerElement: <ComicHeader />,
    screenOverlayClass: 'halftone-overlay'
  },

  // Fantasy
  [Theme.AncientScroll]: {
    name: 'Ancient Scroll',
    frameBg: 'bg-transparent',
    screenBg: 'bg-[#f3e9d2]',
    textColor: 'text-[#4a2c2a]',
    textShadow: 'none',
    font: 'font-[EB_Garamond]',
    borderColor: 'border-transparent',
    buttonStyles: 'bg-amber-800/60 hover:bg-amber-800/80 text-amber-100 border-amber-900',
    activeButtonStyles: 'bg-amber-700 text-white border-amber-500 ring-2 ring-amber-500',
    accentColor: 'text-red-900',
    headerElement: <ScrollHeader />,
    footerElement: <ScrollFooter />,
  },
  [Theme.DwarvenStone]: {
    name: 'Dwarven Stone Tablet',
    frameBg: 'bg-stone-800/80 backdrop-blur-sm',
    screenBg: 'bg-stone-900/50',
    textColor: 'text-gray-300',
    textShadow: '1px 1px 1px #000',
    font: 'font-[Orbitron]',
    borderColor: 'border-stone-600 border-2',
    buttonStyles: 'bg-stone-900 hover:bg-stone-950 text-gray-300 border-stone-600',
    activeButtonStyles: 'bg-amber-600 text-stone-900 border-amber-400 ring-2 ring-amber-400',
    accentColor: 'text-amber-500',
    headerElement: <DwarvenHeader />,
    footerElement: <DwarvenFooter />,
  },
  [Theme.ElvenLumina]: {
    name: 'Elven Lumina',
    frameBg: 'bg-green-950/40 backdrop-blur-md',
    screenBg: 'bg-gray-800/50',
    textColor: 'text-teal-100',
    textShadow: '0 0 5px #ccfbf1, 0 0 8px #99f6e4',
    font: 'font-[Cinzel]',
    borderColor: 'border-teal-400/50',
    buttonStyles: 'bg-green-900/50 hover:bg-green-800/50 text-teal-200 border-teal-600',
    activeButtonStyles: 'bg-teal-500 text-white border-teal-300 ring-2 ring-teal-300',
    accentColor: 'text-teal-300',
    headerElement: <ElvenHeader />,
    footerElement: <ElvenFooter />,
  },
  
  // Horror
  [Theme.CursedGrimoire]: {
    name: 'Cursed Grimoire',
    frameBg: 'bg-[#1a0e0e]',
    screenBg: 'bg-[#2b1d1d]',
    textColor: 'text-red-200',
    textShadow: '0 0 5px #ef4444',
    font: 'font-[Creepster]',
    borderColor: 'border-red-900/50',
    buttonStyles: 'bg-black/50 hover:bg-black/80 text-red-400 border-red-800',
    activeButtonStyles: 'bg-red-800 text-white border-red-500 ring-2 ring-red-500',
    accentColor: 'text-red-500',
    headerElement: <GrimoireHeader />,
    footerElement: <GrimoireFooter />,
  },
  [Theme.FoundFootage]: {
    name: 'Found Footage',
    frameBg: 'bg-transparent',
    screenBg: 'bg-black',
    textColor: 'text-gray-300',
    textShadow: '1px 1px 3px #ffffff33',
    font: 'font-[Share_Tech_Mono]',
    borderColor: 'border-transparent',
    buttonStyles: 'bg-gray-700 hover:bg-gray-600 text-white border-gray-600',
    activeButtonStyles: 'bg-red-600 text-white border-red-400 ring-2 ring-red-400',
    accentColor: 'text-red-500',
    headerElement: <CamcorderHeader />,
    footerElement: <CamcorderFooter />,
  },
  [Theme.AsylumFile]: {
    name: 'Asylum Patient File',
    frameBg: 'bg-[#f5f5dc]',
    screenBg: 'bg-white',
    textColor: 'text-gray-900',
    textShadow: 'none',
    font: 'font-[Special_Elite]',
    borderColor: 'border-gray-400',
    buttonStyles: 'bg-gray-200 hover:bg-gray-300 text-gray-800 border-gray-400',
    activeButtonStyles: 'bg-black text-white border-black ring-2 ring-black',
    accentColor: 'text-black',
    headerElement: <AsylumHeader />,
    footerElement: <div className="p-1 bg-gray-200 border-t border-gray-400"></div>
  },
};

export const DEFAULT_TEXT = `# "SOL'S SALVAGE AND REPAIRS"

REPAIRS, MODDING, TOOLS LOANED.

[A holographic image of a gangly, insectoid alien with four arms gestures towards a workbench cluttered with starship parts. The alien, Sol, appears friendly, with large, multifaceted eyes.]

**"Look for Sol at the Scrapyard or the Lazy Bantha."**

## Services Offered
- Starship component diagnostics and repair
- *Droid maintenance* (all models)
- Custom modifications for blasters and speeders
- Tool and equipment rental (collateral required)

## Operating Hours
Sunup to sundown, or whenever I'm not sleeping. Find me.

### Payment Information
Payment accepted: Imperial Credits, New Republic Credits, rare ship parts, interesting scrap. *No bounties.*`;