import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <div className="container">
        <section className="services-header">
          <h1>Our Services</h1>
          <p className="services-intro">
            ImageCompressor offers a range of image optimization services to help you deliver fast-loading, 
            high-quality visual content across all your digital platforms.
          </p>
        </section>
        
        <section className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M20 5H4v14l9.292-9.294a1 1 0 0 1 1.414 0L20 15.01V5zM2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"/>
              </svg>
            </div>
            <h2>Image Compression</h2>
            <p>
              Our core service reduces image file sizes without compromising visual quality. 
              Perfect for website optimization, email newsletters, and digital media.
            </p>
            <ul className="service-features">
              <li>Supports JPEG, PNG, and WebP formats</li>
              <li>Adjustable compression quality</li>
              <li>Batch processing of multiple images</li>
              <li>Before/after comparison</li>
            </ul>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-7h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z" fill="currentColor"/>
              </svg>
            </div>
            <h2>Format Conversion</h2>
            <p>
              Convert between popular image formats to find the optimal balance between 
              quality and file size for your specific needs.
            </p>
            <ul className="service-features">
              <li>Convert JPEG to WebP for better web performance</li>
              <li>Convert PNG to JPEG for smaller file sizes</li>
              <li>Maintain transparency where supported</li>
              <li>Optimize for specific use cases</li>
            </ul>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M6.17 18a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2v-2h4.17zm6-7a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2V4h4.17zM9 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="currentColor"/>
              </svg>
            </div>
            <h2>Custom Optimization Profiles</h2>
            <p>
              Save your preferred compression settings for different use cases to 
              maintain consistency across your projects.
            </p>
            <ul className="service-features">
              <li>Coming soon: Save custom compression settings</li>
              <li>Coming soon: Apply presets to batches of images</li>
              <li>Coming soon: Share presets with your team</li>
            </ul>
          </div>
          
          {/* <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M22 7h1v10h-1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3H1V7h1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm-2 10h-6v3h6v-3zm-5-6V3H4v8h11zm2 0h5V3h-5v8zM4 17v3h6v-3H4z" fill="currentColor"/>
              </svg>
            </div>
            <h2>API Access</h2>
            <p>
              Coming soon: Integrate our compression technology directly into your 
              applications with our developer-friendly API.
            </p>
            <ul className="service-features">
              <li>Coming soon: RESTful API for developers</li>
              <li>Coming soon: SDK for popular languages</li>
              <li>Coming soon: Webhook integration</li>
              <li>Coming soon: Custom integration support</li>
            </ul>
          </div> */}
        </section>
        
        <section className="pricing-section">
          <h2>Pricing Plans</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Free</h3>
                <div className="price">$0</div>
                <p>Perfect for occasional use</p>
              </div>
              <ul className="pricing-features">
                <li>Compress up to 10 images daily</li>
                <li>Max file size: 5MB</li>
                <li>Basic compression options</li>
                <li>Format conversion (JPG, PNG, WebP)</li>
              </ul>
              <div className="pricing-cta">
                <button className="pricing-btn current">Current Plan</button>
              </div>
            </div>
            
            <div className="pricing-card highlight">
              <div className="best-value">Best Value</div>
              <div className="pricing-header">
                <h3>Pro</h3>
                <div className="price">$9<span>/month</span></div>
                <p>For professionals and small teams</p>
              </div>
              <ul className="pricing-features">
                <li>Unlimited compressions</li>
                <li>Max file size: 25MB</li>
                <li>Advanced compression options</li>
                <li>Batch processing</li>
                <li>Custom optimization profiles</li>
                <li>No watermarks</li>
              </ul>
              <div className="pricing-cta">
                <button className="pricing-btn">Upgrade</button>
              </div>
            </div>
            
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Business</h3>
                <div className="price">$29<span>/month</span></div>
                <p>For teams and businesses</p>
              </div>
              <ul className="pricing-features">
                <li>Everything in Pro, plus:</li>
                <li>API access</li>
                <li>Max file size: 50MB</li>
                <li>Priority support</li>
                <li>Team collaboration</li>
                <li>Analytics dashboard</li>
              </ul>
              <div className="pricing-cta">
                <button className="pricing-btn">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;