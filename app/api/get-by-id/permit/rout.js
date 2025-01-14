// app/api/get-by-id/permit/route.js
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
  let filePath = urlParams.get('filePath');

  if (!filePath) {
    return NextResponse.json(
      { message: 'No filePath provided', success: false, statusCode: 400 },
      { status: 400 }
    );
  }

  // Sanitize the file path (Replace backslashes with forward slashes)
  filePath = filePath.replace(/\\/g, '/');

  try {
    // Correct API endpoint with the sanitized file path
    const externalApiUrl = `https://api.max-togo.com/api/admin/view/${filePath}`;
    const response = await axios.get(externalApiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: 'arraybuffer', // Handle binary data correctly
    });

    // Return the file data as a response
    return new Response(response.data, {
      headers: {
        'Content-Type': response.headers['content-type'],
        'Content-Disposition': 'inline',
      },
    });
  } catch (error) {
    console.error('Error fetching file:', error.message);
    return NextResponse.json(
      {
        message: error.response?.data?.message || 'Failed to fetch file',
        success: false,
        statusCode: error.response?.status || 500,
      },
      { status: error.response?.status || 500 }
    );
  }
}
