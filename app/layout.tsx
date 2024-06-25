import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Thoughtful for iOS – Cultivate Daily Gratitude",
    description: "A daily gratitude journal app for iOS with handcrafted prompts and personalized experiences.",
    openGraph: {
        title: "Thoughtful for iOS – Cultivate Daily Gratitude",
        description: "A daily gratitude journal app for iOS with handcrafted prompts and personalized experiences.",
        url: "https://thoughtful.nabilridhwan.com",
        images: [
            {
                url: "/og-image.png",
                width: 1428,
                height: 827,
            }
        ]
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    );
}
