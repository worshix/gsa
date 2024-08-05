const axios = require('axios');

export const subscribeToNewsletter = async (email, name) => {
  const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
  const AUDIENCE_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID;
  const DATACENTER = API_KEY.split('-')[1];

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      NAME: name,
    },
  };

  const options = {
    method: 'POST',
    headers: {
      Authorization: `apikey ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    data,
    url,
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.detail || 'Something went wrong');
  }
};

