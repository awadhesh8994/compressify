
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <section className="about-section">
          <h1>About ImageCompressor</h1>
          <div className="about-content">
            <div className="about-text">
              <p>
                ImageCompressor is a modern web application designed to make image compression simple, 
                fast, and effective. We built this tool to help designers, developers, and content creators 
                optimize their images without compromising on quality.
              </p>
              
              <p>
                Our compression technology uses advanced algorithms to reduce file sizes while 
                preserving visual fidelity, ensuring your images load faster on websites and 
                applications without losing their impact.
              </p>
              
              <h2>Our Mission</h2>
              <p>
                We believe that website performance shouldn't come at the cost of visual quality. 
                Our mission is to provide accessible tools that help create a faster, more efficient web 
                without sacrificing the rich visual experiences that make the internet engaging.
              </p>
              
              <h2>Technology</h2>
              <p>
                ImageCompressor is built using modern web technologies including React for the frontend 
                and Node.js with the Sharp image processing library on the backend. This combination 
                allows us to provide fast, reliable compression with a smooth user experience.
              </p>
            </div>
            
            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M13 21h5v2H6v-2h5v-1.05a10.002 10.002 0 0 1-7.684-4.988l1.737-.992A8 8 0 1 0 15.97 3.053l.992-1.737A9.996 9.996 0 0 1 22 10c0 5.185-3.947 9.449-9 9.95V21zm-1-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" fill="currentColor"/>
                  </svg>
                </div>
                <h3>Lightning Fast</h3>
                <p>Our compression algorithm is optimized for speed, processing your images in seconds.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-3a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" fill="currentColor"/>
                  </svg>
                </div>
                <h3>Quality Control</h3>
                <p>Full control over compression quality with our intuitive slider interface.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M2 5l7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V5zm14 14.395l4-1.714V5.033l-4 1.714v12.648zm-2-1.06V7.133l-4-2v11.2l4 2zm-6-2.94l-4 1.714V5.033l4-1.714v12.648z" fill="currentColor"/>
                  </svg>
                </div>
                <h3>Multiple Formats</h3>
                <p>Support for JPEG, PNG, and WebP with format conversion capabilities.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="team-section">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <div className="member-avatar">
                <img src="/assets/my-img2.jpg" alt="Founder" />
              </div>
              <h3>Awadhesh Kumar</h3>
              <p className="member-role">Founder & Developer</p>
              <p className="member-bio">"Hey, I'm the brains behind this tool! I’m obsessed with speed, efficiency, and making your digital life easier. This app is all about giving you a seamless image compression experience—no fluff, just results. Let’s optimize your images and keep things fast and smooth!"

Hope this hits the vibe you're looking for!</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;