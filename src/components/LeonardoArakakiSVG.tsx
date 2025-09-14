import React from 'react';

interface LeonardoArakakiSVGProps {
  className?: string;
}

const LeonardoArakakiSVG: React.FC<LeonardoArakakiSVGProps> = ({ className = "" }) => {
  return (
    <div className={`w-[70%] md:w-[85%] lg:w-[100%] ${className}`}>
      <svg 
        viewBox="0 0 500 220" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto -skew-x-8"
      >
        {/* LEONARDO - Estilo caligrafia japonesa (COM ITÁLICO + NEGRITO) */}
        <g stroke="#8B4513" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* L - traço vertical com pincel */}
          <path d="M 25 25 Q 23 23 25 25 L 25 70 Q 23 68 25 70 L 45 70 Q 47 68 45 70"/>
          
          {/* E - traços horizontais com pincel */}
          <path d="M 60 25 Q 58 23 60 25 L 60 70 Q 58 68 60 70 M 60 25 Q 62 23 60 25 L 85 25 Q 87 23 85 25 M 60 47 Q 58 45 60 47 L 80 47 Q 82 45 80 47 M 60 70 Q 58 68 60 70 L 85 70 Q 87 68 85 70"/>
          
          {/* O - círculo com pincel */}
          <path d="M 100 25 Q 98 23 100 25 L 100 70 Q 98 68 100 70 M 100 25 Q 102 23 100 25 L 125 25 Q 127 23 125 25 L 125 70 Q 127 68 125 70 L 100 70 Q 98 68 100 70"/>
          
          {/* N - traços diagonais com pincel */}
          <path d="M 140 25 Q 138 23 140 25 L 140 70 Q 138 68 140 70 M 140 25 Q 142 23 140 25 L 165 70 Q 167 68 165 70 M 165 25 Q 167 23 165 25 L 165 70 Q 163 68 165 70"/>
          
          {/* A - triângulo com pincel */}
          <path d="M 180 70 Q 178 68 180 70 L 200 25 Q 202 23 200 25 L 220 70 Q 222 68 220 70 M 185 50 Q 183 48 185 50 L 215 50 Q 217 48 215 50"/>
          
          {/* R - traços com pincel */}
          <path d="M 230 25 Q 228 23 230 25 L 230 70 Q 228 68 230 70 M 230 25 Q 232 23 230 25 L 250 25 Q 252 23 250 25 L 250 45 Q 252 43 250 45 L 230 45 Q 228 43 230 45 L 250 70 Q 252 68 250 70"/>
          
          {/* D - traços com pincel */}
          <path d="M 260 25 Q 258 23 260 25 L 260 70 Q 258 68 260 70 M 260 25 Q 262 23 260 25 L 285 25 Q 287 23 285 25 L 285 70 Q 287 68 285 70 L 260 70 Q 258 68 260 70"/>
          
          {/* O - círculo com pincel */}
          <path d="M 300 25 Q 298 23 300 25 L 300 70 Q 298 68 300 70 M 300 25 Q 302 23 300 25 L 325 25 Q 327 23 325 25 L 325 70 Q 327 68 325 70 L 300 70 Q 298 68 300 70"/>
        </g>
        
        {/* ARAKAKI - Estilo caligrafia japonesa (COM ITÁLICO + NEGRITO) */}
        <g stroke="#8B4513" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* A - triângulo com pincel */}
          <path d="M 25 150 Q 23 148 25 150 L 45 100 Q 47 98 45 100 L 65 150 Q 67 148 65 150 M 30 125 Q 28 123 30 125 L 60 125 Q 62 123 60 125"/>
          
          {/* R - traços com pincel */}
          <path d="M 80 100 Q 78 98 80 100 L 80 150 Q 78 148 80 150 M 80 100 Q 82 98 80 100 L 100 100 Q 102 98 100 100 L 100 120 Q 102 118 100 120 L 80 120 Q 78 118 80 120 L 100 150 Q 102 148 100 150"/>
          
          {/* A - triângulo com pincel */}
          <path d="M 120 150 Q 118 148 120 150 L 140 100 Q 142 98 140 100 L 160 150 Q 162 148 160 150 M 125 125 Q 123 123 125 125 L 155 125 Q 157 123 155 125"/>
          
          {/* K - traços com pincel */}
          <path d="M 180 100 Q 178 98 180 100 L 180 150 Q 178 148 180 150 M 180 125 Q 178 123 180 125 L 200 100 Q 202 98 200 100 M 180 125 Q 178 123 180 125 L 200 150 Q 202 148 200 150"/>
          
          {/* A - triângulo com pincel */}
          <path d="M 220 150 Q 218 148 220 150 L 240 100 Q 242 98 240 100 L 260 150 Q 262 148 260 150 M 225 125 Q 223 123 225 125 L 255 125 Q 257 123 255 125"/>
          
          {/* K - traços com pincel */}
          <path d="M 280 100 Q 278 98 280 100 L 280 150 Q 278 148 280 150 M 280 125 Q 278 123 280 125 L 300 100 Q 302 98 300 100 M 280 125 Q 278 123 280 125 L 300 150 Q 302 148 300 150"/>
          
          {/* I - traço vertical com pincel */}
          <path d="M 320 100 Q 318 98 320 100 L 320 150 Q 318 148 320 150"/>
        </g>
      </svg>
    </div>
  );
};

export default LeonardoArakakiSVG;
