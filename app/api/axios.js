import axios from 'axios';

export default async function handler(req, res) {
  try {
    // Make a request using Axios
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    // Send the response data
    res.status(200).json(response.data);
  } catch (error) {
    // Handle errors
    console.error('Error making Axios request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}