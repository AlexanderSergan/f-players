import { Carousel } from 'components/carousel';
import { ThreePlayerGrid } from 'components/grid/three-players';

export const metadata = {
  description: 'Find socials of your favourite players.',
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
