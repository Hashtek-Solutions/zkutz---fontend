// app/features/page.tsx
import Features from "@/components/features/feature"; // Adjust the import path as needed

export const dynamic = "force-static"; // Forces static rendering
export const revalidate = 3600; // Optional: revalidate every hour

export default function FeaturesPage() {
  return <Features />;
}
