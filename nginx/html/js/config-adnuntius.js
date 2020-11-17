var klaroConfig = {
    version: 2,
    cookieName: 'ub_nebenan',
    elementID: 'cc_nebenan',
    lang: 'de',
    default: false,
    acceptAll: true,
    hideDeclineAll: true,
    translations: {
        de: {
            privacyPolicyUrl: 'https://nebenan.de/privacy',
            privacyPolicy: {
                name: 'Datenschutzerklärung',
                text: 'Um mehr zu erfahren, lies bitte unsere {privacyPolicy}.',
            },
            consentModal: {
                title: 'Cookie-Einstellungen',
                description:
                    'Diese Seite verwendet Cookies. Dazu zählen notwendige Cookies (z.B. für eine sichere Anmeldung) sowie Cookies zur Erhebung statistischer Daten die uns helfen, diese Webseite weiter zu verbessern. Hier kannst Du die einzelnen Services individuell auswählen.',
            },
            consentNotice: {
                changeDescription:
                    'Wir haben unsere Cookies geändert. Bitte erneuere Deine Wahl.',
                description:
                    'Diese Seite verwendet Cookies. Dazu zählen notwendige Cookies (z.B. für eine sichere Anmeldung) sowie Cookies zur Erhebung statistischer Daten die uns helfen, diese Webseite weiter zu verbessern. Klicke auf „Alle auswählen", um allen Cookies zuzustimmen.',
                learnMore:
                    'Cookie-Einstellungen'
            },
            ok: "Los geht's!",
            purposes: {
                necessary: 'Notwendige Cookies',
                analytics: 'Besucher-Statistiken',
                marketing: 'Werbung',
            },
        },
    },
    services: [
        {
            name: 'adnuntius',
            title: 'Adnuntius AdServer',
            default: false,
            purposes: ['marketing'],
            translations: {
                de: {
                    description: 'Hiermit wird Werbung mittels des Adnuntius AdServers aktiviert.'
                },
            },
            cookies: [
                [/^_ad.*$/i, '/', '.nebenan.de'],
                ['_gid', '/', '.nebenan.de'],
            ],
        },
    ],
};
