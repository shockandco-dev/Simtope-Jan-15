/**
 * GOOGLE SHEETS INTEGRATION
 * 1. Create a Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Use the simplified doPost code provided.
 * 4. Deploy as a Web App (Access: Anyone, Execute as: Me).
 */

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxV5w22Sw-ES0sRIiW0a2o5qwWcs4mrsILSvx9EGZZobH4OZa5YVg9SfN0xOlRFeqOh/exec';

export const submitToSpreadsheet = async (formData: Record<string, any>) => {
  if (!GOOGLE_SCRIPT_URL) {
    console.warn('Simtope: Sync target not defined.');
    return { result: 'success' };
  }

  try {
    const params = new URLSearchParams();
    for (const key in formData) {
      params.append(key, String(formData[key]));
    }

    // no-cors mode allows the request to reach Google without triggering a CORS error,
    // although we cannot read the response body.
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    return { result: 'success' };
  } catch (error) {
    console.error('Simtope: Cloud sync failed:', error);
    throw error;
  }
};