export type Lang = "zh" | "en";

const apnicEventUrl =
  "https://academy.apnic.net/en/events?id=a0BOc000003Mh1NMAS";
const twnogEventUrl = "https://2026.twnog.net/";

export const translations = {
  zh: {
    lang: "zh-Hant",
    siteTitle: "APNIC Academy × TWNOG 7 | 2026",
    siteDescription:
      "APNIC Academy 活動與第七屆台灣網路維運論壇 TWNOG 7，2026 年 5 月 15 日於臺北臺大醫院國際會議中心舉辦",

    nav: {
      about: "關於",
      schedule: "資訊",
      speakers: "亮點",
      venue: "場地",
      register: "前往報名",
    },

    hero: {
      badge1: "APNIC Academy",
      badge2: "TWNOG 7",
      title: "TWNOG 7",
      titleAccent: "2026",
      subtitle:
        "與 APNIC Academy 連結的網路維運社群活動——\n聚焦網路工程、營運經驗、互聯交流與技術實務。",
      metaDate: "2026 年 5 月 15 日（週五）09:00–17:30 UTC+8",
      metaVenue: "臺大醫院國際會議中心四樓",
      registerBtn: "前往 APNIC Academy",
      scheduleBtn: "查看活動資訊",
    },

    about: {
      label: "關於活動",
      title: "第七屆台灣網路維運論壇",
      p1: "<strong>TWNOG 7</strong> 是台灣網路維運社群的年度論壇，並與 APNIC Academy 活動頁連結，歡迎網路維運者、工程師、研究人員、學生與相關專業人士參與。",
      p2: "TWNOG 是網路營運商、研究者與相關同好交流網路維運技術的平台，目標是凝聚社群、累積維運能量，並與國際其他 NOG 建立合作關係。",
      p3: "本頁整理 APNIC Academy 指定活動頁、APNIC Fellowship 公開資訊、TWNOG 7 官方站與 KKTIX 活動頁；精確議程、講者與報名狀態請以官方連結公布內容為準。",
      tags: ["Network Operations", "Peering", "BGP", "IPv6", "Security", "Community"],
      stats: {
        values: {
          days: "1",
          participants: "5/15",
          topics: "5",
          labs: "雙語",
        },
        days: "活動日",
        participants: "活動日期",
        topics: "活動亮點",
        labs: "中英文資訊",
      },
    },

    schedule: {
      label: "活動資訊",
      title: "日期、報名與重點",
      days: [
        {
          badge: "時間",
          heading: "2026 年 5 月 15 日（週五）",
          items: [
            {
              time: "09:00 – 17:30",
              title: "TWNOG 7 論壇",
              desc: "活動於臺大醫院國際會議中心四樓舉辦，KKTIX 公開資訊列示時間為 09:00 至 17:30（UTC+8）。",
            },
            {
              time: "全天",
              title: "網路維運技術交流",
              desc: "主題涵蓋網路工程、網路安全、BGP、IPv6、資料中心、雲端網路與 ISP 維運等方向。",
            },
          ],
        },
        {
          badge: "報名",
          heading: "APNIC Academy、Fellowship 與 TWNOG 連結",
          items: [
            {
              time: "APNIC",
              title: "APNIC Academy 活動頁",
              desc: "請透過本頁主要按鈕前往 APNIC Academy 活動頁查看最新報名與活動資訊。",
            },
            {
              time: "Fellowship",
              title: "APNIC Fellowship 申請",
              desc: "APNIC Fellowship 頁面列示 TWNOG 7 申請期間為 2026 年 4 月 1 日 00:00 至 4 月 24 日 23:59（UTC+8）。",
            },
            {
              time: "TWNOG",
              title: "TWNOG 7 官方網站、議程與 KKTIX",
              desc: "官方網站提供活動頁、議程、投稿、交通與贊助資訊；KKTIX 頁面提供票種、報名人數與報名狀態。",
            },
          ],
        },
        {
          badge: "票務",
          heading: "公開票務資訊",
          items: [
            {
              time: "2026/03/17 – 2026/04/01",
              title: "早鳥票",
              desc: "KKTIX 公開資訊列示早鳥票 TWD 100，販售期間為 2026 年 3 月 17 日 00:00 至 4 月 1 日 00:00（UTC+8）。",
            },
            {
              time: "2026/04/01 – 2026/05/14",
              title: "一般票與學生票",
              desc: "KKTIX 公開資訊列示一般票 TWD 300、學生票 TWD 100，販售至 2026 年 5 月 14 日 00:00（UTC+8）。",
            },
            {
              time: "活動當日",
              title: "午餐與現場交流",
              desc: "KKTIX 活動資訊標示本活動將提供午餐，並規劃交流與媒合相關安排。",
            },
          ],
        },
      ],
    },

    speakers: {
      label: "講師與亮點",
      title: "講師資訊與活動特色",
      people: [
        {
          name: "講師與議程",
          role: "Speaker & Agenda Status",
          org: "TWNOG 7",
          avatar: "1",
          details: [
            "TWNOG 7 活動頁表示歷屆 TWNOG 皆邀請講者分享網路相關最新趨勢與技術，本屆也將公布 session 內容。",
            "主題方向包含 BGP、IPv6、網路安全、資料中心、雲端網路與 ISP 相關議題。",
            "目前可讀取的公開頁面尚未列出完整講者姓名與個人簡介；精確議程與講者名單請以 TWNOG 7 session/agenda 頁面與 APNIC Academy 活動頁公布為準。",
          ],
          highlights: [
            { value: "Session", label: "議程頁面" },
            { value: "Tech", label: "技術趨勢" },
            { value: "Ops", label: "維運經驗" },
          ],
          tags: ["BGP", "IPv6", "Security", "Operations"],
        },
        {
          name: "互聯交流",
          role: "Peering & Community",
          org: "TWNOG 7",
          avatar: "2",
          details: [
            "本屆安排與會者介紹自家網路，包含 AS、流量型態與聯絡窗口等資訊，促進彼此認識。",
            "活動也規劃媒合平台與全天候會議室，方便與會者安排面對面交流與合作洽談。",
            "國內外網路服務、設備與解決方案廠商將參與展示，提供更多現場交流機會。",
          ],
          highlights: [
            { value: "AS", label: "網路介紹" },
            { value: "Meet", label: "交流媒合" },
            { value: "Expo", label: "廠商攤位" },
          ],
          tags: ["Peering", "AS", "Community", "Exhibitors"],
        },
      ],
    },

    venue: {
      label: "活動地點",
      title: "場地與交通",
      name: "臺大醫院國際會議中心四樓",
      address: "100 臺北市中正區徐州路 2 號",
      transport1: "地點位於臺北市中正區徐州路，鄰近臺大醫院與善導寺生活圈",
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
      btnAlt: "TWNOG 7 官方網站",
      note: "2026/05/15 · 臺北 · APNIC Fellowship 申請至 2026/04/24 23:59 UTC+8",
      primaryHref: apnicEventUrl,
      secondaryHref: twnogEventUrl,
    },

    footer: {
      copy: "© 2026 TWNOG. 版權所有。",
    },
  },

  en: {
    lang: "en",
    siteTitle: "APNIC Academy × TWNOG 7 | 2026",
    siteDescription:
      "APNIC Academy event information for TWNOG 7, held on 15 May 2026 at NTUH International Convention Center, Taipei",

    nav: {
      about: "About",
      schedule: "Info",
      speakers: "Highlights",
      venue: "Venue",
      register: "Register",
    },

    hero: {
      badge1: "APNIC Academy",
      badge2: "TWNOG 7",
      title: "TWNOG 7",
      titleAccent: "2026",
      subtitle:
        "A network operations community event linked through APNIC Academy —\nfocused on engineering practice, operations experience, peering, and technical exchange.",
      metaDate: "15 May 2026, Friday, 09:00–17:30 UTC+8",
      metaVenue: "NTUH International Convention Center, 4F",
      registerBtn: "Open APNIC Academy",
      scheduleBtn: "View Event Info",
    },

    about: {
      label: "About",
      title: "Taiwan Network Operators' Group 7",
      p1: "<strong>TWNOG 7</strong> is the annual forum of the Taiwan Network Operators' Group and is linked through the APNIC Academy event page. Network operators, engineers, researchers, students, and related professionals are welcome to join.",
      p2: "TWNOG is a platform for network operators, researchers, and related practitioners to exchange Internet operations technologies, build local operational capability, and connect with other NOG communities.",
      p3: "This page summarizes the specified APNIC Academy event link, APNIC Fellowship public information, the TWNOG 7 official site, and the KKTIX event page. Please use the official links for the latest agenda, speakers, registration, and ticket status.",
      tags: ["Network Operations", "Peering", "BGP", "IPv6", "Security", "Community"],
      stats: {
        values: {
          days: "1",
          participants: "May 15",
          topics: "5",
          labs: "EN/ZH",
        },
        days: "Event Day",
        participants: "Event Date",
        topics: "Highlights",
        labs: "Bilingual Info",
      },
    },

    schedule: {
      label: "Event Info",
      title: "Date, Registration, and Key Details",
      days: [
        {
          badge: "Time",
          heading: "Friday, 15 May 2026",
          items: [
            {
              time: "09:00 – 17:30",
              title: "TWNOG 7 Forum",
              desc: "The event is held on the fourth floor of NTUH International Convention Center. Public KKTIX information lists the time as 09:00 to 17:30 UTC+8.",
            },
            {
              time: "All day",
              title: "Network Operations Exchange",
              desc: "Topics include network engineering, security, BGP, IPv6, data centers, cloud networking, and ISP operations.",
            },
          ],
        },
        {
          badge: "Register",
          heading: "APNIC Academy, Fellowship, and TWNOG Links",
          items: [
            {
              time: "APNIC",
              title: "APNIC Academy Event Page",
              desc: "Use the primary button on this page to open the APNIC Academy event page for the latest registration and event information.",
            },
            {
              time: "Fellowship",
              title: "APNIC Fellowship Application",
              desc: "The APNIC Fellowship page lists the TWNOG 7 application window as 1 April 2026, 00:00 to 24 April 2026, 23:59 UTC+8.",
            },
            {
              time: "TWNOG",
              title: "TWNOG 7 Website, Agenda, and KKTIX",
              desc: "The official website provides event, agenda, call-for-papers, transport, and sponsorship details; KKTIX provides ticket types, attendee count, and registration status.",
            },
          ],
        },
        {
          badge: "Tickets",
          heading: "Public Ticket Information",
          items: [
            {
              time: "17 Mar – 1 Apr 2026",
              title: "Early Bird Ticket",
              desc: "KKTIX public information lists early bird tickets at TWD 100, available from 17 March 2026, 00:00 to 1 April 2026, 00:00 UTC+8.",
            },
            {
              time: "1 Apr – 14 May 2026",
              title: "General and Student Tickets",
              desc: "KKTIX public information lists general tickets at TWD 300 and student tickets at TWD 100, available until 14 May 2026, 00:00 UTC+8.",
            },
            {
              time: "Event day",
              title: "Lunch and Networking",
              desc: "The KKTIX event page notes that lunch will be provided and describes networking and matchmaking arrangements.",
            },
          ],
        },
      ],
    },

    speakers: {
      label: "Speakers & Highlights",
      title: "Speaker Information and Event Highlights",
      people: [
        {
          name: "Speakers and Agenda",
          role: "Speaker & Agenda Status",
          org: "TWNOG 7",
          avatar: "1",
          details: [
            "The TWNOG 7 event page says the forum will continue inviting speakers to share current trends and technologies in the networking world, with session details to be published on the session page.",
            "Topic areas include BGP, IPv6, network security, data centers, cloud networking, and ISP operations.",
            "The readable public pages do not yet list the full speaker names and biographies. Please refer to the TWNOG 7 session/agenda page and APNIC Academy event page for the final agenda and speaker list.",
          ],
          highlights: [
            { value: "Session", label: "Agenda Page" },
            { value: "Tech", label: "Trends" },
            { value: "Ops", label: "Experience" },
          ],
          tags: ["BGP", "IPv6", "Security", "Operations"],
        },
        {
          name: "Peering Exchange",
          role: "Peering & Community",
          org: "TWNOG 7",
          avatar: "2",
          details: [
            "This edition includes time for attendees to introduce their networks, including AS information, traffic patterns, and contact points.",
            "The event also plans a matchmaking platform and an all-day meeting room for face-to-face exchange and business discussions.",
            "A record number of local and international exhibitors are expected to join, creating more opportunities to meet networking service, equipment, and solution providers.",
          ],
          highlights: [
            { value: "AS", label: "Network Intros" },
            { value: "Meet", label: "Matchmaking" },
            { value: "Expo", label: "Exhibitors" },
          ],
          tags: ["Peering", "AS", "Community", "Exhibitors"],
        },
      ],
    },

    venue: {
      label: "Location",
      title: "Venue & Transport",
      name: "NTUH International Convention Center, 4F",
      address: "No. 2, Xuzhou Road, Zhongzheng District, Taipei City 100, Taiwan",
      transport1: "Located on Xuzhou Road in Zhongzheng District, Taipei, near the NTU Hospital and Shandao Temple area",
      transport2: "Please refer to the TWNOG 7 official transport page and on-site notices for detailed directions",
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
      btnAlt: "TWNOG 7 Website",
      note: "15 May 2026 · Taipei · APNIC Fellowship applications close 24 April 2026, 23:59 UTC+8",
      primaryHref: apnicEventUrl,
      secondaryHref: twnogEventUrl,
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
