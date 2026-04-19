'use client'

export function GradientMesh() {
  return (
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
      {/* Blob 1 - top left */}
      <div
        className="absolute rounded-full"
        style={{
          width: '600px',
          height: '600px',
          top: '-150px',
          left: '-100px',
          background: 'radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'mesh-float-1 15s ease-in-out infinite',
        }}
      />
      {/* Blob 2 - center right */}
      <div
        className="absolute rounded-full"
        style={{
          width: '500px',
          height: '500px',
          top: '20%',
          right: '-80px',
          background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'mesh-float-2 18s ease-in-out infinite',
        }}
      />
      {/* Blob 3 - bottom center */}
      <div
        className="absolute rounded-full"
        style={{
          width: '700px',
          height: '400px',
          bottom: '-100px',
          left: '30%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'mesh-float-3 20s ease-in-out infinite',
        }}
      />

      <style>{`
        @keyframes mesh-float-1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(40px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.97); }
        }
        @keyframes mesh-float-2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-50px, 40px) scale(1.08); }
          66% { transform: translate(30px, -20px) scale(0.95); }
        }
        @keyframes mesh-float-3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(60px, -40px) scale(1.04); }
          66% { transform: translate(-30px, 30px) scale(1.02); }
        }
      `}</style>
    </div>
  )
}
