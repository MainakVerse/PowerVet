import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import UIProvider from "@/providers/UIProvider";
import Footer from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "POWERVET",
  description: "At Powervet, we are passionately dedicated to the well-being and health of your pet. Our veterinary clinic offers a complete experience, from routine check-ups to advanced surgical interventions, providing exceptional and personalized care for each pet. We have a qualified team of dedicated veterinarians, equipped to handle a wide variety of veterinary services, including specialized consultations, surgeries, laboratory tests, preventive care, and 24-hour emergencies. In our commitment to animal love, we offer physiotherapy, veterinary dentistry, specialized nutrition, and care for exotic animals. Powervet is more than a clinic; it is a modern space with state-of-the-art facilities, ensuring a safe and comfortable environment. In addition, we provide premium products in our pet shop, grooming services, specialized pet food, and special care to ensure the quality of life and happiness of your pet. Discover the difference at Powervet - your trusted choice for the health and happiness of your pet.",
  keywords: "Veterinary clinics strive to offer a combination of compassionate care and professional expertise, emphasizing the importance of the bond between pets and their owners. Modern clinics feature advanced technology and well-equipped facilities to provide a range of services, including preventative care, specialized treatments, and 24-hour emergency assistance",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <UIProvider>
          <Header />
          {children}
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
