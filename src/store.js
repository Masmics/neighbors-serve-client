import { 
  createStore, 
  applyMiddleware, 
  compose 
} from 'redux';
import { promiseMiddleware } from 'promise-middleware-redux';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(promiseMiddleware)
  ),
);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
