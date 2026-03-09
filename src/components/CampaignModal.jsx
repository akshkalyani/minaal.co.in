import React, { useEffect, useState } from "react";
import "./CampaignModal.css";

/**
 * CampaignModal - Reusable modal component for campaign/portfolio details.
 *
 * Props:
 *   item   {object|null} - The item to display. Shape:
 *                          { title, description, images: string[], tags: string[] }
 *                          Pass null (or nothing) to keep the modal closed.
 *   onClose {function}   - Callback fired when the user requests to close.
 *   sectionLabel {string} - Optional label above the gallery (default: "CAMPAIGN IMAGES")
 */
const CampaignModal = ({ item, onClose, sectionLabel = "CAMPAIGN IMAGES" }) => {
    const [isClosing, setIsClosing] = useState(false);

    // Trigger the close animation then call parent's onClose
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 300);
    };

    // Reset closing state whenever a new item is opened
    useEffect(() => {
        if (item) setIsClosing(false);
    }, [item]);

    // ESC key
    useEffect(() => {
        if (!item) return;
        const handleEsc = (e) => {
            if (e.key === "Escape") handleClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [item]);

    // Lock body scroll
    useEffect(() => {
        document.body.style.overflow = item ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [item]);

    if (!item) return null;

    return (
        <div className={`modal-overlay ${isClosing ? "fade-out" : "fade-in"}`}>
            {/* Backdrop */}
            <div className="modal-backdrop" onClick={handleClose} />

            {/* Modal Card */}
            <div className={`modal-card ${isClosing ? "scale-out" : "scale-in"}`}>

                {/* Header */}
                <div className="modal-header">
                    <div>
                        <h3 className="modal-title">{item.title}</h3>
                        {item.description && (
                            <p className="modal-subtitle">{item.description}</p>
                        )}
                    </div>
                    <button className="modal-close" onClick={handleClose} aria-label="Close modal">
                        ✕
                    </button>
                </div>

                {/* Scrollable Body */}
                <div className="modal-body">

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                        <div className="modal-tags">
                            {item.tags.map((tag, i) => (
                                <span key={i} className="modal-tag">{tag}</span>
                            ))}
                        </div>
                    )}

                    <h4 className="modal-section-label">{sectionLabel}</h4>

                    <div className="modal-gallery">
                        {item.images && item.images.length > 0 ? (
                            item.images.map((img, i) => (
                                <div key={i} className="modal-image-wrapper">
                                    <img src={img} alt={`${item.title} - image ${i + 1}`} />
                                </div>
                            ))
                        ) : (
                            <div className="modal-image-wrapper">
                                <div className="modal-image-placeholder">
                                    <h4>{item.title}</h4>
                                    <p>Campaign images coming soon</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CampaignModal;
