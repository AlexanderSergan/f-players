import Link from 'next/link';
import { Player } from 'payload-types';
import { FC } from 'react';

export function PlayerDescription({ player }: { player: Player }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{player.name}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          {player.position}


          {/* <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          /> */}
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <div className="flex gap-2">
            <div className="font-bold">Club:</div>
            <div>{player.club}</div>
          </div>
          <div className="flex gap-2">
            <div className="font-bold">Country:</div>
            <div>{player.country}</div>
          </div>
          {/* <div className="flex gap-2">
            <div className="font-bold">Weight:</div>
            <div>{player.weight}</div>
          </div> */}
          </div>

      </div>

            {/* Social links section */}
{  player.social_media?.instagram ?          <div className="flex gap-2 mt-4">
              Instagram:  <Link className='text-blue-600' target='_blank' href={'https://instagram.com/' + player.social_media.instagram} > {player.social_media.instagram}</Link>  
              </div> : <SocialNotFound socialName='Instagram' />}
             { player.social_media?.twitter &&   <div className="flex gap-2">
              Twitter: <Link className='text-blue-600' target='_blank' href={'https://x.com/' + player.social_media.twitter} > {player.social_media.twitter}</Link>
              </div>}
              {
                player.social_media?.tiktok && 
              <div className="flex gap-2">
              TikTok: <Link className='text-blue-600' target='_blank' href={'https://tiktok.com/' + player.social_media.tiktok} > {player.social_media.tiktok}</Link> 
              
              </div>}
      {/* <VariantSelector options={player.options} variants={product.variants} /> */}
      {/* {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null} */}
      {/* <AddToCart product={product} /> */}
    </>
  );
}


const SocialNotFound: FC<{socialName: string}> = ({socialName}) => {

  return (
    <div className="flex gap-2">
      {socialName}: N/A
    </div>
  )
}