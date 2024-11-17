import { RoutingType, Routing } from './lib/types/routing';

export const LAYOUT_CLASSES: Record<RoutingType, string[]> = {
  [Routing.Empty]: ['page--gray', 'page--main'],
  [Routing.Main]: ['page--gray', 'page--main'],
  [Routing.Favorites]: [],
  [Routing.Login]: ['page--gray', 'page--login'],
  [Routing.Offer]: [],
  [Routing.NotFound]: ['page--gray']
};

export const SECTOR_MAIN_CLASSES: Record<RoutingType, string[]> = {
  [Routing.Empty]: ['page__main--index'],
  [Routing.Main]: ['page__main--index'],
  [Routing.Favorites]: ['page__main--favorites'],
  [Routing.Login]: ['page__main--login'],
  [Routing.Offer]: ['page__main--offer'],
  [Routing.NotFound]: ['page__main--index']
};

export const RATINGS: string[] = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly'
] as const;

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';