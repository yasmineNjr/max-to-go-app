import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const apiUrl = 'https://api.max-togo.com/api/admin/login';

  try {
    const body = await req.json(); // Parse the incoming request body
    const response = await axios.post(apiUrl, body);

    // Return the data from the API
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error logging in:', error);

    // Handle and return errors
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
