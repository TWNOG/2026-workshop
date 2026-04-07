export type Lang = 'zh' | 'en';

export const translations = {
  zh: {
    lang: 'zh-Hant',
    siteTitle: 'APNIC Academy × TWNOG 7 | BGP 工作坊 2026',
    siteDescription: 'APNIC Academy BGP 工作坊，與 TWNOG 7 合作舉辦，地點：臺灣臺北',

    nav: {
      about: '關於',
      schedule: '議程',
      speakers: '講師',
      photos: '照片',
      venue: '場地',
      register: '立即報名',
    },

    hero: {
      badge1: 'APNIC Academy',
      badge2: 'TWNOG 7',
      title: 'BGP 工作坊',
      titleAccent: '2026',
      subtitle: '深入的 BGP 基礎知識、路由政策與網路安全實作培訓——\n由 APNIC 與 TWNOG 共同於臺灣臺北舉辦。',
      metaDate: '2026 年 5 月 · 臺灣臺北',
      metaVenue: '臺大醫院國際會議中心',
      registerBtn: '立即報名',
      scheduleBtn: '查看議程',
    },

    about: {
      label: '關於活動',
      title: '關於本工作坊',
      p1: 'APNIC Academy BGP 工作坊與 <strong>臺灣網路維運社群（TWNOG 7）</strong>合作舉辦，集結全臺網路工程師進行密集的中文實作培訓。',
      p2: '學員將在真實的實驗室環境中獲得配置與排除 BGP 故障的實務經驗，涵蓋從基礎到進階路由政策的各項主題，適用於真實的 ISP 及企業網路場景。',
      p3: '工作坊歡迎具備 Linux、IP 路由與 IPv6 基礎知識的網路工程師、學生及專業人士參加。',
      stats: {
        days: '培訓天數',
        participants: '學員名額',
        topics: '核心主題',
        labs: '實作練習',
      },
    },

    schedule: {
      label: '培訓課程',
      title: '工作坊議程',
      days: [
        {
          badge: '第一天',
          heading: 'BGP 基礎',
          items: [
            {
              time: '09:00 – 09:30',
              title: '歡迎與介紹',
              desc: '工作坊概覽、學員自我介紹及實驗環境設定。',
            },
            {
              time: '09:30 – 12:00',
              title: 'BGP 基礎與路徑選擇',
              desc: 'BGP 概念、屬性、決策流程及 iBGP vs eBGP。',
            },
            {
              time: '13:00 – 17:00',
              title: '實作：配置 BGP 會話',
              desc: '動手練習：建立 BGP 對等連線、通告路由並驗證連通性。',
            },
          ],
        },
        {
          badge: '第二天',
          heading: '安全與政策',
          items: [
            {
              time: '09:00 – 12:00',
              title: 'BGP 安全：RPKI 與路由過濾',
              desc: '來源驗證、RPKI 部署、前綴過濾及路由洩漏預防。',
            },
            {
              time: '13:00 – 17:00',
              title: '實作：RPKI 與過濾政策',
              desc: '在真實環境中實作 ROA 驗證、IRR 過濾及 AS 路徑過濾。',
            },
          ],
        },
        {
          badge: '第三天',
          heading: '進階主題',
          items: [
            {
              time: '09:00 – 12:00',
              title: '多宿主與流量工程',
              desc: '負載分配、備援鏈路，及使用 BGP Community 控制進出流量。',
            },
            {
              time: '13:00 – 16:00',
              title: 'iBGP 擴展與最佳實踐',
              desc: '路由反射器、聯邦架構及來自實際運維的最佳實踐。',
            },
            {
              time: '16:00 – 17:00',
              title: '結業與頒發證書',
              desc: '問答、回饋討論及學員證書頒發。',
            },
          ],
        },
      ],
    },

    speakers: {
      label: '講師介紹',
      title: '認識講師',
      people: [
        {
          name: 'Makito Lay',
          role: '資深培訓專家 · APNIC',
          bio: '自 2005 年起投身網際網路產業，擁有豐富的 ISP 經驗，負責在亞太地區提供進階技術培訓與技術支援。',
          tags: ['BGP', 'RPKI', 'IPv6'],
        },
        {
          name: 'Seo Boon Ng',
          role: '資深技術主管 · Cisco',
          bio: '超過 20 年的網路自動化與路由設計經驗，橫跨企業及服務提供者環境。',
          tags: ['路由設計', '自動化', '資安'],
        },
      ],
    },

    photos: {
      label: '活動照片',
      title: '活動花絮',
      desc: '工作坊精彩瞬間——學員、實作課程與交流時光。',
      featured: '精選照片',
      group: '大合照',
      note: '活動結束後將陸續更新照片，敬請期待！',
    },

    venue: {
      label: '活動地點',
      title: '場地與交通',
      name: '臺大醫院國際會議中心',
      address: '100 臺灣臺北市中正區徐州路 2 號',
      transport1: '捷運忠孝新生站（1 號出口）步行約 5 分鐘',
      transport2: '會場提供停車場',
      mapLink: '在 Google 地圖開啟 →',
    },

    organizers: {
      label: '合作夥伴',
      title: '主辦與協辦單位',
      orgs: [
        {
          abbr: 'APNIC',
          name: '亞太網路資訊中心',
          desc: '亞太地區的網際網路資源管理機構，致力於在亞太地區推動技術培訓與能力建設。',
          color: 'apnic',
        },
        {
          abbr: 'TWNOG',
          name: '臺灣網路維運社群',
          desc: '非營利社群組織，促進臺灣網路技術與運維知識的交流與分享。',
          color: 'twnog',
        },
        {
          abbr: 'OCF',
          name: '開放文化基金會',
          desc: '致力於推動開放技術與數位權利，支持臺灣開源社群的發展。',
          color: 'ocf',
        },
      ],
    },

    register: {
      title: '準備好了嗎？',
      desc: '名額有限，請盡快透過 KKTIX 完成報名，搶先保留您的參加資格。',
      btn: '前往 KKTIX 報名',
      btnAlt: 'TWNOG 7 官方網站',
      note: '免費參加 · 名額限 30 人 · 以中文授課',
    },

    footer: {
      copy: '© 2026 TWNOG. 版權所有。',
    },
  },

  en: {
    lang: 'en',
    siteTitle: 'APNIC Academy × TWNOG 7 | BGP Workshop 2026',
    siteDescription: 'APNIC Academy BGP Workshop in partnership with TWNOG 7, Taipei, Taiwan',

    nav: {
      about: 'About',
      schedule: 'Schedule',
      speakers: 'Speakers',
      photos: 'Photos',
      venue: 'Venue',
      register: 'Register',
    },

    hero: {
      badge1: 'APNIC Academy',
      badge2: 'TWNOG 7',
      title: 'BGP Workshop',
      titleAccent: '2026',
      subtitle:
        'Hands-on training in BGP fundamentals, routing policy, and network security —\nco-organized by APNIC and TWNOG in Taipei, Taiwan.',
      metaDate: 'May 2026 · Taipei, Taiwan',
      metaVenue: 'NTUH International Convention Center',
      registerBtn: 'Register Now',
      scheduleBtn: 'View Schedule',
    },

    about: {
      label: 'About',
      title: 'About the Workshop',
      p1: 'The APNIC Academy BGP Workshop, held in partnership with the <strong>Taiwan Network Operators\' Group (TWNOG 7)</strong>, brings together network engineers across Taiwan for intensive, hands-on training delivered in Mandarin.',
      p2: 'Participants will gain practical experience configuring and troubleshooting BGP in a live lab environment, covering topics from fundamentals to advanced routing policies used in real-world ISP and enterprise networks.',
      p3: 'The workshop is open to network engineers, students, and professionals with foundational knowledge of Linux, IP routing, and IPv6.',
      stats: {
        days: 'Days of Training',
        participants: 'Participants',
        topics: 'Core Topics',
        labs: 'Hands-on Labs',
      },
    },

    schedule: {
      label: 'Program',
      title: 'Workshop Schedule',
      days: [
        {
          badge: 'Day 1',
          heading: 'BGP Fundamentals',
          items: [
            {
              time: '09:00 – 09:30',
              title: 'Welcome & Introduction',
              desc: 'Overview of the workshop, participants introduction, and lab environment setup.',
            },
            {
              time: '09:30 – 12:00',
              title: 'BGP Basics & Path Selection',
              desc: 'BGP concepts, attributes, decision process, and iBGP vs eBGP.',
            },
            {
              time: '13:00 – 17:00',
              title: 'Lab: Configuring BGP Sessions',
              desc: 'Hands-on practice: establishing BGP peerings, advertising routes, and verifying connectivity.',
            },
          ],
        },
        {
          badge: 'Day 2',
          heading: 'Security & Policies',
          items: [
            {
              time: '09:00 – 12:00',
              title: 'BGP Security: RPKI & Route Filtering',
              desc: 'Origin validation, RPKI deployment, prefix filtering, and route leaks prevention.',
            },
            {
              time: '13:00 – 17:00',
              title: 'Lab: RPKI & Filtering Policies',
              desc: 'Implementing ROA validation, IRR-based filters, and AS-path filtering in a live environment.',
            },
          ],
        },
        {
          badge: 'Day 3',
          heading: 'Advanced Topics',
          items: [
            {
              time: '09:00 – 12:00',
              title: 'Multihoming & Traffic Engineering',
              desc: 'Load sharing, backup links, inbound and outbound traffic control with BGP communities.',
            },
            {
              time: '13:00 – 16:00',
              title: 'iBGP Scaling & Best Practices',
              desc: 'Route reflectors, confederations, and operational best practices from the field.',
            },
            {
              time: '16:00 – 17:00',
              title: 'Wrap-up & Certification',
              desc: 'Q&A, feedback session, and certificate distribution.',
            },
          ],
        },
      ],
    },

    speakers: {
      label: 'Instructors',
      title: 'Meet the Instructors',
      people: [
        {
          name: 'Makito Lay',
          role: 'Senior Training Specialist · APNIC',
          bio: 'Internet industry veteran since 2005 with ISP expertise, delivering advanced technical training across the Asia-Pacific region.',
          tags: ['BGP', 'RPKI', 'IPv6'],
        },
        {
          name: 'Seo Boon Ng',
          role: 'Senior Technical Leader · Cisco',
          bio: '20+ years of experience in network automation and routing design across enterprise and service provider environments.',
          tags: ['Routing', 'Automation', 'Security'],
        },
      ],
    },

    photos: {
      label: 'Gallery',
      title: 'Event Photos',
      desc: 'Moments from the workshop — participants, labs, and networking sessions.',
      featured: 'Featured Photo',
      group: 'Group Photo',
      note: 'Photos will be added after the event. Stay tuned!',
    },

    venue: {
      label: 'Location',
      title: 'Venue & Transport',
      name: 'NTUH International Convention Center',
      address: 'No. 2, Xuzhou Road, Zhongzheng District, Taipei City 100, Taiwan',
      transport1: 'MRT Zhongxiao Xinsheng Station (Exit 1), 5-min walk',
      transport2: 'Parking available at the venue',
      mapLink: 'Open in Google Maps →',
    },

    organizers: {
      label: 'Partners',
      title: 'Organizers & Supporters',
      orgs: [
        {
          abbr: 'APNIC',
          name: 'Asia Pacific Network Information Centre',
          desc: 'Providing training and capacity building across the Asia-Pacific region.',
          color: 'apnic',
        },
        {
          abbr: 'TWNOG',
          name: "Taiwan Network Operators' Group",
          desc: 'A non-profit community promoting exchange of technical and operational knowledge in Taiwan.',
          color: 'twnog',
        },
        {
          abbr: 'OCF',
          name: 'Open Culture Foundation',
          desc: 'Supporting open technology and digital rights in Taiwan.',
          color: 'ocf',
        },
      ],
    },

    register: {
      title: 'Ready to Join?',
      desc: 'Seats are limited. Register now through KKTIX to secure your spot at the APNIC Academy BGP Workshop.',
      btn: 'Register on KKTIX',
      btnAlt: 'TWNOG 7 Main Site',
      note: 'Free of charge · Limited to 30 participants · Delivered in Mandarin',
    },

    footer: {
      copy: '© 2026 TWNOG. All rights reserved.',
    },
  },
} as const;

export type Translations = (typeof translations)['en'];

export function getTranslations(lang: Lang): Translations {
  return translations[lang] as unknown as Translations;
}
