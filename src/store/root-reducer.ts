import {combineReducers} from '@reduxjs/toolkit';
import { NameSpace } from '../lib/types/state';
import { offersData } from './offers-data/offers-data';
import { offerData } from './offer-data/offer-data';
import { user } from './user/user';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.User]: user.reducer,
});