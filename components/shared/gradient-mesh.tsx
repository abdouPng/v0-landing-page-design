'use client'

export function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Animated SVG Mesh Background */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="80" />
          </filter>
          <style>
            {`
              @keyframes gradient-shift-1 {
                0%, 100% {
                  stop-color: #10b981;
                  stop-opacity: 0.3;
                }
                50% {
                  stop-color: #10b981;
                  stop-opacity: 0.15;
                }
              }
              @keyframes gradient-shift-2 {
                0%, 100% {
                  stop-color: #1f3a3a;
                  stop-opacity: 0.2;
                }
                50% {
                  stop-color: #10b981;
                  stop-opacity: 0.1;
                }
              }
              @keyframes gradient-shift-3 {
                0%, 100% {
                  stop-color: #10b981;
                  stop-opacity: 0.2;
                }
                50% {
                  stop-color: #1f3a3a;
                  stop-opacity: 0.15;
                }
              }
              .stop-1 { animation: gradient-shift-1 8s ease-in-out infinite; }
              .stop-2 { animation: gradient-shift-2 10s ease-in-out infinite; }
              .stop-3 { animation: gradient-shift-3 12s ease-in-out infinite; }
              
              @keyframes mesh-float-1 {
                0%, 100% { transform: translate(0, 0); }
                50% { transform: translate(50px, -50px); }
              }
              @keyframes mesh-float-2 {
                0%, 100% { transform: translate(0, 0); }
                50% { transform: translate(-40px, 60px); }
              }
              @keyframes mesh-float-3 {
                0%, 100% { transform: translate(0, 0); }
                50% { transform: translate(60px, 30px); }
              }
              
              .mesh-group-1 { animation: mesh-float-1 15s ease-in-out infinite; }
              .mesh-group-2 { animation: mesh-float-2 18s ease-in-out infinite; }
              .mesh-group-3 { animation: mesh-float-3 20s ease-in-out infinite; }
            `}
          </style>
          <radialGradient id="grad1" cx="30%" cy="30%">
            <stop offset="0%" className="stop-1" />
            <stop offset="100%" stopColor="#1f2937" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="grad2" cx="70%" cy="60%">
            <stop offset="0%" className="stop-2" />
            <stop offset="100%" stopColor="#1f2937" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="grad3" cx="50%" cy="80%">
            <stop offset="0%" className="stop-3" />
            <stop offset="100%" stopColor="#1f2937" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Mesh Group 1 */}
        <g className="mesh-group-1" filter="url(#blur)">
          <circle cx="200" cy="150" r="400" fill="url(#grad1)" />
        </g>

        {/* Mesh Group 2 */}
        <g className="mesh-group-2" filter="url(#blur)">
          <circle cx="900" cy="250" r="380" fill="url(#grad2)" />
        </g>

        {/* Mesh Group 3 */}
        <g className="mesh-group-3" filter="url(#blur)">
          <circle cx="600" cy="500" r="420" fill="url(#grad3)" />
        </g>
      </svg>
    </div>
  )
}
