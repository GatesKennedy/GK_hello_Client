import { combineReducers } from 'redux';
// === comps ===
//    === Main ===

//    === User ===
import rdc_auth from '../Phylum_____/Auth/rdc_auth';
import rdc_profile from '../Phylum_____/Profile/rdc_profile';
//    === Talk ===
import rdc_talk from '../Phylum_____/Talk/rdc_talk';
//    === Ecom ===

//    === Notify ===
// import rdc_alert from '../../Modules/Notify/rdx_rdc/rdc_alert';

export default combineReducers({
  auth: rdc_auth,
  profile: rdc_profile,
  talk: rdc_talk,

  // alert: rdc_alert,
});
