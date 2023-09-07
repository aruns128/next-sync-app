
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    if (email === 'user@example.com' && password === 'password123') {
      res.status(200).json({ message: 'Login successful', data: { email: email } });
    } else {
      res.status(401).json({ message: 'Login failed' });
    }
  } else {
    res.status(405).end();
  }
}
