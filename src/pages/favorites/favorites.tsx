import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PlaceOffer from '../../components/place-card/place-card';
import { OfferCardType } from '../../lib/types/offer-card';

type FavoritesProps = {
  offers: OfferCardType[];
}

function Favorites({ offers }: FavoritesProps): React.JSX.Element {
  const cities = [...new Set(offers.map((card: OfferCardType) => card.city.name))];
  return (
    <>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {cities.map((city: string) => (
              <li key={city} className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to='#'>
                      <span>{city}</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers
                    .filter((card: OfferCardType) => card.city.name === city)
                    .map((card: OfferCardType) => (
                      <PlaceOffer
                        key={card.id}
                        card={card}
                        isSmall
                        className='favorites'
                      />
                    ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default Favorites;
