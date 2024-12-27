import axios from "axios";

export const deleteCompany = async (companyId) => {

  const API_BASE_URL = 'https://api.max-togo.com/api/admin';
  const token = useAppContext.token;

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
    const response = await axios.delete(`${API_BASE_URL}/deletecompany`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      params: {
        companyId,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'An error occurred while deleting the company.'
    );
  }
};