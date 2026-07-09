type NavigationItem = {
  key: string;
  path: string;
  isContentType?: boolean;
};

export const NAVIGATION_CONFIG: NavigationItem[] = [
  { key: "release", path: "/release", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "leaks", path: "/leaks", isContentType: true },
  { key: "battlepass", path: "/battlepass", isContentType: true },
  { key: "skins", path: "/skins", isContentType: true },
  { key: "patch", path: "/patch", isContentType: true },
  { key: "teamups", path: "/teamups", isContentType: true },
  { key: "guide", path: "/guide", isContentType: true },
];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.key);
