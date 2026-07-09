import type { Locale } from "@/i18n/routing";

type LocalizedText = Record<Locale, string>;

export type ActiveCode = {
  label: string;
  detail: LocalizedText;
  badge: LocalizedText;
};

export const activeCodesLastVerified = "2026-07-02";

const copyCodeLabel: LocalizedText = {
  en: "Copy code",
  "pt-br": "Copiar código",
  es: "Copiar código",
  ru: "Копировать",
};

const copiedCodeLabel: LocalizedText = {
  en: "Copied",
  "pt-br": "Copiado",
  es: "Copiado",
  ru: "Скопировано",
};

export const ACTIVE_CODES: ActiveCode[] = [
  {
    label: "暂无",
    detail: {
      en: "No active code — Marvel Rivals Season 9 does not have a public code redemption system at launch.",
      "pt-br": "Sem código ativo — Marvel Rivals Season 9 não possui um sistema público de resgate de códigos no lançamento.",
      es: "Sin código activo — Marvel Rivals Season 9 no tiene un sistema público de canje de códigos en el lanzamiento.",
      ru: "Нет активных кодов — в Marvel Rivals Season 9 на старте нет публичной системы активации кодов.",
    },
    badge: { en: "TBD", "pt-br": "TBD", es: "TBD", ru: "TBD" },
  },
  {
    label: "暂无",
    detail: {
      en: "Watch the official Discord and X for future code drops or seasonal promotions.",
      "pt-br": "Acompanhe o Discord e o X oficiais para futuros códigos ou promoções sazonais.",
      es: "Sigue el Discord y la X oficiales para próximos códigos o promociones de temporada.",
      ru: "Следите за официальным Discord и X для будущих кодов и сезонных акций.",
    },
    badge: { en: "Soon", "pt-br": "Em breve", es: "Pronto", ru: "Скоро" },
  },
];

export function getActiveCodes(locale: string) {
  const normalizedLocale = locale as Locale;

  return ACTIVE_CODES.map((code) => ({
    label: code.label,
    detail: code.detail[normalizedLocale] ?? code.detail.en,
    badge: code.badge[normalizedLocale] ?? code.badge.en,
  }));
}

export function getCodeCopyLabels(locale: string) {
  const normalizedLocale = locale as Locale;

  return {
    copy: copyCodeLabel[normalizedLocale] ?? copyCodeLabel.en,
    copied: copiedCodeLabel[normalizedLocale] ?? copiedCodeLabel.en,
  };
}
