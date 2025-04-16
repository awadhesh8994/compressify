import { useRef, useState } from 'react';
import './ImageUpload.css';

const ImageUpload = ({ images, setImages, setCompressedImages }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files);
    }
  };
  
  const handleFileChange = (e) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };
  
  const handleFiles = (fileList) => {
    const validFiles = Array.from(fileList).filter(file => {
      const fileType = file.type.toLowerCase();
      return fileType === 'image/jpeg' || fileType === 'image/png' || fileType === 'image/webp';
    });
    
    if (validFiles.length === 0) {
      alert('Please upload valid image files (JPEG, PNG, or WebP)');
      return;
    }
    
    // Clear compressed images when new files are added
    setCompressedImages([]);
    
    const newImages = validFiles.map(file => {
      const id = `img-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      return {
        id,
        file,
        preview: URL.createObjectURL(file),
        name: file.name
      };
    });
    
    setImages([...images, ...newImages]);
  };
  
  const removeImage = (id) => {
    setImages(images.filter(image => image.id !== id));
    setCompressedImages([]);
  };
  
  const clearAll = () => {
    images.forEach(image => URL.revokeObjectURL(image.preview));
    setImages([]);
    setCompressedImages([]);
  };

  return (
    <div className="image-upload">
      <div 
        className={`drop-area ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
      >
        <div className="drop-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M4 16v4h16v-4M12 4v12M8 8l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p>Drag & drop images here or <span className="browse-text">Browse</span></p>
        <p className="small-text">Supports JPEG, PNG and WebP</p>
        
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange}
          accept="image/jpeg,image/png,image/webp"
          multiple
          style={{ display: 'none' }}
        />
      </div>
      
      {images.length > 0 && (
        <div className="preview-area">
          <div className="preview-header">
            <h3>Uploaded Images ({images.length})</h3>
            <button className="clear-btn" onClick={clearAll}>Clear All</button>
          </div>
          
          <div className="image-previews">
            {images.map(image => (
              <div key={image.id} className="image-preview">
                <img src={image.preview} alt={image.name} />
                <div className="image-info">
                  <span className="image-name">{image.name}</span>
                  <span className="image-size">{(image.file.size / 1024).toFixed(1)} KB</span>
                </div>
                <button className="remove-btn" onClick={() => removeImage(image.id)}>×</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;