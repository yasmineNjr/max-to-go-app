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

  const encodedFilePath = encodeURIComponent(filePath);
    console.log('Original filePath:', filePath);
    console.log('Encoded filePath:', encodedFilePath);
  try {
    const externalApiUrl = `https://api.max-togo.com/api/admin/view/${encodedFilePath}`;
    const response = await axios.get(externalApiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: 'arraybuffer', // Handle binary data correctly
    });
    const contentType = response.headers['content-type'] || mime.lookup(filePath) || 'application/octet-stream';
    // Return the file data as a response
    // return new Response(response.data, {
    //   headers: {
    //     'Content-Type': response.headers['content-type'],
    //     'Content-Disposition': 'inline',
    //   },
    // });
    return new Response(response.data, {
      headers: {
        'Content-Type': contentType,
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
  

