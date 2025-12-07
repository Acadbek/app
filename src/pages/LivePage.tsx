import type { FC } from 'react';
import { Page } from '@/components/Page.tsx';

// ⚠️ DIQQAT: Bu yerga o'zingizning Vercel manzilingizni qo'ying!
const CAMERA_URL = "https://object-recognize.vercel.app/";

export const LivePage: FC = () => {
  return (
    <Page back={true}>
      <div style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column'
      }}>

        {/* Iframe orqali Vercel saytini yuklaymiz */}
        <iframe
          src={CAMERA_URL}
          title="Live Camera"
          allow="autoplay; encrypted-media; fullscreen"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            flex: 1
          }}
        />

        {/* Pastki qismda "JONLI EFIR" yozuvi */}
        <div style={{
          padding: '10px',
          textAlign: 'center',
          background: '#FF3B30',
          color: 'white',
          fontWeight: 'bold',
          letterSpacing: '1px'
        }}>
          🔴 JONLI EFIR (CCTV)
        </div>
      </div>
    </Page>
  );
};
