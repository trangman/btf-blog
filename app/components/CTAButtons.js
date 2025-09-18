export default function CTAButtons({ 
  primaryText = "Learn More About BtF", 
  primaryHref = "/learn-more", 
  secondaryText = "Contact Us", 
  secondaryHref = "/contact",
  variant = "default" // "default" or "accent-bg"
}) {
  const primaryClasses = variant === "accent-bg" 
    ? "bg-btf-dark text-btf-accent px-8 py-3 rounded-lg text-lg font-semibold hover:bg-btf-light hover:text-btf-dark transition-colors"
    : "bg-btf-accent text-btf-dark px-8 py-3 rounded-lg text-lg font-semibold hover:bg-btf-light hover:text-btf-dark transition-colors";
    
  const secondaryClasses = variant === "accent-bg"
    ? "bg-btf-light text-btf-dark px-8 py-3 rounded-lg text-lg font-semibold hover:bg-btf-dark hover:text-btf-accent transition-colors"
    : "bg-btf-light text-btf-dark px-8 py-3 rounded-lg text-lg font-semibold hover:bg-btf-dark hover:text-btf-accent transition-colors";

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href={primaryHref} className={primaryClasses}>
        {primaryText}
      </a>
      <a href={secondaryHref} className={secondaryClasses}>
        {secondaryText}
      </a>
    </div>
  );
}
