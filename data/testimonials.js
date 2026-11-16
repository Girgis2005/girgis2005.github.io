// ✏️ Client testimonials — REAL quotes only, added with the client's permission.
// The "What clients say" section on the home page stays hidden while this list is empty.
//
// One entry per client:
// {
//   name: 'Client name',                       // as the client agreed to be named (first name + shop is fine)
//   role: { en: 'Owner, …', 'pt-BR': 'Dona, …', ar: 'صاحب …' },
//   project: 'whatsapp-store-bot',             // slug from data/projects.js (links the quote to the work)
//   lang: 'ar',                                // the language the client actually wrote in
//   quote: { ar: 'the original words…', en: 'faithful translation…', 'pt-BR': 'tradução fiel…' },
//   date: '2026-11',
// },
// When a visitor reads a translation (page language ≠ `lang`), the card says "Translated from …".

export const testimonials = [];
