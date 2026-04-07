export type Lang = "zh" | "en";

export const translations = {
  zh: {
    lang: "zh-Hant",
    siteTitle: "APNIC Academy × TWNOG 7 | BGP 工作坊 2026",
    siteDescription:
      "APNIC Academy BGP 工作坊，與 TWNOG 7 合作舉辦，地點：臺灣臺北",

    nav: {
      about: "關於",
      schedule: "議程",
      speakers: "講師",
      venue: "場地",
      register: "立即報名",
    },

    hero: {
      badge1: "APNIC Academy",
      badge2: "TWNOG 7",
      title: "BGP 工作坊",
      titleAccent: "2026",
      subtitle:
        "深入的 BGP 基礎知識、路由政策與網路安全實作培訓——\n由 APNIC 與 TWNOG 共同於臺灣臺北舉辦。",
      metaDate: "2026 年 5 月 · 臺灣臺北",
      metaVenue: "臺大醫院國際會議中心",
      registerBtn: "立即報名",
      scheduleBtn: "查看議程",
    },

    about: {
      label: "關於活動",
      title: "關於本工作坊",
      p1: "APNIC Academy BGP 工作坊與 <strong>臺灣網路維運社群（TWNOG 7）</strong>合作舉辦，集結全臺網路工程師進行密集的中文實作培訓。",
      p2: "學員將在真實的實驗室環境中獲得配置與排除 BGP 故障的實務經驗，涵蓋從基礎到進階路由政策的各項主題，適用於真實的 ISP 及企業網路場景。",
      p3: "工作坊歡迎具備 Linux、IP 路由與 IPv6 基礎知識的網路工程師、學生及專業人士參加。",
      stats: {
        days: "培訓天數",
        participants: "學員名額",
        topics: "核心主題",
        labs: "實作練習",
      },
    },

    schedule: {
      label: "培訓課程",
      title: "工作坊議程",
      days: [
        {
          badge: "第一天",
          heading: "BGP 基礎",
          items: [
            {
              time: "09:00 – 09:30",
              title: "歡迎與介紹",
              desc: "工作坊概覽、學員自我介紹及實驗環境設定。",
            },
            {
              time: "09:30 – 12:00",
              title: "BGP 基礎與路徑選擇",
              desc: "BGP 概念、屬性、決策流程及 iBGP vs eBGP。",
            },
            {
              time: "13:00 – 17:00",
              title: "實作：配置 BGP 會話",
              desc: "動手練習：建立 BGP 對等連線、通告路由並驗證連通性。",
            },
          ],
        },
        {
          badge: "第二天",
          heading: "安全與政策",
          items: [
            {
              time: "09:00 – 12:00",
              title: "BGP 安全：RPKI 與路由過濾",
              desc: "來源驗證、RPKI 部署、前綴過濾及路由洩漏預防。",
            },
            {
              time: "13:00 – 17:00",
              title: "實作：RPKI 與過濾政策",
              desc: "在真實環境中實作 ROA 驗證、IRR 過濾及 AS 路徑過濾。",
            },
          ],
        },
        {
          badge: "第三天",
          heading: "進階主題",
          items: [
            {
              time: "09:00 – 12:00",
              title: "多宿主與流量工程",
              desc: "負載分配、備援鏈路，及使用 BGP Community 控制進出流量。",
            },
            {
              time: "13:00 – 16:00",
              title: "iBGP 擴展與最佳實踐",
              desc: "路由反射器、聯邦架構及來自實際運維的最佳實踐。",
            },
            {
              time: "16:00 – 17:00",
              title: "結業與頒發證書",
              desc: "問答、回饋討論及學員證書頒發。",
            },
          ],
        },
      ],
    },

    speakers: {
      label: "講師介紹",
      title: "認識講師",
      people: [
        {
          name: "Makito Lay",
          role: "資深培訓專家",
          org: "APNIC",
          avatar: "1",
          details: [
            "自 2005 年起深耕網際網路產業，歷經 ISP 運維一線，擁有豐富的 BGP 實戰與故障排除經驗。",
            "目前任職 APNIC 資深培訓專家，負責設計並推動亞太地區的進階網路技術培訓課程，授課範圍涵蓋東南亞、東北亞等十餘個國家與地區，可以中英文雙語教學。",
            "擅長將複雜的路由原理以深入淺出的方式呈現，讓工程師在實驗室情境中快速掌握可立即應用於生產環境的技能。",
          ],
          highlights: [
            { value: "20+", label: "年業界經驗" },
            { value: "10+", label: "國家授課紀錄" },
            { value: "中英", label: "雙語教學" },
          ],
          tags: ["BGP", "RPKI", "IPv6", "IRR", "路由安全"],
        },
        {
          name: "Seo Boon Ng",
          role: "資深技術主管",
          org: "Cisco",
          avatar: "2",
          details: [
            "現任 Cisco 資深技術主管，擁有超過 20 年橫跨企業與服務提供者網路的深厚資歷，專注於大規模路由架構設計與網路自動化落地。",
            "在 BGP 路由政策設計、iBGP 擴展及多宿主流量工程方面累積了大量實務經驗，曾主導多個跨國電信業者的骨幹網路升級專案。",
            "積極投入開源網路工具社群，致力於推廣 NetDevOps 理念，協助工程師以自動化手段提升運維效率與網路韌性。",
          ],
          highlights: [
            { value: "20+", label: "年業界經驗" },
            { value: "SP/Enterprise", label: "雙領域專家" },
            { value: "NetDevOps", label: "自動化推廣者" },
          ],
          tags: ["路由設計", "iBGP", "自動化", "NetDevOps", "資安"],
        },
      ],
    },

    venue: {
      label: "活動地點",
      title: "場地與交通",
      name: "臺大醫院國際會議中心",
      address: "100 臺灣臺北市中正區徐州路 2 號",
      transport1: "捷運忠孝新生站（1 號出口）步行約 5 分鐘",
      transport2: "會場提供停車場",
      mapLink: "在 Google 地圖開啟 →",
    },

    organizers: {
      label: "合作夥伴",
      title: "主辦與協辦單位",
      orgs: [
        {
          abbr: "APNIC",
          name: "亞太網路資訊中心",
          desc: "亞太地區的網際網路資源管理機構，致力於在亞太地區推動技術培訓與能力建設。",
          color: "apnic",
        },
        {
          abbr: "TWNOG",
          name: "臺灣網路維運社群",
          desc: "非營利社群組織，促進臺灣網路技術與運維知識的交流與分享。",
          color: "twnog",
        },
        {
          abbr: "TWNIC",
          name: "台灣網路資訊中心",
          desc: "負責我國網際網路網域名稱註冊及 IP 位址指配之國家級資源管理機構。",
          color: "twnic",
        },
        {
          abbr: "OCF",
          name: "開放文化基金會",
          desc: "致力於推動開放技術與數位權利，支持臺灣開源社群的發展。",
          color: "ocf",
        },
      ],
    },

    register: {
      title: "準備好了嗎？",
      desc: "名額有限，請盡快透過 KKTIX 完成報名，搶先保留您的參加資格。",
      btn: "前往 KKTIX 報名",
      btnAlt: "TWNOG 7 官方網站",
      note: "免費參加 · 名額限 30 人 · 以中文授課",
    },

    footer: {
      copy: "© 2026 TWNOG. 版權所有。",
    },
  },

  en: {
    lang: "en",
    siteTitle: "APNIC Academy × TWNOG 7 | BGP Workshop 2026",
    siteDescription:
      "APNIC Academy BGP Workshop in partnership with TWNOG 7, Taipei, Taiwan",

    nav: {
      about: "About",
      schedule: "Schedule",
      speakers: "Speakers",
      venue: "Venue",
      register: "Register",
    },

    hero: {
      badge1: "APNIC Academy",
      badge2: "TWNOG 7",
      title: "BGP Workshop",
      titleAccent: "2026",
      subtitle:
        "Hands-on training in BGP fundamentals, routing policy, and network security —\nco-organized by APNIC and TWNOG in Taipei, Taiwan.",
      metaDate: "May 2026 · Taipei, Taiwan",
      metaVenue: "NTUH International Convention Center",
      registerBtn: "Register Now",
      scheduleBtn: "View Schedule",
    },

    about: {
      label: "About",
      title: "About the Workshop",
      p1: "The APNIC Academy BGP Workshop, held in partnership with the <strong>Taiwan Network Operators' Group (TWNOG 7)</strong>, brings together network engineers across Taiwan for intensive, hands-on training delivered in Mandarin.",
      p2: "Participants will gain practical experience configuring and troubleshooting BGP in a live lab environment, covering topics from fundamentals to advanced routing policies used in real-world ISP and enterprise networks.",
      p3: "The workshop is open to network engineers, students, and professionals with foundational knowledge of Linux, IP routing, and IPv6.",
      stats: {
        days: "Days of Training",
        participants: "Participants",
        topics: "Core Topics",
        labs: "Hands-on Labs",
      },
    },

    schedule: {
      label: "Program",
      title: "Workshop Schedule",
      days: [
        {
          badge: "Day 1",
          heading: "BGP Fundamentals",
          items: [
            {
              time: "09:00 – 09:30",
              title: "Welcome & Introduction",
              desc: "Overview of the workshop, participants introduction, and lab environment setup.",
            },
            {
              time: "09:30 – 12:00",
              title: "BGP Basics & Path Selection",
              desc: "BGP concepts, attributes, decision process, and iBGP vs eBGP.",
            },
            {
              time: "13:00 – 17:00",
              title: "Lab: Configuring BGP Sessions",
              desc: "Hands-on practice: establishing BGP peerings, advertising routes, and verifying connectivity.",
            },
          ],
        },
        {
          badge: "Day 2",
          heading: "Security & Policies",
          items: [
            {
              time: "09:00 – 12:00",
              title: "BGP Security: RPKI & Route Filtering",
              desc: "Origin validation, RPKI deployment, prefix filtering, and route leaks prevention.",
            },
            {
              time: "13:00 – 17:00",
              title: "Lab: RPKI & Filtering Policies",
              desc: "Implementing ROA validation, IRR-based filters, and AS-path filtering in a live environment.",
            },
          ],
        },
        {
          badge: "Day 3",
          heading: "Advanced Topics",
          items: [
            {
              time: "09:00 – 12:00",
              title: "Multihoming & Traffic Engineering",
              desc: "Load sharing, backup links, inbound and outbound traffic control with BGP communities.",
            },
            {
              time: "13:00 – 16:00",
              title: "iBGP Scaling & Best Practices",
              desc: "Route reflectors, confederations, and operational best practices from the field.",
            },
            {
              time: "16:00 – 17:00",
              title: "Wrap-up & Certification",
              desc: "Q&A, feedback session, and certificate distribution.",
            },
          ],
        },
      ],
    },

    speakers: {
      label: "Instructors",
      title: "Meet the Instructors",
      people: [
        {
          name: "Makito Lay",
          role: "Senior Training Specialist",
          org: "APNIC",
          avatar: "1",
          details: [
            "An internet industry veteran since 2005, Makito brings hands-on ISP experience in BGP operations and troubleshooting to every training session.",
            "As a Senior Training Specialist at APNIC, he designs and delivers advanced network engineering curricula across Asia-Pacific — spanning over ten countries — in both English and Mandarin.",
            "Known for translating dense routing theory into lab exercises that engineers can apply directly to production environments, his workshops consistently receive top-tier participant feedback.",
          ],
          highlights: [
            { value: "20+", label: "Years of experience" },
            { value: "10+", label: "Countries trained" },
            { value: "EN/ZH", label: "Bilingual delivery" },
          ],
          tags: ["BGP", "RPKI", "IPv6", "IRR", "Routing Security"],
        },
        {
          name: "Seo Boon Ng",
          role: "Senior Technical Leader",
          org: "Cisco",
          avatar: "2",
          details: [
            "A Senior Technical Leader at Cisco with over 20 years of experience across both enterprise and service provider networks, specialising in large-scale routing architecture and network automation.",
            "Seo Boon has led backbone upgrade projects for multinational carriers and brings deep expertise in BGP routing policy design, iBGP scaling strategies, and multi-homed traffic engineering.",
            "A committed advocate of NetDevOps, he actively contributes to open-source network tooling communities and helps engineering teams adopt automation to improve operational efficiency and network resilience.",
          ],
          highlights: [
            { value: "20+", label: "Years of experience" },
            { value: "SP/Enterprise", label: "Dual-domain expert" },
            { value: "NetDevOps", label: "Automation advocate" },
          ],
          tags: [
            "Routing Design",
            "iBGP",
            "Automation",
            "NetDevOps",
            "Security",
          ],
        },
      ],
    },

    venue: {
      label: "Location",
      title: "Venue & Transport",
      name: "NTUH International Convention Center",
      address:
        "No. 2, Xuzhou Road, Zhongzheng District, Taipei City 100, Taiwan",
      transport1: "MRT Zhongxiao Xinsheng Station (Exit 1), 5-min walk",
      transport2: "Parking available at the venue",
      mapLink: "Open in Google Maps →",
    },

    organizers: {
      label: "Partners",
      title: "Organizers & Supporters",
      orgs: [
        {
          abbr: "APNIC",
          name: "Asia Pacific Network Information Centre",
          desc: "Providing training and capacity building across the Asia-Pacific region.",
          color: "apnic",
        },
        {
          abbr: "TWNOG",
          name: "Taiwan Network Operators' Group",
          desc: "A non-profit community promoting exchange of technical and operational knowledge in Taiwan.",
          color: "twnog",
        },
        {
          abbr: "TWNIC",
          name: "Taiwan Network Information Center",
          desc: "The national resource management organization for Internet domain names and IP addresses in Taiwan.",
          color: "twnic",
        },
        {
          abbr: "OCF",
          name: "Open Culture Foundation",
          desc: "Supporting open technology and digital rights in Taiwan.",
          color: "ocf",
        },
      ],
    },

    register: {
      title: "Ready to Join?",
      desc: "Seats are limited. Register now through KKTIX to secure your spot at the APNIC Academy BGP Workshop.",
      btn: "Register on KKTIX",
      btnAlt: "TWNOG 7 Main Site",
      note: "Free of charge · Limited to 30 participants · Delivered in Mandarin",
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
