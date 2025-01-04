import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Footer from '@/components/layout/footer';
import { Gallery } from 'components/product/gallery';
import { PlayerDescription } from 'components/product/player-description';
import { ProductProvider } from 'components/product/product-context';
import { LeicesterPlayers, Player } from 'lib/data/players/players';
import { Suspense } from 'react';




export const revalidate = 86400 // 60 * 60 * 24 = 1 day

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true // or false, to 404 on unknown paths
 

type PayloadGetResponse<T> = {
  docs: T[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number | null;
  page: number;
  pagingCounter: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
}

type PlayerWithId = Player & { id: string }

export async function generateStaticParams() {
  const res: PayloadGetResponse<PlayerWithId> = await fetch ('https://f-players.vercel.app' + '/api/players?limit=999').then(res => res.json())

  return res.docs.map((player) => ({
    id: String(player.id),
    // params: { handle: player.slug }
  }))


}


const getPlayer = async ( handle: string, players: Player[]) => {
  // console.log('handle', handle, LeicesterPlayers)

  return LeicesterPlayers.find((player) => player.slug === handle);

}

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;


  const players = LeicesterPlayers

  const player = await getPlayer(params.handle, players);
  // const product = await getProduct(params.handle);


  if (!player) return notFound();

  // const { url, width, height, altText: alt } = player.img || {};
  // const indexable = !player.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: player.name ,
    description: player.position ,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true
      }
    },
     
    // description: player.position ,
    // robots: {
    //   index: indexable,
    //   follow: indexable,
    //   googleBot: {
    //     index: indexable,
    //     follow: indexable
    //   }
    // },
  //   openGraph: url
  //     ? {
  //         images: [
  //           {
  //             url,
  //             width,
  //             height,
  //             alt
  //           }
  //         ]
  //       }
  //     : null
  };
}

export default async function PlayerPage( { params }: { params: Promise<{ id: string }> }) {
  // const params = await props.params;
  // const product = await getProduct(params.handle);
  // const players = LeicesterPlayers
  // const player = await getPlayer(params.handle, players);

  const id = (await params).id
  const player: Player = await fetch ('https://f-players.vercel.app' + '/api/players/' + id).then(res => res.json())




  // const productJsonLd = {
  //   '@context': 'https://schema.org',
  //   '@type': 'Product',
  //   name: player.name,
  //   description: player.description,
  //   image: player.featuredImage.url,
  //   offers: {
  //     '@type': 'AggregateOffer',
  //     availability: player.availableForSale
  //       ? 'https://schema.org/InStock'
  //       : 'https://schema.org/OutOfStock',
  //     priceCurrency: player.priceRange.minVariantPrice.currencyCode,
  //     highPrice: player.priceRange.maxVariantPrice.amount,
  //     lowPrice: player.priceRange.minVariantPrice.amount
  //   }
  // };

  if (!player) return notFound();

  return (
    <ProductProvider>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      /> */}
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Suspense
              fallback={
                <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
              }
            >
              {/* <Gallery
                images={player.images.slice(0, 5).map((image: Image) => ({
                  src: image.url,
                  altText: image.altText
                }))}
              /> */}
              <Gallery images={[{src: player.img as string, altText: player.name as string}]} />
            </Suspense>
          </div>

          <div className="basis-full lg:basis-2/6">
            <Suspense fallback={null}>
                {/* TODO: uncomment product description and make it PlayerInfo */}
              <PlayerDescription player={player} />
            </Suspense>
          </div>
        </div>
        {/* <RelatedProducts id={player.name} /> */}
      </div>
      <Footer />
    </ProductProvider>
  );
}

// async function RelatedProducts({ id }: { id: string }) {
//   const relatedProducts = await getProductRecommendations(id);

//   if (!relatedProducts.length) return null;

//   return (
//     <div className="py-8">
//       <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
//       <ul className="flex w-full gap-4 overflow-x-auto pt-1">
//         {relatedProducts.map((product) => (
//           <li
//             key={player.slug}
//             className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
//           >
//             <Link
//               className="relative h-full w-full"
//               href={`/product/${player.slug}`}
//               prefetch={true}
//             >
//               <GridTileImage
//                 alt={player.title}
//                 label={{
//                   title: player.title,
//                   amount: player.priceRange.maxVariantPrice.amount,
//                   currencyCode: player.priceRange.maxVariantPrice.currencyCode
//                 }}
//                 src={player.featuredImage?.url}
//                 fill
//                 sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
//               />
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
