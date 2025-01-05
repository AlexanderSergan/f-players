export type Player = {
  name: string;
  position: string;
  img?: string;
  slug: string;
  tags?: string[];
  club: string;
  country: string;
  social_media: {
    instagram: string | null;
    twitter: string | null;
    tiktok: string | null;
  };
};

export const LeicesterPlayers: Player[] = [
  {
    name: 'Mads Hermansen',
    position: 'Goalkeeper',
    img: '/mads-hermansen.webp',
    slug: 'mads-hermansen',
    club: 'Leicester City',
    country: 'Denmark',
    social_media: {
      instagram: '@madshermansen',
      twitter: null,
      tiktok: null,
    },
  },
  {
    name: 'Jakub Stolarczyk',
    img: '/jakub-stolarczyk-2.webp',
    position: 'Goalkeeper',
    slug: 'jakub-stolarczyk',
    club: 'Leicester City',
    country: 'Poland',
    social_media: {
      instagram: '@jakub.stolarczyk',
      twitter: null,
      tiktok: null,
    },
  },
  {
    name: 'Kieran Trippier',
    position: 'Defender (Right Back)',
    img: '/kieran-trippier.webp',
    slug: 'kieran-trippier',
    club: 'Leicester City',
    country: 'England',
    social_media: {
      instagram: '@ktrippier2',
      twitter: '@trippier2',
      tiktok: null,
    },
  },
  {
    name: 'Victor Lindelof',
    position: 'Defender (Center Back)',
    img: '/victor-lindelof-2.png',
    slug: 'victor-lindelof',
    club: 'Leicester City',
    country: 'Sweden',
    social_media: {
      instagram: '@victorlindelof',
      twitter: '@v_lindelof',
      tiktok: null,
    },
  },
  {
    name: 'Harry Maguire',
    position: 'Defender (Center Back)',
    img: '/harry-maguire.png',
    slug: 'harry-maguire',
    club: 'Leicester City',
    country: 'England',
    social_media: {
      instagram: '@harrymaguire93',
      twitter: '@HarryMaguire93',
      tiktok: null,
    },
  },
  {
    name: 'Victor Kristiansen',
    position: 'Defender (Left Back)',
    img: '/victor-kristiansen.webp',
    slug: 'victor-kristiansen',
    club: 'Leicester City',
    country: 'Norway',
    social_media: {
      instagram: '@victorkristiansen',
      twitter: '@v_kristiansen23',
      tiktok: null,
    },
  },
  {
    name: 'Conor Coady',
    position: 'Defender (Center Back)',
    img: '/conor-coady.png',
    slug: 'conor-coady',
    club: 'Leicester City',
    country: 'England',
    social_media: {
      instagram: '@conorcoady',
      twitter: '@ConorCoady',
      tiktok: null,
    },
  },
  {
    name: 'Caleb Okoli',
    position: 'Defender (Center Back)',
    img: '/caleb-okoli.webp',
    slug: 'caleb-okoli',
    club: 'Leicester City',
    country: 'Nigeria',

    social_media: {
      instagram: '@calebokoli',
      twitter: null,
      tiktok: null,
    },
  },
  {
    name: 'Harry Winks',
    position: 'Midfielder (Central Midfielder)',
    img: '/harry-winks-4.png',
    slug: 'harry-winks',
    club: 'Leicester City',
    country: 'England',
    social_media: {
      instagram: '@harrywinks',
      twitter: '@HarryWinks',
      tiktok: null,
    },
  },
  {
    name: 'Wilfred Ndidi',
    position: 'Midfielder (Defensive Midfielder)',
    slug: 'wilfred-ndidi',
    img: '/wilfred-ndidi.png',
    club: 'Leicester City',
    country: 'Nigeria',
    social_media: {
      instagram: '@ndidi25',
      twitter: '@Ndidi25',
      tiktok: null,
    },
  },
  {
    name: 'Oussama El Khannouss',
    position: 'Midfielder (Central Midfielder)',
    slug: 'oussama-el-khannouss',
    img: '/oussama-el-khannouss.png',
    club: 'Leicester City',
    country: 'Morocco',
    social_media: {
      instagram: '@oussamelkhannouss',
      twitter: null,
      tiktok: null,
    },
  },
  // {
  //     "name": "Kiernan Dewsbury-Hall",
  //     "position": "Midfielder (Central Midfielder)",
  //     slug: "kiernan-dewsbury-hall",
  //     "social_media": {
  //         "instagram": "@kiernan.dh",
  //         "twitter": "@KDH_10",
  //         "tiktok": null
  //     }
  // },
  // {
  //     "name": "Boubakary Soumare",
  //     "position": "Midfielder (Central Midfielder)",
  //     slug: "boubakary-soumare",
  //     "social_media": {
  //         "instagram": "@b.soumare",
  //         "twitter": null,
  //         "tiktok": null
  //     }
  // },
  // {
  //     "name": "Dennis Praet",
  //     "position": "Midfielder (Central Midfielder)",
  //     slug: "dennis-praet",
  //     "social_media": {
  //         "instagram": "@dennis.praet",
  //         "twitter": null,
  //         "tiktok": null
  //     }
  // },
  // {
  //     "name": "Hamza Choudhury",
  //     "position": "Midfielder (Defensive Midfielder)",
  //     slug: "hamza-choudhury",
  //     "social_media": {
  //         "instagram": "@hamzachoudhury",
  //         "twitter": "@HamzaChoudhury",
  //         "tiktok": null
  //     }
  // },
  // {
  //     "name": "Stephy Mavididi",
  //     "position": "Forward (Winger)",
  //     slug: "stephy-mavididi",
  //     "social_media": {
  //         "instagram": "@stephymavididi",
  //         "twitter": "@stephymavididi",
  //         "tiktok": null
  //     }
  // },
  // {
  //     "name": "Jamie Vardy",
  //     "position": "Forward (Striker)",
  //     slug: "jamie-vardy",
  //     "social_media": {
  //         "instagram": "@vardy7",
  //         "twitter": "@vardy7",
  //         "tiktok": null
  //     }
  // },
  // {
  //     "name": "Jordan Ayew",
  //     "position": "Forward (Striker/Winger)",
  //     slug: "jordan-ayew",
  //     "social_media": {
  //         "instagram": "@jordanayew9",
  //         "twitter": "@Jordan_Ayew9",
  //         "tiktok": null
  //     }
  // },
  // {
  //     "name": "Facundo Buonanotte",
  //     "position": "Forward (Winger)",
  //     slug: "facundo-buonanotte",
  //     "social_media": {
  //         "instagram": "@facundobn9",
  //         "twitter": null,
  //         "tiktok": null
  //     }
  // },
  // {
  //     "name": "Patson Daka",
  //     "position": "Forward (Striker)",
  //     slug: "patson-daka",
  //     "social_media": {
  //         "instagram": "@patson.daka",
  //         "twitter": "@Patson_Daka",
  //         "tiktok": null
  //     }
  // },
  // {
  //     "name": "Ruud van Nistelrooy",
  //     "position": "Manager",
  //     slug: "ruud-van-nistelrooy",
  //     "social_media": {
  //         "instagram": "@rvn17_official",
  //         "twitter": null,
  //         "tiktok": null
  //     }
  // }
];
