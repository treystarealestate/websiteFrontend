import React from "react";
import Link from "next/link";

// Define the type for breadcrumb items
interface BreadcrumbItem {
  label: string;
  link?: string; // Optional link property
  active: boolean; // True if the breadcrumb is the current page
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]; // Array of breadcrumb items
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb-container py-3">
      <div className="container">
        <ol className="breadcrumb mb-0">
          {items.map((item, index) => (
            <li
              key={index}
              className={`breadcrumb-item ${item.active ? "active" : ""}`}
              aria-current={item.active ? "page" : undefined}
            >
              {item.active ? (
                item.label
              ) : (
                <Link href={item.link || "#"}>{item.label}</Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
