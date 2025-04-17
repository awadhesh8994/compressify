const express = require('express');
const multer = require('multer');
const cors = require('cors');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000; // Use 0 to let the OS assign an available port

// Middleware
app.use(cors({
  origin: '*',  // During development, allow all origins
  credentials: true
}));

app.use(express.json());

// Set up multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'];
    if (!allowedTypes.includes(file.mimetype)) {
      cb(new Error('Unsupported file type. Please upload JPEG, PNG, or WebP images.'));
    } else {
      cb(null, true);
    }
  }
});

// Create temp directory if it doesn't exist
const tempDir = path.join(__dirname, 'temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

// Compress images endpoint
app.post('/api/compress', upload.array('images'), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No images uploaded' });
    }

    const quality = parseInt(req.body.quality) || 80;
    const format = req.body.format || 'jpeg';

    // Process each image
    const compressedImages = [];
    for (const file of req.files) {
      // Get file extension
      const originalName = file.originalname;
      const fileNameWithoutExt = path.parse(originalName).name;
      
      // Process with sharp
      let sharpImage = sharp(file.buffer);
      
      // Set format and quality
      if (format === 'jpeg') {
        sharpImage = sharpImage.jpeg({ quality });
      } else if (format === 'png') {
        // PNG doesn't use quality in the same way as JPEG
        // Using quality as a compression level (1-9)
        const compressionLevel = Math.round(9 - (quality / 100) * 9);
        sharpImage = sharpImage.png({ compressionLevel });
      } else if (format === 'webp') {
        sharpImage = sharpImage.webp({ quality });
      }
      
      // Process the image
      const buffer = await sharpImage.toBuffer();
      
      // Create a unique filename
      const outputFileName = `${fileNameWithoutExt}-compressed.${format}`;
      
      // Add to results
      compressedImages.push({
        filename: outputFileName,
        data: buffer.toString('base64'),
        size: buffer.length
      });
    }

    res.json({ compressedImages });
  } catch (error) {
    console.error('Error compressing images:', error);
    res.status(500).json({ error: 'Failed to compress images' });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/dist'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
