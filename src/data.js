// All portfolio content lives here so it's easy to edit without touching layout.

export const profile = {
  name: 'Zeynep Maide Demir',
  role: 'Game Developer · Mobile App Developer · Computer Engineer',
  tagline:
    'Computer Engineering student building polished, published mobile games and apps with Flutter, Unity and full-stack tooling — backed by international Erasmus experience in Poland.',
  location: 'Türkiye · Erasmus experience across Europe',
  email: 'zeynepmaidedemir@gmail.com',
  github: 'https://github.com/zeynepmaidedemir',
  linkedin: 'https://www.linkedin.com/in/zeynep-maide-demir/',
  appleDeveloper:
    'https://apps.apple.com/gb/developer/zeynep-maide-demir/id6773436207',
  cv: './Zeynep_Maide_Demir_CV.pdf',
}

export const stats = [
  { value: '4', label: 'Apps & games published on the App Store' },
  { value: '7+', label: 'Shipped products — mobile, games & web' },
  { value: '2', label: 'Game-dev internships in Poland' },
  { value: '3', label: 'Languages (TR · EN · learning more)' },
]

export const projects = [
  {
    name: 'MeetEra — Erasmus Buddy',
    tag: 'iOS · Android · Published',
    description:
      'A community app for Erasmus & international students: buddy matching, city-based event discovery and a second-hand marketplace, with real-time chat and full push + in-app notifications. My graduation project. "Your world. Your era."',
    tech: ['Flutter', 'Dart', 'Firebase', 'Cloud Functions', 'FCM', 'UI/UX'],
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/gb/app/meetera-erasmus-buddy/id6773436205',
      },
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.meetera.app',
      },
      { label: 'Website', url: 'https://meetera-88814.web.app' },
    ],
    accent: '#a855f7',
  },
  {
    name: 'HabQuest',
    tag: 'iOS · Published',
    description:
      'A gamified habit-tracking app where building routines feels like an RPG: quests, XP, level-ups, badges, leaderboards, a built-in Pomodoro timer, detailed stats and themes. Shipped end-to-end with a premium tier, AdMob ads and StoreKit in-app purchases.',
    tech: ['Flutter', 'Dart', 'Firebase', 'AdMob', 'StoreKit'],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/gb/app/habquest/id6777351264' },
    ],
    accent: '#6d5efc',
  },
  {
    name: 'Ward 13',
    tag: 'Unity · Internship Project',
    description:
      'A first-person survival-horror game set in an abandoned hospital, built during my internship at WSTI (Katowice). Exploration, inventory, medkit, key-card and keypad puzzles, plus enemy AI with patrol, chase, search and attack logic over Unity navigation.',
    tech: ['Unity', 'C#', 'Enemy AI', 'NavMesh', '3D'],
    links: [
      { label: 'GitHub', url: 'https://github.com/zeynepmaidedemir/ward-13' },
    ],
    accent: '#ef4444',
  },
  {
    name: 'Gümrük Muhafaza',
    tag: 'iOS · Published',
    description:
      'A "Papers, Please"-style customs-inspection simulation: inspect luggage, question passengers and decide who passes. Features a transparent rule engine, a 7-day story campaign with four endings, a reputation economy and fully procedural pixel-art generated from code.',
    tech: ['Flutter', 'Flame', 'AdMob', 'Procedural Art'],
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/gb/app/g%C3%BCmr%C3%BCk-muhafaza/id6781061063',
      },
      { label: 'Website', url: 'https://gumruk-muhafaza.web.app' },
    ],
    accent: '#f59e0b',
  },
  {
    name: 'Swords of Vengeance',
    tag: 'Unity · Open Source',
    description:
      'A third-person action-RPG prototype with melee and ranged combat, enemy AI (patrol/chase) over NavMesh, scene portals with fades, cinematic triggers and a custom grid-based fire-propagation system.',
    tech: ['Unity', 'C#', 'OOP', '3D'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/zeynepmaidedemir/Swords-of-Vengeance',
      },
    ],
    accent: '#10b981',
  },
  {
    name: 'Naive Bayes SMS Spam Detection',
    tag: 'Python · Machine Learning',
    description:
      'A text-classification project using Multinomial Naive Bayes to flag SMS messages as spam or non-spam — covering preprocessing, model training, evaluation and presentation of data-mining results.',
    tech: ['Python', 'ML', 'Data Mining', 'NLP'],
    links: [],
    accent: '#0ea5e9',
  },
]

export const skills = [
  {
    group: 'Game Development',
    items: ['Unity', 'C#', '2D / 3D Design', 'FPS Mechanics', 'Enemy AI', 'NavMesh', 'Level Design'],
  },
  {
    group: 'Mobile Development',
    items: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'In-App Purchase', 'App Store / Play release'],
  },
  {
    group: 'Programming & Data',
    items: ['C#', 'Dart', 'Python', 'C / C++', 'SQL', 'JavaScript', 'HTML / CSS', 'ML basics'],
  },
  {
    group: 'Tools',
    items: ['Git & GitHub', 'Xcode', 'Android Studio', 'VS Code', 'BigQuery', 'Adobe Premiere'],
  },
]

export const experience = [
  {
    when: 'Jul – Sep 2025',
    title: 'Game Development Intern',
    place: 'Katowice Institute of Information Technologies · Poland',
    detail:
      '3D FPS development — level design, AI integration, multiplayer systems and advanced gameplay mechanics in an international team.',
  },
  {
    when: 'Jul – Sep 2024',
    title: 'Game Development Intern',
    place: 'Katowice Institute of Information Technologies · Poland',
    detail:
      'Erasmus internship mobility: Unity programming, 2D/3D graphics, animation, game testing and project management.',
  },
  {
    when: 'Jan 2026 – Present',
    title: 'Instructor / Mentor',
    place: 'Deneyap Türkiye · Erzincan',
    detail:
      'Mentor students in hands-on technology education, building problem-solving, teamwork and project-development skills.',
  },
  {
    when: 'Apr – Jul 2025',
    title: 'Instructor',
    place: 'Deneyap Türkiye · Erzincan',
    detail:
      'Taught middle-school students Electronic Programming and IoT using Deneyap Card, sensors and circuit-based projects.',
  },
]

export const education = [
  {
    when: 'Oct 2022 – Jun 2026',
    title: 'B.Sc. Computer Engineering',
    place: 'Erzincan Binali Yıldırım University · Türkiye',
  },
  {
    when: 'Feb – Jul 2024',
    title: 'Erasmus Exchange — Computer Engineering',
    place: 'Lublin University of Technology (Politechnika Lubelska) · Poland',
  },
]

export const leadership = [
  {
    title: 'President · Erasmus Student Club',
    place: 'Erzincan Binali Yıldırım University · 2026 – Present',
  },
  {
    title: 'Social Media Content Creator · Google Developer Student Clubs (GDSC)',
    place: 'Erzincan Binali Yıldırım University · 2024 – 2025',
  },
]

export const certifications = [
  'White Hat Hacker Training — Siber Vatan Program (KUDAKA), 2026',
  'Google Cloud Data Analyst Boostcamp — Istanbul Data Science Academy & Google Cloud',
  'BÜSİBER Cybersecurity Summer Camp 2023 — Forensics, Web Security, Network Pentesting',
  'Google Developers / Google Cloud training & developer events',
]

export const languages = [
  { name: 'Turkish', level: 'Native' },
  { name: 'English', level: 'Professional (B2)' },
  { name: 'Polish', level: 'Elementary' },
  { name: 'Spanish', level: 'Elementary' },
]
