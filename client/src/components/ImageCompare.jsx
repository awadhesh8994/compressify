import { useState, useRef, useEffect } from 'react';
import './ImageCompare.css';

const ImageCompare = ({ original, compressed, filename, originalSize, compressedSize }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  
  const containerRef = useRef(null);
  
  // Calculate percentage saved
  const savedPercentage = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
  
  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };
  
  const handleMouseMove = (e) => {
    if (isDragging) {
      updateSliderPosition(e);
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleTouchStart = (e) => {
    setIsDragging(true);
    updateSliderPositionTouch(e);
  };
  
  const handleTouchMove = (e) => {
    if (isDragging) {
      updateSliderPositionTouch(e);
    }
  };
  
  const handleTouchEnd = () => {
    setIsDragging(false);
  };
  
  const updateSliderPosition = (e) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, x)));
  };
  
  const updateSliderPositionTouch = (e) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const touch = e.touches[0];
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, x)));
  };
  
  useEffect(() => {
    const handleMouseUpOutside = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };
    
    document.addEventListener('mouseup', handleMouseUpOutside);
    document.addEventListener('touchend', handleMouseUpOutside);
    
    return () => {
      document.removeEventListener('mouseup', handleMouseUpOutside);
      document.removeEventListener('touchend', handleMouseUpOutside);
    };
  }, [isDragging]);
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = compressed;
    
    // Extract the name without extension
    const nameWithoutExt = filename.substring(0, filename.lastIndexOf('.'));
    const format = compressed.includes('data:image/webp') ? 'webp' : 
                  compressed.includes('data:image/png') ? 'png' : 'jpeg';
    
    link.download = `${nameWithoutExt}-compressed.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="image-compare-card">
      <div 
        className="image-compare-container" 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="image-wrapper">
          <img src={original} alt="Original" className="image original" />
        </div>
        
        <div 
          className="image-wrapper compressed-wrapper" 
          style={{ width: `${sliderPosition}%` }}
        >
          <img src={compressed} alt="Compressed" className="image compressed" />
        </div>
        
        <div 
          className="slider-handle"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="slider-line"></div>
          <div className="slider-button">
            <span className="slider-arrow left">◀</span>
            <span className="slider-arrow right">▶</span>
          </div>
        </div>
      </div>
      
      <div className="image-info">
        <h3>{filename}</h3>
        <div className="size-info">
          <div>
            <span className="label">Original:</span>
            <span className="value">{(originalSize / 1024).toFixed(1)} KB</span>
          </div>
          <div>
            <span className="label">Compressed:</span>
            <span className="value">{(compressedSize / 1024).toFixed(1)} KB</span>
          </div>
          <div>
            <span className="label">Saved:</span>
            <span className="value saved">{savedPercentage}%</span>
          </div>
        </div>
        <button className="download-btn" onClick={handleDownload}>
          Download
        </button>
      </div>
    </div>
  );
};

export default ImageCompare;