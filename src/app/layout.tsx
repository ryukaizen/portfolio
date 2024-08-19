import './globals.css';
import Sidebar from '../components/Sidebar';

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
            <body>
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
