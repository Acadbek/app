import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '@/components/Page.tsx';
import { Section, Cell, List, Button, Banner } from '@telegram-apps/telegram-ui';

type ProductType = 'Vegetable' | 'Livestock';

interface ProductData {
  name: string;
  icon: string;
  type: ProductType;
  organic: boolean;
  planted?: string;
  daysToGrow?: number;
  produced?: string;
  shelfLife?: number;
  price?: string;
  yield?: string;
  totalIncome?: string;
}

const productsData: Record<string, ProductData> = {
  '1': {
    name: 'Potato',
    icon: '🥔',
    type: 'Vegetable',
    planted: '2025-09-17',
    daysToGrow: 90,
    organic: true,
    price: "4,500 UZS",
    yield: "500 kg",
    totalIncome: "2,250,000 UZS"
  },
  '2': {
    name: 'Milk',
    icon: '🥛',
    type: 'Livestock',
    produced: '2025-12-07T06:00:00',
    shelfLife: 3,
    organic: true,
    price: "8,000 UZS",
    yield: "10 liters",
    totalIncome: "80,000 UZS"
  },
  '3': {
    name: 'Tomato',
    icon: '🍅',
    type: 'Vegetable',
    planted: '2024-04-10',
    daysToGrow: 60,
    organic: true,
    price: "12,000 UZS",
    yield: "300 kg",
    totalIncome: "3,600,000 UZS"
  },
};

export const ProductPage: FC = () => {
  const { id } = useParams();
  const product = productsData[id || '1'];

  if (!product) return <div>Product not found</div>;

  const today = new Date();

  const renderCropLogic = () => {
    const plantedDate = new Date(product.planted || new Date());
    const diffTime = Math.abs(today.getTime() - plantedDate.getTime());
    const daysPassed = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const progress = product.daysToGrow
      ? Math.min(100, Math.floor((daysPassed / product.daysToGrow) * 100))
      : 100;

    return (
      <>
        <Section header="Current Status">
          <Cell before="📅" after={product.planted}>Planted Date</Cell>
          <Cell before="⏳" after={`${daysPassed} days`}>Time Elapsed</Cell>
          <Cell
            before="📈"
            description={<div style={{ height: '6px', background: '#EFEFEF', borderRadius: '3px', marginTop: '6px', overflow: 'hidden' }}>
              <div style={{ width: `${progress}%`, height: '100%', background: progress === 100 ? '#34C759' : '#007AFF' }} />
            </div>}
          >
            Maturation Process ({progress}%)
          </Cell>
        </Section>

        <Section header="Growth History">
          <div style={{ display: 'flex', overflowX: 'auto', padding: '10px 16px', gap: '10px', scrollbarWidth: 'none' }}>
            <div style={{ textAlign: 'center' }}>
              <img src="https://images.unsplash.com/photo-1593708697557-f2feca483132?q=80&w=100&auto=format&fit=crop" style={{ width: 80, height: 80, borderRadius: 12, objectFit: 'cover' }} alt="Planting" />
              <div style={{ fontSize: 12, marginTop: 4, color: 'var(--tg-theme-hint-color)' }}>Day 1</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src="https://images.unsplash.com/photo-1597868165956-03a6827955b1?q=80&w=100&auto=format&fit=crop" style={{ width: 80, height: 80, borderRadius: 12, objectFit: 'cover' }} alt="Sprout" />
              <div style={{ fontSize: 12, marginTop: 4, color: 'var(--tg-theme-hint-color)' }}>Day 30</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src="https://plus.unsplash.com/premium_photo-1675365779531-031dfdcdf947?fm=jpg&q=60&w=100&auto=format&fit=crop" style={{ width: 80, height: 80, borderRadius: 12, objectFit: 'cover' }} alt="Harvest" />
              <div style={{ fontSize: 12, marginTop: 4, color: 'var(--tg-theme-hint-color)' }}>Now</div>
            </div>
          </div>
        </Section>
      </>
    );
  };

  const renderLivestockLogic = () => {
    const producedDate = new Date(product.produced || new Date());

    return (
      <Section header="Product Passport">
        <Cell before="🕒" after={producedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}>
          Milked at
        </Cell>
        <Cell before="📅" after={producedDate.toLocaleDateString()}>
          Date
        </Cell>
        <Cell before="❄️" after={`${product.shelfLife} days`}>
          Shelf Life
        </Cell>
      </Section>
    );
  };

  return (
    <Page back={true}>
      <List>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{ fontSize: '64px' }}>{product.icon}</div>
          <h1 style={{ margin: '10px 0', color: 'var(--tg-theme-text-color)' }}>{product.name}</h1>
          <span style={{
            background: '#34C759', color: 'white', padding: '4px 12px',
            borderRadius: '20px', fontSize: '12px', fontWeight: 'bold'
          }}>
            {product.organic ? '100% ORGANIC 🌱' : 'STANDARD'}
          </span>
        </div>

        {product.type === 'Vegetable' ? renderCropLogic() : renderLivestockLogic()}

        <Section header="Financial Indicators">
          <Cell before="⚖️" after={product.yield} description="Volume / Yield">
            Quantity
          </Cell>
          <Cell before="💰" after={product.price} description="Market Price">
            Price
          </Cell>
          <Cell before="💵" after={<span style={{ color: '#34C759', fontWeight: 'bold' }}>{product.totalIncome}</span>}>
            Estimated Income
          </Cell>
        </Section>

        <Section header="Care Log">
          <Cell
            before={<div style={{ background: '#007AFF', borderRadius: '50%', width: 8, height: 8 }} />}
            after="Today, 07:30"
            description={product.type === 'Vegetable' ? "Drip irrigated" : "Natural feed given"}
          >
            {product.type === 'Vegetable' ? "Watered" : "Feeding"}
          </Cell>
        </Section>

        <Section header="Quality Control">
          <Banner
            header="Chemical Free"
            subheader={product.type === 'Vegetable'
              ? "Cultivated with local manure and natural water."
              : "Animals fed only with natural feed."}
            type="section"
          >
            <div style={{ fontSize: '24px', background: '#E5F9E7', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
              🍃
            </div>
          </Banner>
          <Cell multiline>Nitrate level: 0% (Verified)</Cell>
        </Section>

        <div style={{ padding: '16px' }}>
          <Button size="l" stretched mode="bezeled">
            {product.type === 'Vegetable' ? "Harvest" : "Put on Sale"}
          </Button>
        </div>
      </List>
    </Page>
  );
};
