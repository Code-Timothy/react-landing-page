import { useState } from "react";
import galleryPhotos from "./galleryPhotos";
import {
    StyledSection,
    SectionHeader,
    SectionText,
    ImagesContainer,
    Image,
    ModalOverlay,
    ModalContent,
    ModalImage,
    CloseButton,
} from "./styled";

const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <StyledSection id="gallery">
            <SectionHeader>Gallery</SectionHeader>
            <SectionText>Discover a curated collection of stunning visuals that inspire and captivate your imagination.</SectionText>
            <ImagesContainer>
                {galleryPhotos.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        onClick={() => openModal(image)}
                    />
                ))}
            </ImagesContainer>

            {selectedImage && (
                <ModalOverlay onClick={closeModal}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={closeModal}>&times;</CloseButton>
                        <ModalImage src={selectedImage} alt="Enlarged view" />
                    </ModalContent>
                </ModalOverlay>
            )}
        </StyledSection>
    );
};

export default GallerySection;