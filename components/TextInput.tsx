import React from 'react';

interface TextInputProps {
  text: string;
  onTextChange: (text: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ text, onTextChange }) => {
  return (
    <div className="bg-black/30 backdrop-blur-md p-4 rounded-lg border border-gray-700 h-full flex flex-col">
      <label htmlFor="dataslate-text" className="block text-sm font-medium text-gray-300 mb-2">
        Dataslate Content
      </label>
      <textarea
        id="dataslate-text"
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        className="w-full h-full flex-grow bg-gray-900/50 text-gray-200 border border-gray-600 rounded-md p-3 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all resize-none min-h-[300px] lg:min-h-[350px] font-mono"
        placeholder="Enter your text here..."
      />
      <p className="text-xs text-gray-400 mt-2 text-center">
        Supports Markdown formatting: <code># Header</code>, <code>**bold**</code>, <code>*italics*</code>
      </p>
    </div>
  );
};