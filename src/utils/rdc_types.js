import { combineReducers } from 'redux';
// === comps ===
//    === Main ===
//import { reducer as formReducer } from 'redux-form';
//    === Admin ===
import rdc_admin from '../Modules/Admin/rdx_rdc/rdc_adLib.js';
//import rdc_adFilter from '../Modules/Admin/rdx_rdc/rdc_adFilter';
import rdc_adLibrary from '../Modules/Admin/rdx_rdc/rdc_adLib.js';
//    === Library ===
import rdc_library from '../Modules/Library/rdx_rdc/rdc_library.js';
//import rdc_filter from '../Modules/Library/rdx_rdc/rdc_filter';
//    === User ===
import rdc_auth from '../Modules/User/rdx_rdc/rdc_auth.js';
//import rdc_profile from '../Modules/User/rdx_rdc/rdc_profile';
//    === Notify ===
import rdc_alert from '../Modules/Notify/rdx_rdc/rdc_alert.js';

export default combineReducers({
  //form: formReducer,
  admin: rdc_admin,
  //adFilter: rdc_adFilter,
  adLibrary: rdc_adLibrary,
  auth: rdc_auth,
  //profile: rdc_profile,
  library: rdc_library,
  //filter: rdc_filter,
  alert: rdc_alert,
});
