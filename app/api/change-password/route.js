import axios from 'axios';

const API_BASE_URL = 'https://api.max-togo.com/api/admin';

/**
 * Sends a password reset code asynchronously.
 *
 * @param {string} companyId - The ID of the company.
 * @param {string} resetToken - The reset token for authentication.
 * @param {string} newPassword - The new password to set.
 * @returns {Promise} - The Axios response promise.
 */
export const sendPasswordResetCodeAsync = async (companyId, resetToken, newPassword) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/sendpasswordresetcodeasync`,
      {
        companyId,
        resetToken,
        newPassword,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'An error occurred while sending the password reset code.'
    );
  }
};
