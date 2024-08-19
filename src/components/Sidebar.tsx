import Link from 'next/link';
import styles from '../styles/sidebar.module.css';

const Sidebar = () => {
    const items = [
        { href: "/about", label: "About" },
        { href: "/resume", label: "Resume" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" }
    ];

    const radius = 25; 

    return (
        <div className={styles.sidebar}>
            <div className={styles.dialer}>
                {items.map((item, index) => {
                    const angle = (index / items.length) * 2 * Math.PI;
                    const x = 50 + radius * Math.cos(angle - Math.PI / 2);
                    const y = 50 + radius * Math.sin(angle - Math.PI / 2);
                    return (
                        <div
                            key={item.href}
                            className={styles.dialerItem}
                            style={{
                                top: `${y}%`,
                                left: `${x}%`,
                                transform: `translate(-50%, -50%)`
                            }}
                        >
                            <Link href={item.href}>{item.label}</Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
