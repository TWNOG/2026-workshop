export type Lang = "zh" | "en";

const apnicEventUrl =
  "https://academy.apnic.net/en/events?id=a0BOc000003Mh1NMAS";
const twnogEventUrl = "https://2026.twnog.net/";
const kktixUrl = "https://twnog.kktix.cc/events/twnog7-workshop";
const fellowshipUrl = "https://fellowship.twnog.net";

export const translations = {
  zh: {
    lang: "zh-Hant",
    siteTitle: "TWNOG 7 – IPv6 Workshop",
    siteDescription:
      "APNIC Academy 活動與第七屆台灣網路維運論壇 TWNOG 7，2026 年 5 月 15 日於臺北臺大醫院國際會議中心舉辦",

    nav: {
      about: "關於",
      course: "課程",
      schedule: "議程",
      venue: "場地",
      official: "TWNOG 7",
      register: "前往報名",
    },

    hero: {
      badge1: "APNIC Academy",
      badge2: "TWNOG 7",
      title: "IPv6 Workshop",
      titleAccent: "2026",
      subtitle:
        "與 APNIC Academy 連結的網路維運社群活動——\n聚焦網路工程、營運經驗、互聯交流與技術實務。",
      metaDate: "2026 年 5 月 18–20 日 09:00–17:00 UTC+8",
      metaVenue: "財團法人台灣網路資訊中心（TWNIC）",
      registerBtn: "前往 APNIC Academy",
      scheduleBtn: "查看活動議程",
      fellowshipBtn: "TWNOG Fellowship",
    },

    about: {
      label: "關於活動",
      title: "第七屆台灣網路維運論壇",
      p1: "<strong>TWNOG 7</strong> 是台灣網路維運社群的年度論壇，並與 APNIC Academy 活動頁連結，歡迎網路維運者、工程師、研究人員、學生與相關專業人士參與。",
      p2: "TWNOG 是網路營運商、研究者與相關同好交流網路維運技術的平台，目標是凝聚社群、累積維運能量，並與國際其他 NOG 建立合作關係。",
      p3: "本頁整理 APNIC Academy 指定活動頁、TWNOG Fellowship 公開資訊、TWNOG 7 官方站與 KKTIX 活動頁；精確議程、講者與報名狀態請以官方連結公布內容為準。",
      tags: [
        "Network Operations",
        "Peering",
        "BGP",
        "IPv6",
        "Security",
        "Community",
      ],
    },

    course: {
      label: "課程內容",
      title: "IPv6 工作坊課程介紹",
      description:
        "本技術工作坊由 TWNOG 與 APNIC 合作舉辦，旨在為網路工程師與維運人員提供 IPv6 協議實務操作經驗。課程結合理論授課與實體模擬環境的實驗練習，專注於現代服務供應商與企業網路中的 IPv6 配置、規劃、安全與過渡技術。",
      objectives: {
        title: "學習目標",
        items: [
          "IPv6 基礎知識：了解 IPv6 協議、位址表示法與類型。",
          "位址配置：掌握 Static, SLAAC 與 DHCPv6 等位址配置技術。",
          "網路規劃：學習 IPv6 子網切分、匯總與位址規劃策略。",
          "核心協議：深入理解 ICMPv6, NDP 與 PMTUD 運作原理。",
          "安全與過渡：部署 IPv6 安全防護措施並實作 IPv6 過渡技術。",
          "部署實務：進行 IPv6 路由配置與整體部署規劃。",
        ],
      },
      outline: {
        title: "課程大綱",
        items: [
          "IPv6 簡介：協議基礎、位址表示法與位址類型。",
          "IPv6 核心機制：ICMPv6, NDP 與 PMTUD 運作。",
          "位址配置與規劃：SLAAC, DHCPv6 實作與位址規劃。",
          "IPv6 安全與路由：安全威脅防護與 IPv6 路由技術。",
          "過渡與部署：IPv6 過渡技術實務與部署規劃。",
        ],
      },
      audience: {
        title: "目標對象與先修條件",
        items: [
          "目標對象：來自 ISP、IXP 或資料中心的網路工程師、系統管理員及技術人員。",
          "先修條件：紮實的網路基礎與 IPv4 運作知識。",
          "先修條件：熟悉基礎路由概念與網路安全意識。",
          "先修條件：具備路由器命令列介面 (Cisco IOS, Juniper Junos 等) 操作經驗。",
        ],
      },
    },

    schedule: {
      label: "Time Schedule",
      title: "活動議程",
      days: [
        {
          date: "2026/05/18",
          dayName: "Day 1",
          items: [
            {
              time: "09:00 - 10:30",
              title: "IPv6 Protocol ",
              speaker: "Yong-Tin Chen (陳勇廷)",
              speakerTitle: "TWNOG Organizer",
            },
            {
              time: "10:30 - 11:00",
              title: "Break",
              speaker: "",
              speakerTitle: "",
            },
            {
              time: "11:00 - 12:30",
              title: "IPv6 Address Representation and Types",
              speaker: "Yong-Tin Chen (陳勇廷)",
              speakerTitle: "TWNOG Organizer",
            },
            {
              time: "12:30 - 13:30",
              title: "Lunch Break",
              speaker: "",
              speakerTitle: "",
            },
            {
              time: "13:30 - 15:00",
              title: "ICMPv6, NDP, and PMTUD",
              speaker: "Yong-Tin Chen (陳勇廷)",
              speakerTitle: "TWNOG Organizer",
            },
            {
              time: "15:00 - 15:30",
              title: "Break",
              speaker: "",
              speakerTitle: "",
            },
            {
              time: "15:30 - 17:00",
              title: "IPv6 Address Configuration with Static and SLAAC",
              speaker: "Yong-Tin Chen (陳勇廷)",
              speakerTitle: "TWNOG Organizer",
            },
          ],
        },
        {
          date: "2026/05/19",
          dayName: "Day 2",
          items: [
            {
              time: "09:00 - 10:30",
              title: "IPv6 Address Configuration with DHCPv6 ",
              speaker: "Makito Lay (趙明輝)",
              speakerTitle: "APNIC Network Analyst / Technical Trainer",
            },
            {
              time: "10:30 - 11:00",
              title: "Break",
              speaker: "",
              speakerTitle: "",
            },
            {
              time: "11:00 - 12:30",
              title: "IPv6 Subnetting and Summarization",
              speaker: "Makito Lay (趙明輝)",
              speakerTitle: "APNIC Network Analyst / Technical Trainer",
            },
            {
              time: "12:30 - 13:30",
              title: "Lunch Break",
              speaker: "",
              speakerTitle: "",
            },
            {
              time: "13:30 - 15:00",
              title: "IPv6 Address Planning",
              speaker: "Yong-Tin Chen (陳勇廷)",
              speakerTitle: "TWNOG Organizer",
            },
            {
              time: "15:00 - 15:30",
              title: "Break",
              speaker: "",
              speakerTitle: "",
            },
            {
              time: "15:30 - 17:00",
              title: "IPv6 Routing",
              speaker: "Yong-Tin Chen (陳勇廷)",
              speakerTitle: "TWNOG Organizer",
            },
          ],
        },
        {
          date: "2026/05/20",
          dayName: "Day 3",
          items: [
            {
              time: "09:00 - 10:30",
              title: "IPv6 Routing",
              speaker: "Makito Lay (趙明輝)",
              speakerTitle: "APNIC Network Analyst / Technical Trainer",
            },
            {
              time: "10:30 - 11:00",
              title: "Break",
              speaker: "",
              speakerTitle: "",
            },
            {
              time: "11:00 - 12:30",
              title: "IPv6 Security",
              speaker: "Yong-Tin Chen (陳勇廷)",
              speakerTitle: "TWNOG Organizer",
            },
            {
              time: "12:30 - 13:30",
              title: "Lunch Break",
              speaker: "",
              speakerTitle: "",
            },
            {
              time: "13:30 - 15:00",
              title: "IPv6 Transition Techniques",
              speaker: "Yong-Tin Chen (陳勇廷)",
              speakerTitle: "TWNOG Organizer",
            },
            {
              time: "15:00 - 15:30",
              title: "Break",
              speaker: "",
              speakerTitle: "",
            },
            {
              time: "15:30 - 17:00",
              title: "IPv6 Deployment Planning",
              speaker: " Makito Lay (趙明輝)",
              speakerTitle: "APNIC Network Analyst / Technical Trainer",
            },
          ],
        },
      ],
    },

    venue: {
      label: "活動地點",
      title: "場地與交通",
      name: "財團法人台灣網路資訊中心（TWNIC）",
      address: "105034 臺北市松山區八德路四段 123 號三樓",
      transport1:
        "地點位於臺北市松山區八德路四段，鄰近松山機場與南京三民站生活圈",
      transport2: "詳細交通方式請以 TWNOG 7 官方網站交通頁與現場公告為準",
      mapLink: "在 Google 地圖開啟 →",
    },

    organizers: {
      label: "合作夥伴",
      title: "主辦與相關單位",
      orgs: [
        {
          abbr: "APNIC",
          name: "亞太網路資訊中心",
          desc: "APNIC Academy 提供亞太地區網路技術培訓與能力建設資源。",
          color: "apnic",
        },
        {
          abbr: "TWNOG",
          name: "台灣網路維運社群",
          desc: "促進台灣網路工程、網路架構與維運知識交流的非營利社群。",
          color: "twnog",
        },
        {
          abbr: "TWNIC",
          name: "台灣網路資訊中心",
          desc: "推動台灣網際網路資源、技術與社群發展的重要組織。",
          color: "twnic",
        },
        {
          abbr: "OCF",
          name: "開放文化基金會",
          desc: "支持開放科技與數位公民社群發展。",
          color: "ocf",
        },
      ],
    },

    register: {
      title: "查看最新活動資訊",
      desc: "前往 APNIC Academy 指定活動頁確認最新內容；TWNOG 官方網站與 KKTIX 提供論壇、票務與交通資訊。",
      btn: "前往 APNIC Academy",
      btnAlt: "KKTIX 報名頁面",
      officialHref: twnogEventUrl,
      note: "2026/05/18–20 · 臺北 · TWNOG Fellowship 申請至 2026/04/24 23:59 UTC+8",
      primaryHref: apnicEventUrl,
      secondaryHref: kktixUrl,
      kktixHref: kktixUrl,
      fellowshipHref: fellowshipUrl,
    },

    footer: {
      copy: "© 2026 TWNOG. 版權所有。",
    },
  },

  en: {
    lang: "en",
    siteTitle: "TWNOG 7 – IPv6 Workshop",
    siteDescription:
      "APNIC Academy event information for TWNOG 7, held on 18–20 May 2026 at TWNIC, Taipei",

    nav: {
      about: "About",
      course: "Course",
      schedule: "Schedule",
      venue: "Venue",
      official: "TWNOG 7",
      register: "Register",
    },

    hero: {
      badge1: "APNIC Academy",
      badge2: "TWNOG 7",
      title: "IPv6 Workshop",
      titleAccent: "2026",
      subtitle:
        "A network operations community event linked through APNIC Academy —\nfocused on engineering practice, operations experience, peering, and technical exchange.",
      metaDate: "18–20 May 2026, 09:30–17:30 UTC+8",
      metaVenue: "TWNIC, Taipei",
      registerBtn: "Open APNIC Academy",
      scheduleBtn: "View Schedule",
      fellowshipBtn: "TWNOG Fellowship",
    },

    about: {
      label: "About",
      title: "Taiwan Network Operators' Group 7",
      p1: "<strong>TWNOG 7</strong> is the annual forum of the Taiwan Network Operators' Group and is linked through the APNIC Academy event page. Network operators, engineers, researchers, students, and related professionals are welcome to join.",
      p2: "TWNOG is a platform for network operators, researchers, and related practitioners to exchange Internet operations technologies, build local operational capability, and connect with other NOG communities.",
      p3: "This page summarizes the specified APNIC Academy event link, TWNOG Fellowship public information, the TWNOG 7 official site, and the KKTIX event page. Please use the official links for the latest agenda, speakers, registration, and ticket status.",
      tags: [
        "Network Operations",
        "Peering",
        "BGP",
        "IPv6",
        "Security",
        "Community",
      ],
    },

    course: {
      label: "Course Content",
      title: "IPv6 Workshop Course Information",
      description:
        "This technical workshop, delivered in partnership between TWNOG and APNIC, is designed for network engineers and operators to gain hands-on experience with IPv6 protocol. The course combines theoretical lectures with practical lab exercises in simulated environments, focusing on configuration, planning, security, and transition techniques of IPv6 in modern networks.",
      objectives: {
        title: "Learning Objectives",
        items: [
          "IPv6 Fundamentals: Understand IPv6 protocol, address representation, and types.",
          "Address Configuration: Master techniques like Static, SLAAC, and DHCPv6.",
          "Network Planning: Learn IPv6 subnetting, summarization, and address planning strategies.",
          "Core Protocols: Deep dive into ICMPv6, NDP, and PMTUD operations.",
          "Security & Transition: Deploy IPv6 security measures and implement transition techniques.",
          "Deployment Practice: Configure IPv6 routing and overall deployment planning.",
        ],
      },
      outline: {
        title: "Course Outline",
        items: [
          "Introduction to IPv6: Protocol basics, address representation, and types.",
          "IPv6 Core Mechanisms: ICMPv6, NDP, and PMTUD operations.",
          "Address Config & Planning: SLAAC, DHCPv6 implementation, and address planning.",
          "IPv6 Security & Routing: Threat protection and IPv6 routing technologies.",
          "Transition & Deployment: IPv6 transition techniques and deployment planning.",
        ],
      },
      audience: {
        title: "Target Audience & Prerequisites",
        items: [
          "Target Audience: Network engineers, system admins, and technical staff from ISPs, IXPs, and data centers.",
          "Prerequisites: Solid networking fundamentals and IPv4 operation knowledge.",
          "Prerequisites: Familiarity with basic routing concepts and network security awareness.",
          "Prerequisites: Experience with router command-line interfaces (Cisco IOS, Juniper Junos, etc.).",
        ],
      },
    },

    schedule: {
      label: "Time Schedule",
      title: "Event Schedule",
      days: [
        {
          date: "2026/05/18",
          dayName: "Day 1",
          items: [
            {
              time: "09:00 - 10:30",
              title: "IPv6 Protocol ",
              speaker: "Yong-Tin Chen (陳勇廷)",
              speakerTitle: "TWNOG Organizer",
            },
            {
              time: "10:30 - 11:00",
              title: "Break",
              speaker: "",
              speakerTitle: "",
            },
            {
              time: "11:00 - 12:30",
              title: "IPv6 Address Representation and Types",
              speaker: "Yong-Tin Chen (陳勇廷)",
              speakerTitle: "TWNOG Organizer",
            },
            {
              time: "12:30 - 13:30",
              title: "Lunch Break",
              speaker: "",
              speakerTitle: "",
            },
            {
              time: "13:30 - 15:00",
              title: "ICMPv6, NDP, and PMTUD",
              speaker: "Yong-Tin Chen (陳勇廷)",
              speakerTitle: "TWNOG Organizer",
            },
            {
              time: "15:00 - 15:30",
              title: "Break",
              speaker: "",
              speakerTitle: "",
            },
            {
              time: "15:30 - 17:00",
              title: "IPv6 Address Configuration with Static and SLAAC",
              speaker: "Yong-Tin Chen (陳勇廷)",
              speakerTitle: "TWNOG Organizer",
            },
          ],
        },
        {
          date: "2026/05/19",
          dayName: "Day 2",
          items: [
            {
              time: "09:00 - 10:30",
              title: "IPv6 Address Configuration with DHCPv6 ",
              speaker: "Makito Lay (趙明輝)",
              speakerTitle: "APNIC Network Analyst / Technical Trainer",
            },
            {
              time: "10:30 - 11:00",
              title: "Break",
              speaker: "",
              speakerTitle: "",
            },
            {
              time: "11:00 - 12:30",
              title: "IPv6 Subnetting and Summarization",
              speaker: "Makito Lay (趙明輝)",
              speakerTitle: "APNIC Network Analyst / Technical Trainer",
            },
            {
              time: "12:30 - 13:30",
              title: "Lunch Break",
              speaker: "",
              speakerTitle: "",
            },
            {
              time: "13:30 - 15:00",
              title: "IPv6 Address Planning",
              speaker: "Yong-Tin Chen (陳勇廷)",
              speakerTitle: "TWNOG Organizer",
            },
            {
              time: "15:00 - 15:30",
              title: "Break",
              speaker: "",
              speakerTitle: "",
            },
            {
              time: "15:30 - 17:00",
              title: "IPv6 Routing",
              speaker: "Yong-Tin Chen (陳勇廷)",
              speakerTitle: "TWNOG Organizer",
            },
          ],
        },
        {
          date: "2026/05/20",
          dayName: "Day 3",
          items: [
            {
              time: "09:00 - 10:30",
              title: "IPv6 Routing",
              speaker: "Makito Lay (趙明輝)",
              speakerTitle: "APNIC Network Analyst / Technical Trainer",
            },
            {
              time: "10:30 - 11:00",
              title: "Break",
              speaker: "",
              speakerTitle: "",
            },
            {
              time: "11:00 - 12:30",
              title: "IPv6 Security",
              speaker: "Yong-Tin Chen (陳勇廷)",
              speakerTitle: "TWNOG Organizer",
            },
            {
              time: "12:30 - 13:30",
              title: "Lunch Break",
              speaker: "",
              speakerTitle: "",
            },
            {
              time: "13:30 - 15:00",
              title: "IPv6 Transition Techniques",
              speaker: "Yong-Tin Chen (陳勇廷)",
              speakerTitle: "TWNOG Organizer",
            },
            {
              time: "15:00 - 15:30",
              title: "Break",
              speaker: "",
              speakerTitle: "",
            },
            {
              time: "15:30 - 17:00",
              title: "IPv6 Deployment Planning",
              speaker: " Makito Lay (趙明輝)",
              speakerTitle: "APNIC Network Analyst / Technical Trainer",
            },
          ],
        },
      ],
    },

    venue: {
      label: "Location",
      title: "Venue & Transport",
      name: "Taiwan Network Information Center (TWNIC)",
      address:
        "3F, No. 123, Section 4, Bade Road, Songshan District, Taipei City 105034, Taiwan",
      transport1:
        "Located on Section 4 of Bade Road in Songshan District, Taipei, near Songshan Airport and Nanjing Sanmin Station",
      transport2:
        "Please refer to the TWNOG 7 official transport page and on-site notices for detailed directions",
      mapLink: "Open in Google Maps →",
    },

    organizers: {
      label: "Partners",
      title: "Organizers & Related Organizations",
      orgs: [
        {
          abbr: "APNIC",
          name: "Asia Pacific Network Information Centre",
          desc: "APNIC Academy provides network technical training and capacity-building resources across the Asia-Pacific region.",
          color: "apnic",
        },
        {
          abbr: "TWNOG",
          name: "Taiwan Network Operators' Group",
          desc: "A non-profit community for exchanging network engineering, architecture, and operations knowledge in Taiwan.",
          color: "twnog",
        },
        {
          abbr: "TWNIC",
          name: "Taiwan Network Information Center",
          desc: "An important organization supporting Internet resources, technologies, and community development in Taiwan.",
          color: "twnic",
        },
        {
          abbr: "OCF",
          name: "Open Culture Foundation",
          desc: "Supporting open technology and digital civil society communities.",
          color: "ocf",
        },
      ],
    },

    register: {
      title: "Check the Latest Event Information",
      desc: "Open the specified APNIC Academy event page for the latest details. The TWNOG website and KKTIX page provide forum, ticketing, and transport information.",
      btn: "Open APNIC Academy",
      btnAlt: "KKTIX Registration",
      officialHref: twnogEventUrl,
      note: "18–20 May 2026 · Taipei · TWNOG Fellowship applications close 24 April 2026, 23:59 UTC+8",
      primaryHref: apnicEventUrl,
      secondaryHref: kktixUrl,
      kktixHref: kktixUrl,
      fellowshipHref: fellowshipUrl,
    },

    footer: {
      copy: "© 2026 TWNOG. All rights reserved.",
    },
  },
} as const;

export type Translations = (typeof translations)["en"];

export function getTranslations(lang: Lang): Translations {
  return translations[lang] as unknown as Translations;
}
