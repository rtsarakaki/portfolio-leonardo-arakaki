import React from 'react';

interface LeonardoArakakiSVGProps {
  className?: string;
}

const LeonardoArakakiSVG: React.FC<LeonardoArakakiSVGProps> = ({ className = "" }) => {
  return (
    <div className={`w-[70%] md:w-[85%] lg:w-[100%] ${className}`}>
      <svg 
        viewBox="0 0 500 180" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto -skew-x-8"
      >
        {/* LEONARDO - Estilo caligrafia japonesa (COM ITÁLICO + NEGRITO) */}
        <g stroke="#8B4513" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
          <path d="M 290 25 Q 288 23 290 25 L 290 70 Q 288 68 290 70 M 290 25 Q 292 23 290 25 L 315 25 Q 317 23 315 25 L 315 70 Q 317 68 315 70 L 290 70 Q 288 68 290 70"/>
        </g>
        
        {/* ARAKAKI - Estilo caligrafia japonesa (COM ITÁLICO + NEGRITO) */}
        <g stroke="#8B4513" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* A - triângulo com pincel */}
          <path d="M 25 110 Q 23 108 25 110 L 45 60 Q 47 58 45 60 L 65 110 Q 67 108 65 110 M 30 85 Q 28 83 30 85 L 60 85 Q 62 83 60 85"/>
          
          {/* R - traços com pincel */}
          <path d="M 80 60 Q 78 58 80 60 L 80 110 Q 78 108 80 110 M 80 60 Q 82 58 80 60 L 100 60 Q 102 58 100 60 L 100 80 Q 102 78 100 80 L 80 80 Q 78 78 80 80 L 100 110 Q 102 108 100 110"/>
          
          {/* A - triângulo com pincel */}
          <path d="M 120 110 Q 118 108 120 110 L 140 60 Q 142 58 140 60 L 160 110 Q 162 108 160 110 M 125 85 Q 123 83 125 85 L 155 85 Q 157 83 155 85"/>
          
          {/* K - traços com pincel */}
          <path d="M 180 60 Q 178 58 180 60 L 180 110 Q 178 108 180 110 M 180 85 Q 178 83 180 85 L 200 60 Q 202 58 200 60 M 180 85 Q 178 83 180 85 L 200 110 Q 202 108 200 110"/>
          
          {/* A - triângulo com pincel */}
          <path d="M 220 110 Q 218 108 220 110 L 240 60 Q 242 58 240 60 L 260 110 Q 262 108 260 110 M 225 85 Q 223 83 225 85 L 255 85 Q 257 83 255 85"/>
          
          {/* K - traços com pincel */}
          <path d="M 280 60 Q 278 58 280 60 L 280 110 Q 278 108 280 110 M 280 85 Q 278 83 280 85 L 300 60 Q 302 58 300 60 M 280 85 Q 278 83 280 85 L 300 110 Q 302 108 300 110"/>
          
          {/* I - traço vertical com pincel */}
          <path d="M 320 60 Q 318 58 320 60 L 320 110 Q 318 108 320 110"/>
        </g>
      </svg>
    </div>
  );
};

export default LeonardoArakakiSVG;
