import { combineReducers } from 'redux';
// === comps ===
//    === Kingdom ===
import rdc_auth from '../1_Kingdom_____/Auth/rdc_auth';
import rdc_ui from '../1_Kingdom_____/UI/rdc_ui';
import rdc_alert from '../1_Kingdom_____/Alert/rdc_alert';
//    === Phylum  ===
import rdc_user from '../2_Phylum_____/User/rdc_user';
import rdc_profile from '../2_Phylum_____/Profile/rdc_profile';
import rdc_talk from '../2_Phylum_____/Talk/rdc_talk';
//    === Ecom ===

//    === Notify ===
// import rdc_alert from '../../Modules/Notify/rdx_rdc/rdc_alert';

export default combineReducers({
  alert: rdc_alert,
  ui: rdc_ui,
  auth: rdc_auth,
  user: rdc_user,
  profile: rdc_profile,
  talk: rdc_talk,
});
