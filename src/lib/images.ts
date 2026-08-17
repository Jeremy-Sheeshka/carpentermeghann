import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<ImageMetadata>(
  '../assets/images/**/*.{jpg,jpeg,png,svg,webp,JPG,JPEG,PNG,SVG,WEBP}',
  { eager: true, import: 'default' }
);

const registry = new Map<string, ImageMetadata>();
for (const [key, mod] of Object.entries(modules)) {
  registry.set(key.replace(/^\.\.\/assets\/images\//, ''), mod);
}

/** Resolve a path relative to src/assets/images (legacy /images/... URLs accepted) to importable image metadata. */
export function image(path: string): ImageMetadata {
  const rel = path.replace(/^\/?images\//, '');
  const hit = registry.get(rel);
  if (!hit) {
    throw new Error(`[images] not found in src/assets/images: "${path}"`);
  }
  return hit;
}

/** Same as image() but returns undefined instead of throwing. */
export function imageSafe(path: string): ImageMetadata | undefined {
  return registry.get(path.replace(/^\/?images\//, ''));
}
