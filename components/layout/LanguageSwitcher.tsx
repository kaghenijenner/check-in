"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();

  const swithcLocale = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    // Get the current path without the locale prefix
    let pathWithoutLocale = pathname;

    // Remove the current locale from the beginning of the path if present
    if (pathname.startsWith(`/${currentLocale}`)) {
      pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");
    }

    // Build the new path with the new locale
    const newPathname =
      pathWithoutLocale === "" || pathWithoutLocale === "/"
        ? `/${newLocale}`
        : `/${newLocale}${pathWithoutLocale}`;

    console.log("Debug info:", {
      currentLocale,
      pathname,
      pathWithoutLocale,
      newPathname,
    });
    window.location.href = newPathname;
    // router.refresh(); // To refresh the page and fetch new translations
  };

  return (
    <div>
      <select
        onChange={(e) => swithcLocale(e.target.value)}
        value={currentLocale}
        className="border border-gray-300 rounded-md p-2  text-sm bg-slate-950/40"
      >
        {routing.locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
