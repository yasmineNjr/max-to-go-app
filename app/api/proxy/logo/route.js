import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req) {
  const token = req.headers.get('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return NextResponse.json(
      { message: 'No token available', success: false, statusCode: 401 },
      { status: 401 }
    );
  }

  const urlParams = new URL(req.url).searchParams;
  let logoUrl = urlParams.get('logoUrl');

  if (!logoUrl) {
    return NextResponse.json(
      { message: 'No logoUrl provided', success: false, statusCode: 400 },
      { status: 400 }
    );
  }

  // Replace backslashes with forward slashes
  logoUrl = logoUrl.replace(/\\/g, '/');

  try {
    const response = await axios.get(logoUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: 'arraybuffer', // Ensure binary data is handled
    });

    return new Response(response.data, {
      headers: {
        'Content-Type': response.headers['content-type'], // Match original content type
        'Content-Disposition': 'inline', // Allow browser to display images
      },
    });
  } catch (error) {
    console.error('Error fetching logo:', error.message);

    return NextResponse.json(
      {
        message: error.response?.data?.message || 'Failed to fetch logo',
        success: false,
        statusCode: error.response?.status || 500,
      },
      { status: error.response?.status || 500 }
    );
  }
}
