// siteData.js - All Website Content Database

// 1. SERVICE SLUGS
const servicePages = [
    'web-development', 'app-development', 'digital-visiting-card', 
    'professional-email-service', 'chatbot-development', 'e-commerce-store-development',
    'saas-development', 'local-seo', 'website-on-rent', 'website-maintenance',
    'content-creation', 'graphic-design', 'logo-creation', 'web-to-app-development',
    'seo-optimization', 'web-design', 'ui-ux-design'
];

// 2. PROJECT CASE STUDIES (Detailed)
const projects = {
    'corporate-portal': {
        title: 'FinCorp Global Portal',
        category: 'Web Development',
        client: 'FinCorp Ltd.',
        year: '2025',
        img_hero: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920',
        desc: 'A secure, high-traffic corporate banking portal designed to handle millions of transactions with bank-grade encryption.',
        challenge: 'The client was using a legacy system that crashed during peak hours. They needed a system capable of handling 10,000+ concurrent users while maintaining 99.99% uptime.',
        solution: 'We re-engineered their entire architecture using Laravel Enterprise. We implemented a microservices approach to separate user authentication from transaction processing.',
        stack: ['Laravel', 'MySQL', 'Redis', 'AWS Security'],
        gallery: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f']
    },
    'ride-app': {
        title: 'GoRide Taxi App',
        category: 'App Development',
        client: 'GoRide Inc.',
        year: '2024',
        img_hero: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1920',
        desc: 'An Uber-like taxi booking ecosystem featuring real-time driver tracking, wallet payments, and safety SOS integration.',
        challenge: 'Real-time driver tracking latency was the main issue. Drivers locations were updating with a 10-second delay.',
        solution: 'We switched from standard HTTP requests to WebSocket technology, bringing the latency down to 200ms.',
        stack: ['Flutter', 'Firebase', 'Google Maps API', 'Node.js'],
        gallery: ['https://images.unsplash.com/photo-1551650975-87deedd944c3', 'https://images.unsplash.com/photo-1526498460520-4c246339dccb']
    },
    'smart-card': {
        title: 'CEO Smart Profile',
        category: 'Digital Card',
        client: 'Mr. Rajeev Malhotra',
        year: '2025',
        img_hero: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1920',
        desc: 'A premium NFC-enabled metal card that instantly shares a dynamic professional portfolio with a single tap.',
        challenge: 'Sharing portfolio videos and links instantly at networking events was impossible with paper cards.',
        solution: 'We designed a matte-black NFC metal card linked to a PWA. The profile loads instantly without any app installation.',
        stack: ['NFC Tech', 'React PWA', 'Cloud Hosting'],
        gallery: ['https://images.unsplash.com/photo-1589829085413-56de8ae18c73', 'https://images.unsplash.com/photo-1563986768609-322da13575f3']
    },
    'email-setup': {
        title: 'Legal Firm Suite',
        category: 'Professional Email',
        client: 'Verma & Associates',
        year: '2024',
        img_hero: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1920',
        desc: 'A secured G-Suite communication infrastructure for a leading law firm, ensuring 100% data privacy.',
        challenge: 'Important client emails were landing in Spam. The firm was also facing phishing attacks.',
        solution: 'We migrated their 50+ users to Google Workspace (G-Suite) and implemented DMARC/DKIM authentication.',
        stack: ['Google Workspace', 'DNS Security', 'Outlook'],
        gallery: ['https://images.unsplash.com/photo-1557200134-90327ee9fafa', 'https://images.unsplash.com/photo-1618044733300-9472054094ee']
    },
    'ai-support': {
        title: 'SupportBot 2.0',
        category: 'AI Chatbot',
        client: 'ShopEasy',
        year: '2025',
        img_hero: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1920',
        desc: 'An intelligent WhatsApp customer support agent that handles order tracking, returns, and FAQs 24/7.',
        challenge: 'The client was overwhelmed with 500+ daily queries. Hiring manual support staff was becoming too expensive.',
        solution: 'We developed an NLP-based AI bot using Python and Dialogflow that connects to the shipping database.',
        stack: ['Python', 'Dialogflow', 'WhatsApp API'],
        gallery: ['https://images.unsplash.com/photo-1527474305487-b87b222841cc', 'https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a']
    },
    'fashion-store': {
        title: 'Velvet Mode',
        category: 'E-Commerce',
        client: 'Velvet Fashion',
        year: '2024',
        img_hero: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1920',
        desc: 'A luxury fashion e-commerce store featuring a virtual 3D trial room and seamless checkout experience.',
        challenge: 'Customers couldn\'t visualize fit, leading to high return rates.',
        solution: 'Integrated an AR (Augmented Reality) module allowing users to see the dress in 3D.',
        stack: ['Shopify Plus', 'AR.js', 'Stripe'],
        gallery: ['https://images.unsplash.com/photo-1483985988355-763728e1935b', 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d']
    },
    'hrm-system': {
        title: 'StaffMate HR',
        category: 'SaaS Platform',
        client: 'StaffMate Corp',
        year: '2025',
        img_hero: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920',
        desc: 'A cloud-based HR management system for tracking attendance, payroll, and performance for remote teams.',
        challenge: 'Needed a scalable architecture where multiple companies could manage data securely.',
        solution: 'Built a Multi-Tenant SaaS on AWS with automated subscription billing using Stripe.',
        stack: ['AWS', 'Next.js', 'PostgreSQL', 'Stripe'],
        gallery: ['https://images.unsplash.com/photo-1551434678-e076c223a692', 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0']
    },
    'dental-seo': {
        title: 'Smile Dental Clinic',
        category: 'Local SEO',
        client: 'Dr. Ankit Patel',
        year: '2024',
        img_hero: 'https://images.unsplash.com/photo-1588776814546-1b98f095bb76?q=80&w=1920',
        desc: 'A comprehensive Local SEO campaign that ranked the clinic #1 on Google Maps in Mumbai.',
        challenge: 'Despite being a premium clinic, they had zero online visibility on Google Maps.',
        solution: 'Optimized GMB profile, generated local citations, and implemented a review system.',
        stack: ['Google Maps', 'SEO Tools', 'Analytics'],
        gallery: ['https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a', 'https://images.unsplash.com/photo-1572177812156-58036aae439c']
    },
    'startup-launch': {
        title: 'Fresh Foods',
        category: 'Website on Rent',
        client: 'Fresh Foods Startup',
        year: '2025',
        img_hero: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1920',
        desc: 'A premium e-commerce website provided on a monthly subscription model.',
        challenge: 'The startup had a great product but very limited capital for a custom website.',
        solution: 'Deployed a premium WooCommerce template on a monthly subscription. Live in 48 hours.',
        stack: ['WordPress', 'WooCommerce', 'Cloudflare'],
        gallery: ['https://images.unsplash.com/photo-1516321318423-f06f85e504b3', 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d']
    },
    'news-security': {
        title: 'Daily Times Security',
        category: 'Website Maintenance',
        client: 'Daily Times',
        year: '2024',
        img_hero: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1920',
        desc: 'Security hardening and speed optimization for a high-traffic news portal.',
        challenge: 'The site was hacked, redirecting users to spam. It was also loading very slowly (8 seconds).',
        solution: 'Performed malware clean-up, installed WAF, and optimized database. Load time improved to 1.5s.',
        stack: ['Linux Security', 'CDN', 'Malware Removal'],
        gallery: ['https://images.unsplash.com/photo-1563986768427-18b7608d052c', 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b']
    },
    'tech-blog': {
        title: 'TechReview Pro',
        category: 'Content Creation',
        client: 'TechMedia',
        year: '2024',
        img_hero: 'https://images.unsplash.com/photo-1499750310159-529800cf2c5a?q=80&w=1920',
        desc: 'A comprehensive SEO content strategy involving 50+ high-authority blog posts.',
        challenge: 'Great design but zero traffic. Content was not optimized for search engines.',
        solution: 'Conducted keyword research and wrote long-form guides. Organic traffic grew by 600%.',
        stack: ['SEO Writing', 'SurferSEO', 'Keyword Research'],
        gallery: ['https://images.unsplash.com/photo-1455390582262-044cdead277a', 'https://images.unsplash.com/photo-1542435503-956c469947f6']
    },
    'brand-kit': {
        title: 'Neon Energy Drink',
        category: 'Graphic Design',
        client: 'Neon Beverages',
        year: '2025',
        img_hero: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=1920',
        desc: 'A vibrant, high-energy visual identity including logo, packaging, and social media assets.',
        challenge: 'The brand needed to stand out on crowded shelves. Previous design was generic.',
        solution: 'Created a bold "Cyberpunk" aesthetic. Packaging design increased pickup rates by 25%.',
        stack: ['Photoshop', 'Illustrator', 'Social Media'],
        gallery: ['https://images.unsplash.com/photo-1626785774625-ddcddc3445e9', 'https://images.unsplash.com/photo-1558655146-d09347e92766']
    },
    'coffee-logo': {
        title: 'Bean & Brew',
        category: 'Logo Design',
        client: 'Bean & Brew Cafe',
        year: '2024',
        img_hero: 'https://images.unsplash.com/photo-1506316278852-c23f2f53b8ba?q=80&w=1920',
        desc: 'A minimalist vector logo and complete branding kit for a premium coffee chain.',
        challenge: 'Logo needed to work on small cups and large billboards. Had to convey "Organic".',
        solution: 'Designed a scalable vector logo using negative space. Provided complete brand guidelines.',
        stack: ['Illustrator', 'Vector Design', 'Branding'],
        gallery: ['https://images.unsplash.com/photo-1509042239860-f550ce710b93', 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf']
    },
    'news-app': {
        title: 'City News Live',
        category: 'Web to App',
        client: 'City News',
        year: '2025',
        img_hero: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1920',
        desc: 'Converted a WordPress news website into a fully functional Android & iOS app with push notifications.',
        challenge: 'Client wanted an app but had limited budget. Native development was too expensive.',
        solution: 'Used "Web-to-App" technology to wrap their site. Added OneSignal for breaking news alerts.',
        stack: ['WebView', 'Android Studio', 'OneSignal'],
        gallery: ['https://images.unsplash.com/photo-1551650975-87deedd944c3', 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e']
    },
    'ecom-seo': {
        title: 'Urban Decor SEO',
        category: 'SEO Optimization',
        client: 'Urban Decor',
        year: '2024',
        img_hero: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920',
        desc: 'A strategic SEO campaign that recovered a furniture store lost traffic and doubled organic revenue.',
        challenge: 'Site was hit by a Google Update, losing 60% traffic due to toxic backlinks.',
        solution: 'Performed technical audit, disavowed toxic links, and optimized product pages. Traffic recovered.',
        stack: ['Ahrefs', 'Semrush', 'Link Building'],
        gallery: ['https://images.unsplash.com/photo-1571786256017-aee7a0c009b6', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71']
    },
    'fintech-ui': {
        title: 'PayFast Wallet',
        category: 'UI/UX Design',
        client: 'PayFast',
        year: '2025',
        img_hero: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1920',
        desc: 'A dark-mode, futuristic UI/UX design for a fintech mobile wallet, focusing on ease of use.',
        challenge: 'Old app interface was cluttered. Users took too many steps to pay.',
        solution: 'Simplified flow to "One-Tap Payment" with a high-contrast dark theme.',
        stack: ['Figma', 'Prototyping', 'User Research'],
        gallery: ['https://images.unsplash.com/photo-1551650975-87deedd944c3', 'https://images.unsplash.com/photo-1586717791821-3f44a5638d4f']
    },
    '3d-portfolio': {
        title: 'Meta Architect',
        category: '3D Experience',
        client: 'ArchStudio',
        year: '2025',
        img_hero: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920',
        desc: 'An immersive WebGL-based architectural portfolio allowing clients to walk through 3D models.',
        challenge: '2D images failed to convey scale and depth of buildings.',
        solution: 'Used Three.js for interactive 3D models directly in the browser.',
        stack: ['Three.js', 'WebGL', 'Blender'],
        gallery: ['https://images.unsplash.com/photo-1633356122544-f134324a6cee', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe']
    }
};

// 3. SAMPLES GRID (30 Items)
const samplesData = [
    { id: 'gym-web', title: 'Elite Gym & Fitness', type: 'website', cat: 'Web Development', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800', tech: ['React', 'Node.js'] },
    { id: 'pet-shop', title: 'Pet Paradise', type: 'website', cat: 'E-Commerce', img: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=800', tech: ['Shopify', 'Liquid'] },
    { id: 'school-web', title: 'Global Scholars Academy', type: 'website', cat: 'Web Development', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800', tech: ['WordPress', 'PHP'] },
    { id: 'hospital-web', title: 'City Care Hospital', type: 'website', cat: 'Web Development', img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800', tech: ['Next.js', 'Tailwind'] },
    { id: 'real-estate', title: 'Dream Homes Realty', type: 'website', cat: 'Web Development', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800', tech: ['Vue.js', 'Firebase'] },
    { id: 'law-firm', title: 'Justice League Firm', type: 'website', cat: 'Web Development', img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800', tech: ['WordPress', 'Divi'] },
    { id: 'restaurant-web', title: 'Spicy Spoon Bistro', type: 'website', cat: 'Web Development', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800', tech: ['HTML5', 'Bootstrap'] },
    { id: 'portfolio-web', title: 'Creative Artist Portfolio', type: 'website', cat: 'Web Design', img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800', tech: ['React', 'GSAP'] },
    { id: 'ngo-web', title: 'Green Earth NGO', type: 'website', cat: 'Web Development', img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800', tech: ['Joomla', 'CSS3'] },
    { id: 'travel-web', title: 'Wanderlust Travels', type: 'website', cat: 'Web Development', img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800', tech: ['React', 'API'] },
    { id: 'food-app', title: 'Zomato Clone App', type: 'app', cat: 'App Development', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800', tech: ['Flutter', 'Firebase'] },
    { id: 'taxi-app', title: 'City Cab Booking', type: 'app', cat: 'App Development', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800', tech: ['React Native', 'Maps'] },
    { id: 'grocery-app', title: 'Fresh Basket', type: 'app', cat: 'App Development', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800', tech: ['Android', 'Kotlin'] },
    { id: 'dating-app', title: 'Heart Connect', type: 'app', cat: 'App Development', img: 'https://images.unsplash.com/photo-1516575334481-f85287c2c81d?q=80&w=800', tech: ['Flutter', 'Node.js'] },
    { id: 'fitness-app', title: 'FitTrack Pro', type: 'app', cat: 'App Development', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800', tech: ['iOS', 'Swift'] },
    { id: 'music-app', title: 'Vibe Streamer', type: 'app', cat: 'App Development', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800', tech: ['React Native', 'Audio API'] },
    { id: 'news-app', title: 'Global News Daily', type: 'app', cat: 'App Development', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800', tech: ['Flutter', 'API'] },
    { id: 'nfc-pro', title: 'CEO Metal NFC', type: 'card', cat: 'Digital Card', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800', tech: ['NFC', 'PWA'] },
    { id: 'nfc-bamboo', title: 'Eco Bamboo Card', type: 'card', cat: 'Digital Card', img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800', tech: ['NFC', 'Web'] },
    { id: 'crm-dashboard', title: 'SalesForce CRM', type: 'saas', cat: 'SaaS Development', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800', tech: ['React', 'AWS'] },
    { id: 'hr-portal', title: 'StaffHub HRMS', type: 'saas', cat: 'SaaS Development', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800', tech: ['Vue.js', 'Laravel'] },
    { id: 'invoice-tool', title: 'QuickBill SaaS', type: 'saas', cat: 'SaaS Development', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800', tech: ['Next.js', 'Stripe'] },
    { id: 'chat-bot', title: 'AI Support Agent', type: 'bot', cat: 'Chatbot Development', img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800', tech: ['Python', 'NLP'] },
    { id: 'email-suite', title: 'Corporate Mail Setup', type: 'email', cat: 'Email Service', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800', tech: ['G-Suite', 'Outlook'] },
    { id: 'logo-cafe', title: 'Bean Cafe Branding', type: 'graphic', cat: 'Logo Creation', img: 'https://images.unsplash.com/photo-1506316278852-c23f2f53b8ba?q=80&w=800', tech: ['Illustrator'] },
    { id: 'social-kit', title: 'Gym Social Media', type: 'graphic', cat: 'Graphic Design', img: 'https://images.unsplash.com/photo-1534438324096-102085395b53?q=80&w=800', tech: ['Photoshop'] },
    { id: 'seo-clinic', title: 'Dental Local SEO', type: 'seo', cat: 'Local SEO', img: 'https://images.unsplash.com/photo-1588776814546-1b98f095bb76?q=80&w=800', tech: ['GMB', 'Analytics'] },
    { id: 'content-tech', title: 'Tech Blog Strategy', type: 'content', cat: 'Content Creation', img: 'https://images.unsplash.com/photo-1499750310159-529800cf2c5a?q=80&w=800', tech: ['SEO Writing'] },
    { id: 'video-ad', title: 'Product Promo Reel', type: 'graphic', cat: 'Graphic Design', img: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800', tech: ['After Effects'] },
    { id: 'rent-web', title: 'Rental E-Com Site', type: 'website', cat: 'Website on Rent', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800', tech: ['WooCommerce'] }
];

module.exports = { servicePages, projects, samplesData };
