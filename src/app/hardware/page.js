import HardwareHero from "@/components/organisms/HardwareHero";
import HardwareCategoriesSection from "@/components/organisms/HardwareCategoriesSection";
import HardwareCatalogSection from "@/components/organisms/HardwareCatalogSection";
import HardwareTechnicalServicesSection from "@/components/organisms/HardwareTechnicalServicesSection";
import HardwareCTASection from "@/components/organisms/HardwareCTASection";

export default function HardwarePage() {
  return (
    <main className="bg-background text-foreground">
      <HardwareHero />
      <HardwareCategoriesSection />
      <HardwareCatalogSection />
      <HardwareTechnicalServicesSection />
      <HardwareCTASection />
    </main>
  );
}