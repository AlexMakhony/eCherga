// queues.js
// Реальні дані про черги вантажівок на 6 ключових КПП станом на 05.12.2025

const QUEUES_DATA = {
  updated_at: "2025-12-05T14:00:00+02:00",
  source: "https://nakordoni.eu/",
  transport_type: "truck",
  points: [
    // 1. ЯГОДИН — ДОРОГУСЬК (ПОЛЬЩА)
    {
      id: "yahodyn_dorohusk",
      name: "Ягодин — Дорогуськ",
      trucks_in_queue: 1572,
      wait_minutes: 7785,          // ≈ 5 днів 9 годин
      status: "red",               // > 50 вантажівок
      updated_at: "2025-12-05T13:40:46+02:00"
    },

    // 2. КРАКІВЕЦЬ — КОРЧОВА (ПОЛЬЩА)
    {
      id: "krakivets_korczowa",
      name: "Краківець — Корчова",
      trucks_in_queue: 8,
      wait_minutes: 960,           // 16 годин
      status: "green",             // < 20 вантажівок
      updated_at: "2025-12-05T10:45:00+01:00"
    },

    // 3. ШЕГИНІ — МЕДИКА (ПОЛЬЩА)
    {
      id: "shehyni_medyka",
      name: "Шегині — Медика",
      trucks_in_queue: 70,
      wait_minutes: 420,           // 7 годин
      status: "red",               // > 50 вантажівок
      updated_at: "2025-12-05T10:11:00+01:00"
    },

    // 4. РАВА-РУСЬКА — ГРЕБЕННЕ (ПОЛЬЩА)
    {
      id: "rava_ruska_hrebenne",
      name: "Рава-Руська — Гребенне",
      trucks_in_queue: 6,
      wait_minutes: 720,           // 12 годин
      status: "green",             // < 20 вантажівок
      updated_at: "2025-12-05T07:58:00+01:00"
    },

    // 5. ЧОП (ТИСА) — ЗАХОНЬ (УГОРЩИНА)
    {
      id: "chop_tysa_zahony",
      name: "Чоп (Тиса) — Захонь",
      trucks_in_queue: 930,
      wait_minutes: 8334,          // 138 год 54 хв
      status: "red",               // > 50 вантажівок
      updated_at: "2025-12-05T13:40:00+02:00"
    },

    // 6. ПОРУБНЕ — СІРЕТ (РУМУНІЯ)
    {
      id: "porubne_siret",
      name: "Порубне — Сірет",
      trucks_in_queue: 820,
      wait_minutes: 5649,          // 94 год 9 хв
      status: "red",               // > 50 вантажівок
      updated_at: "2025-12-05T13:40:00+02:00"
    }
  ]
};

