import type { FC } from 'react';
import { Page } from '@/components/Page.tsx';
import { Section, Cell, List, Button } from '@telegram-apps/telegram-ui';
import { Link } from '@/components/Link/Link.tsx';
import { useParams } from 'react-router-dom';

const farmItems = [
  { id: 1, name: 'Potato', icon: '🥔', status: 'Growing', color: '#FF9500' },
  { id: 2, name: 'Milk', icon: '🥛', status: 'Ready', color: '#34C759' },
  { id: 3, name: 'Tomato', icon: '🍅', status: 'Flowering', color: '#FF3B30' },
];

export const FarmPage: FC = () => {
  const { id } = useParams();

  return (
    <Page back={true}>
      <List>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 20px',
          borderRadius: '8px',
          background: 'var(--tg-theme-bg-color)',
          borderBottom: '1px solid var(--tg-theme-secondary-bg-color)'
        }}>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--tg-theme-hint-color)' }}>PLOT</div>
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Plot #{id}</div>
          </div>

          <Link to="/live">
            <Button
              size="s"
              mode="outline"
              style={{
                color: '#FF3B30',
                borderColor: '#FF3B30',
                fontWeight: 'bold',
                padding: '0 15px'
              }}
            >
              🔴 LIVE
            </Button>
          </Link>
        </div>
        <Section>
          {farmItems.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <Cell
                before={<div style={{ fontSize: '24px', marginRight: '10px' }}>{item.icon}</div>}
                after={item.status}
                description="Bio • Organic"
                onClick={() => { }}
              >
                {item.name}
              </Cell>
            </Link>
          ))}
        </Section>

        <Section header="Livestock">
          <Link to="/product/2">
            <Cell before="🐄" after="5 liters">Cow (Masha)</Cell>
          </Link>
        </Section>
      </List>
    </Page>
  );
};
