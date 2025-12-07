import type { FC } from 'react';
import { Page } from '@/components/Page.tsx';
import { List, Button, Banner } from '@telegram-apps/telegram-ui';

const rentalLands = [
  {
    id: 1,
    name: 'Sunny Valley',
    size: '400 m²',
    price: '$30 / month',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop',
    features: ['Near Water', 'Fertile Soil'],
    status: 'Available'
  },
  {
    id: 2,
    name: 'Mountain Slope',
    size: '400 m²',
    price: '$30 / month',
    image: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1000&auto=format&fit=crop',
    features: ['Cool Air', 'Suitable for Fruit'],
    status: 'Available'
  },
  {
    id: 3,
    name: 'Greenhouse Area',
    size: '200 m² (Indoor)',
    price: '$30 / month',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000&auto=format&fit=crop',
    features: ['Weather Protection', 'Year-round Harvest'],
    status: 'Occupied'
  },
];

export const BuyLandPage: FC = () => {

  return (
    <Page back={true}>
      <List style={{ background: 'var(--tg-theme-secondary-bg-color)', minHeight: '100vh' }}>

        <div style={{ padding: '10px 0' }}>
          <Banner
            style={{
              borderRadius: '8px'
            }}
            header="Rent Land"
            subheader="Start your business without big investment. Just $30/month."
            type="section"
          >
          </Banner>
        </div>

        <div style={{ padding: '0 0px 20px 0px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {rentalLands.map((land) => (
            <div key={land.id} style={{
              backgroundColor: 'var(--tg-theme-bg-color)',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column'
            }}>

              <div style={{ position: 'relative', height: '180px' }}>
                <img
                  src={land.image}
                  alt={land.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  background: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  backdropFilter: 'blur(4px)'
                }}>
                  {land.price}
                </div>
                {land.status === 'Occupied' && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: '#FF3B30',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    OCCUPIED
                  </div>
                )}
              </div>

              <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--tg-theme-text-color)' }}>
                    {land.name}
                  </h3>
                  <span style={{ fontSize: '14px', color: 'var(--tg-theme-hint-color)' }}>
                    {land.size}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  {land.features.map((feature, idx) => (
                    <span key={idx} style={{
                      background: 'var(--tg-theme-secondary-bg-color)',
                      color: 'var(--tg-theme-hint-color)',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      fontSize: '12px'
                    }}>
                      {feature}
                    </span>
                  ))}
                </div>

                <Button
                  mode={land.status === 'Occupied' ? 'gray' : 'filled'}
                  size="l"
                  stretched
                  disabled={land.status === 'Occupied'}
                >
                  {land.status === 'Occupied' ? 'Occupied' : 'Rent Now'}
                </Button>
              </div>

            </div>
          ))}

        </div>
      </List>
    </Page>
  );
};
