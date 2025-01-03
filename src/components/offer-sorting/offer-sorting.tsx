import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Sorting, SortingType } from '../../lib/types/sorting';
import { useOutsideClick } from '../../hooks/use-outside-click';
import { selectSorting } from '../../store/offers-data/offers-data.selectors';
import { setSorting } from '../../store/offers-data/offers-data';
import { useCallback, useState } from 'react';

function OfferSorting() {
  const [isVisible, setIsVisible] = useState(false);
  const sorting = useAppSelector(selectSorting);
  const dispatch = useAppDispatch();

  const setCurrentSorting = (s: SortingType) => {
    dispatch(setSorting(s));
    setIsVisible(false);
  };

  const setInvisible = useCallback(() => {
    setIsVisible(false);
  }, []);

  const ref = useOutsideClick(setInvisible);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick={() => setIsVisible((isOpened) => !isOpened)}
        className="places__sorting-type"
        tabIndex={0}
      >
        {sorting}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={clsx(
          'places__options',
          'places__options--custom',
          { 'places__options--opened': isVisible }
        )}
        ref={ref}
      >
        {
          Object.values(Sorting).map((sortingItem: SortingType) => (
            <li
              key={sortingItem}
              tabIndex={0}
              onClick={() => setCurrentSorting(sortingItem)}
              className={clsx(
                'places__option',
                { 'places__option--active': sortingItem === sorting }
              )}
            >
              {sortingItem}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default OfferSorting;
