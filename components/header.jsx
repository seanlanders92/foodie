import Link from "next/link";
import logoImg from '@/assets/logo.png'
import classes from "./header.module.css"
import Image from "next/image";
import HeaderBackground from "./header-background";
import NavLink from "@/components/nav-link";

export default function MainHeader() {
  return (
    <>
      <HeaderBackground/>
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate" priority/>
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}