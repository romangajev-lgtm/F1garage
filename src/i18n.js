export const SUPPORTED_LANGUAGES = ["ka", "en", "ru"];
export const DEFAULT_LANGUAGE = "ru";

const STORAGE_KEY = "garage-f1-language";

export const translations = {
  ru: {
    language: {
      label: "Выбрать язык",
      menuLabel: "Доступные языки",
      changed: "Язык изменён: {language}",
      names: {
        ka: "ქართული",
        en: "English",
        ru: "Русский",
      },
    },
    seo: {
      title: "GARAGE F1 — автосервис в Батуми",
      description: "Ремонт двигателей, ходовой части, АКПП, DSG, автоэлектрика и компьютерная диагностика автомобилей в Батуми. GARAGE F1, Machahela street 12.",
      ogDescription: "Ремонт двигателей, ходовой части, АКПП, DSG, автоэлектрика и диагностика автомобилей в Батуми.",
    },
    nav: {
      home: "Главная",
      services: "Услуги",
      prices: "Цены",
      about: "О сервисе",
      history: "История",
      contacts: "Контакты",
    },
    a11y: {
      skip: "Перейти к содержимому",
      brandHome: "GARAGE F1 — главная",
      brandTop: "GARAGE F1 — наверх",
      logoAlt: "GARAGE F1 Auto Batumi",
      mainNav: "Основная навигация",
      mobileNav: "Мобильная навигация",
      footerNav: "Навигация в подвале",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
      socialNetworks: "Социальные сети",
      quickActions: "Быстрые действия",
    },
    hero: {
      imageAlt: "Механик осматривает автомобиль в современной сервисной зоне",
      eyebrow: "Автосервис в Батуми",
      titleMarkAlt: "F1",
      subtitle: "Профессиональный ремонт и диагностика автомобилей",
      lead: "Ремонт двигателей, ходовой части, механических и автоматических коробок передач, DSG, автоэлектрика и компьютерная диагностика.",
      book: "Записаться на ремонт",
      call: "Позвонить",
      addressLabel: "Адрес сервиса",
    },
    about: {
      index: "01 / О сервисе",
      titleLine1: "Ремонт",
      titleLine2: "Начинается",
      titleLine3: "С диагностики",
      paragraph1: "GARAGE F1 — автосервис в Батуми, специализирующийся на ремонте двигателей, ходовой части, механических и автоматических коробок передач, DSG, автоэлектрике и диагностике автомобилей.",
      paragraph2: "Перед началом ремонта мы проводим диагностику, объясняем причину неисправности и согласовываем стоимость работ.",
    },
    services: {
      index: "02 / Основные направления",
      heading: "Услуги",
      book: "Записаться",
      viewPrices: "Смотреть цены",
      cards: [
        {
          title: "Ремонт двигателей",
          shortTitle: "Двигатели",
          description: "Диагностика и ремонт дизельных и бензиновых двигателей, замена ремней и цепей ГРМ, роликов и помп.",
          alt: "Механик ремонтирует двигатель автомобиля в сервисной зоне",
          items: [
            { name: "Ремонт дизельных и бензиновых двигателей", price: "от 700 ₾" },
            { name: "Замена ремня ГРМ, роликов и помпы", price: "400 ₾" },
            { name: "Замена цепи ГРМ", price: "от 600 ₾" },
          ],
        },
        {
          title: "Ремонт ходовой части",
          shortTitle: "Ходовая часть",
          description: "Диагностика подвески, поиск неисправностей и ремонт элементов ходовой части автомобиля.",
          alt: "Механик ремонтирует переднюю подвеску автомобиля на подъёмнике",
          items: [
            { name: "Ремонт ходовой части", price: "от 60 ₾" },
            { name: "Диагностика ходовой части", price: "30 ₾" },
          ],
        },
        {
          title: "Ремонт АКПП и DSG",
          shortTitle: "Коробки передач",
          description: "Ремонт механических коробок передач, автоматических коробок Renault, Peugeot и Citroën, а также DSG и автоматов автомобилей концерна VAG.",
          alt: "Специалист измеряет детали автоматической коробки передач",
          items: [
            { name: "Ремонт механических коробок передач", price: "от 300 ₾" },
            { name: "Ремонт АКПП Renault, Peugeot и Citroën", price: "от 600 ₾" },
            { name: "Ремонт DSG и АКПП автомобилей VAG", price: "от 600 ₾" },
          ],
        },
        {
          title: "Автоэлектрика",
          shortTitle: "Автоэлектрика",
          description: "Поиск неисправностей электрических систем автомобиля и выполнение необходимых ремонтных работ.",
          alt: "Автоэлектрик проверяет электрическую систему автомобиля мультиметром",
          items: [{ name: "Автоэлектрика", price: "от 100 ₾" }],
        },
        {
          title: "Диагностика",
          shortTitle: "Диагностика",
          description: "Компьютерная диагностика автомобиля и диагностика ходовой части.",
          alt: "Механик выполняет компьютерную диагностику автомобиля",
          items: [{ name: "Компьютерная диагностика", price: "30 ₾" }],
        },
      ],
    },
    prices: {
      index: "03 / Прайс-лист",
      title: "Цены на основные работы",
      note: "Точная стоимость определяется после диагностики автомобиля.",
    },
    history: {
      index: "04 / История владельца",
      titleLine1: "Гоночная",
      titleLine2: "ДНК",
      description: "Автоспорт — часть истории владельца GARAGE F1. В личном архиве сохранились кадры с трасс, команды и наград. Эта гоночная школа стала частью подхода сервиса: внимание к технике, точная диагностика и ответственность за результат.",
      tabsLabel: "Разделы личной истории",
      photoArchive: "Фотоархив",
      whyUs: "Почему мы?",
      pixelCarLabel: "Пиксельная раллийная машина. Нажмите, чтобы она подпрыгнула.",
      pixelCarStaticLabel: "Пиксельная серебристо-оранжевая раллийная машина",
      pixelCarTitle: "Нажмите — машина подпрыгнет",
      carouselRole: "карусель",
      carouselLabel: "Личный автоспортивный архив владельца GARAGE F1",
      personalArchive: "Личный архив",
      previousPhoto: "Предыдущая фотография",
      nextPhoto: "Следующая фотография",
      progress: "Прогресс истории",
      allPhotos: "Все фотографии истории",
      showPhoto: "Показать фото {current}: {title}",
      photoCount: "Фото {current} из {total}",
      announcement: "Фото {current} из {total}. {chapter}. {title}.",
      interviewIndex: "Личный блог / Почему мы?",
      interviewTitle: "История человека за GARAGE F1",
      interviewLead: "Разговор о сервисе, честном ремонте и пути владельца от автоспорта к GARAGE F1.",
      interviewLabel: "Почему выбирают GARAGE F1",
      gallery: [
        {
          chapter: "Трасса",
          title: "На полной скорости",
          caption: "Раллийный автомобиль проходит участок трассы перед зрителями.",
          alt: "Раллийный автомобиль GARAGE F1 в прыжке на лесной трассе",
        },
        {
          chapter: "Трасса",
          title: "Ночной заезд",
          caption: "Автомобиль GARAGE F1 во время заезда на тёмном участке трассы.",
          alt: "Раллийный автомобиль GARAGE F1 с номером 61 во время ночного заезда",
        },
        {
          chapter: "Трасса",
          title: "Борьба за траекторию",
          caption: "Архивный кадр автомобиля на скоростном участке раллийной трассы.",
          alt: "Раллийный автомобиль GARAGE F1 проходит поворот на трассе",
        },
        {
          chapter: "Трасса",
          title: "Зимний этап",
          caption: "Автомобиль на заснеженной трассе — техника работает в сложных условиях.",
          alt: "Раллийный автомобиль GARAGE F1 на зимней трассе",
        },
        {
          chapter: "Трасса",
          title: "Гравий и скорость",
          caption: "Раллийный автомобиль GARAGE F1 на гравийном участке дистанции.",
          alt: "Раллийный автомобиль GARAGE F1 на гравийной трассе",
        },
        {
          chapter: "Экипаж",
          title: "После финиша",
          caption: "Автомобиль и участник команды — один из моментов личного архива владельца.",
          alt: "Участник команды GARAGE F1 рядом с раллийным автомобилем",
        },
        {
          chapter: "Экипаж",
          title: "Перед стартом",
          caption: "Экипаж GARAGE F1 в автомобиле перед выходом на трассу.",
          alt: "Экипаж GARAGE F1 в раллийном автомобиле перед стартом",
        },
        {
          chapter: "Команда",
          title: "Люди автоспорта",
          caption: "Участники команды на совместной фотографии из личного архива.",
          alt: "Участники команды GARAGE F1 на совместной фотографии",
        },
        {
          chapter: "Команда",
          title: "Общее дело",
          caption: "Командный кадр с автомобильного соревнования.",
          alt: "Участники автомобильного соревнования на командной фотографии",
        },
        {
          chapter: "Награды и память",
          title: "Памятный момент",
          caption: "Представители GARAGE F1 с наградами автомобильного соревнования.",
          alt: "Представители GARAGE F1 с автомобильными наградами",
        },
        {
          chapter: "Награды и память",
          title: "История в трофеях",
          caption: "Коллекция наград, сохранённая в личном архиве владельца.",
          alt: "Коллекция кубков и автомобильных наград",
        },
        {
          chapter: "Награды и память",
          title: "Архив достижений",
          caption: "Фотография представителя GARAGE F1 рядом с коллекцией наград.",
          alt: "Представитель GARAGE F1 рядом с коллекцией автомобильных наград",
        },
        {
          chapter: "Награды и память",
          title: "Награда в архиве",
          caption: "Портрет с наградой — часть сохранённой истории автоспорта.",
          alt: "Представитель GARAGE F1 держит автомобильную награду",
        },
        {
          chapter: "Награды и память",
          title: "Портрет участника",
          caption: "Автоспортивный портрет из личного архива владельца GARAGE F1.",
          alt: "Автоспортивный портрет участника GARAGE F1",
        },
        {
          chapter: "Награды и память",
          title: "Гоночная экипировка",
          caption: "Участник GARAGE F1 в экипировке для автомобильных соревнований.",
          alt: "Участник GARAGE F1 в гоночной экипировке",
        },
        {
          chapter: "Награды и память",
          title: "Память о машине",
          caption: "Модель раллийного автомобиля завершает рассказ личного архива.",
          alt: "Модель раллийного автомобиля GARAGE F1",
        },
      ],
      interview: [
        {
          question: "Почему вы решили открыть именно GARAGE F1? Что подтолкнуло к этому решению?",
          answer: "Потому что Formula 1 — это про скорость, а мы стараемся делать ремонт качественно и быстро.",
        },
        {
          question: "Чем GARAGE F1 отличается от других автосервисов в Батуми?",
          answer: "Мы берёмся за сложные ремонты и выполняем их качественно. Большинство клиентов приезжают к нам после других сервисов.",
        },
        {
          question: "Что для вас самое главное в работе с клиентами?",
          answer: "Главное — чтобы клиент уехал довольным и вернулся к нам снова.",
        },
        {
          question: "Какие принципы вы никогда не нарушаете при ремонте автомобиля?",
          answer: "Правда и честность перед клиентом — даже если правда бывает горькой.",
        },
        {
          question: "Что вы хотите, чтобы чувствовал клиент, когда забирает автомобиль после ремонта?",
          answer: "Чтобы он мог ехать далеко, не боясь поломки в дороге.",
        },
        {
          question: "Что для вас означает качественный ремонт?",
          answer: "Когда все детали двигателя или коробки передач собраны по мануалу, а все затяжки проверены трижды.",
        },
        {
          question: "Когда и как начался ваш путь в автоспорте?",
          answer: "Мой путь начался в 1995 году — с ралли-спринтов и компьютерных игр Colin McRae Rally и Richard Burns Rally.",
        },
        {
          question: "Почему выбрали именно классическое ралли?",
          answer: "Классическое ралли интересно тем, что ты борешься с соперниками, не видя их. Только на финише скоростного участка узнаёшь, проехал быстрее или медленнее остальных участников. И мне нравится мчаться по лесной дороге со скоростью 160 км/ч.",
        },
        {
          question: "Какими достижениями в автоспорте вы гордитесь больше всего?",
          answer: "Третье место в своём классе на чемпионате Европы по ралли в Выборге в 2007 году. После этого я получил звание мастера спорта по классическому ралли.",
        },
        {
          question: "Что дал вам автоспорт как человеку и как этот опыт помогает сегодня в работе сервиса?",
          answer: "Автоспорт научил быстро организовывать диагностику и ремонт. В ралли на работу с автомобилем часто есть всего 20–45 минут.",
        },
        {
          question: "Есть ли история, гонка или момент из вашей спортивной карьеры, который вы вспоминаете чаще всего?",
          answer: "Второе место в международном ралли «Карелия» в 2007 году.",
        },
        {
          question: "Если в нескольких предложениях рассказать свою историю — от автогонщика до владельца GARAGE F1, как бы вы это сделали?",
          answer: "Я передаю свой опыт механикам, которые у меня работают, и вместе мы делаем качественный ремонт автомобилей клиентов.",
        },
        {
          question: "Почему, по вашему мнению, клиент должен доверить свой автомобиль именно вам?",
          answer: "Мы очень дорожим своей репутацией, поэтому качество ремонта для нас выше любых быстрых компромиссов.",
        },
        {
          question: "Что бы вы хотели, чтобы люди говорили о GARAGE F1 после посещения вашего сервиса?",
          answer: "«Теперь я ваш клиент навсегда». В основном так и происходит.",
        },
      ],
    },
    contacts: {
      index: "05 / Контакты",
      title: "Свяжитесь",
      titleWith: "с",
      hoursLabel: "Режим работы",
      hours: "Ежедневно с 10:00 до 18:00",
      addressLabel: "Адрес",
      route: "Построить маршрут",
      whatsapp: "Написать в WhatsApp",
      bookingIndex: "Запись на ремонт",
      bookingTitle: "Как записаться",
      bookingLead: "Свяжитесь с GARAGE F1 удобным способом — ответим на вопросы и согласуем время визита.",
      steps: [
        { title: "Свяжитесь с сервисом", text: "Позвоните или напишите нам в WhatsApp." },
        { title: "Опишите автомобиль", text: "Сообщите марку, модель и кратко расскажите о проблеме." },
        { title: "Согласуйте визит", text: "Подберём удобное время для диагностики автомобиля." },
      ],
      call: "Позвонить",
    },
    mobileActions: {
      call: "Позвонить",
      book: "Записаться",
      route: "Маршрут",
    },
  },
  en: {
    language: {
      label: "Choose language",
      menuLabel: "Available languages",
      changed: "Language changed to {language}",
      names: {
        ka: "ქართული",
        en: "English",
        ru: "Русский",
      },
    },
    seo: {
      title: "GARAGE F1 — auto service in Batumi",
      description: "Engine, suspension, automatic transmission, DSG and auto electrical repairs, plus computer diagnostics in Batumi. GARAGE F1, Machahela street 12.",
      ogDescription: "Engine, suspension, automatic transmission, DSG and auto electrical repairs and vehicle diagnostics in Batumi.",
    },
    nav: {
      home: "Home",
      services: "Services",
      prices: "Prices",
      about: "About",
      history: "History",
      contacts: "Contacts",
    },
    a11y: {
      skip: "Skip to content",
      brandHome: "GARAGE F1 — home",
      brandTop: "GARAGE F1 — back to top",
      logoAlt: "GARAGE F1 Auto Batumi",
      mainNav: "Main navigation",
      mobileNav: "Mobile navigation",
      footerNav: "Footer navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      socialNetworks: "Social networks",
      quickActions: "Quick actions",
    },
    hero: {
      imageAlt: "A mechanic inspects a car in a modern service bay",
      eyebrow: "Auto service in Batumi",
      titleMarkAlt: "F1",
      subtitle: "Professional vehicle repair and diagnostics",
      lead: "Engine and suspension repairs, manual and automatic transmissions, DSG, auto electrics and computer diagnostics.",
      book: "Book a repair",
      call: "Call us",
      addressLabel: "Service address",
    },
    about: {
      index: "01 / About the service",
      titleLine1: "Repair",
      titleLine2: "Starts with",
      titleLine3: "Diagnostics",
      paragraph1: "GARAGE F1 is an auto service in Batumi specialising in engines, suspension, manual and automatic transmissions, DSG, auto electrics and vehicle diagnostics.",
      paragraph2: "Before any repair, we diagnose the vehicle, explain the cause of the fault and agree the cost of the work.",
    },
    services: {
      index: "02 / Core services",
      heading: "Services",
      book: "Book now",
      viewPrices: "View prices",
      cards: [
        {
          title: "Engine repair",
          shortTitle: "Engines",
          description: "Diagnostics and repair of diesel and petrol engines, including timing belts, chains, rollers and water pumps.",
          alt: "A mechanic repairs a car engine in the service bay",
          items: [
            { name: "Diesel and petrol engine repair", price: "from 700 ₾" },
            { name: "Timing belt, roller and water pump replacement", price: "400 ₾" },
            { name: "Timing chain replacement", price: "from 600 ₾" },
          ],
        },
        {
          title: "Suspension repair",
          shortTitle: "Suspension",
          description: "Suspension diagnostics, fault finding and repair of chassis and suspension components.",
          alt: "A mechanic repairs a car's front suspension on a lift",
          items: [
            { name: "Suspension repair", price: "from 60 ₾" },
            { name: "Suspension diagnostics", price: "30 ₾" },
          ],
        },
        {
          title: "Automatic & DSG repair",
          shortTitle: "Transmissions",
          description: "Repair of manual gearboxes, Renault, Peugeot and Citroën automatic transmissions, plus DSG and VAG automatic transmissions.",
          alt: "A specialist measures automatic transmission components",
          items: [
            { name: "Manual gearbox repair", price: "from 300 ₾" },
            { name: "Renault, Peugeot and Citroën automatic transmission repair", price: "from 600 ₾" },
            { name: "VAG DSG and automatic transmission repair", price: "from 600 ₾" },
          ],
        },
        {
          title: "Auto electrics",
          shortTitle: "Auto electrics",
          description: "Electrical system fault finding and all necessary vehicle electrical repairs.",
          alt: "An auto electrician checks a vehicle electrical system with a multimeter",
          items: [{ name: "Auto electrical work", price: "from 100 ₾" }],
        },
        {
          title: "Diagnostics",
          shortTitle: "Diagnostics",
          description: "Computer diagnostics and suspension diagnostics for your vehicle.",
          alt: "A mechanic performs computer diagnostics on a car",
          items: [{ name: "Computer diagnostics", price: "30 ₾" }],
        },
      ],
    },
    prices: {
      index: "03 / Price list",
      title: "Prices for core services",
      note: "The exact price is confirmed after the vehicle has been diagnosed.",
    },
    history: {
      index: "04 / Owner's story",
      titleLine1: "Racing",
      titleLine2: "DNA",
      description: "Motorsport is part of the GARAGE F1 owner's story. The personal archive preserves moments from stages, the team and award ceremonies. That racing background shapes our service today: attention to every mechanical detail, precise diagnostics and responsibility for the result.",
      tabsLabel: "Owner story sections",
      photoArchive: "Photo archive",
      whyUs: "Why us?",
      pixelCarLabel: "Pixel rally car. Press to make it jump.",
      pixelCarStaticLabel: "A silver and orange pixel rally car",
      pixelCarTitle: "Press — the car will jump",
      carouselRole: "carousel",
      carouselLabel: "The GARAGE F1 owner's personal motorsport archive",
      personalArchive: "Personal archive",
      previousPhoto: "Previous photo",
      nextPhoto: "Next photo",
      progress: "Story progress",
      allPhotos: "All story photos",
      showPhoto: "Show photo {current}: {title}",
      photoCount: "Photo {current} of {total}",
      announcement: "Photo {current} of {total}. {chapter}. {title}.",
      interviewIndex: "Personal blog / Why us?",
      interviewTitle: "The person behind GARAGE F1",
      interviewLead: "A conversation about service, honest repairs and the owner's path from motorsport to GARAGE F1.",
      interviewLabel: "Why people choose GARAGE F1",
      gallery: [
        {
          chapter: "Stage",
          title: "Flat out",
          caption: "The rally car powers through a stage in front of the spectators.",
          alt: "A GARAGE F1 rally car jumping on a forest stage",
        },
        {
          chapter: "Stage",
          title: "Night run",
          caption: "The GARAGE F1 car races through a dark section of the stage.",
          alt: "GARAGE F1 rally car number 61 during a night run",
        },
        {
          chapter: "Stage",
          title: "Fighting for the line",
          caption: "An archive shot of the car on a high-speed rally section.",
          alt: "A GARAGE F1 rally car taking a corner",
        },
        {
          chapter: "Stage",
          title: "Winter round",
          caption: "The car runs on a snow-covered stage where the machinery faces harsh conditions.",
          alt: "A GARAGE F1 rally car on a winter stage",
        },
        {
          chapter: "Stage",
          title: "Gravel and speed",
          caption: "The GARAGE F1 rally car attacks a gravel section.",
          alt: "A GARAGE F1 rally car on a gravel stage",
        },
        {
          chapter: "Crew",
          title: "After the finish",
          caption: "The car and a team member in a moment from the owner's personal archive.",
          alt: "A GARAGE F1 team member beside a rally car",
        },
        {
          chapter: "Crew",
          title: "Before the start",
          caption: "The GARAGE F1 crew waits in the car before heading onto the stage.",
          alt: "The GARAGE F1 crew in a rally car before the start",
        },
        {
          chapter: "Team",
          title: "People of motorsport",
          caption: "Team members together in a photo from the personal archive.",
          alt: "GARAGE F1 team members in a group photo",
        },
        {
          chapter: "Team",
          title: "One shared goal",
          caption: "A team photograph from a motorsport event.",
          alt: "Motorsport participants in a team photograph",
        },
        {
          chapter: "Awards & memories",
          title: "A memorable moment",
          caption: "GARAGE F1 representatives with awards from a motorsport event.",
          alt: "GARAGE F1 representatives holding motorsport awards",
        },
        {
          chapter: "Awards & memories",
          title: "A story in trophies",
          caption: "The collection of awards preserved in the owner's personal archive.",
          alt: "A collection of trophies and motorsport awards",
        },
        {
          chapter: "Awards & memories",
          title: "Archive of achievements",
          caption: "A GARAGE F1 representative beside the award collection.",
          alt: "A GARAGE F1 representative beside a collection of motorsport awards",
        },
        {
          chapter: "Awards & memories",
          title: "An award in the archive",
          caption: "A portrait with an award, part of the preserved motorsport story.",
          alt: "A GARAGE F1 representative holding a motorsport award",
        },
        {
          chapter: "Awards & memories",
          title: "Competitor portrait",
          caption: "A motorsport portrait from the GARAGE F1 owner's personal archive.",
          alt: "A motorsport portrait of a GARAGE F1 competitor",
        },
        {
          chapter: "Awards & memories",
          title: "Racing gear",
          caption: "A GARAGE F1 competitor in motorsport equipment.",
          alt: "A GARAGE F1 competitor in racing gear",
        },
        {
          chapter: "Awards & memories",
          title: "A memory of the car",
          caption: "A rally car model closes the story of the personal archive.",
          alt: "A model of a GARAGE F1 rally car",
        },
      ],
      interview: [
        {
          question: "Why did you decide to open GARAGE F1? What led you to that decision?",
          answer: "Formula 1 is about speed, and we aim to make every repair both high-quality and fast.",
        },
        {
          question: "What makes GARAGE F1 different from other auto services in Batumi?",
          answer: "We take on difficult repairs and complete them properly. Many clients come to us after trying other workshops.",
        },
        {
          question: "What matters most to you when working with clients?",
          answer: "The main thing is for the client to leave satisfied and come back to us again.",
        },
        {
          question: "Which principles do you never compromise when repairing a car?",
          answer: "Truth and honesty with the client, even when the truth is difficult.",
        },
        {
          question: "How should a client feel when collecting their car after a repair?",
          answer: "They should feel able to travel far without fearing a breakdown on the road.",
        },
        {
          question: "What does a quality repair mean to you?",
          answer: "Every engine or transmission part is assembled to the manual, and every fastening is checked three times.",
        },
        {
          question: "When and how did your journey in motorsport begin?",
          answer: "It began in 1995 with rally sprints and the games Colin McRae Rally and Richard Burns Rally.",
        },
        {
          question: "Why did you choose classic rallying?",
          answer: "In classic rallying you compete with rivals without seeing them. Only at the finish of a special stage do you learn whether you were faster or slower. I also love racing along a forest road at 160 km/h.",
        },
        {
          question: "Which motorsport achievement makes you proudest?",
          answer: "Third place in my class at the 2007 European Rally Championship round in Vyborg. After that I earned the title of Master of Sport in classic rallying.",
        },
        {
          question: "What has motorsport taught you, and how does it help in the workshop today?",
          answer: "Motorsport taught me to organise diagnostics and repairs quickly. In rallying, there are often only 20–45 minutes to work on the car.",
        },
        {
          question: "Which race or moment from your sporting career do you remember most often?",
          answer: "Second place in the international Karelia Rally in 2007.",
        },
        {
          question: "How would you tell your story from racing driver to GARAGE F1 owner in a few sentences?",
          answer: "I pass my experience on to the mechanics who work with me, and together we deliver high-quality repairs for our clients.",
        },
        {
          question: "Why should a client trust you with their car?",
          answer: "We value our reputation deeply, so repair quality always comes before quick compromises.",
        },
        {
          question: "What would you like people to say after visiting GARAGE F1?",
          answer: "“Now I am your client for life.” Most of the time, that is exactly what happens.",
        },
      ],
    },
    contacts: {
      index: "05 / Contacts",
      title: "Get in touch",
      titleWith: "with",
      hoursLabel: "Opening hours",
      hours: "Daily from 10:00 to 18:00",
      addressLabel: "Address",
      route: "Get directions",
      whatsapp: "Message on WhatsApp",
      bookingIndex: "Book a repair",
      bookingTitle: "How to book",
      bookingLead: "Contact GARAGE F1 in the way that suits you — we will answer your questions and agree a convenient time.",
      steps: [
        { title: "Contact the service", text: "Call us or send a message on WhatsApp." },
        { title: "Describe your car", text: "Tell us the make, model and briefly describe the problem." },
        { title: "Agree a visit", text: "We will arrange a convenient time for vehicle diagnostics." },
      ],
      call: "Call us",
    },
    mobileActions: {
      call: "Call",
      book: "Book",
      route: "Directions",
    },
  },
  ka: {
    language: {
      label: "ენის არჩევა",
      menuLabel: "ხელმისაწვდომი ენები",
      changed: "ენა შეიცვალა: {language}",
      names: {
        ka: "ქართული",
        en: "English",
        ru: "Русский",
      },
    },
    seo: {
      title: "GARAGE F1 — ავტოსერვისი ბათუმში",
      description: "ძრავის, სავალი ნაწილის, ავტომატური გადაცემათა კოლოფის, DSG-ისა და ავტოელექტრიკის შეკეთება და კომპიუტერული დიაგნოსტიკა ბათუმში. GARAGE F1, Machahela street 12.",
      ogDescription: "ძრავის, სავალი ნაწილის, ავტომატური გადაცემათა კოლოფის, DSG-ისა და ავტოელექტრიკის შეკეთება და ავტომობილის დიაგნოსტიკა ბათუმში.",
    },
    nav: {
      home: "მთავარი",
      services: "სერვისები",
      prices: "ფასები",
      about: "ჩვენ შესახებ",
      history: "ისტორია",
      contacts: "კონტაქტი",
    },
    a11y: {
      skip: "შინაარსზე გადასვლა",
      brandHome: "GARAGE F1 — მთავარი",
      brandTop: "GARAGE F1 — გვერდის დასაწყისში",
      logoAlt: "GARAGE F1 Auto Batumi",
      mainNav: "მთავარი ნავიგაცია",
      mobileNav: "მობილური ნავიგაცია",
      footerNav: "ქვედა ნავიგაცია",
      openMenu: "მენიუს გახსნა",
      closeMenu: "მენიუს დახურვა",
      socialNetworks: "სოციალური ქსელები",
      quickActions: "სწრაფი მოქმედებები",
    },
    hero: {
      imageAlt: "მექანიკოსი თანამედროვე სერვისის ზონაში ავტომობილს ამოწმებს",
      eyebrow: "ავტოსერვისი ბათუმში",
      titleMarkAlt: "F1",
      subtitle: "ავტომობილების პროფესიონალური შეკეთება და დიაგნოსტიკა",
      lead: "ძრავის, სავალი ნაწილის, მექანიკური და ავტომატური გადაცემათა კოლოფების, DSG-ისა და ავტოელექტრიკის შეკეთება და კომპიუტერული დიაგნოსტიკა.",
      book: "შეკეთებაზე ჩაწერა",
      call: "დარეკვა",
      addressLabel: "სერვისის მისამართი",
    },
    about: {
      index: "01 / სერვისის შესახებ",
      titleLine1: "შეკეთება",
      titleLine2: "იწყება",
      titleLine3: "დიაგნოსტიკით",
      paragraph1: "GARAGE F1 არის ავტოსერვისი ბათუმში, რომელიც სპეციალიზდება ძრავების, სავალი ნაწილის, მექანიკური და ავტომატური გადაცემათა კოლოფების, DSG-ისა და ავტოელექტრიკის შეკეთებასა და ავტომობილების დიაგნოსტიკაში.",
      paragraph2: "შეკეთების დაწყებამდე ვატარებთ დიაგნოსტიკას, განვმარტავთ გაუმართაობის მიზეზს და წინასწარ ვათანხმებთ სამუშაოების ღირებულებას.",
    },
    services: {
      index: "02 / ძირითადი მიმართულებები",
      heading: "სერვისები",
      book: "ჩაწერა",
      viewPrices: "ფასების ნახვა",
      cards: [
        {
          title: "ძრავის შეკეთება",
          shortTitle: "ძრავები",
          description: "დიზელისა და ბენზინის ძრავების დიაგნოსტიკა და შეკეთება, დროის ქამრებისა და ჯაჭვების, როლიკებისა და წყლის ტუმბოების შეცვლა.",
          alt: "მექანიკოსი სერვისის ზონაში ავტომობილის ძრავს არემონტებს",
          items: [
            { name: "დიზელისა და ბენზინის ძრავების შეკეთება", price: "700 ₾-დან" },
            { name: "დროის ქამრის, როლიკებისა და წყლის ტუმბოს შეცვლა", price: "400 ₾" },
            { name: "დროის ჯაჭვის შეცვლა", price: "600 ₾-დან" },
          ],
        },
        {
          title: "სავალი ნაწილის შეკეთება",
          shortTitle: "სავალი ნაწილი",
          description: "საკიდრის დიაგნოსტიკა, გაუმართაობის აღმოჩენა და ავტომობილის სავალი ნაწილის ელემენტების შეკეთება.",
          alt: "მექანიკოსი ამწეზე ავტომობილის წინა საკიდარს არემონტებს",
          items: [
            { name: "სავალი ნაწილის შეკეთება", price: "60 ₾-დან" },
            { name: "სავალი ნაწილის დიაგნოსტიკა", price: "30 ₾" },
          ],
        },
        {
          title: "ავტომატური კოლოფისა და DSG-ის შეკეთება",
          shortTitle: "გადაცემათა კოლოფები",
          description: "მექანიკური კოლოფების, Renault-ის, Peugeot-ისა და Citroën-ის ავტომატური კოლოფების, ასევე DSG-ისა და VAG-ის ავტომატური კოლოფების შეკეთება.",
          alt: "სპეციალისტი ავტომატური გადაცემათა კოლოფის დეტალებს ზომავს",
          items: [
            { name: "მექანიკური გადაცემათა კოლოფის შეკეთება", price: "300 ₾-დან" },
            { name: "Renault-ის, Peugeot-ისა და Citroën-ის ავტომატური კოლოფის შეკეთება", price: "600 ₾-დან" },
            { name: "VAG-ის DSG-ისა და ავტომატური კოლოფის შეკეთება", price: "600 ₾-დან" },
          ],
        },
        {
          title: "ავტოელექტრიკა",
          shortTitle: "ავტოელექტრიკა",
          description: "ავტომობილის ელექტრული სისტემების გაუმართაობის აღმოჩენა და საჭირო სარემონტო სამუშაოების შესრულება.",
          alt: "ავტოელექტრიკოსი მულტიმეტრით ავტომობილის ელექტრულ სისტემას ამოწმებს",
          items: [{ name: "ავტოელექტრიკის სამუშაოები", price: "100 ₾-დან" }],
        },
        {
          title: "დიაგნოსტიკა",
          shortTitle: "დიაგნოსტიკა",
          description: "ავტომობილის კომპიუტერული და სავალი ნაწილის დიაგნოსტიკა.",
          alt: "მექანიკოსი ავტომობილის კომპიუტერულ დიაგნოსტიკას ატარებს",
          items: [{ name: "კომპიუტერული დიაგნოსტიკა", price: "30 ₾" }],
        },
      ],
    },
    prices: {
      index: "03 / ფასების სია",
      title: "ძირითადი სამუშაოების ფასები",
      note: "ზუსტი ღირებულება განისაზღვრება ავტომობილის დიაგნოსტიკის შემდეგ.",
    },
    history: {
      index: "04 / მფლობელის ისტორია",
      titleLine1: "სარბოლო",
      titleLine2: "დნმ",
      description: "ავტოსპორტი GARAGE F1-ის მფლობელის ისტორიის ნაწილია. პირად არქივში ინახება კადრები ტრასებიდან, გუნდის ცხოვრებიდან და დაჯილდოებებიდან. ეს სარბოლო გამოცდილება დღესაც განსაზღვრავს სერვისის მიდგომას: ყურადღება ტექნიკისადმი, ზუსტი დიაგნოსტიკა და პასუხისმგებლობა შედეგზე.",
      tabsLabel: "პირადი ისტორიის განყოფილებები",
      photoArchive: "ფოტოარქივი",
      whyUs: "რატომ ჩვენ?",
      pixelCarLabel: "პიქსელური რალის ავტომობილი. დააჭირეთ, რომ გადახტეს.",
      pixelCarStaticLabel: "ვერცხლისფერი და ნარინჯისფერი პიქსელური რალის ავტომობილი",
      pixelCarTitle: "დააჭირეთ — ავტომობილი გადახტება",
      carouselRole: "კარუსელი",
      carouselLabel: "GARAGE F1-ის მფლობელის პირადი ავტოსპორტის არქივი",
      personalArchive: "პირადი არქივი",
      previousPhoto: "წინა ფოტო",
      nextPhoto: "შემდეგი ფოტო",
      progress: "ისტორიის პროგრესი",
      allPhotos: "ისტორიის ყველა ფოტო",
      showPhoto: "ფოტოს ჩვენება {current}: {title}",
      photoCount: "ფოტო {current} / {total}",
      announcement: "ფოტო {current} / {total}. {chapter}. {title}.",
      interviewIndex: "პირადი ბლოგი / რატომ ჩვენ?",
      interviewTitle: "ადამიანი GARAGE F1-ის მიღმა",
      interviewLead: "საუბარი სერვისზე, პატიოსან შეკეთებასა და მფლობელის გზაზე ავტოსპორტიდან GARAGE F1-მდე.",
      interviewLabel: "რატომ ირჩევენ GARAGE F1-ს",
      gallery: [
        {
          chapter: "ტრასა",
          title: "სრული სიჩქარით",
          caption: "რალის ავტომობილი მაყურებლების წინ ტრასის მონაკვეთს გადის.",
          alt: "GARAGE F1-ის რალის ავტომობილი ტყის ტრასაზე ხტება",
        },
        {
          chapter: "ტრასა",
          title: "ღამის რბოლა",
          caption: "GARAGE F1-ის ავტომობილი ტრასის ბნელ მონაკვეთზე მოძრაობს.",
          alt: "GARAGE F1-ის 61 ნომერი რალის ავტომობილი ღამის რბოლის დროს",
        },
        {
          chapter: "ტრასა",
          title: "ბრძოლა ტრაექტორიისთვის",
          caption: "საარქივო კადრი ავტომობილის სწრაფ მონაკვეთზე მოძრაობიდან.",
          alt: "GARAGE F1-ის რალის ავტომობილი ტრასაზე მოსახვევს გადის",
        },
        {
          chapter: "ტრასა",
          title: "ზამთრის ეტაპი",
          caption: "ავტომობილი თოვლიან ტრასაზე — ტექნიკა რთულ პირობებში მუშაობს.",
          alt: "GARAGE F1-ის რალის ავტომობილი ზამთრის ტრასაზე",
        },
        {
          chapter: "ტრასა",
          title: "ხრეში და სიჩქარე",
          caption: "GARAGE F1-ის რალის ავტომობილი დისტანციის ხრეშიან მონაკვეთზე.",
          alt: "GARAGE F1-ის რალის ავტომობილი ხრეშიან ტრასაზე",
        },
        {
          chapter: "ეკიპაჟი",
          title: "ფინიშის შემდეგ",
          caption: "ავტომობილი და გუნდის წევრი — მფლობელის პირადი არქივის ერთ-ერთი მომენტი.",
          alt: "GARAGE F1-ის გუნდის წევრი რალის ავტომობილთან",
        },
        {
          chapter: "ეკიპაჟი",
          title: "სტარტის წინ",
          caption: "GARAGE F1-ის ეკიპაჟი ავტომობილში ტრასაზე გასვლამდე.",
          alt: "GARAGE F1-ის ეკიპაჟი რალის ავტომობილში სტარტის წინ",
        },
        {
          chapter: "გუნდი",
          title: "ავტოსპორტის ადამიანები",
          caption: "გუნდის წევრები მფლობელის პირადი არქივის საერთო ფოტოზე.",
          alt: "GARAGE F1-ის გუნდის წევრები საერთო ფოტოზე",
        },
        {
          chapter: "გუნდი",
          title: "საერთო საქმე",
          caption: "გუნდის ფოტო საავტომობილო შეჯიბრიდან.",
          alt: "საავტომობილო შეჯიბრის მონაწილეები გუნდის ფოტოზე",
        },
        {
          chapter: "ჯილდოები და მოგონებები",
          title: "დასამახსოვრებელი მომენტი",
          caption: "GARAGE F1-ის წარმომადგენლები საავტომობილო შეჯიბრის ჯილდოებით.",
          alt: "GARAGE F1-ის წარმომადგენლები საავტომობილო ჯილდოებით",
        },
        {
          chapter: "ჯილდოები და მოგონებები",
          title: "ისტორია თასებში",
          caption: "მფლობელის პირად არქივში შენახული ჯილდოების კოლექცია.",
          alt: "თასებისა და საავტომობილო ჯილდოების კოლექცია",
        },
        {
          chapter: "ჯილდოები და მოგონებები",
          title: "მიღწევების არქივი",
          caption: "GARAGE F1-ის წარმომადგენელი ჯილდოების კოლექციასთან.",
          alt: "GARAGE F1-ის წარმომადგენელი საავტომობილო ჯილდოების კოლექციასთან",
        },
        {
          chapter: "ჯილდოები და მოგონებები",
          title: "ჯილდო არქივში",
          caption: "პორტრეტი ჯილდოთი — ავტოსპორტის შენახული ისტორიის ნაწილი.",
          alt: "GARAGE F1-ის წარმომადგენელს საავტომობილო ჯილდო უჭირავს",
        },
        {
          chapter: "ჯილდოები და მოგონებები",
          title: "მონაწილის პორტრეტი",
          caption: "ავტოსპორტული პორტრეტი GARAGE F1-ის მფლობელის პირადი არქივიდან.",
          alt: "GARAGE F1-ის მონაწილის ავტოსპორტული პორტრეტი",
        },
        {
          chapter: "ჯილდოები და მოგონებები",
          title: "სარბოლო ეკიპირება",
          caption: "GARAGE F1-ის მონაწილე საავტომობილო შეჯიბრის ეკიპირებაში.",
          alt: "GARAGE F1-ის მონაწილე სარბოლო ეკიპირებაში",
        },
        {
          chapter: "ჯილდოები და მოგონებები",
          title: "ავტომობილის მოგონება",
          caption: "რალის ავტომობილის მოდელი პირადი არქივის ისტორიას ასრულებს.",
          alt: "GARAGE F1-ის რალის ავტომობილის მოდელი",
        },
      ],
      interview: [
        {
          question: "რატომ გადაწყვიტეთ სწორედ GARAGE F1-ის გახსნა? რამ მიგიყვანათ ამ გადაწყვეტილებამდე?",
          answer: "Formula 1 სიჩქარესთან ასოცირდება, ჩვენ კი ვცდილობთ შეკეთება ხარისხიანად და სწრაფად შევასრულოთ.",
        },
        {
          question: "რით განსხვავდება GARAGE F1 ბათუმის სხვა ავტოსერვისებისგან?",
          answer: "რთულ შეკეთებებსაც ვიღებთ და ხარისხიანად ვასრულებთ. ბევრი კლიენტი ჩვენთან სხვა სერვისების შემდეგ მოდის.",
        },
        {
          question: "რა არის თქვენთვის ყველაზე მნიშვნელოვანი კლიენტებთან მუშაობისას?",
          answer: "მთავარია, კლიენტი კმაყოფილი წავიდეს და კვლავ დაგვიბრუნდეს.",
        },
        {
          question: "რომელ პრინციპებს არასოდეს არღვევთ ავტომობილის შეკეთებისას?",
          answer: "სიმართლესა და გულწრფელობას კლიენტთან — მაშინაც კი, როცა სიმართლე რთული მოსასმენია.",
        },
        {
          question: "რას უნდა გრძნობდეს კლიენტი შეკეთებული ავტომობილის წაყვანისას?",
          answer: "უნდა შეეძლოს შორს წასვლა ისე, რომ გზაში გაუმართაობის არ ეშინოდეს.",
        },
        {
          question: "რას ნიშნავს თქვენთვის ხარისხიანი შეკეთება?",
          answer: "როცა ძრავის ან გადაცემათა კოლოფის ყველა დეტალი სახელმძღვანელოს მიხედვით არის აწყობილი და ყველა დამაგრება სამჯერ არის შემოწმებული.",
        },
        {
          question: "როდის და როგორ დაიწყო თქვენი გზა ავტოსპორტში?",
          answer: "ჩემი გზა 1995 წელს დაიწყო — რალი-სპრინტებითა და თამაშებით Colin McRae Rally და Richard Burns Rally.",
        },
        {
          question: "რატომ აირჩიეთ კლასიკური რალი?",
          answer: "კლასიკურ რალიში მეტოქეებს ისე ეჯიბრები, რომ მათ ვერ ხედავ. მხოლოდ ჩქაროსნული მონაკვეთის ფინიშზე იგებ, სხვებზე სწრაფი იყავი თუ ნელი. ასევე მიყვარს ტყის გზაზე 160 კმ/სთ სიჩქარით მოძრაობა.",
        },
        {
          question: "ავტოსპორტის რომელი მიღწევით ამაყობთ ყველაზე მეტად?",
          answer: "2007 წელს ვიბორგში ევროპის რალის ჩემპიონატზე საკუთარ კლასში მესამე ადგილით. ამის შემდეგ კლასიკურ რალიში სპორტის ოსტატის წოდება მივიღე.",
        },
        {
          question: "რა მოგცათ ავტოსპორტმა და როგორ გეხმარებათ ეს გამოცდილება დღეს სერვისში?",
          answer: "ავტოსპორტმა დიაგნოსტიკისა და შეკეთების სწრაფად ორგანიზება მასწავლა. რალიში ავტომობილზე სამუშაოდ ხშირად მხოლოდ 20–45 წუთია.",
        },
        {
          question: "თქვენი სპორტული კარიერის რომელი რბოლა ან მომენტი გახსენდებათ ყველაზე ხშირად?",
          answer: "2007 წელს საერთაშორისო რალი „კარელიაში“ დაკავებული მეორე ადგილი.",
        },
        {
          question: "როგორ მოყვებოდით რამდენიმე წინადადებით თქვენს გზას მრბოლელიდან GARAGE F1-ის მფლობელამდე?",
          answer: "ჩემს გამოცდილებას მექანიკოსებს ვუზიარებ და ერთად კლიენტების ავტომობილებს ხარისხიანად ვაკეთებთ.",
        },
        {
          question: "რატომ უნდა მოგანდოთ კლიენტმა თავისი ავტომობილი სწორედ თქვენ?",
          answer: "ჩვენთვის რეპუტაცია ძალიან მნიშვნელოვანია, ამიტომ შეკეთების ხარისხი ნებისმიერ სწრაფ კომპრომისზე მაღლა დგას.",
        },
        {
          question: "რას ისურვებდით, რომ ხალხს GARAGE F1-ის მონახულების შემდეგ ეთქვა?",
          answer: "„ახლა უკვე სამუდამოდ თქვენი კლიენტი ვარ.“ უმეტესად სწორედ ასე ხდება.",
        },
      ],
    },
    contacts: {
      index: "05 / კონტაქტი",
      title: "დაგვიკავშირდით",
      titleWith: "",
      hoursLabel: "სამუშაო საათები",
      hours: "ყოველდღე 10:00-დან 18:00-მდე",
      addressLabel: "მისამართი",
      route: "მარშრუტის ნახვა",
      whatsapp: "WhatsApp-ში მოწერა",
      bookingIndex: "შეკეთებაზე ჩაწერა",
      bookingTitle: "როგორ ჩავეწეროთ",
      bookingLead: "დაგვიკავშირდით თქვენთვის მოსახერხებელი გზით — GARAGE F1 უპასუხებს თქვენს კითხვებს და ვიზიტის დროს შეგითანხმებთ.",
      steps: [
        { title: "დაუკავშირდით სერვისს", text: "დაგვირეკეთ ან მოგვწერეთ WhatsApp-ში." },
        { title: "აღწერეთ ავტომობილი", text: "გვაცნობეთ მარკა, მოდელი და მოკლედ აღწერეთ პრობლემა." },
        { title: "შეათანხმეთ ვიზიტი", text: "ავტომობილის დიაგნოსტიკისთვის მოსახერხებელ დროს შევარჩევთ." },
      ],
      call: "დარეკვა",
    },
    mobileActions: {
      call: "დარეკვა",
      book: "ჩაწერა",
      route: "მარშრუტი",
    },
  },
};

function getPathValue(source, path) {
  return path.split(".").reduce((value, segment) => {
    if (value === undefined || value === null) return undefined;
    return value[segment];
  }, source);
}

function interpolate(value, parameters) {
  if (typeof value !== "string") return value;
  return value.replace(/\{(\w+)\}/g, (_, key) => String(parameters[key] ?? ""));
}

function getStoredLanguage() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function detectInitialLanguage() {
  const storedLanguage = getStoredLanguage();
  if (SUPPORTED_LANGUAGES.includes(storedLanguage)) return storedLanguage;

  const browserLanguage = navigator.language?.toLowerCase().split("-")[0];
  return SUPPORTED_LANGUAGES.includes(browserLanguage) ? browserLanguage : DEFAULT_LANGUAGE;
}

let currentLanguage = detectInitialLanguage();

export function getLanguage() {
  return currentLanguage;
}

export function t(key, parameters = {}) {
  const localizedValue = getPathValue(translations[currentLanguage], key);
  const fallbackValue = getPathValue(translations[DEFAULT_LANGUAGE], key);
  const value = localizedValue ?? fallbackValue;
  return value === undefined ? "" : interpolate(value, parameters);
}

export function updateMetadata() {
  document.documentElement.lang = currentLanguage;
  document.title = t("seo.title");

  const description = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  const localeMap = { ka: "ka_GE", en: "en_US", ru: "ru_RU" };

  description?.setAttribute("content", t("seo.description"));
  ogTitle?.setAttribute("content", t("seo.title"));
  ogDescription?.setAttribute("content", t("seo.ogDescription"));
  ogLocale?.setAttribute("content", localeMap[currentLanguage]);
}

export function localizeDocument(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  root.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split("|").forEach((entry) => {
      const separatorIndex = entry.indexOf(":");
      if (separatorIndex < 1) return;

      const attribute = entry.slice(0, separatorIndex);
      const key = entry.slice(separatorIndex + 1);
      element.setAttribute(attribute, t(key));
    });
  });
}

export function setLanguage(language) {
  const nextLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
  if (nextLanguage === currentLanguage) {
    try {
      localStorage.setItem(STORAGE_KEY, nextLanguage);
    } catch {
      // The selected language remains active for the current session.
    }
    return false;
  }

  currentLanguage = nextLanguage;
  try {
    localStorage.setItem(STORAGE_KEY, nextLanguage);
  } catch {
    // The selected language still works for the current session when storage is unavailable.
  }

  updateMetadata();
  document.dispatchEvent(new CustomEvent("languagechange", {
    detail: { language: currentLanguage },
  }));
  return true;
}

updateMetadata();
