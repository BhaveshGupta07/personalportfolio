import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const DownloadButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={styles.wrapper}>
      <motion.div 
      whileInView={{opacity: 1,x:0}}
      initial={{opacity: 0,x:-100}}
      transition={{opacity: 0.5}}
      style={styles.thumbnail}>
        <img
          src="https://i.ibb.co/wd52gCq/back.jpg" 
          alt="Resume Thumbnail"
          style={styles.thumbnailImage}
        />
      </motion.div>

      {/* Download button */}
      <motion.a
      whileInView={{opacity: 1,x:0}}
      initial={{opacity: 0,x:100}}
      transition={{opacity: 0.5}}
        href="https://drive.google.com/file/d/12We8BmokbBJt97MRX82adPEg69DTLWfk/view?usp=sharing"  
        download
        style={{
          ...styles.button,
          ...(isHovered ? styles.buttonHover : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaDownload style={styles.icon} />
        Resume
      </motion.a>
    </div>
  );
};

const styles = {
  wrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%', 
  },
  thumbnail: {
    position: 'absolute',
    width: '300px', 
    height: '400px', 
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    borderRadius: '8px',
    overflow: 'hidden',
    zIndex: 1,
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
    opacity: 0.8, 
  },
  button: {
    zIndex: 2, 
    display: 'flex',
    alignItems: 'center',
    padding: '12px 24px',
    background: 'linear-gradient(135deg, #6e45e2, #88d3ce)', 
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '50px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  icon: {
    marginRight: '8px',
    fontSize: '20px',
  },
  buttonHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.3)',
  },
};

export default DownloadButton;
