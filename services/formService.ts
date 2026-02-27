
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbysRWWUq4X0u-A_mWr-wyV5hQrhMvkzOiquzTd1NEPjjeXeEyx6ogfQC9I1dCL6YDT0/exec';

export const submitToSpreadsheet = async (formData: Record<string, any>) => {
  if (!GOOGLE_SCRIPT_URL) {
    console.warn('Simtope: Sync target not defined.');
    return { result: 'success' };
  }

  try {
    const body = new URLSearchParams();
    for (const key in formData) {
      body.append(key, String(formData[key]));
    }

    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    });

    return { result: 'success' };
  } catch (error) {
    console.error('Simtope: Cloud sync failed:', error);
    throw error;
  }
};

export const submitToInstantly = async (formData: Record<string, any>) => {
  const apiKey = process.env.INSTANTLY_API_KEY;
  const apiUrl = process.env.INSTANTLY_API_URL;
  const campaignId = process.env.INSTANTLY_CAMPAIGN_ID;

  if (!apiKey || !apiUrl || !campaignId) {
    console.warn('Instantly API credentials not configured.');
    return { result: 'error', message: 'Instantly API credentials not configured.' };
  }

  try {
    const response = await fetch(`${apiUrl}/lead/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        api_key: apiKey,
        campaign_id: campaignId,
        email: formData.email,
        first_name: formData.name,
        // You can add more fields here as needed
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Failed to submit to Instantly:', errorData);
      throw new Error('Failed to submit to Instantly');
    }

    return { result: 'success' };
  } catch (error) {
    console.error('Instantly submission failed:', error);
    throw error;
  }
};
