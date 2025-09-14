import React from 'react';

interface RusticTextSVGProps {
  text: string;
  className?: string;
}

const RusticTextSVG: React.FC<RusticTextSVGProps> = ({ text, className = "" }) => {
  // Função para gerar paths SVG baseados no texto
  const generateTextPaths = (text: string) => {
    const paths: string[] = [];
    let x = 10;
    const y = 25;
    const letterSpacing = 20;
    
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
    const strokeWidth = 2;
    const height = 20;
    
    switch (char) {
      case 'P':
        return `M ${x} ${y} L ${x} ${y + height} M ${x} ${y} L ${x + 12} ${y} Q ${x + 15} ${y} ${x + 15} ${y + 6} L ${x + 15} ${y + 8} Q ${x + 15} ${y + 11} ${x + 12} ${y + 11} L ${x} ${y + 11}`;
      case 'E':
        return `M ${x} ${y} L ${x} ${y + height} M ${x} ${y} L ${x + 12} ${y} M ${x} ${y + 6} L ${x + 10} ${y + 6} M ${x} ${y + height} L ${x + 12} ${y + height}`;
      case 'R':
        return `M ${x} ${y} L ${x} ${y + height} M ${x} ${y} L ${x + 12} ${y} Q ${x + 15} ${y} ${x + 15} ${y + 6} L ${x + 15} ${y + 8} Q ${x + 15} ${y + 11} ${x + 12} ${y + 11} L ${x} ${y + 11} M ${x + 8} ${y + 11} L ${x + 15} ${y + height}`;
      case 'F':
        return `M ${x} ${y} L ${x} ${y + height} M ${x} ${y} L ${x + 12} ${y} M ${x} ${y + 6} L ${x + 10} ${y + 6}`;
      case 'I':
        return `M ${x + 6} ${y} L ${x + 6} ${y + height}`;
      case 'L':
        return `M ${x} ${y} L ${x} ${y + height} L ${x + 12} ${y + height}`;
      case 'O':
        return `M ${x + 6} ${y} Q ${x} ${y} ${x} ${y + 6} L ${x} ${y + 14} Q ${x} ${y + height} ${x + 6} ${y + height} L ${x + 9} ${y + height} Q ${x + 15} ${y + height} ${x + 15} ${y + 14} L ${x + 15} ${y + 6} Q ${x + 15} ${y} ${x + 9} ${y} L ${x + 6} ${y}`;
      case 'M':
        return `M ${x} ${y + height} L ${x} ${y} L ${x + 4} ${y + 8} L ${x + 8} ${y} L ${x + 12} ${y} L ${x + 12} ${y + height}`;
      case 'A':
        return `M ${x} ${y + height} L ${x + 3} ${y} L ${x + 6} ${y} L ${x + 9} ${y + height} M ${x + 1.5} ${y + 8} L ${x + 7.5} ${y + 8}`;
      case 'Ç':
        return `M ${x + 12} ${y} L ${x} ${y} L ${x} ${y + height} L ${x + 12} ${y + height} M ${x + 8} ${y + 16} L ${x + 10} ${y + 18}`;
      case 'Õ':
        return `M ${x + 6} ${y} Q ${x} ${y} ${x} ${y + 6} L ${x} ${y + 14} Q ${x} ${y + height} ${x + 6} ${y + height} L ${x + 9} ${y + height} Q ${x + 15} ${y + height} ${x + 15} ${y + 14} L ${x + 15} ${y + 6} Q ${x + 15} ${y} ${x + 9} ${y} L ${x + 6} ${y} M ${x + 4} ${y - 2} Q ${x + 6} ${y - 4} ${x + 8} ${y - 2}`;
      case 'S':
        return `M ${x + 12} ${y} L ${x + 3} ${y} Q ${x} ${y} ${x} ${y + 3} L ${x} ${y + 6} Q ${x} ${y + 8} ${x + 3} ${y + 8} L ${x + 9} ${y + 8} Q ${x + 12} ${y + 8} ${x + 12} ${y + 11} L ${x + 12} ${y + 14} Q ${x + 12} ${y + height} ${x + 9} ${y + height} L ${x} ${y + height}`;
      default:
        return '';
    }
  };

  const paths = generateTextPaths(text);
  const width = text.length * 20 + 20;

  return (
    <div className={`inline-block ${className}`}>
      <svg 
        viewBox={`0 0 ${width} 40`}
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <g stroke="#FF8C42" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {paths.map((path, index) => (
            <path key={index} d={path} />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default RusticTextSVG;
