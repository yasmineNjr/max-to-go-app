import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req) {
  const token = req.headers.get('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return NextResponse.json(
      {
        message: 'No token available',
        success: false,
        statusCode: 401,
      },
      { status: 401 }
    );
  }

  const urlParams = new URL(req.url).searchParams; // Get query parameters from the request URL
  const companyId = urlParams.get('companyId'); // Extract companyId

  if (!companyId) {
    return NextResponse.json(
      {
        message: 'No companyId provided',
        success: false,
        statusCode: 400,
      },
      { status: 400 }
    );
  }

  try {
    const apiUrl = `https://api.max-togo.com/api/admin/getcompanybyid?companyId=${companyId}`;
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching data from upstream API:', error);

    return NextResponse.json(
      {
        message: error.response?.data?.message || 'An error occurred',
        success: false,
        statusCode: error.response?.status || 500,
      },
      { status: error.response?.status || 500 }
    );
  }
}
