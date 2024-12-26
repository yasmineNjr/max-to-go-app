import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  const apiUrl = 'https://api.max-togo.com/api/admin/getall';
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjBkN2E3OTA5LTA2NzMtNGE3Zi01MzBlLTA4ZGQyMjY0MzU4NCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkbWluQGRvbWFpbi5jb20iLCJFbWFpbENvbmZpcm1lZCI6IlRydWUiLCJJc0FwcHJvdmVkIjoiVHJ1ZSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNzM1MjIxMDAzLCJpc3MiOiJodHRwczovL2FwaS5tYXgtdG9nby5jb20iLCJhdWQiOiJodHRwczovL21heC10b2dvLmNvbS8ifQ.bQ3st1FQNxXhPC7dbJmDrAqMTGKDSnbteCSyCw45W7k'; // Replace with your actual token

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Return the data from the API
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);

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
