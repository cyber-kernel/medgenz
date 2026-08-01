import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { getBreadcrumbSchema, type BreadcrumbItem } from "@/lib/structured-data";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  // Prepend home to breadcrumbs
  const allItems: BreadcrumbItem[] = [
    { name: "Home", url: "https://www.medgenz.com" },
    ...items,
  ];

  const schema = getBreadcrumbSchema(allItems);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* Visual Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center gap-2 text-sm font-medium text-slate-600 overflow-x-auto pb-2 ${className}`}
      >
        {allItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2 whitespace-nowrap">
            {index === 0 ? (
              <Link
                href={item.url}
                className="flex items-center gap-1.5 text-brand-600 hover:text-brand-700 transition-colors"
              >
                <Home className="w-4 h-4" />
                {item.name}
              </Link>
            ) : (
              <>
                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                {index === allItems.length - 1 ? (
                  <span className="text-slate-900 font-semibold" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
