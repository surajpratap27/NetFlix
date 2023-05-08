import React from 'react'
import styles from '../styles/navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href='/'>
                    <Image src="/logo3.svg" alt="my logo image" width={120} height={130} />
                </Link>
            </div>
            <Nav />
        </header>
    )
}

export default Header