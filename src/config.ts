import type { Config } from "~/types/config";

const config : Config = {
    alerts: {
        hu: [
            {color: "green", message: "Üdvözöljük új weboldalunkon!"}
        ],
    },
    home: {
        btns: {
            card: "credit-card-2-back-fill",
            garden: "tree-fill",
            dog: "gitlab",
            wifi: "wifi",
            parking: "p-circle-fill",
        }
    },
    languages: [
        "hu", 
        "en", 
        //"de",
        //"it",
        //"zh",
    ],
    navigation: {
        home: { link:"/" },
        menu: { link: "/menu/" },
        about: { link: "/about/" },
        group: { link: "/group/" },
        contact: { link: "/contact/" },
    },
    contact: {
        map: {
            link: 'https://g.page/rabraby?gm', 
            icon: 'geo-alt-fill',
            base: true,
            social: true,
            blank: true,
        },
        phone: {
            link: '+36209149737',
            icon: 'telephone-fill',
            base: true,
            href: 'tel'
        },
        email: {
            link: 'info@rabraby.hu',
            icon: 'envelope-fill',
            base: true, 
            href: 'mailto',
            reservation: true
        },
        facebook: {
            link: 'https://www.facebook.com/rabraby.hu', 
            icon: 'facebook',
            social: true,
            reservation: true,
            blank: true,
        },
        card: {
            link: 'https://adanor.eu/c/rabraby',
            icon: 'person-vcard-fill',
            base: true,
            blank: true,
        }
    },
    company: {    
        name: "Rab Ráby Kft.",
        data: {
            vat: '12134469-2-13',
            reg: '13-09-072 136',
            bank: 'K&H Bank',
            bank_acc: '10403112-50526587-67851007',
            IBAN: 'HU85-10403112-50526587-67851007',
            SWIFT: 'OKHBHUHB',
        }
    }
};

export default config;