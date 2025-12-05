// border-data.js
// Статичні дані пунктів пропуску (координати, країни, напрямок)
const BORDER_POINTS = [
  // ---------- POLAND ----------
  {
    id: 'yahodyn_dorohusk',
    name: 'Ягодин – Dorohusk',
    countryFrom: 'UA',
    countryTo: 'PL',
    direction: 'UA → PL',
    vehicleType: 'truck',
    lat: 51.1943372,
    lon: 23.8280904
  },
  {
    id: 'ustyluh_zosin',
    name: 'Устилуг – Zosin',
    countryFrom: 'UA',
    countryTo: 'PL',
    direction: 'UA → PL',
    vehicleType: 'truck',
    lat: 50.86292,
    lon: 24.15876
  },
  {
    id: 'uhryniv_dolhobychiv',
    name: 'Угринів – Dołhobyczów',
    countryFrom: 'UA',
    countryTo: 'PL',
    direction: 'UA → PL',
    vehicleType: 'truck',
    lat: 50.578049,
    lon: 24.090431
  },
  {
    id: 'rava_ruska_hrebenne',
    name: 'Рава-Руська – Hrebenne',
    countryFrom: 'UA',
    countryTo: 'PL',
    direction: 'UA → PL',
    vehicleType: 'truck',
    lat: 50.2291083,
    lon: 23.6285454
  },
  {
    id: 'krakivets_korczowa',
    name: 'Краківець – Korczowa',
    countryFrom: 'UA',
    countryTo: 'PL',
    direction: 'UA → PL',
    vehicleType: 'truck',
    lat: 49.954678,
    lon: 23.116611
  },
  {
    id: 'shehyni_medyka',
    name: 'Шегині – Medyka',
    countryFrom: 'UA',
    countryTo: 'PL',
    direction: 'UA → PL',
    vehicleType: 'truck',
    lat: 49.79879,
    lon: 22.97293
  },
  {
    id: 'smilnytsia_kroscienko',
    name: 'Смильниця – Krościenko',
    countryFrom: 'UA',
    countryTo: 'PL',
    direction: 'UA → PL',
    vehicleType: 'truck',
    lat: 49.481089,
    lon: 22.701431
  },

  // ---------- SLOVAKIA ----------
  {
    id: 'uzhhorod_vysne_nemecke',
    name: 'Ужгород – Vyšné Nemecké',
    countryFrom: 'UA',
    countryTo: 'SK',
    direction: 'UA → SK',
    vehicleType: 'truck',
    lat: 48.653606,
    lon: 22.26571
  },
  {
    id: 'malyi_bereznyi_ublia',
    name: 'Малий Березний – Ubľa',
    countryFrom: 'UA',
    countryTo: 'SK',
    direction: 'UA → SK',
    vehicleType: 'truck',
    lat: 48.864167,
    lon: 22.442778
  },

  // ---------- HUNGARY ----------
  {
    id: 'chop_tysa_zahony',
    name: 'Чоп (Тиса) – Záhony',
    countryFrom: 'UA',
    countryTo: 'HU',
    direction: 'UA → HU',
    vehicleType: 'truck',
    lat: 48.43048,
    lon: 22.16372
  },
  {
    id: 'luzhanka_beregsurany',
    name: 'Лужанка – Beregsurány',
    countryFrom: 'UA',
    countryTo: 'HU',
    direction: 'UA → HU',
    vehicleType: 'truck',
    lat: 48.165716,
    lon: 22.573937
  },
  {
    id: 'vylok_tiszabecs',
    name: 'Вилок – Tiszabecs',
    countryFrom: 'UA',
    countryTo: 'HU',
    direction: 'UA → HU',
    vehicleType: 'truck',
    lat: 48.10915,
    lon: 22.83865
  },
  {
    id: 'dzvinkove_lonya',
    name: 'Дзвінкове – Lónya',
    countryFrom: 'UA',
    countryTo: 'HU',
    direction: 'UA → HU',
    vehicleType: 'truck',
    lat: 48.318611,
    lon: 22.317778
  },

  // ---------- ROMANIA ----------
  {
    id: 'dyakove_halmeu',
    name: 'Дякове – Halmeu',
    countryFrom: 'UA',
    countryTo: 'RO',
    direction: 'UA → RO',
    vehicleType: 'truck',
    lat: 47.99915,
    lon: 23.00185
  },
  {
    id: 'solotvyno_sighet',
    name: 'Солотвино – Sighetu Marmației',
    countryFrom: 'UA',
    countryTo: 'RO',
    direction: 'UA → RO',
    vehicleType: 'truck',
    lat: 47.9385943,
    lon: 23.8771346
  },
  {
    id: 'krasnoilsk_vicovu_de_sus',
    name: 'Красноїльськ – Vicovu de Sus',
    countryFrom: 'UA',
    countryTo: 'RO',
    direction: 'UA → RO',
    vehicleType: 'truck',
    lat: 47.948496,
    lon: 25.620864
  },
  {
    id: 'porubne_siret',
    name: 'Порубне – Siret',
    countryFrom: 'UA',
    countryTo: 'RO',
    direction: 'UA → RO',
    vehicleType: 'truck',
    lat: 47.98898,
    lon: 26.060076
  }
];

