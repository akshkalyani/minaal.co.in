import React, { useEffect, useState } from "react";
import "./CampaignModal.css";

const CampaignModal = ({ item, onClose, sectionLabel = "CAMPAIGN IMAGES" }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [lightbox, setLightbox] = useState(null); // index of open image

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 300);
    };

    useEffect(() => {
        if (item) setIsClosing(false);
    }, [item]);

    useEffect(() => {
        if (!item) return;
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                if (lightbox !== null) setLightbox(null);
                else handleClose();
            }
            if (e.key === "ArrowRight" && lightbox !== null)
                setLightbox((i) => (i + 1) % item.images.length);
            if (e.key === "ArrowLeft" && lightbox !== null)
                setLightbox((i) => (i - 1 + item.images.length) % item.images.length);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [item, lightbox]);

    useEffect(() => {
        document.body.style.overflow = item ? "hidden" : "auto";
        return () => { document.body.style.overflow = "auto"; };
    }, [item]);

    if (!item) return null;

    const images = item.images || [];

    return (
        <>
            <div className={`modal-overlay ${isClosing ? "fade-out" : "fade-in"}`}>
                <div className="modal-backdrop" onClick={handleClose} />
                <div className={`modal-card ${isClosing ? "scale-out" : "scale-in"}`}>
                    <div className="modal-header">
                        <div>
                            <h3 className="modal-title">{item.title}</h3>
                            {item.description && (
                                <p className="modal-subtitle">{item.description}</p>
                            )}
                        </div>
                        <button className="modal-close" onClick={handleClose} aria-label="Close modal">✕</button>
                    </div>

                    <div className="modal-body">
                        {item.tags && item.tags.length > 0 && (
                            <div className="modal-tags">
                                {item.tags.map((tag, i) => (
                                    <span key={i} className="modal-tag">{tag}</span>
                                ))}
                            </div>
                        )}

                        <h4 className="modal-section-label">{sectionLabel}</h4>

                        <div className="modal-gallery">
                            {images.length > 0 ? (
                                images.map((img, i) => (
                                    <button
                                        key={i}
                                        className="modal-image-wrapper"
                                        onClick={() => setLightbox(i)}
                                        aria-label={`View ${item.title} image ${i + 1}`}
                                    >
                                        <img src={img} alt={`${item.title} – outdoor hoarding advertisement in Rajkot, Saurashtra – Minaal Publicity`} />
                                    </button>
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

            {lightbox !== null && (
                <div className="mn-lightbox" onClick={() => setLightbox(null)}>
                    <button className="mn-lightbox__close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
                    {images.length > 1 && (
                        <>
                            <button
                                className="mn-lightbox__arrow mn-lightbox__arrow--prev"
                                onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}
                                aria-label="Previous"
                            >‹</button>
                            <button
                                className="mn-lightbox__arrow mn-lightbox__arrow--next"
                                onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}
                                aria-label="Next"
                            >›</button>
                        </>
                    )}
                    <img
                        src={images[lightbox]}
                        alt={`${item.title} – outdoor hoarding advertisement in Rajkot, Saurashtra – Minaal Publicity`}
                        onClick={(e) => e.stopPropagation()}
                    />
                    {images.length > 1 && (
                        <span className="mn-lightbox__count">{lightbox + 1} / {images.length}</span>
                    )}
                </div>
            )}
        </>
    );
};

export default CampaignModal;
