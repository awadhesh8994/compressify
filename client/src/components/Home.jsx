import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import ImageCompare from './ImageCompare';

function Home() {
  const [images, setImages] = useState([]);
  const [compressedImages, setCompressedImages] = useState([]);
  const [quality, setQuality] = useState(80);
  const [format, setFormat] = useState('jpeg');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCompression = async () => {
    if (images.length === 0) {
      setError('Please upload at least one image');
      setTimeout(() => setError(''), 3000);
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const formData = new FormData();
      images.forEach(image => {
        formData.append('images', image.file);
      });
      formData.append('quality', quality);
      formData.append('format', format);

      const response = await fetch('https://compressify-backend.onrender.com/api/compress', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Compression failed');
      }

      const data = await response.json();

      const processedImages = data.compressedImages.map((img, index) => {
        return {
          id: images[index].id,
          original: images[index].preview,
          compressed: `data:image/${format};base64,${img.data}`,
          filename: img.filename,
          originalSize: images[index].file.size,
          compressedSize: img.size,
        };
      });

      setCompressedImages(processedImages);
    } catch (error) {
      console.error('Error compressing images:', error);
      setError('Failed to compress images. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Image Compressor</h1>
          <p>Compress your images without losing quality</p>

          <ImageUpload 
            images={images} 
            setImages={setImages} 
            setCompressedImages={setCompressedImages} 
          />

          {images.length > 0 && (
            <div className="compression-controls">
              <div className="control-group">
                <label>Quality ({quality}%)</label>
                <input 
                  type="range" 
                  min="1" 
                  max="100" 
                  value={quality} 
                  onChange={(e) => setQuality(Number(e.target.value))} 
                />
              </div>

              <div className="control-group">
                <label>Format</label>
                <select value={format} onChange={(e) => setFormat(e.target.value)}>
                  <option value="jpeg">JPEG</option>
                  <option value="png">PNG</option>
                  <option value="webp">WebP</option>
                </select>
              </div>

              <button 
                className="compress-btn" 
                onClick={handleCompression} 
                disabled={isLoading}
              >
                {isLoading ? 'Compressing...' : 'Compress Images'}
              </button>
            </div>
          )}

          {error && <div className="error-message">{error}</div>}
        </div>
      </section>

      {compressedImages.length > 0 && (
        <section className="results">
          <div className="container">
            <h2>Compressed Images</h2>
            <div className="image-grid">
              {compressedImages.map(image => (
                <ImageCompare 
                  key={image.id}
                  original={image.original}
                  compressed={image.compressed}
                  filename={image.filename}
                  originalSize={image.originalSize}
                  compressedSize={image.compressedSize}
                />
              ))}

            </div>
          </div>
          
          
        </section>
        
      )}
    </main>
  );
}

export default Home;
