import { GalleryDescConfig } from './gallery-desc.config';
import { GalleryNavConfig } from './gallery-nav.config';
import { GalleryThumbConfig } from './gallery-thumb.config';
import { GalleryPlayConfig } from './gallery-play.config';
import { GalleryBulletConfig } from './gallery-bullet.config';
import { GalleryLoaderConfig } from './gallery-loader.config';

interface GalleryConfig {
  animation?: string;
  gestures?: boolean;
  style?;
  description?: GalleryDescConfig;
  thumbnails?: GalleryThumbConfig;
  loader?: GalleryLoaderConfig;
  navigation?: GalleryNavConfig;
  bullets?: GalleryBulletConfig;
  player?: GalleryPlayConfig;
}

export {
  GalleryConfig,
  GalleryDescConfig,
  GalleryThumbConfig,
  GalleryNavConfig,
  GalleryLoaderConfig,
  GalleryPlayConfig,
  GalleryBulletConfig,
};