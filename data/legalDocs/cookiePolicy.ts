import type { LegalBlock, LegalDoc } from '@/lib/types';

// Copy from the Magic Patterns export, verbatim.

const BROWSER_SETTINGS =
  'Most browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience';

const CATEGORIES: LegalBlock[] = [
  { type: 'subheading', text: 'Strictly Necessary Cookies' },
  'These cookies are essential in order to enable you to move around the site and use its features, such as accessing secure areas of the site. Without these cookies, the services you have asked for cannot be provided.',
  {
    type: 'example',
    kind: 'Strictly Necessary',
    name: 'Session management cookie',
    text: 'General purpose platform cookie used to maintain an anonymized user session by the server that expires when you leave the site.',
  },
  { type: 'subheading', text: 'Performance Cookies' },
  "These cookies collect information about how visitors use a site, for instance which pages visitors go to most often, and if they get error messages from web pages. These cookies do not collect information that identifies a visitor. All information these cookies collect is anonymous and used only to improve how the site works. If you do not allow the use of these cookies, Amnet Digital will not be able to monitor and optimize the site's performance.",
  {
    type: 'example',
    kind: 'Performance',
    name: 'Web traffic cookie',
    text: 'Included on each page of our site and used to calculate visitor, session, and campaign data for analytics reports.',
  },
  { type: 'subheading', text: 'Functionality Cookies' },
  'These cookies allow a site to remember choices you make (such as your username, language, or region you are in) and provide more enhanced personal features. For instance, a site may be able to provide you with local information or news by storing in a cookie the region in which you are currently located. These cookies can also be used to remember changes you have made to text size, font, and other customizable parts of web pages. They may also be used to provide services you have asked for such as watching a video or commenting on a blog.',
  'We may use information collected from our cookies to identify user behavior and to serve content and offers based on your profile. In some cases, we pass this information on to others within Amnet Digital for marketing or analysis purposes. In most cases we will not be able to track individuals by name; only if a user is a known visitor will we associate the cookie information with a named individual. If you do not allow the use of these cookies, personalization or customization features driven by your preferences, choices or interests will be impacted.',
  "These cookies cannot track your browsing activity on other websites. They don't gather any information about you that could be used for advertising or remembering where you've been on the internet outside our site.",
  {
    type: 'example',
    kind: 'Functionality',
    name: 'Known Visitor cookie',
    text: 'A unique identifier given to each known user to our site, used to serve them content and offers based on their profiles. Also used for analysis and marketing purposes.',
  },
  { type: 'subheading', text: 'Targeting Cookies' },
  "These cookies are used to (1) deliver advertisements more relevant to you and your interests; (2) limit the number of times you see an advertisement; (3) help measure the effectiveness of the advertising campaign; and (4) understand people's behaviour after they view an advertisement. They are usually placed on behalf of advertising networks with the site operator's permission. They remember that you have visited a site and quite often they will be linked to site functionality provided by the other organization. If you do not permit the use of these cookies, you will experience less targeted advertising from Amnet Digital.",
];

export const COOKIE_POLICY: LegalDoc = {
  slug: 'cookie-policy',
  title: 'Cookie Policy',
  updated: 'Last updated September 2026',
  sections: [
    {
      id: 'what-is-a-cookie',
      navLabel: 'What is a cookie?',
      title: 'What is a cookie?',
      blocks: [
        "A cookie is a small text file that is stored on your computer or another internet-connected device in order to identify your browser, provide analytics, and remember information about you such as your language preference or login information. They're completely safe and can't be used to run programs or deliver viruses to your device.",
        'To find more information, please go to www.allaboutcookies.org if you are located in the United States. If you are located in Europe, please go to www.youronlinechoices.eu.',
      ],
    },
    {
      id: 'types',
      navLabel: 'Cookies Amnet Digital uses',
      title: 'What type of cookies does Amnet Digital use?',
      blocks: [
        "Cookies can either be session cookies or persistent cookies. A session cookie expires automatically when you close your browser. A persistent cookie will remain until it expires, or you delete your cookies. Expiration dates are set in the cookies themselves; some may expire after a few minutes while others may expire after multiple years. Cookies placed by the website you're visiting are called first-party cookies.",
      ],
    },
    {
      id: 'how-we-use',
      navLabel: 'How we use cookies',
      title: 'How do our website and other owned media use cookies?',
      blocks: [
        'We may use information collected from our Cookies to identify user behavior and to serve content and offers based on your profile, and in order to enhance the convenience of the users of our website.',
      ],
    },
    {
      id: 'dont-want',
      navLabel: "What if I don't want cookies?",
      title: "What if I don't want cookies?",
      blocks: [
        'You have the option to control the use of cookies through your browser or through "Cookie Settings" presented as part of the cookie notice or by clicking the "Cookie Settings" button at the bottom of this section. If you want to remove existing cookies from your device you can do this using your browser options. If you want to block future cookies from being placed on your device you can change your browser settings to do this.',
        "For more information on managing cookies, see www.allaboutcookies.org/manage-cookies. 'Do Not Track' initiatives are not recognized by our site.",
        'Please bear in mind that deleting and blocking cookies will have an impact on your user experience as parts of the site may no longer work. Unless you have adjusted your browser settings to block cookies, our system will issue cookies as soon as you visit our site or click on a link in a targeted email that we have sent you, even if you have previously deleted our cookies.',
      ],
    },
    {
      id: 'third-party',
      navLabel: 'Third-party cookies',
      title: 'What is a third-party cookie?',
      blocks: [
        "A third-party cookie is one which is not set by the website that you are visiting (e.g. cookies set by youtube.com on AmnetDigital.com). Some of Amnet Digital's own technologies and applications may be hosted in a domain that is a third party to the domain that you may be visiting. However, Amnet Digital does not allow third-party tracking companies to set cookies or other trackers on our website as part of our commitment to protecting the privacy of our users with the utmost care. When we embed content that is hosted on a third-party's platform on our website, the third party may set cookies on your browser which are usually for the purpose of providing the service as intended (such as for bandwidth management, to store your preference of language, tracking consent and for collecting anonymous statistics such as the number of times a video has been streamed). Wherever possible, we choose the most privacy-friendly options such as Privacy Mode, and Anonymous Statistics Only, to ensure we guarantee you privacy.",
        'However, some of the properties of such embeds may not be fully under our control such as our ability to control cookies that are set by these third parties unilaterally when the webpage embedded with such content loads.',
      ],
    },
    {
      id: 'manage',
      navLabel: 'Managing cookies',
      title: 'How can you manage cookies?',
      blocks: [
        { type: 'subheading', text: 'Cookie preference manager' },
        'You can manage your cookie preference anytime by clicking on Manage Cookie Preference at the top of this page or via the Cookie icon that appears at the left bottom-most corner of the web pages (if you visit from the EU, UK, Brazil, Japan or California regions).',
        { type: 'subheading', text: 'Browser settings' },
        `${BROWSER_SETTINGS} since it will no longer be personalized to you. It may also stop you from saving custom settings like login information.`,
        'Browser manufacturers provide help pages relating to cookie management in their products.',
        {
          type: 'links',
          title: 'Please see the below links for more information:',
          links: [
            { label: 'Google Chrome', href: 'https://support.google.com/chrome/answer/95647' },
            {
              label: 'Internet Explorer',
              href: 'https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d',
            },
            {
              label: 'Mozilla Firefox',
              href: 'https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop',
            },
            { label: 'Safari (Desktop)', href: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
            { label: 'Safari (Mobile)', href: 'https://support.apple.com/en-us/HT201265' },
            {
              label: 'Android Browser',
              href: 'https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DAndroid',
            },
            { label: 'Opera', href: 'https://help.opera.com/en/latest/web-preferences/#cookies' },
            { label: 'Opera Mobile', href: 'https://help.opera.com/en/mobile/android/#privacy' },
          ],
        },
      ],
    },
    {
      id: 'disclaimer',
      navLabel: 'Disclaimer',
      title: 'Disclaimer',
      blocks: [
        'We may update this Cookie Statement from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please, therefore, re-visit this Cookie Statement regularly to stay informed about our use of cookies and related technologies. For more information relating to cookies, you may contact privacy@amnetdigital.com.',
      ],
    },
    {
      id: 'categories',
      navLabel: 'Four categories of cookies',
      title: 'Four categories of cookies used by Amnet Digital',
      blocks: CATEGORIES,
    },
    {
      id: 'cookie-table',
      navLabel: 'Cookies on our website',
      title: 'Sample table explaining the cookies used by Amnet Digital website',
      blocks: [
        {
          type: 'table',
          caption: 'Cookies used by the Amnet Digital website',
          head: ['Cookie Name', 'Purpose', 'Validity'],
          rows: [
            ['has_js', "Check if JavaScript is enabled in the visitor's browser", 'Session'],
            ['cc_consent, cc_show', 'Manage user consent for tracking and cookie banner display settings', '1 year'],
            ['*polls', 'Maintain state and choices made by visitors in the polls conducted', '1 year'],
            ['ZFEdition', 'Maintain choice of edition across the Amnet Digital Finance products suite', '180 days'],
            [
              'ZFUserCountry, ZFUserCountryCode',
              'Store country name & country code to pre-fill in forms within Amnet Digital Finance products suite',
              '180 days',
            ],
            ['zsd*dragpos, zsd*state', 'SalesIQ chat window options (position and state)', '5 minutes'],
            [
              'basemodalstatus',
              'Store user preferences (e.g. cookie banner, timezone, country, IP, locale etc.)',
              '90 days',
            ],
            [
              'pll_language',
              'Polylang uses the cookie pll_language to remember the language selected by the user when he comes back to visit the website again. This cookie is also used to get the language information when not available in another way.',
              '1 year',
            ],
            ['Asd[0-9]+state', 'Used to store the minimization and maximization state of the embed', '5 minutes'],
            [
              'PREF',
              "This cookie stores your preferences and other information, in particular preferred language, how many search results you wish to be shown on your page, and whether or not you wish to have Google's SafeSearch filter turned on.",
              '8 months',
            ],
            [
              'YSC',
              'Registers a unique ID to keep statistics of what videos from YouTube the visitor has seen',
              'Session',
            ],
            [
              'VISITOR_INFO1_LIVE',
              'Measures your bandwidth to determine whether you get the new player interface or the old.',
              '8 months',
            ],
            ['use_hitbox', 'Increments the views counter on the YouTube video', '8 months'],
          ],
        },
      ],
    },
    {
      id: 'withdraw',
      navLabel: 'Refusing or withdrawing consent',
      title: 'How do I refuse or withdraw my consent to the use of cookies?',
      blocks: [
        "If you do not want cookies to be placed on your device, we suggest you set your preferences regarding cookies by clicking 'Cookie Preferences' on the bottom of each webpage; you can select the types of Cookies our site uses. You can change your preferences at any time; you can also withdraw the consent you have previously given to us on our corporate website. If you wish to remove previously stored cookies, you can manually delete the cookies at any time from your computers and phones. However, this will not prevent our website from placing further cookies on your device unless and until you adjust your 'Cookie Preferences' choice as described above.",
        { type: 'subheading', text: 'Browser settings' },
        `${BROWSER_SETTINGS}, since it will no longer be personalized to you. It may also stop you from saving custom settings like login information. Browser manufacturers provide help pages relating to cookie management in their products. Please see the browser links above for more information.`,
      ],
    },
    {
      id: 'privacy',
      navLabel: 'Our privacy commitment',
      title: 'Amnet Digital is fully committed to ensuring the privacy of your personal data.',
      blocks: [
        'You have the right to make a complaint at any time to the competent Supervisory Authority in our jurisdiction. However, we would appreciate the chance to deal with your concerns before you approach the competent Supervisory Authority in our jurisdiction, so please contact us (see the Contact section at the end of the page) in the first instance or drop an email to privacy@amnetdigital.com for a quick resolution.',
      ],
    },
  ],
};
