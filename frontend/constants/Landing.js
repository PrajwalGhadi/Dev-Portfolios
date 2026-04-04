import { BiCodeCurly } from "react-icons/bi";
import { FaWifi } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";

import { BsKeyFill } from "react-icons/bs";
import { HiMiniPaintBrush } from "react-icons/hi2";
import { IoMdShare } from "react-icons/io";

export const landing = {
  section1: {
    header: "One Link. One Profile. One Dev.",
    title: "Your Entire Developer Identity",
    description:
      "Connect your GitHub, blog, and social profiles in one beautiful developer portfolio designed for high-performance engineers.",
  },

  section2: { 
    header: "Engineered for your workflow.",
    description: 'Automate your portfolio updates so you can focus on building.',
    cards: [
        {
            logo: BiCodeCurly,
            title: "GitHub Integration",
            description: "Showcase your contribution graph, top repositories, and languages automatically synced from GitHub.",
            image: '/chart_Analysis.png'
        },
        {
            logo: FaWifi,
            title: "Connect Your Accounts",
            description: "Import your content from Dev.to, Medium, or Hashnode. Your portfolio stays fresh with every new post.",
            image: 'connect-accounts.png'
        },
        {
            logo: MdOutlineAnalytics,
            title: "Analytics Dashboard",
            description: "Privacy-first stats. See how many recruiters and developers are visiting your profile and clicking your links.",
            image: 'connect-accounts.png'
        }
    ]
  },

  section3: {
    title: 'From Repo to Portfolio in Minutes.',
    description: 'Sign up with GitHub and have your portfolio ready in minutes. No manual updates, just a beautiful showcase of your work.',
    cards: [
        {
            logo: BsKeyFill,
            step: "Step 1",
            title: "Sign Up with GitHub",
            description: "Create your DevLink account in seconds using your GitHub credentials. No extra passwords, just seamless access.",
        },
        {
            logo: HiMiniPaintBrush,
            step: "Step 2",
            title: "Customize Your Profile",
            description: "Choose your theme, add a bio, and select which repositories and blog posts to feature. Your portfolio, your way.",
        },
        {
            logo: IoMdShare,
            step: "Step 3",  
            title: "Share Your DevLink",
            description: "Get a unique DevLink URL to share on your resume, LinkedIn, or Twitter. Your entire developer identity in one link.",
        }
    ]
  }
};

export const navbar = {
  logo: "DevPortfolio",
  links: [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" }
  ]
};

export const footer = {
  text: "© 2025 DevLink. All rights reserved.",
  links: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Contact Us", href: "/contact" }    
  ] 
}