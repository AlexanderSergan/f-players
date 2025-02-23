import { GridTileImage } from 'components/grid/tile';
import { LeicesterPlayers, Player } from 'lib/data/players/players';
import Link from 'next/link';

function ThreePlayerGridItem({
  item,
  size,
  priority,
}: {
  item: Player;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <div
      className={
        size === 'full'
          ? 'md:col-span-4 md:row-span-2'
          : 'md:col-span-2 md:row-span-1'
      }
    >
      <Link
        className='relative block aspect-square h-full w-full'
        href={`/player/${item.slug}`}
        prefetch={true}
      >
        <GridTileImage
          src={item.img as string}
          fill
          sizes={
            size === 'full'
              ? '(min-width: 768px) 66vw, 100vw'
              : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={item.position}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: item.position as string,
            // amount: item.priceRange.maxVariantPrice.amount,
            // currencyCode: item.priceRange.maxVariantPrice.currencyCode
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreePlayerGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  // const homepageItems = await getCollectionProducts({
  //   collection: 'hidden-homepage-featured-items'
  // });
  const players = LeicesterPlayers;

  const homepageItems: Player[] = players;

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className='mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]'>
      <ThreePlayerGridItem size='full' item={firstProduct} priority={true} />
      <ThreePlayerGridItem size='half' item={secondProduct} priority={true} />
      <ThreePlayerGridItem size='half' item={thirdProduct} />
    </section>
  );
}
