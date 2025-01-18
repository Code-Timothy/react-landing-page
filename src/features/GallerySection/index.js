import galleryPhotos from "./galleryPhotos";
import { StyledSection, SectionHeader, SectionText, ImagesContainer, Image } from "./styled";

const GallerySection = () => (
    <StyledSection id="gallery">
        <SectionHeader>Gallery</SectionHeader>
        <SectionText>Discover a curated collection of stunning visuals that inspire and captivate your imagination.</SectionText>
        <ImagesContainer>
            {galleryPhotos.map((image, index) => (
                <Image key={index} src={image} alt={`Gallery image ${index + 1}`} />
            ))}
        </ImagesContainer>
    </StyledSection>
);

export default GallerySection;