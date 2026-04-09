import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'HK Solution — Tech Diligence, Security, and Product Execution';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #080c14 0%, #0a1628 50%, #080c14 100%)',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Cobalt glow orb */}
        <div style={{
          position: 'absolute', top: -100, right: 100,
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,71,171,0.25) 0%, transparent 70%)',
        }} />
        {/* Dot grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(0,87,204,0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        {/* Badge */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '6px 16px', borderRadius: 999,
          background: 'rgba(0,71,171,0.2)', border: '1px solid rgba(0,71,171,0.4)',
          marginBottom: 32,
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#0047AB' }} />
          <span style={{ color: '#60a5fa', fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase' }}>
            Tech Diligence · Security · Execution
          </span>
        </div>

        {/* Title */}
        <div style={{ fontSize: 64, fontWeight: 800, color: '#ffffff', lineHeight: 1.1, marginBottom: 24, maxWidth: 700 }}>
          HK Solution
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: 28, color: '#94a3b8', maxWidth: 680, lineHeight: 1.4, marginBottom: 48 }}>
          Security audits, tech due diligence, competitor analysis, and IP forensics.
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {['Security Audit', 'Tech Due Diligence', 'Competitive Intelligence', 'IP Forensics'].map(tag => (
            <div key={tag} style={{
              padding: '8px 20px', borderRadius: 6,
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              color: '#e2e8f0', fontSize: 16, fontWeight: 500,
            }}>
              {tag}
            </div>
          ))}
        </div>

        {/* URL */}
        <div style={{
          position: 'absolute', bottom: 48, right: 80,
          color: '#0047AB', fontSize: 20, fontWeight: 700,
        }}>
          hksolution.dev
        </div>
      </div>
    ),
    { ...size },
  );
}
