import Link from "next/link";

type CtaBandProps = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  variant?: "primary" | "outline";
};

export function CtaBand({
  title,
  description,
  buttonLabel,
  buttonHref,
  variant = "primary",
}: CtaBandProps) {
  const isExternal =
    buttonHref.startsWith("http") || buttonHref.startsWith("tel:");

  const btnClass = `btn ${variant === "outline" ? "btn-outline" : "btn-primary"}`;

  return (
    <section className="cta-band">
      <div className="container">
        <h2>{title}</h2>
        <p>{description}</p>
        {isExternal ? (
          <a href={buttonHref} className={btnClass}>
            {buttonLabel}
          </a>
        ) : (
          <Link href={buttonHref} className={btnClass}>
            {buttonLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
