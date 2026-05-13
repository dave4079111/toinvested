const globalStore = globalThis as unknown as {
  __sites?: Map<string, string>;
};

if (!globalStore.__sites) {
  globalStore.__sites = new Map<string, string>();
}

const sites = globalStore.__sites;

export function saveSite(id: string, html: string) {
  sites.set(id, html);
}

export function getSite(id: string): string | undefined {
  return sites.get(id);
}
