
import React from 'react';
import { THEMES } from '../constants';
import { Theme } from '../types';

interface ThemeSwitcherProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const THEME_GROUPS: Record<string, Theme[]> = {
    'Sci-Fi': [Theme.StarWars, Theme.Warhammer, Theme.StarTrek, Theme.Alien, Theme.Traveller],
    'Superhero': [Theme.StarkTech, Theme.ClassifiedDossier, Theme.GoldenAgeComic],
    'Fantasy': [Theme.AncientScroll, Theme.DwarvenStone, Theme.ElvenLumina],
    'Horror': [Theme.CursedGrimoire, Theme.FoundFootage, Theme.AsylumFile]
};

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, onThemeChange }) => {
  return (
    <div className="bg-black/30 backdrop-blur-md p-4 rounded-lg border border-gray-700">
      <h2 className="text-lg font-bold text-gray-200 mb-3">Choose a Theme</h2>
      <div className="space-y-4">
        {Object.entries(THEME_GROUPS).map(([groupName, themes]) => (
            <div key={groupName}>
                <h3 className="text-md font-semibold text-cyan-400 mb-2 tracking-wider uppercase text-sm">{groupName}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {themes.map(themeKey => {
                        const themeConfig = THEMES[themeKey as Theme];
                        if (!themeConfig) return null;
                        const isActive = currentTheme === themeKey;
                        return (
                          <button
                            key={themeKey}
                            onClick={() => onThemeChange(themeKey as Theme)}
                            className={`p-3 font-semibold rounded-md border text-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all text-center ${
                              isActive ? themeConfig.activeButtonStyles : `${themeConfig.buttonStyles} border`
                            }`}
                          >
                            {themeConfig.name}
                          </button>
                        );
                    })}
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};
