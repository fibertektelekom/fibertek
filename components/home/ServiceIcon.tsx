import type { HomeServiceIcon } from "@/lib/data/home-services";

type ServiceIconProps = {
  name: HomeServiceIcon;
};

export function ServiceIcon({ name }: ServiceIconProps) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "fiber":
      return (
        <svg {...props}>
          <path d="M4 12h16M12 4v16" />
          <circle cx="12" cy="12" r="3" />
          <path d="M7 7l3 3M17 17l-3-3M17 7l-3 3M7 17l3-3" />
        </svg>
      );
    case "fttx":
      return (
        <svg {...props}>
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="12" cy="12" r="2" />
          <path d="M8 16l4-4M12 10l6-4" />
        </svg>
      );
    case "field":
      return (
        <svg {...props}>
          <path d="M14 16H9v5H5v-5H2l5-6 3 4 2-3 2 5z" />
          <path d="M20 10h-3l-2-4-2 4H9l3 5h5l3-5z" />
        </svg>
      );
    case "maintenance":
      return (
        <svg {...props}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "corporate":
      return (
        <svg {...props}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M9 21V9h6v12M9 13h6M9 17h6" />
        </svg>
      );
    case "splice":
      return (
        <svg {...props}>
          <path d="M4 8c2-2 6-2 8 0s6 2 8 0" />
          <path d="M4 16c2 2 6 2 8 0s6-2 8 0" />
          <circle cx="12" cy="8" r="1.5" fill="currentColor" />
          <circle cx="12" cy="16" r="1.5" fill="currentColor" />
        </svg>
      );
    case "cabinet":
      return (
        <svg {...props}>
          <rect x="5" y="3" width="14" height="18" rx="1.5" />
          <path d="M8 7h8M8 11h8M8 15h8M8 19h5" />
          <circle cx="17" cy="19" r="1" fill="currentColor" />
        </svg>
      );
    case "cat":
      return (
        <svg {...props}>
          <path d="M4 7h16M4 12h16M4 17h10" />
          <path d="M18 15v4M16 17h4" />
          <circle cx="7" cy="7" r="1.25" fill="currentColor" />
          <circle cx="7" cy="12" r="1.25" fill="currentColor" />
          <circle cx="7" cy="17" r="1.25" fill="currentColor" />
        </svg>
      );
    case "cctv":
      return (
        <svg {...props}>
          <path d="M4 8h4l2-2h4l2 2h4v10H4V8z" />
          <circle cx="12" cy="13" r="3" />
          <path d="M19 10v2M21 9v4" />
        </svg>
      );
    default:
      return null;
  }
}
