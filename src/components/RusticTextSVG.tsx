import React from 'react';

interface RusticTextSVGProps {
  text: string;
  className?: string;
}

const RusticTextSVG: React.FC<RusticTextSVGProps> = ({ text, className = "" }) => {
  // Função para gerar paths SVG baseados no texto
  const generateTextPaths = (text: string) => {
    const paths: string[] = [];
    let x = 5;
    const y = 15;
    const letterSpacing = 12;
    
    for (let i = 0; i < text.length; i++) {
      const char = text[i].toUpperCase();
      const charPath = generateCharPath(char, x, y);
      if (charPath) {
        paths.push(charPath);
      }
      x += letterSpacing;
    }
    
    return paths;
  };

  const generateCharPath = (char: string, x: number, y: number): string => {
    const strokeWidth = 1.5;
    const height = 12;
    
    switch (char) {
      case 'P':
        return `M ${x} ${y} L ${x} ${y + height} M ${x} ${y} L ${x + 8} ${y} Q ${x + 10} ${y} ${x + 10} ${y + 3} L ${x + 10} ${y + 5} Q ${x + 10} ${y + 7} ${x + 8} ${y + 7} L ${x} ${y + 7}`;
      case 'E':
        return `M ${x} ${y} L ${x} ${y + height} M ${x} ${y} L ${x + 8} ${y} M ${x} ${y + 4} L ${x + 6} ${y + 4} M ${x} ${y + height} L ${x + 8} ${y + height}`;
      case 'R':
        return `M ${x} ${y} L ${x} ${y + height} M ${x} ${y} L ${x + 8} ${y} Q ${x + 10} ${y} ${x + 10} ${y + 3} L ${x + 10} ${y + 5} Q ${x + 10} ${y + 7} ${x + 8} ${y + 7} L ${x} ${y + 7} M ${x + 5} ${y + 7} L ${x + 10} ${y + height}`;
      case 'F':
        return `M ${x} ${y} L ${x} ${y + height} M ${x} ${y} L ${x + 8} ${y} M ${x} ${y + 4} L ${x + 6} ${y + 4}`;
      case 'I':
        return `M ${x + 4} ${y} L ${x + 4} ${y + height}`;
      case 'L':
        return `M ${x} ${y} L ${x} ${y + height} L ${x + 8} ${y + height}`;
      case 'O':
        return `M ${x + 4} ${y} Q ${x} ${y} ${x} ${y + 4} L ${x} ${y + 8} Q ${x} ${y + height} ${x + 4} ${y + height} L ${x + 6} ${y + height} Q ${x + 10} ${y + height} ${x + 10} ${y + 8} L ${x + 10} ${y + 4} Q ${x + 10} ${y} ${x + 6} ${y} L ${x + 4} ${y}`;
      case 'M':
        return `M ${x} ${y + height} L ${x} ${y} L ${x + 2.5} ${y + 5} L ${x + 5} ${y} L ${x + 7.5} ${y} L ${x + 10} ${y + height}`;
      case 'A':
        return `M ${x} ${y + height} L ${x + 2} ${y} L ${x + 4} ${y} L ${x + 6} ${y + height} M ${x + 1} ${y + 5} L ${x + 5} ${y + 5}`;
      case 'Ç':
        return `M ${x + 8} ${y} L ${x} ${y} L ${x} ${y + height} L ${x + 8} ${y + height} M ${x + 5} ${y + 10} L ${x + 6} ${y + 11}`;
      case 'Õ':
        return `M ${x + 4} ${y} Q ${x} ${y} ${x} ${y + 4} L ${x} ${y + 8} Q ${x} ${y + height} ${x + 4} ${y + height} L ${x + 6} ${y + height} Q ${x + 10} ${y + height} ${x + 10} ${y + 8} L ${x + 10} ${y + 4} Q ${x + 10} ${y} ${x + 6} ${y} L ${x + 4} ${y} M ${x + 2.5} ${y - 1} Q ${x + 4} ${y - 2} ${x + 5.5} ${y - 1}`;
      case 'S':
        return `M ${x + 8} ${y} L ${x + 2} ${y} Q ${x} ${y} ${x} ${y + 2} L ${x} ${y + 4} Q ${x} ${y + 5} ${x + 2} ${y + 5} L ${x + 6} ${y + 5} Q ${x + 8} ${y + 5} ${x + 8} ${y + 7} L ${x + 8} ${y + 9} Q ${x + 8} ${y + height} ${x + 6} ${y + height} L ${x} ${y + height}`;
      default:
        return '';
    }
  };

  const paths = generateTextPaths(text);
  const width = text.length * 12 + 10;

  return (
    <div className={`inline-block ${className}`}>
      <svg 
        viewBox={`0 0 ${width} 25`}
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <g stroke="#FF8C42" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {paths.map((path, index) => (
            <path key={index} d={path} />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default RusticTextSVG;
