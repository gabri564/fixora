import SoftwareHero from "@/components/organisms/SoftwareHero";
import SoftwareCategoriesSection from "@/components/organisms/SoftwareCategoriesSection";
import SoftwareCatalogSection from "@/components/organisms/SoftwareCatalogSection";
import SoftwareInstallationServicesSection from "@/components/organisms/SoftwareInstallationServicesSection";
import SoftwareCTASection from "@/components/organisms/SoftwareCTASection";

export default function SoftwarePage() {
  return (
    <main className="bg-background text-foreground">
      <SoftwareHero />
      <SoftwareCategoriesSection />
      <SoftwareCatalogSection />
      <SoftwareInstallationServicesSection />
      <SoftwareCTASection />
    </main>
  );
}