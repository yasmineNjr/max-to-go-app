import { NextResponse } from 'next/server';
import axios from 'axios';

export async function PUT(req) {
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

  try {
    const { companyId, isApproval } = await req.json(); // Parse JSON body

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

    // Determine the correct endpoint based on `isApproval`
    const apiUrl = isApproval
      ? `https://api.max-togo.com/api/admin/unapprove?companyId=${companyId}`
      : `https://api.max-togo.com/api/admin/approve?companyId=${companyId}`;

    // Make the API request
    const response = await axios.put(apiUrl, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error processing approval request:', error);

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
