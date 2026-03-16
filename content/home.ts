export function getHomeContent() {
  return {
    hero: {
      badgeInner: "MailSprout",
      badgeOuter: "Smarter Email Marketing",
      titleBefore: "Grow your business with ",
      titleHighlight: "smarter emails",
      titleAfter: " — effective, effortless, actionable.",
      subtitle:
        "MailSprout helps modern businesses and marketers create, send, and track powerful email campaigns. Easy list management, campaign design, and detailed analytics all in one secure, scalable platform.",
      primaryCta: { label: "Start Sending Emails", href: "/auth#signup" },
      secondaryCta: { label: "Book a Demo", href: "/contact" },
      heroImageLight: "/hero-image-light.jpeg",
      heroImageDark: "/hero-image-dark.jpeg",
      heroImageAlt: "MailSprout dashboard preview — modern, intuitive, and effective",
    },
    sponsors: {
      heading: "Trusted By Growing Businesses",
      items: [
        { icon: "Rocket", name: "Rocketware" },
        { icon: "Sparkle", name: "Sparklytics" },
        { icon: "Wifi", name: "Loom Labs" },
        { icon: "Mail", name: "Inboxly" },
        { icon: "Zap", name: "Zapier" },
        { icon: "Users", name: "SquadStack" },
      ],
    },
    features: {
      eyebrow: "How MailSprout Works",
      heading: "All-in-One Email Campaign Platform",
      subtitle:
        "Manage lists, design templates, schedule campaigns, and measure results — MailSprout gives you everything you need to grow.",
      items: [
        {
          icon: "UserPlus",
          title: "List Management",
          description:
            "Effortlessly build and segment your audience. Import subscribers in seconds and keep your lists clean and engaged.",
        },
        {
          icon: "PenTool",
          title: "Design Templates",
          description:
            "Create stunning emails with our easy editor or choose from proven templates. Preview, duplicate, and edit without friction.",
        },
        {
          icon: "Send",
          title: "Campaign Creation",
          description:
            "Launch one-time or recurring campaigns to target lists. Schedule, send, and manage with a few clicks.",
        },
        {
          icon: "BarChart3",
          title: "Actionable Analytics",
          description:
            "Track deliveries, opens, clicks, bounces, and unsubscribes. Filter, compare, and export your results.",
        },
        {
          icon: "Lock",
          title: "Deliverability & Security",
          description:
            "Industry-best standards, secure data handling, easy unsubscribe, and privacy built-in for every email.",
        },
        {
          icon: "Users",
          title: "Team & Roles",
          description:
            "Invite collaborators, control access, and keep your data tenant-scoped and safe as you scale.",
        },
      ],
    },
    benefits: {
      eyebrow: "Why MailSprout",
      heading: "Growth-Focused. Marketer Approved.",
      description:
        "Whether you’re just starting or scaling fast, MailSprout is built to help you grow. Our platform makes email marketing approachable for small teams and powerful for bigger ones.",
      items: [
        {
          icon: "LayoutGrid",
          title: "Intuitive Dashboard",
          description: "Easy to use, fast to master—no steep learning curve required.",
        },
        {
          icon: "Sparkle",
          title: "Beautiful Campaigns",
          description: "Design emails that stand out, convert, and look great on any device.",
        },
        {
          icon: "WifiOff",
          title: "Unsub/Privacy Tools",
          description: "Respect your subscribers with built-in privacy and compliance controls.",
        },
        {
          icon: "Rocket",
          title: "Always Improving",
          description: "We add features fast—so your marketing stays ahead of the curve.",
        },
      ],
    },
    services: {
      eyebrow: "MailSprout Solutions",
      heading: "Tools Tailored for Results",
      subtitle:
        "Our solutions are built for real business challenges: from lead gen to customer loyalty and sales.",
      items: [
        {
          title: "Audience Segmentation",
          description:
            "Send targeted emails to the right people at the right time. Grow engagement by personalizing your communications.",
          pro: false,
        },
        {
          title: "Automated Scheduling",
          description:
            "Plan and launch campaigns when your audience is ready—even when you’re not at your desk.",
          pro: false,
        },
        {
          title: "Drag-and-Drop Builder",
          description:
            "Assemble beautiful emails with an intuitive visual editor; zero coding required.",
          pro: true,
        },
        {
          title: "Rich Analytics",
          description:
            "Measure every send. Drill down by list, template, or campaign to see exactly what’s working.",
          pro: false,
        },
      ],
    },
    testimonials: {
      eyebrow: "Success Stories",
      heading: "Real Results from Marketers",
      reviews: [
        {
          name: "Samantha V.",
          role: "Growth Marketer",
          image: "/team1.jpg",
          comment:
            "MailSprout made our email campaigns 3x faster to set up, and the analytics helped us boost open rates by 22%.",
        },
        {
          name: "Carlos M.",
          role: "SaaS Founder",
          image: "/team2.jpg",
          comment:
            "The list import and unsubscribe management is fantastic—super simple and GDPR-ready from day one.",
        },
        {
          name: "Emily R.",
          role: "Ecommerce Lead",
          image: "/team3.jpg",
          comment:
            "Templates are gorgeous and easy to edit. I built our first campaign in under 10 minutes and saw immediate results.",
        },
      ],
    },
    pricing: {
      eyebrow: "Simple Pricing",
      heading: "MailSprout Plans",
      subtitle: "Start free, grow as fast as you like. No surprise charges. All tiers support unlimited team members.",
      priceSuffix: "/mo",
      plans: [
        {
          title: "Starter",
          popular: false,
          price: "0",
          description: "Get started with basic campaign features and up to 1,000 subscribers.",
          buttonText: "Start free",
          benefits: [
            "1,000 subscribers",
            "Unlimited lists & templates",
            "Basic analytics",
            "Essential deliverability",
          ],
        },
        {
          title: "Growth",
          popular: true,
          price: "29",
          description: "Advanced segmentation, scheduling, automation, and rich analytics.",
          buttonText: "Upgrade",
          benefits: [
            "Everything in Starter",
            "Up to 10,000 subscribers",
            "Segmentation & automation",
            "Priority support",
            "Advanced analytics",
          ],
        },
        {
          title: "Enterprise",
          popular: false,
          price: "99",
          description: "Custom domains, advanced delivery options, dedicated onboarding.",
          buttonText: "Contact Sales",
          benefits: [
            "Everything in Growth",
            "Custom domain & sender",
            "Dedicated onboarding",
            "Premium deliverability",
            "Personal account manager",
          ],
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      heading: "Answers to Your Email Marketing Questions",
      items: [
        {
          question: "What makes MailSprout different?",
          answer:
            "MailSprout combines ease of use, stunning templates, powerful list management and analytics, and best-practice deliverability in one product—so small teams can get started, and big teams can scale with confidence.",
        },
        {
          question: "Can I import my existing subscribers?",
          answer:
            "Absolutely. Easily import contacts via CSV or add them manually. Duplicate emails are automatically handled to keep your lists clean.",
        },
        {
          question: "How do campaigns and templates work?",
          answer:
            "Create and save templates for reuse. Every campaign can target specific lists with the design and analytics you need. The editor makes customization simple.",
        },
        {
          question: "How does MailSprout handle unsubscribes and compliance?",
          answer:
            "Every email sent by MailSprout includes unsubscribe links and required headers for compliance. Bounced and unsubscribed addresses are automatically excluded from future campaigns.",
        },
        {
          question: "Do I need to know code to use MailSprout?",
          answer:
            "No code required! Our drag-and-drop builder and template editor are designed for everyone—from founders to marketers and beyond.",
        },
        {
          question: "Is MailSprout suitable for teams?",
          answer:
            "Yes! Invite as many team members as you want and control their access levels. Collaboration is built into every MailSprout plan.",
        },
      ],
    },
    footer: {
      brandName: "MailSprout",
      columns: [
        {
          heading: "Product",
          links: [
            { label: "Features", href: "#features" },
            { label: "How it Works", href: "#benefits" },
            { label: "Pricing", href: "#pricing" },
            { label: "Sign Up", href: "/auth#signup" },
          ],
        },
        {
          heading: "Company",
          links: [
            { label: "About", href: "#" },
            { label: "Contact", href: "/contact" },
            { label: "Status", href: "#" },
          ],
        },
        {
          heading: "Resources",
          links: [
            { label: "Guides", href: "#" },
            { label: "API Docs", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Help Center", href: "#" },
          ],
        },
        {
          heading: "Legal",
          links: [
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
          ],
        },
      ],
      attribution: {
        label: "Chirag Dodiya",
        href: "mailto:hi@chirag.co",
      },
      copyright: "© " + new Date().getFullYear() + " MailSprout. Made with passion by",
    },
    team: {
      eyebrow: "Meet the Founder",
      heading: "Built & Supported by Experts",
      members: [
        {
          imageUrl: "/team1.jpg",
          firstName: "Chirag",
          lastName: "Dodiya",
          positions: ["Founder", "Product Lead"],
          socialNetworks: [
            { name: "LinkedIn", url: "https://linkedin.com/in/chiragdodiya" },
            { name: "Github", url: "https://github.com/chiragdodiya" },
          ],
        },
      ],
    },
  };
}