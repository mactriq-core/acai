import { connect } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { first_name, last_name, email, subject, message } = req.body;

    // Connect to MySQL database
    const connection = await connect();

    // Insert form data into the database
    const result = await connection.query(
      'INSERT INTO contact (first_name, last_name, email, subject, message) VALUES (?, ?, ?)',
      [first_name, last_name, email, subject, message]
    );

    // Close the database connection
    connection.end();

    res.status(200).json({ message: 'Form submitted successfully', result });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}