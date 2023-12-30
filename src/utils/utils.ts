const formatDate = (d: Date | string, locale: "en-GB" | "ar") => {
  return new Date(d).toLocaleDateString(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export { formatDate };
