import { SiteFooter } from "~/components/site-footer";
import { SiteHeader } from "~/components/site-header";
import { getCachedUser } from "~/server/auth";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps) {
  const user = await getCachedUser();

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
