// Fix: Import React to resolve 'Cannot find namespace React' error.
import React from 'react';

export enum Theme {
  // Sci-Fi
  StarWars = 'star-wars',
  Warhammer = 'warhammer',
  StarTrek = 'star-trek',
  Alien = 'alien',
  Traveller = 'traveller',

  // Superhero
  StarkTech = 'stark-tech',
  ClassifiedDossier = 'classified-dossier',
  GoldenAgeComic = 'golden-age-comic',

  // Fantasy
  AncientScroll = 'ancient-scroll',
  DwarvenStone = 'dwarven-stone',
  ElvenLumina = 'elven-lumina',

  // Horror
  CursedGrimoire = 'cursed-grimoire',
  FoundFootage = 'found-footage',
  AsylumFile = 'asylum-file',
}

export interface ThemeConfig {
  name: string;
  frameBg: string;
  screenBg: string;
  textColor: string;
  textShadow: string;
  font: string;
  borderColor: string;
  buttonStyles: string;
  activeButtonStyles: string;
  accentColor: string;
  headerElement?: React.ReactNode;
  footerElement?: React.ReactNode;
  screenOverlayClass?: string;
}
