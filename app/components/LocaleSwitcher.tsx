// components/LocaleSwitcher.tsx

"use client";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <select
      defaultValue={locale}
      onChange={onLocaleChange}
      className="p-2 border-black border-2 bg-transparent cursor-pointer"
    >
      {["en", "pt"].map((lang) => (
        <option key={lang} value={lang} className="p-2 border-black border-2 bg-transparent">
          {t("locale", { locale: lang })}
        </option>
      ))}
    </select>
  );
}
