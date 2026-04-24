import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import SmoothScroll from "@/components/SmoothScroll";
import { LanguageProvider } from "@/context/LanguageContext";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sere Innovations — Helping Farmers Hatch Their Own Future" },
      {
        name: "description",
        content:
          "Affordable smart egg incubators for small poultry farmers in India. Automatic temperature, humidity, and egg turning control. Priced around ₹10,000. Built for farmer self-reliance.",
      },
      {
        name: "keywords",
        content:
          "egg incubator India, poultry incubator for small farmers, affordable incubator India, smart hatching machine, small poultry farmer equipment, hatch eggs at home India, anday sene ki machine",
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Sere Innovations" },
      {
        property: "og:title",
        content: "Sere Innovations — Helping Farmers Hatch Their Own Future",
      },
      {
        property: "og:description",
        content:
          "Smart, affordable egg incubators built for small poultry farmers. Take control of your hatching cycle.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Sere Innovations" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sere Innovations — Smart Incubators for Small Farmers" },
      {
        name: "twitter:description",
        content: "Affordable. Simple. Built for Indian poultry farmers.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "canonical", href: "https://sereinnovations.in" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <LanguageProvider>
      <SmoothScroll />
      <Outlet />
    </LanguageProvider>
  );
}
