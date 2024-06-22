
import { component$, useStylesScoped$, useSignal, useContext } from '@builder.io/qwik';
import { Link, useLocation } from "@builder.io/qwik-city";
import { CTX_Translate } from '~/root';
import logo from '~/media/assets/logo.svg?raw';

import LangSwitcher from '~/components/langswitcher/langswitcher';
import style from "./header.scss?inline";
import MobileMenu from '../mobilemenu/mobilemenu';
import DarkMode from '~/components/darkmode/darkmode';
import configJson from '~/config/general.json';
import type { Config } from '~/types/general_config';
const config: Config = configJson;
const menuItems = Object.entries(config.navigation);

export default component$(() => {
    useStylesScoped$(style);
    const mobileIsOpen = useSignal(false);
    const translate = useContext(CTX_Translate);
    const location = useLocation();

    return (<>
        <div class="topbar">
            { config.contact.phone.link ?
                <a href={`tel:${config.contact.phone.link}`}>
                    <i class="bi bi-telephone-fill"></i> { config.contact.phone.link }
                </a> : ''
            }
        </div>
        <header>
            <div class="menu">
                <Link href='/' class="logo" style={`fill: var(--text-color)`}>
                    <div dangerouslySetInnerHTML={logo}></div>
                </Link>

                <div class="right">
                    <nav class="desktop-menu">
                        <ul>
                            {
                                menuItems.map(([key, value]) => (
                                    <li key={key}>
                                        <Link 
                                            class={location.url.pathname === value.link ? 'current' : undefined}
                                            href={value.link}
                                        >
                                            {translate.current.navigation[key] ?? key}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <DarkMode />
                    <LangSwitcher />
                    <div class="mobile-toggle" onClick$={() => mobileIsOpen.value = true}>
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </div>
        </header>
        <MobileMenu isOpen={mobileIsOpen} />
    </>)
    });