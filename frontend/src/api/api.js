// import axios from 'axios';

// const api = axios.create({
//     baseURL: 'https://your-api-endpoint.com/api',
//     timeout: 5000, // Timeout for requests (optional)
//     headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${localStorage.getItem('authToken')}`, // Example of adding a token from local storage (for frontend)
//     },
// });

// // Request Interceptor: Add token dynamically or handle requests before sending
// api.interceptors.request.use(
//     (config) => {
//         // You can dynamically add headers or log requests here if needed
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// // Response Interceptor: Handle errors globally
// api.interceptors.response.use(
//     (response) => {
//         // You can modify the response or handle it globally
//         return response;
//     },
//     (error) => {
//         if (error.response) {
//             // Request was made and server responded with a status code
//             console.error('Error Response:', error.response.data);
//             // Handle specific HTTP status codes (e.g., 401, 500)
//             if (error.response.status === 401) {
//                 console.log('Unauthorized, redirecting to login...');
//                 // Redirect to login page or handle token expiry
//             }
//         } else if (error.request) {
//             // The request was made but no response was received
//             console.error('Error Request:', error.request);
//         } else {
//             // Something happened in setting up the request
//             console.error('General Error:', error.message);
//         }
//         return Promise.reject(error);
//     }
// );

// // Sample API functions for GET, POST, PUT, DELETE requests

// // GET request (Fetching data)
// const getData = async (endpoint) => {
//     try {
//         const response = await api.get(endpoint);
//         return response.data; // Returns the response data
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error;
//     }
// };

// // POST request (Sending data)
// const postData = async (endpoint, data) => {
//     try {
//         const response = await api.post(endpoint, data);
//         return response.data;
//     } catch (error) {
//         console.error('Error sending data:', error);
//         throw error;
//     }
// };

// // PUT request (Updating data)
// const updateData = async (endpoint, data) => {
//     try {
//         const response = await api.put(endpoint, data);
//         return response.data;
//     } catch (error) {
//         console.error('Error updating data:', error);
//         throw error;
//     }
// };

// // DELETE request (Deleting data)
// const deleteData = async (endpoint) => {
//     try {
//         const response = await api.delete(endpoint);
//         return response.data;
//     } catch (error) {
//         console.error('Error deleting data:', error);
//         throw error;
//     }
// };

// export { getData, postData, updateData, deleteData };
