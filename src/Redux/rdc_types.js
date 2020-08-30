import { combineReducers } from 'redux';
// === comps ===
//    === Kingdom ===
import rdc_auth from '../1_Kingdom_____/Auth/rdc_auth';
import rdc_ui from '../1_Kingdom_____/UI/rdc_ui';
//    === Phylum  ===
import rdc_profile from '../2_Phylum_____/Profile/rdc_profile';
import rdc_talk from '../2_Phylum_____/Talk/rdc_talk';
//    === Ecom ===

//    === Notify ===
// import rdc_alert from '../../Modules/Notify/rdx_rdc/rdc_alert';

export default combineReducers({
  auth: rdc_auth,
  ui: rdc_ui,
  profile: rdc_profile,
  talk: rdc_talk,

  // alert: rdc_alert,
});
