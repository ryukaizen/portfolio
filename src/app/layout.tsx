import './globals.css';
import Sidebar from '../components/Sidebar';
import { Tilt_Warp } from "next/font/google";
import { FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa';

const font = Tilt_Warp({ weight: "400", subsets: ["latin-ext"] });

export const metadata = {
    title: 'Akash Dalvi - Portfolio',
    description: 'I think I should write a description here',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${font.className}`}>
            <div className="absolute top-4 right-4 flex space-x-4">
        <a href="https://github.com/ryukaizen" target="_blank" aria-label="GitHub">
          <FaGithub className="h-12 w-12 text-gray-900 hover:text-gray-700" />
        </a>
        <a href="https://linkedin.com/in/" target="_blank" aria-label="LinkedIn">
          <FaLinkedin className="h-12 w-12 text-blue-700 hover:text-blue-600" />
        </a>
        <a href="https://telegram.me/ryukaizen/" target="_blank" aria-label="Telegram">
        <FaTelegram className="h-12 w-12 text-[#0088cc] hover:text-[#0088cc99]" />
        </a>
  
        </div>
                <div style={{ display: 'flex' }}>
                <div className="fixed inset-0 z-[-1] overflow-hidden">
                    <div className="glow-circle glow-circle-1"></div>
                    <div className="glow-circle glow-circle-2"></div>
                    <div className="glow-circle glow-circle-3"></div>
                    <div style={{ marginLeft: '200px', width: '100%' }}>
                        {children}
                    </div>
                    </div>
                </div>

                <Sidebar />
            </body>
        </html>
    );
}
