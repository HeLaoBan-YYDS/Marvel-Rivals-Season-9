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
  fil: "Kopyahin ang code",
};

const copiedCodeLabel: LocalizedText = {
  en: "Copied",
  "pt-br": "Copiado",
  es: "Copiado",
  fil: "Nakopya",
};

export const ACTIVE_CODES: ActiveCode[] = [
  {
    label: "PATCH",
    detail: {
      en: "25 Gems and 15 minutes of 2x EXP.",
      "pt-br": "25 gemas e 15 minutos de EXP 2x.",
      es: "25 gemas y 15 minutos de EXP x2.",
      fil: "25 Gems at 15 minutes ng 2x EXP.",
    },
    badge: { en: "New", "pt-br": "Novo", es: "Nuevo", fil: "New" },
  },
  {
    label: "RELEASE",
    detail: {
      en: "1 hour of 2x EXP.",
      "pt-br": "1 hora de EXP 2x.",
      es: "1 hora de EXP x2.",
      fil: "1 oras ng 2x EXP.",
    },
    badge: { en: "Active", "pt-br": "Ativo", es: "Activo", fil: "Active" },
  },
  {
    label: "FREECASH",
    detail: {
      en: "50k Cash.",
      "pt-br": "50 mil de dinheiro.",
      es: "50k de dinero.",
      fil: "50k Cash.",
    },
    badge: { en: "Active", "pt-br": "Ativo", es: "Activo", fil: "Active" },
  },
  {
    label: "FREEGEMS",
    detail: {
      en: "50 Gems.",
      "pt-br": "50 gemas.",
      es: "50 gemas.",
      fil: "50 Gems.",
    },
    badge: { en: "Active", "pt-br": "Ativo", es: "Activo", fil: "Active" },
  },
  {
    label: "SUBSCRIBETOHAZEYT",
    detail: {
      en: "50k Cash.",
      "pt-br": "50 mil de dinheiro.",
      es: "50k de dinero.",
      fil: "50k Cash.",
    },
    badge: { en: "Active", "pt-br": "Ativo", es: "Activo", fil: "Active" },
  },
  {
    label: "Sub2Nikkolapz",
    detail: {
      en: "20 minutes of 2x EXP.",
      "pt-br": "20 minutos de EXP 2x.",
      es: "20 minutos de EXP x2.",
      fil: "20 minutes ng 2x EXP.",
    },
    badge: { en: "Active", "pt-br": "Ativo", es: "Activo", fil: "Active" },
  },
  {
    label: "Sub2BadiTubes",
    detail: {
      en: "20 minutes of 2x EXP.",
      "pt-br": "20 minutos de EXP 2x.",
      es: "20 minutos de EXP x2.",
      fil: "20 minutes ng 2x EXP.",
    },
    badge: { en: "Active", "pt-br": "Ativo", es: "Activo", fil: "Active" },
  },
  {
    label: "Sub2BrosSiam",
    detail: {
      en: "20 minutes of 2x EXP.",
      "pt-br": "20 minutos de EXP 2x.",
      es: "20 minutos de EXP x2.",
      fil: "20 minutes ng 2x EXP.",
    },
    badge: { en: "Active", "pt-br": "Ativo", es: "Activo", fil: "Active" },
  },
  {
    label: "Sub2BuilderboyTV",
    detail: {
      en: "20 minutes of 2x EXP.",
      "pt-br": "20 minutos de EXP 2x.",
      es: "20 minutos de EXP x2.",
      fil: "20 minutes ng 2x EXP.",
    },
    badge: { en: "Active", "pt-br": "Ativo", es: "Activo", fil: "Active" },
  },
  {
    label: "HAZESEAS2026",
    detail: {
      en: "10 Race Spins.",
      "pt-br": "10 Race Spins.",
      es: "10 Race Spins.",
      fil: "10 Race Spins.",
    },
    badge: { en: "Active", "pt-br": "Ativo", es: "Activo", fil: "Active" },
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
