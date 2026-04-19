import {
  Header,
  Hero,
  Features,
  UserTypes,
  HowItWorks,
  CTASection,
  Footer,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <UserTypes />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
