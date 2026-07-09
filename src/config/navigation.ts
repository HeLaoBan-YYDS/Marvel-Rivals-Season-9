type NavigationItem = {
  key: string;
  path: string;
  isContentType?: boolean;
};

export const NAVIGATION_CONFIG: NavigationItem[] = [
  { key: "codes", path: "/codes", isContentType: true },
  { key: "guide", path: "/guide", isContentType: true },
  { key: "tier-list", path: "/tier-list", isContentType: true },
  { key: "fruits", path: "/fruits", isContentType: true },
  { key: "styles", path: "/styles", isContentType: true },
  { key: "weapons", path: "/weapons", isContentType: true },
  { key: "updates", path: "/updates", isContentType: true },
  { key: "resources", path: "/resources", isContentType: true },
];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.key);
