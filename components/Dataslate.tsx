import React, { useRef, useLayoutEffect, forwardRef } from 'react';
import type { ThemeConfig } from '../types';
import { parseMarkdown } from '../utils';

interface DataslateProps {
  text: string;
  themeConfig: ThemeConfig;
  scanLinesEnabled: boolean;
  textAlign: 'left' | 'center' | 'right';
  backgroundImage: string | null;
  isWidescreen: boolean;
}

export const Dataslate = forwardRef<HTMLDivElement, DataslateProps>(({ text, themeConfig, scanLinesEnabled, textAlign, backgroundImage, isWidescreen }, ref) => {
  const screenRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const parsedText = parseMarkdown(text);
  const proseStyles = `
    .prose-container h1,
    .prose-container h2,
    .prose-container h3 {
      color: ${themeConfig.accentColor};
      text-shadow: ${themeConfig.textShadow};
      margin-bottom: 0.5em;
      font-weight: 700;
      letter-spacing: 0.05em;
    }
    .prose-container h1 { font-size: 1.4em; line-height: 1.2; }
    .prose-container h2 { font-size: 1.2em; line-height: 1.2; }
    .prose-container h3 { font-size: 1.1em; line-height: 1.2; }
    .prose-container strong { font-weight: 700; color: inherit; }
    .prose-container em { font-style: italic; color: inherit; }
    .prose-container p { margin-bottom: 1em; }
    .prose-container ul {
      list-style: none;
      padding-left: 0;
      margin-bottom: 1em;
    }
    .prose-container li {
      position: relative;
      padding-left: 1.5em;
      margin-bottom: 0.25em;
    }
    .prose-container li::before {
      content: '>';
      position: absolute;
      left: 0.25em;
      top: 0;
      color: ${themeConfig.accentColor};
      text-shadow: ${themeConfig.textShadow};
    }
  `;

  useLayoutEffect(() => {
    const calculateFontSize = () => {
      const screen = screenRef.current;
      const textEl = textRef.current;
      const headerEl = headerRef.current;
      if (!screen || !textEl) return;

      textEl.style.fontSize = '';
      const screenStyle = window.getComputedStyle(screen);
      const paddingTop = parseFloat(screenStyle.paddingTop);
      const paddingBottom = parseFloat(screenStyle.paddingBottom);
      const headerHeight = headerEl ? headerEl.offsetHeight : 0;
      const availableHeight = screen.clientHeight - paddingTop - paddingBottom - headerHeight;
      
      let currentSize = 20;
      textEl.style.fontSize = `${currentSize}px`;

      while (textEl.scrollHeight > availableHeight && currentSize > 8) {
        currentSize -= 0.5;
        textEl.style.fontSize = `${currentSize}px`;
      }
    };
    
    const resizeObserver = new ResizeObserver(calculateFontSize);
    if (screenRef.current) resizeObserver.observe(screenRef.current);
    calculateFontSize();

    return () => resizeObserver.disconnect();
  }, [text, themeConfig, parsedText, backgroundImage, isWidescreen]);

  const screenBaseClasses = `p-4 flex-grow relative overflow-hidden flex flex-col`;
  
  // Define orientation classes for the main container to enforce a max size and aspect ratio,
  // preventing it from scaling infinitely on large screens. It remains responsive for smaller views.
  const orientationClass = isWidescreen 
    ? 'w-full max-w-[896px] aspect-[16/10]' 
    : 'w-full max-w-[480px] aspect-[3/4]';

  const scanlineClass = scanLinesEnabled ? 'scanline-overlay' : '';
  const textAlignClass = `text-${textAlign}`;

  return (
    <>
      <style>{proseStyles}</style>
      <div ref={ref} className={`p-2 sm:p-3 rounded-lg border ${themeConfig.borderColor} ${themeConfig.frameBg} shadow-2xl shadow-black/50 flex flex-col ${orientationClass}`}>
        <div className={`flex flex-col flex-grow border ${themeConfig.borderColor} rounded-md overflow-hidden`}>
          <div 
            ref={screenRef} 
            className={`${screenBaseClasses} ${scanlineClass} ${themeConfig.screenOverlayClass || ''} ${!backgroundImage ? themeConfig.screenBg : ''}`}
          >
            {backgroundImage && (
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `url(${backgroundImage})` }}
                  aria-hidden="true"
                />
                <div className={`absolute inset-0 ${themeConfig.screenBg} opacity-80 z-10`} aria-hidden="true" />
              </>
            )}
            
            <div className="relative z-20 flex flex-col h-full overflow-y-auto">
                <div ref={headerRef}>{themeConfig.headerElement}</div>

                <div
                  ref={textRef}
                  className={`prose-container whitespace-pre-wrap break-words flex-grow ${themeConfig.font} ${themeConfig.textColor} animate-flicker ${textAlignClass}`}
                  style={{ textShadow: themeConfig.textShadow, lineHeight: '1.6' }}
                  aria-live="polite"
                  dangerouslySetInnerHTML={{ __html: parsedText }}
                />
            </div>
          </div>
          
          {themeConfig.footerElement}
        </div>
      </div>
    </>
  );
});

Dataslate.displayName = 'Dataslate';