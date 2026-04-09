import HeroSection from "./_components/home/HeroSection";
import StatsBar from "./_components/home/StatsBar";
import AboutSection from "./_components/home/AboutSection";
import RoomsSection from "./_components/home/RoomsSection";
import ServicesSection from "./_components/home/ServicesSection";
import ReviewsSection from "./_components/home/ReviewsSection";
import LocationSection from "./_components/home/LocationSection";
import GallerySection from "./_components/home/GallerySection";
import BookingCTA from "./_components/home/BookingCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <RoomsSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <LocationSection />
      <BookingCTA />
    </>
  );
}
