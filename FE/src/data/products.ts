export type Product = {
  id: string,
  title: string,
  slug: string,
  description: string,
  price: number,
  imageUrl: string,
  stock: number,
  professions: { profession: { name: string } }[],
  qualifications: { qualification: { code: string } }[],
}

// export const products = [
//   {
//     title: "Repetytorium + Testy ze słownikiem zawodowym",
//     images: {
//       main: "podrecznik1.webp",
//       others: null
//     },
//     category: "eksploatacja",
//     qualifications: ["SPL.03", "SPL.04", "SPL.05"],
//     price: 42.0,
//     description: "To jest opis tego podręcznika. Coś się tu kiedyś doda, ale na razie byle coś było i gitara.",
//     urlSlug: "repetytorium-i-testy-spl03-spl04-spl05"
//   },
//   {
//     title: "Repetytorium + Testy ze słownikiem zawodowym",
//     images: {
//       main: "podrecznik1.webp",
//       others: null
//     },
//     category: "eksploatacja",
//     qualifications: ["SPL.03", "SPL.04", "SPL.05"],
//     price: 45.0,
//     description: "To jest opis tego podręcznika. Coś się tu kiedyś doda, ale na razie byle coś było i gitara.",
//     urlSlug: "repetytorium-i-testy-spl03-spl04-spl05"
//   },
//   {
//     title: "Repetytorium + Testy ze słownikiem zawodowym",
//     images: {
//       main: "podrecznik1.webp",
//       others: null
//     },
//     category: "eksploatacja",
//     qualifications: ["SPL.03", "SPL.04", "SPL.05"],
//     price: 48.0,
//     description: "To jest opis tego podręcznika. Coś się tu kiedyś doda, ale na razie byle coś było i gitara.",
//     urlSlug: "repetytorium-i-testy-spl03-spl04-spl05"
//   },
//   {
//     title: "Repetytorium + Testy ze słownikiem zawodowym",
//     images: {
//       main: "podrecznik1.webp",
//       others: null
//     },
//     category: "eksploatacja",
//     qualifications: ["SPL.03", "SPL.04", "SPL.05"],
//     price: 53.0,
//     description: "To jest opis tego podręcznika. Coś się tu kiedyś doda, ale na razie byle coś było i gitara.",
//     urlSlug: "repetytorium-i-testy-spl03-spl04-spl05"
//   },
//   {
//     title: "Repetytorium + Testy ze słownikiem zawodowym",
//     images: {
//       main: "podrecznik1.webp",
//       others: null
//     },
//     category: "eksploatacja",
//     qualifications: ["SPL.03", "SPL.04", "SPL.05"],
//     price: 53.0,
//     description: "To jest opis tego podręcznika. Coś się tu kiedyś doda, ale na razie byle coś było i gitara.",
//     urlSlug: "repetytorium-i-testy-spl03-spl04-spl05"
//   },
//   {
//     title: "Repetytorium + Testy ze słownikiem zawodowym",
//     images: {
//       main: "podrecznik1.webp",
//       others: null
//     },
//     category: "eksploatacja",
//     qualifications: ["SPL.03", "SPL.04", "SPL.05"],
//     price: 53.0,
//     description: "To jest opis tego podręcznika. Coś się tu kiedyś doda, ale na razie byle coś było i gitara.",
//     urlSlug: "repetytorium-i-testy-spl03-spl04-spl05"
//   },
//   {
//     title: "Repetytorium + Testy ze słownikiem zawodowym",
//     images: {
//       main: "podrecznik1.webp",
//       others: null
//     },
//     category: "eksploatacja",
//     qualifications: ["SPL.03", "SPL.04", "SPL.05"],
//     price: 53.0,
//     description: "To jest opis tego podręcznika. Coś się tu kiedyś doda, ale na razie byle coś było i gitara.",
//     urlSlug: "repetytorium-i-testy-spl03-spl04-spl05"
//   },
//   {
//     title: "Repetytorium + Testy ze słownikiem zawodowym",
//     images: {
//       main: "podrecznik1.webp",
//       others: null
//     },
//     category: "eksploatacja",
//     qualifications: ["SPL.03", "SPL.04", "SPL.05"],
//     price: 53.0,
//     description: "To jest opis tego podręcznika. Coś się tu kiedyś doda, ale na razie byle coś było i gitara.",
//     urlSlug: "repetytorium-i-testy-spl03-spl04-spl05"
//   },
//   {
//     title: "Repetytorium + Testy ze słownikiem zawodowym",
//     images: {
//       main: "podrecznik1.webp",
//       others: null
//     },
//     category: "logistyk",
//     qualifications: ["SPL.03", "SPL.04", "SPL.05"],
//     price: 53.0,
//     description: "To jest opis tego podręcznika. Coś się tu kiedyś doda, ale na razie byle coś było i gitara.",
//     urlSlug: "repetytorium-i-testy-spl03-spl04-spl05"
//   },
//   {
//     title: "Repetytorium + Testy ze słownikiem zawodowym",
//     images: {
//       main: "podrecznik1.webp",
//       others: null
//     },
//     category: "logistyk",
//     qualifications: ["SPL.03", "SPL.04", "SPL.05"],
//     price: 53.0,
//     description: "To jest opis tego podręcznika. Coś się tu kiedyś doda, ale na razie byle coś było i gitara.",
//     urlSlug: "repetytorium-i-testy-spl03-spl04-spl05"
//   },
//   {
//     title: "Repetytorium + Testy ze słownikiem zawodowym",
//     images: {
//       main: "podrecznik1.webp",
//       others: null
//     },
//     category: "handlowiec",
//     qualifications: ["SPL.03", "SPL.04", "SPL.05"],
//     price: 53.0,
//     description: "To jest opis tego podręcznika. Coś się tu kiedyś doda, ale na razie byle coś było i gitara.",
//     urlSlug: "repetytorium-i-testy-spl03-spl04-spl05"
//   },
//   {
//     title: "Repetytorium + Testy ze słownikiem zawodowym",
//     images: {
//       main: "podrecznik1.webp",
//       others: null
//     },
//     category: "handlowiec",
//     qualifications: ["SPL.03", "SPL.04", "SPL.05"],
//     price: 53.0,
//     description: "To jest opis tego podręcznika. Coś się tu kiedyś doda, ale na razie byle coś było i gitara.",
//     urlSlug: "repetytorium-i-testy-spl03-spl04-spl05"
//   },
//   {
//     title: "Repetytorium + Testy ze słownikiem zawodowym",
//     images: {
//       main: "podrecznik1.webp",
//       others: null
//     },
//     category: "handlowiec",
//     qualifications: ["SPL.03", "SPL.04", "SPL.05"],
//     price: 53.0,
//     description: "To jest opis tego podręcznika. Coś się tu kiedyś doda, ale na razie byle coś było i gitara.",
//     urlSlug: "repetytorium-i-testy-spl03-spl04-spl05"
//   },
// ] as const