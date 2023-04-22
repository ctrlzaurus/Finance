import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import { dynamicsReducer } from './dynamics/DynamicsSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ownPlanReducer } from './plan/planSlice';
import { persistedExpensesReduser } from './Expenses/expensesSlice';

const persistContactsConfig = {
  key: 'auth',
  storage,
  whitelist: [`token`],
};

const persistedAuthReducer = persistReducer(persistContactsConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    ownPlan: ownPlanReducer,
    expenses: persistedExpensesReduser,
    dynamics: dynamicsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
