import { AppNav } from "@/components/app-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppNav />
      <div className="pt-16 pb-20 md:pb-0">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          {children}
        </div>
      </div>
    </>
  );
}
