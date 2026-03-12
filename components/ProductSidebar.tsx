"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ProductSidebarProps = {
  categories: {
    slug: string;
    name: string;
    products: { slug: string; name: string }[];
  }[];
  activeCategorySlug?: string;
  activeProductSlug?: string;
};

export function ProductSidebar({
  categories,
  activeCategorySlug,
  activeProductSlug,
}: ProductSidebarProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(
    activeCategorySlug ?? null,
  );

  useEffect(() => {
    if (activeCategorySlug) {
      setOpenCategory(activeCategorySlug);
    }
  }, [activeCategorySlug]);

  const toggleCategory = (slug: string) => {
    setOpenCategory((current) => (current === slug ? null : slug));
  };

  return (
    <aside className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
        Produse
      </h2>
      <div className="mt-4 space-y-2">
        {categories.map((category) => {
          const isOpen = openCategory === category.slug;

          return (
            <div
              key={category.slug}
              className="rounded border border-slate-100 bg-slate-50"
            >
              <button
                type="button"
                onClick={() => toggleCategory(category.slug)}
                className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-medium text-slate-800 hover:bg-slate-100"
              >
                <span>{category.name}</span>
                <span className="ml-2 text-xs text-slate-500">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
              {isOpen && category.products.length > 0 && (
                <ul className="border-t border-slate-200 bg-white px-2 py-2 text-sm">
                  {category.products.map((product) => {
                    const isActive =
                      category.slug === activeCategorySlug &&
                      product.slug === activeProductSlug;

                    return (
                      <li key={product.slug}>
                        <Link
                          href={`/produse/${category.slug}/${product.slug}`}
                          className={`block rounded px-2 py-1 text-xs ${
                            isActive
                              ? "bg-sky-600 font-semibold text-white"
                              : "text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          {product.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}

        {categories.length === 0 && (
          <p className="text-xs text-slate-500">
            Nu au fost gasite produse in structura din directorul public.
          </p>
        )}
      </div>
    </aside>
  );
}

