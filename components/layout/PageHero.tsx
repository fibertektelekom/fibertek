type PageHeroProps = {
  title: string;
  description?: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <h1>{title}</h1>
      {description ? <p>{description}</p> : null}
    </section>
  );
}
