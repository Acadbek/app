import {
  Section,
  Cell,
  List,
  Avatar,
} from '@telegram-apps/telegram-ui';
import type { FC } from 'react';
import { Page } from '@/components/Page.tsx';
import { Link } from '@/components/Link/Link.tsx';
import img from '../../../public/map.png'

// --- MOCK DATA ---
const userProfile = {
  name: "Ibrohim",
  details: "Farmer • Level 5",
  balance: "1,250,000 UZS",
  totalLand: 5,
  usedLand: 3,
};

const myLands = [
  { id: 1, name: 'Plot #1', crop: 'Corn', icon: '🌽', color: '#34C759' }, // Green
  { id: 2, name: 'Plot #2', crop: 'Wheat', icon: '🌾', color: '#FF9500' },
  { id: 3, name: 'Plot #3', crop: 'Onion', icon: '🧅', color: '#AF52DE' },
];

const IOSIcon = ({ icon, color }: { icon: string, color: string }) => (
  <div style={{
    width: 28,
    height: 28,
    backgroundColor: color,
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    marginRight: '12px',
    color: '#FFFFFF'
  }}>
    {icon}
  </div>
);

export const IndexPage: FC = () => {

  return (
    <Page back={false}>
      <div style={{
        backgroundColor: 'var(--tg-theme-secondary-bg-color)',
        minHeight: '100vh',
        paddingBottom: '20px',
        fontFamily: "Geist",
        paddingTop: '20px',
      }}>

        <List>
          {/* 1. USER PROFILE HEADER */}
          <Section style={{
            backgroundColor: 'var(--tg-theme-bg-color)',
            borderRadius: '12px',
            overflow: 'hidden'
          }}>
            <Link to="/settings">
              <div style={{ display: 'flex', alignItems: 'center', padding: '16px', gap: '15px' }}>
                <Avatar src="https://cdn-icons-png.flaticon.com/512/147/147144.png" />
                <div style={{ flex: 1 }}>
                  <div style={{
                    color: 'var(--tg-theme-text-color)',
                    fontSize: '20px',
                    fontWeight: '600'
                  }}>
                    {userProfile.name}
                  </div>
                  <div style={{
                    color: 'var(--tg-theme-hint-color)',
                    fontSize: '14px',
                    marginTop: '2px'
                  }}>
                    {userProfile.details}
                  </div>
                </div>
                <div style={{
                  background: '#FF3B30',
                  color: 'white',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  2
                </div>
              </div>
            </Link>
          </Section>


          {/* 4. MY LANDS SECTION */}
          <Section style={{
            backgroundColor: 'var(--tg-theme-bg-color)',
            borderRadius: '12px',
            overflow: 'hidden'
          }}>

            <Link to="/buy-land">
              <Cell
                before={<IOSIcon icon="➕" color="#007AFF" />}
                description="Open new area"
              >
                Buy Land
              </Cell>
            </Link>

            {myLands.map((land) => (
              <Link key={land.id} to={`/farm/${land.id}`}>
                <Cell
                  before={<IOSIcon icon={land.icon} color={land.color} />}
                  after="Details >"
                  description={land.crop}
                >
                  {land.name}
                </Cell>
              </Link>
            ))}
          </Section>

          {/* 5. SETTINGS MENU */}
          <Section style={{
            margin: '20px 0',
            backgroundColor: 'var(--tg-theme-bg-color)',
            borderRadius: '12px',
            overflow: 'hidden'
          }}>
            <Cell before={<IOSIcon icon="⚙️" color="var(--tg-theme-hint-color)" />}>
              General Settings
            </Cell>
            <Cell before={<IOSIcon icon="🌙" color="#5856D6" />}>
              Dark Mode
            </Cell>
            {/* <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '8px',
                }}>
                {landGrid.map((status, index) => (
                  <div
                  key={index}
                    style={{
                      aspectRatio: '1/1',
                      // Agar band bo'lsa Yashil, bo'sh bo'lsa secondary-bg (kulrang fon)
                      backgroundColor: status === 'occupied'
                      ? '#34C759'
                      : 'var(--tg-theme-secondary-bg-color)',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      // Bo'sh joylar uchun chiziq
                      border: status === 'empty'
                      ? '1px dashed var(--tg-theme-hint-color)'
                      : 'none'
                      }}
                      >
                    {status === 'occupied' ? '🌱' : ''}
                    </div>
                    ))}
              </div> */}
          </Section>

          <Section style={{
            margin: '16px 0',
            backgroundColor: 'var(--tg-theme-bg-color)',
            borderRadius: '12px',
            overflow: 'hidden'
          }}>

            {/* Map Section */}
            <div style={{ padding: '12px 16px 16px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
                fontSize: '14px',
                color: 'var(--tg-theme-hint-color)'
              }}>
                <span>Land Status</span>
                <span>{userProfile.usedLand}/{userProfile.totalLand} occupied</span>
              </div>

              {/* Grid Map */}
              <img style={{
                borderRadius: '8px',
              }} width="100%" src={img} alt="" />
            </div>
          </Section>
        </List>
      </div>
    </Page>
  );
};
