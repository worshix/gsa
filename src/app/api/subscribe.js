import axios from 'axios';

export default async(req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const AUDIENCE_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
    const DATACENTER = API_KEY.split('-')[1];

    const response = await axios.post(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        email_address: email,
        status: 'subscribed',
      },
      {
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status >= 400) {
      return res.status(400).json({ error: `There was an error subscribing to the newsletter. Response: ${response.data.detail}` });
    }

    return res.status(201).json({ message: 'Success' });
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    return res.status(500).json({ error: error.response ? error.response.data.detail : error.message });
  }
};

