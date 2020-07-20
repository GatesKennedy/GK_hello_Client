import { combineReducers } from 'redux';
// === comps ===
//    === Main ===
//import { reducer as formReducer } from 'redux-form';
//    === Admin ===
import rdc_auth from '../Phylum_____/Auth/rdc_auth';

export default combineReducers({
  auth: rdc_auth,
});
