export default function handler(req, res) {
    res.setHeader('Cache-Control', 'no-store, must-revalidate');
    res.setHeader('Content-Type', 'application/json');
  
    if (req.method === 'GET') {
      res.status(200).json({ message: "This data is always fresh!" });
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  }
  