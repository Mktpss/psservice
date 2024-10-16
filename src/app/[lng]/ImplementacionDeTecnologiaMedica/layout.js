export async function generateMetadata({ params }) {
  const lng = params.lng;
  if (lng === "en") {
    return {
      title: "Medical Technology Implementation PS Service",
      description:
        "We innovate in the installation of medical technology in Mexico, offering advanced solutions for the health sector. Committed to quality and efficiency",
      alternates: {
        canonical:
          "https://www.psservice.com.mx/ImplementacionDeTeconologiaMedica",
        languages: {
          en: "https://www.psservice.com.mx/en/ImplementacionDeTeconologiaMedica",
          es: "https://www.psservice.com.mx/es/ImplementacionDeTeconologiaMedica",
        },
      },
    };
  }
  return {
    title: "Implementación de Tecnología Médica PS Service",
    description:
      "Innovamos en la instalación de tecnología médica en México, ofreciendo soluciones avanzadas para el sector de la salud. Comprometidos con la calidad y la eficacia",
    alternates: {
      canonical:
        "https://www.psservice.com.mx/ImplementacionDeTeconologiaMedica",
      languages: {
          en: "https://www.psservice.com.mx/en/ImplementacionDeTeconologiaMedica",
          es: "https://www.psservice.com.mx/es/ImplementacionDeTeconologiaMedica",
      },
    },
  };
}

export default async function Layout({ children }) {
  return <>{children}</>;
}
