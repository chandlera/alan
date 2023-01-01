/** @jsx h */
import { h } from "../../deps.ts";

export default function Navigation(props: { currentPath: any; }) {
    const {
        currentPath
    } = props;

    return (
        <header>
            <nav class="nav-menu">
                <ul>
                    <li class="nav__item upper light--font">
                        <a className={currentPath === '/' ? 'active' : ''} href="/">Home</a>
                    </li>
                    <li class="nav__item upper light--font">
                        <a className={currentPath === '/projects' ? 'active' : ''} href="/projects">Projects</a>
                    </li>
                    <li class="nav__item upper light--font">
                        <a className={currentPath === '/contact' ? 'active' : ''} href="/contact">Contact</a>
                    </li>
                    {/* <li class="nav__item upper light--font">
                        <a data-show="cube" href="cube">Cube</a>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
  }