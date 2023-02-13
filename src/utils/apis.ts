import {AUTH_TOKEN} from './constants';

export const getShortUrl = async (urlLink: string) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        long_url: urlLink,
        domain: 'https://t.ly/',
        include_qr_code: false,
      }),
    };

    const response = await fetch(
      `https://t.ly/api/v1/link/shorten?api_token=${AUTH_TOKEN}`,
      options,
    );
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
