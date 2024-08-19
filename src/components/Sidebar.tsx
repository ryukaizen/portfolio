"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/sidebar.module.css';

const Sidebar = () => {
    const items = [
        { href: "/about", label: "About" },
        { href: "/resume", label: "Resume" },
        { href: "/contact", label: "Contact" },
        { href: "/projects", label: "Projects" }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const radius = 30;
    const totalItems = items.length;

    const handleDialerClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.dialer}>
                {items.map((item, index) => {
                    const angle = (index / totalItems) * 2 * Math.PI;
                    const x = 50 + radius * Math.cos(angle - Math.PI / 2);
                    const y = 50 + radius * Math.sin(angle - Math.PI / 2);

                    const rotation = index === activeIndex ? `rotate(${(index * (360 / totalItems))}deg)` : '';

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${styles.dialerItem} ${index === activeIndex ? styles.active : ''}`}
                            style={{
                                top: `${y}%`,
                                left: `${x}%`,
                                transform: `translate(-50%, -50%) ${rotation}`
                            }}
                            onClick={() => handleDialerClick(index)}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;