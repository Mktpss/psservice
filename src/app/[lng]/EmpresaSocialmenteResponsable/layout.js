export async function generateMetadata({ params }) {
  const lng = params.lng;
  if (lng === "en") {
    return {
      title: "Socially Responsible Company",
      description:
        "Committed to corporate social responsibility in Mexico, we promote sustainable practices and contribute to the development of our communities",
    };
  }
  return {
    title: "Empresa Socialmente Responsable PS Services",
    description:
      "Comprometidos con la responsabilidad social empresarial en México, impulsamos prácticas sostenibles y contribuimos al desarrollo de nuestras comunidades",
  };
}

export default async function Layout({ children }) {
  return <>{children}</>;
}
