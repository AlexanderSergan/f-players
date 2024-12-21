import { Carousel } from 'components/carousel';
import { ThreePlayerGrid } from 'components/grid/three-players';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <ThreePlayerGrid />
      <Carousel />
      {/* <Footer /> */}
    </>
  );
}