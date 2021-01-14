const { safeSpace } = require('./fxn');
const { REACT_APP_API_URL } = process.env;
//====================
//  AWS API Functions

//  Upload Image
export async function awsImageUpload(data) {
  const formData = new FormData();

  formData.append('artist', data.name);
  formData.append('type', 'profile');
  formData.append('image', data.image[0]);
  //  Upload AWS
  const res = await fetch(`${REACT_APP_API_URL}/api/aws/action`, {
    method: 'POST',
    body: formData,
  }).then((res) => res.json());
  return res;
}
