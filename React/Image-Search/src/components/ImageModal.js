
import React from 'react';
import { Dialog, DialogContent, Typography, Link } from '@mui/material';
import './ImageModal.css'; 

const ImageModal = ({ open, onClose, image }) => {
  if (!image) {
    return null; 
  }
  if (!image.urls) {
    return null;
  }
  return (
    <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth="md">
      <DialogContent className="image-modal">
        <img src={image.urls.regular} alt={image.alt_description} className="modal-image" />
        <div className="modal-details">
          <Typography variant="h5" className="user-name">{image.user.username}</Typography>
          <Typography variant="caption" className="likes-count">Likes: {image.likes}</Typography>
          <Typography variant="body2" className="description">{image.description}</Typography>
          <Link href={image.user.links.html} target="_blank" rel="noopener noreferrer" className="view-profile">
            View Profile
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
