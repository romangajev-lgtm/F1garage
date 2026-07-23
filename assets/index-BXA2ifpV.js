(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const c={phone:"+995555883040",phoneDisplay:"+995 555 88 30 40",whatsapp:"https://wa.me/995555883040",address:"Batumi, Machahela street 12",maps:"https://www.google.com/maps/search/?api=1&query=Batumi%2C%20Machahela%20street%2012"},o=e=>`/F1garage/${String(e).replace(/^\/+/,"")}`,ce=[{key:"home",href:"#home"},{key:"services",href:"#services"},{key:"prices",href:"#prices"},{key:"about",href:"#about"},{key:"history",href:"#gallery"},{key:"contacts",href:"#contacts"}],J=[{id:"engine",number:"01",image:o("images/generated/service-engine-repair.webp"),mobileImage:o("images/generated/service-engine-repair-mobile.webp"),imageWidth:1086,imageHeight:1448,itemCount:3},{id:"chassis",number:"02",image:o("images/generated/service-suspension-repair.webp"),mobileImage:o("images/generated/service-suspension-repair-mobile.webp"),imageWidth:1086,imageHeight:1448,itemCount:2},{id:"transmission",number:"03",image:o("images/generated/service-transmission-repair.webp"),mobileImage:o("images/generated/service-transmission-repair-mobile.webp"),imageWidth:1086,imageHeight:1448,itemCount:3},{id:"electrics",number:"04",image:o("images/generated/service-auto-electrics.webp"),mobileImage:o("images/generated/service-auto-electrics-mobile.webp"),imageWidth:1448,imageHeight:1086,itemCount:1},{id:"diagnostics",number:"05",image:o("images/generated/service-computer-diagnostics.webp"),mobileImage:o("images/generated/service-computer-diagnostics-mobile.webp"),imageWidth:1448,imageHeight:1086,itemCount:1}],he=[{label:"Instagram",handle:"@autoservice_batumi",href:"https://www.instagram.com/autoservice_batumi?utm_source=qr"},{label:"TikTok",handle:"@autorepair.batumi",href:"https://www.tiktok.com/@autorepair.batumi?_r=1"},{label:"Facebook",handle:"GARAGE F1",href:"https://www.facebook.com/share/1R71TA8W4Z/?mibextid=wwXIfr"}],p=[{src:o("images/garage/212d32f9-6376-436e-a526-ea35abd3e726.png")},{src:o("images/garage/2d11b99d-bec6-45d8-9ef9-2c595d8ecb4c.png")},{src:o("images/garage/51b1b681-a398-4e3e-9aba-8de5da103c2e.png")},{src:o("images/garage/73768035-112e-4a76-9ef4-433a11b16ca7.png")},{src:o("images/garage/c2c9d697-c916-4e12-adba-2af9a519fd1b.png")},{src:o("images/garage/709346cc-0570-4c87-b90c-379ba9d5d960.png")},{src:o("images/garage/4f858397-8746-4ebb-92c0-32bc8ea40b00.png")},{src:o("images/garage/11e4aaa2-94a7-4339-a988-ac37af50aaa7.png")},{src:o("images/garage/66a5b9cc-8fa0-45fa-8d07-92eff90cdaaa.png")},{src:o("images/garage/e1e795da-f564-4aaa-a906-5da1637a26bf.png")},{src:o("images/garage/850d324f-fcbe-4e0c-ac8e-713eae90e1b5.png")},{src:o("images/garage/9956e1f9-07d6-4f73-a90b-0ac97c757605.png")},{src:o("images/garage/0f152f84-e43b-4790-8259-6398561befdb.png")},{src:o("images/garage/8d64d059-af64-4781-8e63-874fcab9483b.png")},{src:o("images/garage/ec781c0f-9eff-44f3-828d-d4fc28d64f8b.png")},{src:o("images/garage/eb11d4c9-f7b5-4705-b6c6-75c6f5933797.png")}],q=["ka","en","ru"],I="ru",D="garage-f1-language",j={ru:{language:{label:"Выбрать язык",menuLabel:"Доступные языки",changed:"Язык изменён: {language}",names:{ka:"ქართული",en:"English",ru:"Русский"}},seo:{title:"GARAGE F1 — автосервис в Батуми",description:"Ремонт двигателей, ходовой части, АКПП, DSG, автоэлектрика и компьютерная диагностика автомобилей в Батуми. GARAGE F1, Machahela street 12.",ogDescription:"Ремонт двигателей, ходовой части, АКПП, DSG, автоэлектрика и диагностика автомобилей в Батуми."},nav:{home:"Главная",services:"Услуги",prices:"Цены",about:"О сервисе",history:"История",contacts:"Контакты"},a11y:{skip:"Перейти к содержимому",brandHome:"GARAGE F1 — главная",brandTop:"GARAGE F1 — наверх",logoAlt:"GARAGE F1 Auto Batumi",mainNav:"Основная навигация",mobileNav:"Мобильная навигация",footerNav:"Навигация в подвале",openMenu:"Открыть меню",closeMenu:"Закрыть меню",socialNetworks:"Социальные сети",quickActions:"Быстрые действия"},hero:{imageAlt:"Механик осматривает автомобиль в современной сервисной зоне",eyebrow:"Автосервис в Батуми",titleMarkAlt:"F1",subtitle:"Профессиональный ремонт и диагностика автомобилей",lead:"Ремонт двигателей, ходовой части, механических и автоматических коробок передач, DSG, автоэлектрика и компьютерная диагностика.",book:"Записаться на ремонт",call:"Позвонить",addressLabel:"Адрес сервиса"},about:{index:"01 / О сервисе",titleLine1:"Ремонт",titleLine2:"Начинается",titleLine3:"С диагностики",paragraph1:"GARAGE F1 — автосервис в Батуми, специализирующийся на ремонте двигателей, ходовой части, механических и автоматических коробок передач, DSG, автоэлектрике и диагностике автомобилей.",paragraph2:"Перед началом ремонта мы проводим диагностику, объясняем причину неисправности и согласовываем стоимость работ."},services:{index:"02 / Основные направления",heading:"Услуги",book:"Записаться",viewPrices:"Смотреть цены",cards:[{title:"Ремонт двигателей",shortTitle:"Двигатели",description:"Диагностика и ремонт дизельных и бензиновых двигателей, замена ремней и цепей ГРМ, роликов и помп.",alt:"Механик ремонтирует двигатель автомобиля в сервисной зоне",items:[{name:"Ремонт дизельных и бензиновых двигателей",price:"от 700 ₾"},{name:"Замена ремня ГРМ, роликов и помпы",price:"400 ₾"},{name:"Замена цепи ГРМ",price:"от 600 ₾"}]},{title:"Ремонт ходовой части",shortTitle:"Ходовая часть",description:"Диагностика подвески, поиск неисправностей и ремонт элементов ходовой части автомобиля.",alt:"Механик ремонтирует переднюю подвеску автомобиля на подъёмнике",items:[{name:"Ремонт ходовой части",price:"от 60 ₾"},{name:"Диагностика ходовой части",price:"30 ₾"}]},{title:"Ремонт АКПП и DSG",shortTitle:"Коробки передач",description:"Ремонт механических коробок передач, автоматических коробок Renault, Peugeot и Citroën, а также DSG и автоматов автомобилей концерна VAG.",alt:"Специалист измеряет детали автоматической коробки передач",items:[{name:"Ремонт механических коробок передач",price:"от 300 ₾"},{name:"Ремонт АКПП Renault, Peugeot и Citroën",price:"от 600 ₾"},{name:"Ремонт DSG и АКПП автомобилей VAG",price:"от 600 ₾"}]},{title:"Автоэлектрика",shortTitle:"Автоэлектрика",description:"Поиск неисправностей электрических систем автомобиля и выполнение необходимых ремонтных работ.",alt:"Автоэлектрик проверяет электрическую систему автомобиля мультиметром",items:[{name:"Автоэлектрика",price:"от 100 ₾"}]},{title:"Диагностика",shortTitle:"Диагностика",description:"Компьютерная диагностика автомобиля и диагностика ходовой части.",alt:"Механик выполняет компьютерную диагностику автомобиля",items:[{name:"Компьютерная диагностика",price:"30 ₾"}]}]},prices:{index:"03 / Прайс-лист",title:"Цены на основные работы",note:"Точная стоимость определяется после диагностики автомобиля."},history:{index:"04 / История владельца",titleLine1:"Гоночная",titleLine2:"ДНК",description:"Автоспорт — часть истории владельца GARAGE F1. В личном архиве сохранились кадры с трасс, команды и наград. Эта гоночная школа стала частью подхода сервиса: внимание к технике, точная диагностика и ответственность за результат.",tabsLabel:"Разделы личной истории",photoArchive:"Фотоархив",whyUs:"Почему мы?",pixelCarLabel:"Пиксельная раллийная машина. Нажмите, чтобы она подпрыгнула.",pixelCarStaticLabel:"Пиксельная серебристо-оранжевая раллийная машина",pixelCarTitle:"Нажмите — машина подпрыгнет",carouselRole:"карусель",carouselLabel:"Личный автоспортивный архив владельца GARAGE F1",personalArchive:"Личный архив",previousPhoto:"Предыдущая фотография",nextPhoto:"Следующая фотография",progress:"Прогресс истории",allPhotos:"Все фотографии истории",showPhoto:"Показать фото {current}: {title}",photoCount:"Фото {current} из {total}",announcement:"Фото {current} из {total}. {chapter}. {title}.",interviewIndex:"Личный блог / Почему мы?",interviewTitle:"История человека за GARAGE F1",interviewLead:"Разговор о сервисе, честном ремонте и пути владельца от автоспорта к GARAGE F1.",interviewLabel:"Почему выбирают GARAGE F1",gallery:[{chapter:"Трасса",title:"На полной скорости",caption:"Раллийный автомобиль проходит участок трассы перед зрителями.",alt:"Раллийный автомобиль GARAGE F1 в прыжке на лесной трассе"},{chapter:"Трасса",title:"Ночной заезд",caption:"Автомобиль GARAGE F1 во время заезда на тёмном участке трассы.",alt:"Раллийный автомобиль GARAGE F1 с номером 61 во время ночного заезда"},{chapter:"Трасса",title:"Борьба за траекторию",caption:"Архивный кадр автомобиля на скоростном участке раллийной трассы.",alt:"Раллийный автомобиль GARAGE F1 проходит поворот на трассе"},{chapter:"Трасса",title:"Зимний этап",caption:"Автомобиль на заснеженной трассе — техника работает в сложных условиях.",alt:"Раллийный автомобиль GARAGE F1 на зимней трассе"},{chapter:"Трасса",title:"Гравий и скорость",caption:"Раллийный автомобиль GARAGE F1 на гравийном участке дистанции.",alt:"Раллийный автомобиль GARAGE F1 на гравийной трассе"},{chapter:"Экипаж",title:"После финиша",caption:"Автомобиль и участник команды — один из моментов личного архива владельца.",alt:"Участник команды GARAGE F1 рядом с раллийным автомобилем"},{chapter:"Экипаж",title:"Перед стартом",caption:"Экипаж GARAGE F1 в автомобиле перед выходом на трассу.",alt:"Экипаж GARAGE F1 в раллийном автомобиле перед стартом"},{chapter:"Команда",title:"Люди автоспорта",caption:"Участники команды на совместной фотографии из личного архива.",alt:"Участники команды GARAGE F1 на совместной фотографии"},{chapter:"Команда",title:"Общее дело",caption:"Командный кадр с автомобильного соревнования.",alt:"Участники автомобильного соревнования на командной фотографии"},{chapter:"Награды и память",title:"Памятный момент",caption:"Представители GARAGE F1 с наградами автомобильного соревнования.",alt:"Представители GARAGE F1 с автомобильными наградами"},{chapter:"Награды и память",title:"История в трофеях",caption:"Коллекция наград, сохранённая в личном архиве владельца.",alt:"Коллекция кубков и автомобильных наград"},{chapter:"Награды и память",title:"Архив достижений",caption:"Фотография представителя GARAGE F1 рядом с коллекцией наград.",alt:"Представитель GARAGE F1 рядом с коллекцией автомобильных наград"},{chapter:"Награды и память",title:"Награда в архиве",caption:"Портрет с наградой — часть сохранённой истории автоспорта.",alt:"Представитель GARAGE F1 держит автомобильную награду"},{chapter:"Награды и память",title:"Портрет участника",caption:"Автоспортивный портрет из личного архива владельца GARAGE F1.",alt:"Автоспортивный портрет участника GARAGE F1"},{chapter:"Награды и память",title:"Гоночная экипировка",caption:"Участник GARAGE F1 в экипировке для автомобильных соревнований.",alt:"Участник GARAGE F1 в гоночной экипировке"},{chapter:"Награды и память",title:"Память о машине",caption:"Модель раллийного автомобиля завершает рассказ личного архива.",alt:"Модель раллийного автомобиля GARAGE F1"}],interview:[{question:"Почему вы решили открыть именно GARAGE F1? Что подтолкнуло к этому решению?",answer:"Потому что Formula 1 — это про скорость, а мы стараемся делать ремонт качественно и быстро."},{question:"Чем GARAGE F1 отличается от других автосервисов в Батуми?",answer:"Мы берёмся за сложные ремонты и выполняем их качественно. Большинство клиентов приезжают к нам после других сервисов."},{question:"Что для вас самое главное в работе с клиентами?",answer:"Главное — чтобы клиент уехал довольным и вернулся к нам снова."},{question:"Какие принципы вы никогда не нарушаете при ремонте автомобиля?",answer:"Правда и честность перед клиентом — даже если правда бывает горькой."},{question:"Что вы хотите, чтобы чувствовал клиент, когда забирает автомобиль после ремонта?",answer:"Чтобы он мог ехать далеко, не боясь поломки в дороге."},{question:"Что для вас означает качественный ремонт?",answer:"Когда все детали двигателя или коробки передач собраны по мануалу, а все затяжки проверены трижды."},{question:"Когда и как начался ваш путь в автоспорте?",answer:"Мой путь начался в 1995 году — с ралли-спринтов и компьютерных игр Colin McRae Rally и Richard Burns Rally."},{question:"Почему выбрали именно классическое ралли?",answer:"Классическое ралли интересно тем, что ты борешься с соперниками, не видя их. Только на финише скоростного участка узнаёшь, проехал быстрее или медленнее остальных участников. И мне нравится мчаться по лесной дороге со скоростью 160 км/ч."},{question:"Какими достижениями в автоспорте вы гордитесь больше всего?",answer:"Третье место в своём классе на чемпионате Европы по ралли в Выборге в 2007 году. После этого я получил звание мастера спорта по классическому ралли."},{question:"Что дал вам автоспорт как человеку и как этот опыт помогает сегодня в работе сервиса?",answer:"Автоспорт научил быстро организовывать диагностику и ремонт. В ралли на работу с автомобилем часто есть всего 20–45 минут."},{question:"Есть ли история, гонка или момент из вашей спортивной карьеры, который вы вспоминаете чаще всего?",answer:"Второе место в международном ралли «Карелия» в 2007 году."},{question:"Если в нескольких предложениях рассказать свою историю — от автогонщика до владельца GARAGE F1, как бы вы это сделали?",answer:"Я передаю свой опыт механикам, которые у меня работают, и вместе мы делаем качественный ремонт автомобилей клиентов."},{question:"Почему, по вашему мнению, клиент должен доверить свой автомобиль именно вам?",answer:"Мы очень дорожим своей репутацией, поэтому качество ремонта для нас выше любых быстрых компромиссов."},{question:"Что бы вы хотели, чтобы люди говорили о GARAGE F1 после посещения вашего сервиса?",answer:"«Теперь я ваш клиент навсегда». В основном так и происходит."}]},contacts:{index:"05 / Контакты",title:"Свяжитесь",titleWith:"с",hoursLabel:"Режим работы",hours:"Ежедневно с 10:00 до 18:00",addressLabel:"Адрес",route:"Построить маршрут",whatsapp:"Написать в WhatsApp",bookingIndex:"Запись на ремонт",bookingTitle:"Как записаться",bookingLead:"Свяжитесь с GARAGE F1 удобным способом — ответим на вопросы и согласуем время визита.",steps:[{title:"Свяжитесь с сервисом",text:"Позвоните или напишите нам в WhatsApp."},{title:"Опишите автомобиль",text:"Сообщите марку, модель и кратко расскажите о проблеме."},{title:"Согласуйте визит",text:"Подберём удобное время для диагностики автомобиля."}],call:"Позвонить"},mobileActions:{call:"Позвонить",book:"Записаться",route:"Маршрут"}},en:{language:{label:"Choose language",menuLabel:"Available languages",changed:"Language changed to {language}",names:{ka:"ქართული",en:"English",ru:"Русский"}},seo:{title:"GARAGE F1 — auto service in Batumi",description:"Engine, suspension, automatic transmission, DSG and auto electrical repairs, plus computer diagnostics in Batumi. GARAGE F1, Machahela street 12.",ogDescription:"Engine, suspension, automatic transmission, DSG and auto electrical repairs and vehicle diagnostics in Batumi."},nav:{home:"Home",services:"Services",prices:"Prices",about:"About",history:"History",contacts:"Contacts"},a11y:{skip:"Skip to content",brandHome:"GARAGE F1 — home",brandTop:"GARAGE F1 — back to top",logoAlt:"GARAGE F1 Auto Batumi",mainNav:"Main navigation",mobileNav:"Mobile navigation",footerNav:"Footer navigation",openMenu:"Open menu",closeMenu:"Close menu",socialNetworks:"Social networks",quickActions:"Quick actions"},hero:{imageAlt:"A mechanic inspects a car in a modern service bay",eyebrow:"Auto service in Batumi",titleMarkAlt:"F1",subtitle:"Professional vehicle repair and diagnostics",lead:"Engine and suspension repairs, manual and automatic transmissions, DSG, auto electrics and computer diagnostics.",book:"Book a repair",call:"Call us",addressLabel:"Service address"},about:{index:"01 / About the service",titleLine1:"Repair",titleLine2:"Starts with",titleLine3:"Diagnostics",paragraph1:"GARAGE F1 is an auto service in Batumi specialising in engines, suspension, manual and automatic transmissions, DSG, auto electrics and vehicle diagnostics.",paragraph2:"Before any repair, we diagnose the vehicle, explain the cause of the fault and agree the cost of the work."},services:{index:"02 / Core services",heading:"Services",book:"Book now",viewPrices:"View prices",cards:[{title:"Engine repair",shortTitle:"Engines",description:"Diagnostics and repair of diesel and petrol engines, including timing belts, chains, rollers and water pumps.",alt:"A mechanic repairs a car engine in the service bay",items:[{name:"Diesel and petrol engine repair",price:"from 700 ₾"},{name:"Timing belt, roller and water pump replacement",price:"400 ₾"},{name:"Timing chain replacement",price:"from 600 ₾"}]},{title:"Suspension repair",shortTitle:"Suspension",description:"Suspension diagnostics, fault finding and repair of chassis and suspension components.",alt:"A mechanic repairs a car's front suspension on a lift",items:[{name:"Suspension repair",price:"from 60 ₾"},{name:"Suspension diagnostics",price:"30 ₾"}]},{title:"Automatic & DSG repair",shortTitle:"Transmissions",description:"Repair of manual gearboxes, Renault, Peugeot and Citroën automatic transmissions, plus DSG and VAG automatic transmissions.",alt:"A specialist measures automatic transmission components",items:[{name:"Manual gearbox repair",price:"from 300 ₾"},{name:"Renault, Peugeot and Citroën automatic transmission repair",price:"from 600 ₾"},{name:"VAG DSG and automatic transmission repair",price:"from 600 ₾"}]},{title:"Auto electrics",shortTitle:"Auto electrics",description:"Electrical system fault finding and all necessary vehicle electrical repairs.",alt:"An auto electrician checks a vehicle electrical system with a multimeter",items:[{name:"Auto electrical work",price:"from 100 ₾"}]},{title:"Diagnostics",shortTitle:"Diagnostics",description:"Computer diagnostics and suspension diagnostics for your vehicle.",alt:"A mechanic performs computer diagnostics on a car",items:[{name:"Computer diagnostics",price:"30 ₾"}]}]},prices:{index:"03 / Price list",title:"Prices for core services",note:"The exact price is confirmed after the vehicle has been diagnosed."},history:{index:"04 / Owner's story",titleLine1:"Racing",titleLine2:"DNA",description:"Motorsport is part of the GARAGE F1 owner's story. The personal archive preserves moments from stages, the team and award ceremonies. That racing background shapes our service today: attention to every mechanical detail, precise diagnostics and responsibility for the result.",tabsLabel:"Owner story sections",photoArchive:"Photo archive",whyUs:"Why us?",pixelCarLabel:"Pixel rally car. Press to make it jump.",pixelCarStaticLabel:"A silver and orange pixel rally car",pixelCarTitle:"Press — the car will jump",carouselRole:"carousel",carouselLabel:"The GARAGE F1 owner's personal motorsport archive",personalArchive:"Personal archive",previousPhoto:"Previous photo",nextPhoto:"Next photo",progress:"Story progress",allPhotos:"All story photos",showPhoto:"Show photo {current}: {title}",photoCount:"Photo {current} of {total}",announcement:"Photo {current} of {total}. {chapter}. {title}.",interviewIndex:"Personal blog / Why us?",interviewTitle:"The person behind GARAGE F1",interviewLead:"A conversation about service, honest repairs and the owner's path from motorsport to GARAGE F1.",interviewLabel:"Why people choose GARAGE F1",gallery:[{chapter:"Stage",title:"Flat out",caption:"The rally car powers through a stage in front of the spectators.",alt:"A GARAGE F1 rally car jumping on a forest stage"},{chapter:"Stage",title:"Night run",caption:"The GARAGE F1 car races through a dark section of the stage.",alt:"GARAGE F1 rally car number 61 during a night run"},{chapter:"Stage",title:"Fighting for the line",caption:"An archive shot of the car on a high-speed rally section.",alt:"A GARAGE F1 rally car taking a corner"},{chapter:"Stage",title:"Winter round",caption:"The car runs on a snow-covered stage where the machinery faces harsh conditions.",alt:"A GARAGE F1 rally car on a winter stage"},{chapter:"Stage",title:"Gravel and speed",caption:"The GARAGE F1 rally car attacks a gravel section.",alt:"A GARAGE F1 rally car on a gravel stage"},{chapter:"Crew",title:"After the finish",caption:"The car and a team member in a moment from the owner's personal archive.",alt:"A GARAGE F1 team member beside a rally car"},{chapter:"Crew",title:"Before the start",caption:"The GARAGE F1 crew waits in the car before heading onto the stage.",alt:"The GARAGE F1 crew in a rally car before the start"},{chapter:"Team",title:"People of motorsport",caption:"Team members together in a photo from the personal archive.",alt:"GARAGE F1 team members in a group photo"},{chapter:"Team",title:"One shared goal",caption:"A team photograph from a motorsport event.",alt:"Motorsport participants in a team photograph"},{chapter:"Awards & memories",title:"A memorable moment",caption:"GARAGE F1 representatives with awards from a motorsport event.",alt:"GARAGE F1 representatives holding motorsport awards"},{chapter:"Awards & memories",title:"A story in trophies",caption:"The collection of awards preserved in the owner's personal archive.",alt:"A collection of trophies and motorsport awards"},{chapter:"Awards & memories",title:"Archive of achievements",caption:"A GARAGE F1 representative beside the award collection.",alt:"A GARAGE F1 representative beside a collection of motorsport awards"},{chapter:"Awards & memories",title:"An award in the archive",caption:"A portrait with an award, part of the preserved motorsport story.",alt:"A GARAGE F1 representative holding a motorsport award"},{chapter:"Awards & memories",title:"Competitor portrait",caption:"A motorsport portrait from the GARAGE F1 owner's personal archive.",alt:"A motorsport portrait of a GARAGE F1 competitor"},{chapter:"Awards & memories",title:"Racing gear",caption:"A GARAGE F1 competitor in motorsport equipment.",alt:"A GARAGE F1 competitor in racing gear"},{chapter:"Awards & memories",title:"A memory of the car",caption:"A rally car model closes the story of the personal archive.",alt:"A model of a GARAGE F1 rally car"}],interview:[{question:"Why did you decide to open GARAGE F1? What led you to that decision?",answer:"Formula 1 is about speed, and we aim to make every repair both high-quality and fast."},{question:"What makes GARAGE F1 different from other auto services in Batumi?",answer:"We take on difficult repairs and complete them properly. Many clients come to us after trying other workshops."},{question:"What matters most to you when working with clients?",answer:"The main thing is for the client to leave satisfied and come back to us again."},{question:"Which principles do you never compromise when repairing a car?",answer:"Truth and honesty with the client, even when the truth is difficult."},{question:"How should a client feel when collecting their car after a repair?",answer:"They should feel able to travel far without fearing a breakdown on the road."},{question:"What does a quality repair mean to you?",answer:"Every engine or transmission part is assembled to the manual, and every fastening is checked three times."},{question:"When and how did your journey in motorsport begin?",answer:"It began in 1995 with rally sprints and the games Colin McRae Rally and Richard Burns Rally."},{question:"Why did you choose classic rallying?",answer:"In classic rallying you compete with rivals without seeing them. Only at the finish of a special stage do you learn whether you were faster or slower. I also love racing along a forest road at 160 km/h."},{question:"Which motorsport achievement makes you proudest?",answer:"Third place in my class at the 2007 European Rally Championship round in Vyborg. After that I earned the title of Master of Sport in classic rallying."},{question:"What has motorsport taught you, and how does it help in the workshop today?",answer:"Motorsport taught me to organise diagnostics and repairs quickly. In rallying, there are often only 20–45 minutes to work on the car."},{question:"Which race or moment from your sporting career do you remember most often?",answer:"Second place in the international Karelia Rally in 2007."},{question:"How would you tell your story from racing driver to GARAGE F1 owner in a few sentences?",answer:"I pass my experience on to the mechanics who work with me, and together we deliver high-quality repairs for our clients."},{question:"Why should a client trust you with their car?",answer:"We value our reputation deeply, so repair quality always comes before quick compromises."},{question:"What would you like people to say after visiting GARAGE F1?",answer:"“Now I am your client for life.” Most of the time, that is exactly what happens."}]},contacts:{index:"05 / Contacts",title:"Get in touch",titleWith:"with",hoursLabel:"Opening hours",hours:"Daily from 10:00 to 18:00",addressLabel:"Address",route:"Get directions",whatsapp:"Message on WhatsApp",bookingIndex:"Book a repair",bookingTitle:"How to book",bookingLead:"Contact GARAGE F1 in the way that suits you — we will answer your questions and agree a convenient time.",steps:[{title:"Contact the service",text:"Call us or send a message on WhatsApp."},{title:"Describe your car",text:"Tell us the make, model and briefly describe the problem."},{title:"Agree a visit",text:"We will arrange a convenient time for vehicle diagnostics."}],call:"Call us"},mobileActions:{call:"Call",book:"Book",route:"Directions"}},ka:{language:{label:"ენის არჩევა",menuLabel:"ხელმისაწვდომი ენები",changed:"ენა შეიცვალა: {language}",names:{ka:"ქართული",en:"English",ru:"Русский"}},seo:{title:"GARAGE F1 — ავტოსერვისი ბათუმში",description:"ძრავის, სავალი ნაწილის, ავტომატური გადაცემათა კოლოფის, DSG-ისა და ავტოელექტრიკის შეკეთება და კომპიუტერული დიაგნოსტიკა ბათუმში. GARAGE F1, Machahela street 12.",ogDescription:"ძრავის, სავალი ნაწილის, ავტომატური გადაცემათა კოლოფის, DSG-ისა და ავტოელექტრიკის შეკეთება და ავტომობილის დიაგნოსტიკა ბათუმში."},nav:{home:"მთავარი",services:"სერვისები",prices:"ფასები",about:"ჩვენ შესახებ",history:"ისტორია",contacts:"კონტაქტი"},a11y:{skip:"შინაარსზე გადასვლა",brandHome:"GARAGE F1 — მთავარი",brandTop:"GARAGE F1 — გვერდის დასაწყისში",logoAlt:"GARAGE F1 Auto Batumi",mainNav:"მთავარი ნავიგაცია",mobileNav:"მობილური ნავიგაცია",footerNav:"ქვედა ნავიგაცია",openMenu:"მენიუს გახსნა",closeMenu:"მენიუს დახურვა",socialNetworks:"სოციალური ქსელები",quickActions:"სწრაფი მოქმედებები"},hero:{imageAlt:"მექანიკოსი თანამედროვე სერვისის ზონაში ავტომობილს ამოწმებს",eyebrow:"ავტოსერვისი ბათუმში",titleMarkAlt:"F1",subtitle:"ავტომობილების პროფესიონალური შეკეთება და დიაგნოსტიკა",lead:"ძრავის, სავალი ნაწილის, მექანიკური და ავტომატური გადაცემათა კოლოფების, DSG-ისა და ავტოელექტრიკის შეკეთება და კომპიუტერული დიაგნოსტიკა.",book:"შეკეთებაზე ჩაწერა",call:"დარეკვა",addressLabel:"სერვისის მისამართი"},about:{index:"01 / სერვისის შესახებ",titleLine1:"შეკეთება",titleLine2:"იწყება",titleLine3:"დიაგნოსტიკით",paragraph1:"GARAGE F1 არის ავტოსერვისი ბათუმში, რომელიც სპეციალიზდება ძრავების, სავალი ნაწილის, მექანიკური და ავტომატური გადაცემათა კოლოფების, DSG-ისა და ავტოელექტრიკის შეკეთებასა და ავტომობილების დიაგნოსტიკაში.",paragraph2:"შეკეთების დაწყებამდე ვატარებთ დიაგნოსტიკას, განვმარტავთ გაუმართაობის მიზეზს და წინასწარ ვათანხმებთ სამუშაოების ღირებულებას."},services:{index:"02 / ძირითადი მიმართულებები",heading:"სერვისები",book:"ჩაწერა",viewPrices:"ფასების ნახვა",cards:[{title:"ძრავის შეკეთება",shortTitle:"ძრავები",description:"დიზელისა და ბენზინის ძრავების დიაგნოსტიკა და შეკეთება, დროის ქამრებისა და ჯაჭვების, როლიკებისა და წყლის ტუმბოების შეცვლა.",alt:"მექანიკოსი სერვისის ზონაში ავტომობილის ძრავს არემონტებს",items:[{name:"დიზელისა და ბენზინის ძრავების შეკეთება",price:"700 ₾-დან"},{name:"დროის ქამრის, როლიკებისა და წყლის ტუმბოს შეცვლა",price:"400 ₾"},{name:"დროის ჯაჭვის შეცვლა",price:"600 ₾-დან"}]},{title:"სავალი ნაწილის შეკეთება",shortTitle:"სავალი ნაწილი",description:"საკიდრის დიაგნოსტიკა, გაუმართაობის აღმოჩენა და ავტომობილის სავალი ნაწილის ელემენტების შეკეთება.",alt:"მექანიკოსი ამწეზე ავტომობილის წინა საკიდარს არემონტებს",items:[{name:"სავალი ნაწილის შეკეთება",price:"60 ₾-დან"},{name:"სავალი ნაწილის დიაგნოსტიკა",price:"30 ₾"}]},{title:"ავტომატური კოლოფისა და DSG-ის შეკეთება",shortTitle:"გადაცემათა კოლოფები",description:"მექანიკური კოლოფების, Renault-ის, Peugeot-ისა და Citroën-ის ავტომატური კოლოფების, ასევე DSG-ისა და VAG-ის ავტომატური კოლოფების შეკეთება.",alt:"სპეციალისტი ავტომატური გადაცემათა კოლოფის დეტალებს ზომავს",items:[{name:"მექანიკური გადაცემათა კოლოფის შეკეთება",price:"300 ₾-დან"},{name:"Renault-ის, Peugeot-ისა და Citroën-ის ავტომატური კოლოფის შეკეთება",price:"600 ₾-დან"},{name:"VAG-ის DSG-ისა და ავტომატური კოლოფის შეკეთება",price:"600 ₾-დან"}]},{title:"ავტოელექტრიკა",shortTitle:"ავტოელექტრიკა",description:"ავტომობილის ელექტრული სისტემების გაუმართაობის აღმოჩენა და საჭირო სარემონტო სამუშაოების შესრულება.",alt:"ავტოელექტრიკოსი მულტიმეტრით ავტომობილის ელექტრულ სისტემას ამოწმებს",items:[{name:"ავტოელექტრიკის სამუშაოები",price:"100 ₾-დან"}]},{title:"დიაგნოსტიკა",shortTitle:"დიაგნოსტიკა",description:"ავტომობილის კომპიუტერული და სავალი ნაწილის დიაგნოსტიკა.",alt:"მექანიკოსი ავტომობილის კომპიუტერულ დიაგნოსტიკას ატარებს",items:[{name:"კომპიუტერული დიაგნოსტიკა",price:"30 ₾"}]}]},prices:{index:"03 / ფასების სია",title:"ძირითადი სამუშაოების ფასები",note:"ზუსტი ღირებულება განისაზღვრება ავტომობილის დიაგნოსტიკის შემდეგ."},history:{index:"04 / მფლობელის ისტორია",titleLine1:"სარბოლო",titleLine2:"დნმ",description:"ავტოსპორტი GARAGE F1-ის მფლობელის ისტორიის ნაწილია. პირად არქივში ინახება კადრები ტრასებიდან, გუნდის ცხოვრებიდან და დაჯილდოებებიდან. ეს სარბოლო გამოცდილება დღესაც განსაზღვრავს სერვისის მიდგომას: ყურადღება ტექნიკისადმი, ზუსტი დიაგნოსტიკა და პასუხისმგებლობა შედეგზე.",tabsLabel:"პირადი ისტორიის განყოფილებები",photoArchive:"ფოტოარქივი",whyUs:"რატომ ჩვენ?",pixelCarLabel:"პიქსელური რალის ავტომობილი. დააჭირეთ, რომ გადახტეს.",pixelCarStaticLabel:"ვერცხლისფერი და ნარინჯისფერი პიქსელური რალის ავტომობილი",pixelCarTitle:"დააჭირეთ — ავტომობილი გადახტება",carouselRole:"კარუსელი",carouselLabel:"GARAGE F1-ის მფლობელის პირადი ავტოსპორტის არქივი",personalArchive:"პირადი არქივი",previousPhoto:"წინა ფოტო",nextPhoto:"შემდეგი ფოტო",progress:"ისტორიის პროგრესი",allPhotos:"ისტორიის ყველა ფოტო",showPhoto:"ფოტოს ჩვენება {current}: {title}",photoCount:"ფოტო {current} / {total}",announcement:"ფოტო {current} / {total}. {chapter}. {title}.",interviewIndex:"პირადი ბლოგი / რატომ ჩვენ?",interviewTitle:"ადამიანი GARAGE F1-ის მიღმა",interviewLead:"საუბარი სერვისზე, პატიოსან შეკეთებასა და მფლობელის გზაზე ავტოსპორტიდან GARAGE F1-მდე.",interviewLabel:"რატომ ირჩევენ GARAGE F1-ს",gallery:[{chapter:"ტრასა",title:"სრული სიჩქარით",caption:"რალის ავტომობილი მაყურებლების წინ ტრასის მონაკვეთს გადის.",alt:"GARAGE F1-ის რალის ავტომობილი ტყის ტრასაზე ხტება"},{chapter:"ტრასა",title:"ღამის რბოლა",caption:"GARAGE F1-ის ავტომობილი ტრასის ბნელ მონაკვეთზე მოძრაობს.",alt:"GARAGE F1-ის 61 ნომერი რალის ავტომობილი ღამის რბოლის დროს"},{chapter:"ტრასა",title:"ბრძოლა ტრაექტორიისთვის",caption:"საარქივო კადრი ავტომობილის სწრაფ მონაკვეთზე მოძრაობიდან.",alt:"GARAGE F1-ის რალის ავტომობილი ტრასაზე მოსახვევს გადის"},{chapter:"ტრასა",title:"ზამთრის ეტაპი",caption:"ავტომობილი თოვლიან ტრასაზე — ტექნიკა რთულ პირობებში მუშაობს.",alt:"GARAGE F1-ის რალის ავტომობილი ზამთრის ტრასაზე"},{chapter:"ტრასა",title:"ხრეში და სიჩქარე",caption:"GARAGE F1-ის რალის ავტომობილი დისტანციის ხრეშიან მონაკვეთზე.",alt:"GARAGE F1-ის რალის ავტომობილი ხრეშიან ტრასაზე"},{chapter:"ეკიპაჟი",title:"ფინიშის შემდეგ",caption:"ავტომობილი და გუნდის წევრი — მფლობელის პირადი არქივის ერთ-ერთი მომენტი.",alt:"GARAGE F1-ის გუნდის წევრი რალის ავტომობილთან"},{chapter:"ეკიპაჟი",title:"სტარტის წინ",caption:"GARAGE F1-ის ეკიპაჟი ავტომობილში ტრასაზე გასვლამდე.",alt:"GARAGE F1-ის ეკიპაჟი რალის ავტომობილში სტარტის წინ"},{chapter:"გუნდი",title:"ავტოსპორტის ადამიანები",caption:"გუნდის წევრები მფლობელის პირადი არქივის საერთო ფოტოზე.",alt:"GARAGE F1-ის გუნდის წევრები საერთო ფოტოზე"},{chapter:"გუნდი",title:"საერთო საქმე",caption:"გუნდის ფოტო საავტომობილო შეჯიბრიდან.",alt:"საავტომობილო შეჯიბრის მონაწილეები გუნდის ფოტოზე"},{chapter:"ჯილდოები და მოგონებები",title:"დასამახსოვრებელი მომენტი",caption:"GARAGE F1-ის წარმომადგენლები საავტომობილო შეჯიბრის ჯილდოებით.",alt:"GARAGE F1-ის წარმომადგენლები საავტომობილო ჯილდოებით"},{chapter:"ჯილდოები და მოგონებები",title:"ისტორია თასებში",caption:"მფლობელის პირად არქივში შენახული ჯილდოების კოლექცია.",alt:"თასებისა და საავტომობილო ჯილდოების კოლექცია"},{chapter:"ჯილდოები და მოგონებები",title:"მიღწევების არქივი",caption:"GARAGE F1-ის წარმომადგენელი ჯილდოების კოლექციასთან.",alt:"GARAGE F1-ის წარმომადგენელი საავტომობილო ჯილდოების კოლექციასთან"},{chapter:"ჯილდოები და მოგონებები",title:"ჯილდო არქივში",caption:"პორტრეტი ჯილდოთი — ავტოსპორტის შენახული ისტორიის ნაწილი.",alt:"GARAGE F1-ის წარმომადგენელს საავტომობილო ჯილდო უჭირავს"},{chapter:"ჯილდოები და მოგონებები",title:"მონაწილის პორტრეტი",caption:"ავტოსპორტული პორტრეტი GARAGE F1-ის მფლობელის პირადი არქივიდან.",alt:"GARAGE F1-ის მონაწილის ავტოსპორტული პორტრეტი"},{chapter:"ჯილდოები და მოგონებები",title:"სარბოლო ეკიპირება",caption:"GARAGE F1-ის მონაწილე საავტომობილო შეჯიბრის ეკიპირებაში.",alt:"GARAGE F1-ის მონაწილე სარბოლო ეკიპირებაში"},{chapter:"ჯილდოები და მოგონებები",title:"ავტომობილის მოგონება",caption:"რალის ავტომობილის მოდელი პირადი არქივის ისტორიას ასრულებს.",alt:"GARAGE F1-ის რალის ავტომობილის მოდელი"}],interview:[{question:"რატომ გადაწყვიტეთ სწორედ GARAGE F1-ის გახსნა? რამ მიგიყვანათ ამ გადაწყვეტილებამდე?",answer:"Formula 1 სიჩქარესთან ასოცირდება, ჩვენ კი ვცდილობთ შეკეთება ხარისხიანად და სწრაფად შევასრულოთ."},{question:"რით განსხვავდება GARAGE F1 ბათუმის სხვა ავტოსერვისებისგან?",answer:"რთულ შეკეთებებსაც ვიღებთ და ხარისხიანად ვასრულებთ. ბევრი კლიენტი ჩვენთან სხვა სერვისების შემდეგ მოდის."},{question:"რა არის თქვენთვის ყველაზე მნიშვნელოვანი კლიენტებთან მუშაობისას?",answer:"მთავარია, კლიენტი კმაყოფილი წავიდეს და კვლავ დაგვიბრუნდეს."},{question:"რომელ პრინციპებს არასოდეს არღვევთ ავტომობილის შეკეთებისას?",answer:"სიმართლესა და გულწრფელობას კლიენტთან — მაშინაც კი, როცა სიმართლე რთული მოსასმენია."},{question:"რას უნდა გრძნობდეს კლიენტი შეკეთებული ავტომობილის წაყვანისას?",answer:"უნდა შეეძლოს შორს წასვლა ისე, რომ გზაში გაუმართაობის არ ეშინოდეს."},{question:"რას ნიშნავს თქვენთვის ხარისხიანი შეკეთება?",answer:"როცა ძრავის ან გადაცემათა კოლოფის ყველა დეტალი სახელმძღვანელოს მიხედვით არის აწყობილი და ყველა დამაგრება სამჯერ არის შემოწმებული."},{question:"როდის და როგორ დაიწყო თქვენი გზა ავტოსპორტში?",answer:"ჩემი გზა 1995 წელს დაიწყო — რალი-სპრინტებითა და თამაშებით Colin McRae Rally და Richard Burns Rally."},{question:"რატომ აირჩიეთ კლასიკური რალი?",answer:"კლასიკურ რალიში მეტოქეებს ისე ეჯიბრები, რომ მათ ვერ ხედავ. მხოლოდ ჩქაროსნული მონაკვეთის ფინიშზე იგებ, სხვებზე სწრაფი იყავი თუ ნელი. ასევე მიყვარს ტყის გზაზე 160 კმ/სთ სიჩქარით მოძრაობა."},{question:"ავტოსპორტის რომელი მიღწევით ამაყობთ ყველაზე მეტად?",answer:"2007 წელს ვიბორგში ევროპის რალის ჩემპიონატზე საკუთარ კლასში მესამე ადგილით. ამის შემდეგ კლასიკურ რალიში სპორტის ოსტატის წოდება მივიღე."},{question:"რა მოგცათ ავტოსპორტმა და როგორ გეხმარებათ ეს გამოცდილება დღეს სერვისში?",answer:"ავტოსპორტმა დიაგნოსტიკისა და შეკეთების სწრაფად ორგანიზება მასწავლა. რალიში ავტომობილზე სამუშაოდ ხშირად მხოლოდ 20–45 წუთია."},{question:"თქვენი სპორტული კარიერის რომელი რბოლა ან მომენტი გახსენდებათ ყველაზე ხშირად?",answer:"2007 წელს საერთაშორისო რალი „კარელიაში“ დაკავებული მეორე ადგილი."},{question:"როგორ მოყვებოდით რამდენიმე წინადადებით თქვენს გზას მრბოლელიდან GARAGE F1-ის მფლობელამდე?",answer:"ჩემს გამოცდილებას მექანიკოსებს ვუზიარებ და ერთად კლიენტების ავტომობილებს ხარისხიანად ვაკეთებთ."},{question:"რატომ უნდა მოგანდოთ კლიენტმა თავისი ავტომობილი სწორედ თქვენ?",answer:"ჩვენთვის რეპუტაცია ძალიან მნიშვნელოვანია, ამიტომ შეკეთების ხარისხი ნებისმიერ სწრაფ კომპრომისზე მაღლა დგას."},{question:"რას ისურვებდით, რომ ხალხს GARAGE F1-ის მონახულების შემდეგ ეთქვა?",answer:"„ახლა უკვე სამუდამოდ თქვენი კლიენტი ვარ.“ უმეტესად სწორედ ასე ხდება."}]},contacts:{index:"05 / კონტაქტი",title:"დაგვიკავშირდით",titleWith:"",hoursLabel:"სამუშაო საათები",hours:"ყოველდღე 10:00-დან 18:00-მდე",addressLabel:"მისამართი",route:"მარშრუტის ნახვა",whatsapp:"WhatsApp-ში მოწერა",bookingIndex:"შეკეთებაზე ჩაწერა",bookingTitle:"როგორ ჩავეწეროთ",bookingLead:"დაგვიკავშირდით თქვენთვის მოსახერხებელი გზით — GARAGE F1 უპასუხებს თქვენს კითხვებს და ვიზიტის დროს შეგითანხმებთ.",steps:[{title:"დაუკავშირდით სერვისს",text:"დაგვირეკეთ ან მოგვწერეთ WhatsApp-ში."},{title:"აღწერეთ ავტომობილი",text:"გვაცნობეთ მარკა, მოდელი და მოკლედ აღწერეთ პრობლემა."},{title:"შეათანხმეთ ვიზიტი",text:"ავტომობილის დიაგნოსტიკისთვის მოსახერხებელ დროს შევარჩევთ."}],call:"დარეკვა"},mobileActions:{call:"დარეკვა",book:"ჩაწერა",route:"მარშრუტი"}}};function V(e,t){return t.split(".").reduce((a,i)=>{if(a!=null)return a[i]},e)}function de(e,t){return typeof e!="string"?e:e.replace(/\{(\w+)\}/g,(a,i)=>String(t[i]??""))}function pe(){try{return localStorage.getItem(D)}catch{return null}}function ue(){const e=pe();if(q.includes(e))return e;const t=navigator.language?.toLowerCase().split("-")[0];return q.includes(t)?t:I}let f=ue();function W(){return f}function r(e,t={}){const a=V(j[f],e),i=V(j[I],e),s=a??i;return s===void 0?"":de(s,t)}function Q(){document.documentElement.lang=f,document.title=r("seo.title");const e=document.querySelector('meta[name="description"]'),t=document.querySelector('meta[property="og:title"]'),a=document.querySelector('meta[property="og:description"]'),i=document.querySelector('meta[property="og:locale"]'),s={ka:"ka_GE",en:"en_US",ru:"ru_RU"};e?.setAttribute("content",r("seo.description")),t?.setAttribute("content",r("seo.title")),a?.setAttribute("content",r("seo.ogDescription")),i?.setAttribute("content",s[f])}function ge(e=document){e.querySelectorAll("[data-i18n]").forEach(t=>{t.textContent=r(t.dataset.i18n)}),e.querySelectorAll("[data-i18n-attr]").forEach(t=>{t.dataset.i18nAttr.split("|").forEach(a=>{const i=a.indexOf(":");if(i<1)return;const s=a.slice(0,i),n=a.slice(i+1);t.setAttribute(s,r(n))})})}function me(e){const t=q.includes(e)?e:I;if(t===f){try{localStorage.setItem(D,t)}catch{}return!1}f=t;try{localStorage.setItem(D,t)}catch{}return Q(),document.dispatchEvent(new CustomEvent("languagechange",{detail:{language:f}})),!0}Q();const be=48,ye="(prefers-reduced-motion: reduce)",z=(e,t,a)=>Math.min(a,Math.max(t,e)),m=(e,t)=>e+Math.random()*(t-e),ve=e=>1-(1-e)**3,fe=e=>e**3;function Ae(){const e=document.createElement("canvas");e.width=56,e.height=16;const t=e.getContext("2d");t.imageSmoothingEnabled=!1;const a=(i,s,n,l,h)=>{t.fillStyle=i,t.fillRect(s,n,l,h)};return a("#050505",9,10,11,5),a("#050505",11,9,7,7),a("#050505",38,10,11,5),a("#050505",40,9,7,7),a("#262626",11,11,7,4),a("#262626",40,11,7,4),a("#141719",4,7,49,6),a("#141719",8,5,41,3),a("#141719",14,3,29,3),a("#141719",18,2,21,2),a("#879197",5,7,47,5),a("#aeb8bc",9,6,40,2),a("#9da7ab",15,4,27,2),a("#d1d8da",8,7,35,1),a("#646e73",7,11,43,2),a("#cad1d3",13,12,24,1),a("#f36b2f",18,2,21,2),a("#ff7c36",17,4,4,1),a("#f36b2f",41,7,11,4),a("#ff8b45",43,7,8,1),a("#e95a22",22,10,18,2),a("#111b20",17,5,10,3),a("#0b1419",29,5,11,3),a("#30424a",18,5,8,1),a("#30424a",30,5,9,1),a("#d3d9da",27,4,2,5),a("#3c464a",28,8,1,4),a("#3c464a",39,8,1,4),a("#ece8d4",51,8,3,2),a("#a4150e",5,8,2,2),a("#15191a",49,11,5,1),a("#f3f1e9",47,12,5,1),a("#315f82",20,9,2,2),a("#f2f2ed",23,9,3,2),e}const x=Ae();class we{constructor(t){this.root=t,this.canvas=t.querySelector("canvas"),this.context=this.canvas?.getContext("2d"),this.motionPreference=window.matchMedia(ye),this.particles=[],this.width=0,this.height=0,this.pixelScale=1,this.trackOffset=0,this.wheelPhase=0,this.dustAccumulator=0,this.jumpStartedAt=null,this.landingBurstCreated=!1,this.hovered=!1,this.visible=!0,this.running=!1,this.animationFrame=0,this.lastFrameAt=0,this.context&&(this.context.imageSmoothingEnabled=!1,this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.root),this.intersectionObserver=new IntersectionObserver(([a])=>{this.visible=a.isIntersecting,this.syncAnimationState()},{rootMargin:"120px"}),this.intersectionObserver.observe(this.root),this.handleMotionPreference=()=>{this.root.setAttribute("aria-disabled",String(this.motionPreference.matches)),this.root.setAttribute("aria-label",this.motionPreference.matches?this.root.dataset.staticLabel:this.root.dataset.motionLabel),this.motionPreference.matches&&(this.particles.length=0,this.jumpStartedAt=null,this.root.removeAttribute("data-jumping")),this.syncAnimationState(),this.draw(performance.now(),0)},this.handleVisibilityChange=()=>this.syncAnimationState(),this.handleLanguageChange=()=>this.handleMotionPreference(),this.handlePointerEnter=a=>{a.pointerType!=="touch"&&(this.hovered=!0)},this.handlePointerLeave=()=>{this.hovered=!1},this.handleClick=()=>this.jump(),this.root.addEventListener("pointerenter",this.handlePointerEnter),this.root.addEventListener("pointerleave",this.handlePointerLeave),this.root.addEventListener("click",this.handleClick),document.addEventListener("visibilitychange",this.handleVisibilityChange),document.addEventListener("languagechange",this.handleLanguageChange),this.motionPreference.addEventListener("change",this.handleMotionPreference),this.resize(),this.handleMotionPreference())}resize(){if(!this.context)return;const t=this.root.getBoundingClientRect(),a=Math.max(1,Math.round(t.width)),i=Math.max(1,Math.round(t.height)),s=Math.min(window.devicePixelRatio||1,2);a===this.width&&i===this.height&&this.canvas.width===Math.round(a*s)||(this.width=a,this.height=i,this.pixelScale=a>=168&&i>=40?2:1,this.canvas.width=Math.round(a*s),this.canvas.height=Math.round(i*s),this.context.setTransform(s,0,0,s,0,0),this.context.imageSmoothingEnabled=!1,this.draw(performance.now(),0))}syncAnimationState(){const t=!this.motionPreference.matches&&this.visible&&document.visibilityState!=="hidden";t&&!this.running?(this.running=!0,this.lastFrameAt=performance.now(),this.animationFrame=requestAnimationFrame(a=>this.tick(a))):!t&&this.running&&(this.running=!1,cancelAnimationFrame(this.animationFrame),this.animationFrame=0)}tick(t){if(!this.running)return;const a=z(t-this.lastFrameAt,0,40);this.lastFrameAt=t,this.draw(t,a),this.animationFrame=requestAnimationFrame(i=>this.tick(i))}getGeometry(t){const a=x.width*this.pixelScale,i=x.height*this.pixelScale,s=this.height-4,n=this.hovered?1.75:1,l=Math.round(Math.sin(t*.0018*n)*this.pixelScale),h=this.motionPreference.matches?0:Math.round(Math.sin(t*.0085*n)*Math.min(this.pixelScale,1.5)),oe=this.getJumpOffset(t),H=Math.round((this.width-a)*.56)+l,le=Math.round(s-i+h-oe);return{carHeight:i,carWidth:a,driveSpeed:n,rearWheelX:H+14*this.pixelScale,trackY:s,x:H,y:le}}getJumpOffset(t){if(this.jumpStartedAt===null)return 0;const i=z((t-this.jumpStartedAt)/840,0,1),s=Math.min(8,Math.max(5,this.height*.18));let n=0;if(i<.29)n=ve(i/.29)*s;else if(i<.42){const l=(i-.29)/.13;n=s-Math.sin(l*Math.PI)*.35}else if(i<.72){const l=(i-.42)/.3;n=(1-fe(l))*s}else{if(!this.landingBurstCreated){this.landingBurstCreated=!0;const h=this.getRestingGeometry();this.spawnDust(18,h,!0)}const l=(i-.72)/.28;n=Math.max(0,Math.sin(l*Math.PI*3)*(1-l)*2.2)}return i>=1?(this.jumpStartedAt=null,this.landingBurstCreated=!1,this.root.removeAttribute("data-jumping"),0):Math.round(n)}getRestingGeometry(){const t=x.width*this.pixelScale,a=x.height*this.pixelScale,i=this.height-4,s=Math.round((this.width-t)*.56);return{carHeight:a,carWidth:t,driveSpeed:this.hovered?1.75:1,rearWheelX:s+14*this.pixelScale,trackY:i,x:s,y:i-a}}jump(){this.motionPreference.matches||this.jumpStartedAt!==null||(this.jumpStartedAt=performance.now(),this.landingBurstCreated=!1,this.root.setAttribute("data-jumping","true"),this.spawnDust(5,this.getRestingGeometry(),!0))}spawnDust(t,a,i=!1){const s=be-this.particles.length,n=Math.min(t,s);for(let l=0;l<n;l+=1){const h=i?m(1.25,1.8):m(.72,1.12);this.particles.push({x:a.rearWheelX-m(0,4*this.pixelScale),y:a.trackY-m(1,3*this.pixelScale),velocityX:-m(13,30)*h,velocityY:-m(4,16)*h,age:0,lifetime:m(360,i?760:610),size:m(1.1,i?2.4:1.9)*Math.max(1,this.pixelScale*.75),growth:m(1.4,3.5),shade:Math.random()>.45?"194, 153, 93":"137, 105, 66"})}}updateParticles(t){const a=t/1e3;this.particles=this.particles.filter(i=>(i.age+=t,i.x+=i.velocityX*a,i.y+=i.velocityY*a,i.velocityX*=.985**(t/16.67),i.velocityY+=9*a,i.age<i.lifetime&&i.x>-12))}drawTrack(){const t=this.context,a=this.height-4;t.fillStyle="rgba(151, 111, 63, .72)",t.fillRect(0,a,this.width,3),t.fillStyle="rgba(80, 59, 36, .85)",t.fillRect(0,a+2,this.width,1);const i=Math.floor(this.trackOffset)%13;for(let s=-i;s<this.width+8;s+=13)t.fillStyle=(s+i)/13%2===0?"rgba(232, 191, 119, .8)":"rgba(110, 78, 44, .85)",t.fillRect(Math.round(s),a,5,1)}drawParticles(){this.particles.forEach(t=>{const a=t.age/t.lifetime,i=Math.max(0,(1-a)*.78),s=Math.max(1,Math.round(t.size+t.growth*a));this.context.fillStyle=`rgba(${t.shade}, ${i})`,this.context.fillRect(Math.round(t.x),Math.round(t.y),s,s)})}drawWheels(t){const a=this.context,i=this.pixelScale,s=Math.floor(this.wheelPhase)%4;[[t.x+14*i,t.y+13*i],[t.x+43*i,t.y+13*i]].forEach(([l,h])=>{a.fillStyle="#747d80",a.fillRect(l-i,h-i,i*3,i*3),a.fillStyle="#d4d8d6",s%2===0?a.fillRect(l-2*i,h,i*5,i):a.fillRect(l,h-2*i,i,i*5),a.fillStyle="#222729",a.fillRect(l,h,i,i)})}draw(t,a){if(!this.context||this.width<=1||this.height<=1)return;const i=this.context,s=this.getGeometry(t);if(i.clearRect(0,0,this.width,this.height),i.imageSmoothingEnabled=!1,!this.motionPreference.matches&&a>0){const n=s.driveSpeed;for(this.trackOffset+=a*.045*n,this.wheelPhase+=a*.012*n,this.dustAccumulator+=a/1e3*(this.hovered?20:9);this.dustAccumulator>=1;)this.spawnDust(1,s),this.dustAccumulator-=1;this.updateParticles(a)}this.drawTrack(),i.fillStyle="rgba(0, 0, 0, .32)",i.fillRect(s.x+8*this.pixelScale,s.trackY-1,s.carWidth-12*this.pixelScale,2),this.drawParticles(),i.drawImage(x,s.x,s.y,s.carWidth,s.carHeight),this.drawWheels(s)}}function Ge(e="[data-pixel-rally]"){return[...document.querySelectorAll(e)].map(t=>new we(t))}const Z=document.querySelector("#app"),y='target="_blank" rel="noopener noreferrer"',g=e=>e.replace(/(^|[\s(])((?:в|и|к|с|у|о|а|но|на|по|за|из|от|до|во|со|ко))\s+/giu,"$1$2 "),U=(e,t)=>`
  <div class="language-switcher language-switcher--${t}" data-language-switcher>
    <button
      class="language-switcher__trigger"
      type="button"
      aria-haspopup="listbox"
      aria-expanded="false"
      aria-controls="${e}"
      aria-label="${r("language.label")}"
      data-language-trigger
      data-i18n-attr="aria-label:language.label"
    >
      <span data-language-current>${W().toUpperCase()}</span>
      <svg viewBox="0 0 12 8" aria-hidden="true">
        <path d="m1 1.5 5 5 5-5" />
      </svg>
    </button>
    <div
      class="language-switcher__menu"
      id="${e}"
      role="listbox"
      aria-label="${r("language.menuLabel")}"
      data-i18n-attr="aria-label:language.menuLabel"
      hidden
    >
      ${q.map(a=>`
        <button
          class="language-switcher__option"
          type="button"
          role="option"
          data-language-option="${a}"
          aria-selected="${String(a===W())}"
        >
          <span data-i18n="language.names.${a}">${r(`language.names.${a}`)}</span>
          <span class="language-switcher__marker" aria-hidden="true"></span>
        </button>
      `).join("")}
    </div>
    <span class="sr-only" data-language-status aria-live="polite" aria-atomic="true"></span>
  </div>
`,P=()=>ce.map(e=>`
  <a href="${e.href}" data-i18n="nav.${e.key}">${r(`nav.${e.key}`)}</a>
`).join(""),Ee=J.map((e,t)=>`
  <article class="service-card reveal" id="${e.id}">
    <picture class="service-card__media">
      <source media="(max-width: 760px)" srcset="${e.mobileImage}" type="image/webp" />
      <img
        src="${e.image}"
        alt="${r(`services.cards.${t}.alt`)}"
        data-i18n-attr="alt:services.cards.${t}.alt"
        loading="lazy"
        decoding="async"
        width="${e.imageWidth}"
        height="${e.imageHeight}"
      />
    </picture>
    <div class="service-card__shade"></div>
    <div class="service-card__content">
      <span class="service-card__number">${e.number}</span>
      <h3 data-i18n="services.cards.${t}.title">${r(`services.cards.${t}.title`)}</h3>
      <p data-i18n="services.cards.${t}.description">${r(`services.cards.${t}.description`)}</p>
      <a href="#prices" class="text-link">
        <span class="text-link__label" data-i18n="services.viewPrices">${r("services.viewPrices")}</span>
        <span aria-hidden="true">→</span>
      </a>
    </div>
  </article>
`).join(""),$e=J.map((e,t)=>`
  <article class="price-group reveal">
    <div class="price-group__heading">
      <span>${e.number}</span>
      <h3 data-i18n="services.cards.${t}.shortTitle">${r(`services.cards.${t}.shortTitle`)}</h3>
    </div>
    <div class="price-list">
      ${Array.from({length:e.itemCount},(a,i)=>`
        <div class="price-row">
          <span data-i18n="services.cards.${t}.items.${i}.name">${r(`services.cards.${t}.items.${i}.name`)}</span>
          <strong data-i18n="services.cards.${t}.items.${i}.price">${r(`services.cards.${t}.items.${i}.price`)}</strong>
        </div>
      `).join("")}
    </div>
  </article>
`).join(""),Se=p.map((e,t)=>{const a=r(`history.gallery.${t}.title`);return`
    <li>
      <button
        class="story-thumbnail"
        type="button"
        data-story-index="${t}"
        aria-current="${t===0?"true":"false"}"
        aria-label="${r("history.showPhoto",{current:t+1,title:a})}"
      >
        <img src="${e.src}" alt="" loading="lazy" decoding="async" />
        <span aria-hidden="true">${String(t+1).padStart(2,"0")}</span>
      </button>
    </li>
  `}).join(""),xe=r("history.interview").map((e,t)=>`
  <li>
    <details>
      <summary>
        <span>${String(t+1).padStart(2,"0")}</span>
        <strong data-i18n="history.interview.${t}.question">${g(e.question)}</strong>
      </summary>
      <div class="owner-interview__answer">
        <div>
          <p data-i18n="history.interview.${t}.answer">${g(e.answer)}</p>
        </div>
      </div>
    </details>
  </li>
`).join(""),Re=he.map(e=>`
  <a class="social-card" href="${e.href}" ${y}>
    <span>${e.label}</span>
    <strong>${e.handle}</strong>
    <span aria-hidden="true">↗</span>
  </a>
`).join(""),A={...p[0],...r("history.gallery.0")};Z.innerHTML=`
  <a class="skip-link" href="#main" data-i18n="a11y.skip">${r("a11y.skip")}</a>
  <header class="site-header" data-header>
    <div class="container header-inner">
      <a
        class="brand"
        href="#home"
        aria-label="${r("a11y.brandHome")}"
        data-i18n-attr="aria-label:a11y.brandHome"
      >
        <img
          src="${o("images/garage/logo/logo-white.png")}"
          alt="${r("a11y.logoAlt")}"
          data-i18n-attr="alt:a11y.logoAlt"
          width="2306"
          height="845"
        />
      </a>
      <nav
        class="desktop-nav"
        aria-label="${r("a11y.mainNav")}"
        data-i18n-attr="aria-label:a11y.mainNav"
      >
        ${P()}
      </nav>
      ${U("language-menu-desktop","desktop")}
      <a class="header-phone" href="tel:${c.phone}">${c.phoneDisplay}</a>
      <button
        class="menu-toggle"
        type="button"
        aria-label="${r("a11y.openMenu")}"
        aria-expanded="false"
        aria-controls="mobile-menu"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
    <nav
      class="mobile-menu"
      id="mobile-menu"
      aria-label="${r("a11y.mobileNav")}"
      data-i18n-attr="aria-label:a11y.mobileNav"
      hidden
    >
      ${P()}
      <a href="tel:${c.phone}">${c.phoneDisplay}</a>
      <div class="mobile-menu__language">
        ${U("language-menu-mobile","mobile")}
      </div>
    </nav>
  </header>

  <main id="main">
    <section class="hero" id="home" aria-labelledby="hero-title">
      <picture class="hero__media">
        <source media="(max-width: 760px)" srcset="${o("images/generated/hero-premium-auto-service-mobile.webp")}" type="image/webp" />
        <img
          class="hero__image"
          src="${o("images/generated/hero-premium-auto-service.webp")}"
          alt="${r("hero.imageAlt")}"
          data-i18n-attr="alt:hero.imageAlt"
          width="1672"
          height="941"
          fetchpriority="high"
          decoding="async"
        />
      </picture>
      <div class="hero__overlay"></div>
      <div class="container hero__content">
        <p class="eyebrow"><span></span><span data-i18n="hero.eyebrow">${r("hero.eyebrow")}</span></p>
        <h1 id="hero-title">
          <span>GARAGE</span>
          <img
            class="hero-logo-mark"
            src="${o("images/garage/logo/auto-batumi-f1-2.png")}"
            alt="${r("hero.titleMarkAlt")}"
            data-i18n-attr="alt:hero.titleMarkAlt"
            width="3000"
            height="3000"
            fetchpriority="high"
          />
        </h1>
        <h2 data-i18n="hero.subtitle">${r("hero.subtitle")}</h2>
        <p class="hero__lead" data-i18n="hero.lead">${r("hero.lead")}</p>
        <div class="hero__actions">
          <a class="button button--primary" href="#booking" data-i18n="hero.book">${r("hero.book")}</a>
          <a class="button button--outline" href="tel:${c.phone}" data-i18n="hero.call">${r("hero.call")}</a>
          <a class="button button--ghost" href="${c.whatsapp}" ${y}>WhatsApp <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <a class="hero__location" href="${c.maps}" ${y}>
        <span data-i18n="hero.addressLabel">${r("hero.addressLabel")}</span>
        <strong>${c.address}</strong>
      </a>
    </section>

    <section class="manifesto angled-section" id="about" aria-labelledby="about-title">
      <img
        class="manifesto__wheel wheel-reveal"
        src="${o("images/manifesto-wheel.webp")}"
        alt=""
        aria-hidden="true"
        width="1200"
        height="1200"
        decoding="async"
      />
      <div class="container manifesto__grid reveal">
        <div class="manifesto__intro">
          <p class="section-index" data-i18n="about.index">${r("about.index")}</p>
          <h2 class="about-title" id="about-title">
            <span class="about-title__line" data-i18n="about.titleLine1">${r("about.titleLine1")}</span>
            <span class="about-title__line" data-i18n="about.titleLine2">${r("about.titleLine2")}</span>
            <span class="about-title__line about-title__line--accent" data-i18n="about.titleLine3">${r("about.titleLine3")}</span>
          </h2>
        </div>
        <div class="manifesto__copy">
          <p data-i18n="about.paragraph1">${r("about.paragraph1")}</p>
          <p data-i18n="about.paragraph2">${r("about.paragraph2")}</p>
        </div>
      </div>
    </section>

    <section class="services section-dark" id="services" aria-labelledby="services-title">
      <div class="container">
        <div class="section-heading reveal">
          <div>
            <p class="section-index" data-i18n="services.index">${r("services.index")}</p>
            <h2 id="services-title"><span data-i18n="services.heading">${r("services.heading")}</span> GARAGE F1</h2>
          </div>
          <a class="button button--outline" href="#booking" data-i18n="services.book">${r("services.book")}</a>
        </div>
        <div class="services-grid">${Ee}</div>
      </div>
    </section>

    <section class="prices angled-section angled-section--red" id="prices" aria-labelledby="prices-title">
      <img
        class="prices__gloves"
        src="${o("images/prices-gloves-cutout.webp")}"
        alt=""
        aria-hidden="true"
        width="1254"
        height="1254"
        loading="lazy"
        decoding="async"
      />
      <div class="container">
        <div class="section-heading section-heading--dark reveal">
          <div>
            <p class="section-index" data-i18n="prices.index">${r("prices.index")}</p>
            <h2 id="prices-title" data-i18n="prices.title">${r("prices.title")}</h2>
          </div>
          <p class="price-note" data-i18n="prices.note">${r("prices.note")}</p>
        </div>
        <div class="prices-grid">${$e}</div>
      </div>
    </section>

    <section class="gallery section-dark" id="gallery" aria-labelledby="gallery-title">
      <div class="container">
        <div class="section-heading story-heading reveal">
          <div>
            <p class="section-index" data-i18n="history.index">${r("history.index")}</p>
            <h2 id="gallery-title">
              <span class="story-heading__line" data-i18n="history.titleLine1">${r("history.titleLine1")}</span>
              <span class="story-heading__line"><span data-i18n="history.titleLine2">${r("history.titleLine2")}</span> <span class="story-heading__brand">GARAGE F1</span></span>
            </h2>
          </div>
          <p class="section-note" data-i18n="history.description">${r("history.description")}</p>
        </div>

        <div class="story-slider" data-story-slider data-story-view="archive">
          <div class="story-slider__toolbar">
            <div
              class="story-slider__nav"
              role="tablist"
              aria-label="${r("history.tabsLabel")}"
              data-i18n-attr="aria-label:history.tabsLabel"
            >
              <button
                class="story-slider__tab"
                id="story-archive-tab"
                type="button"
                role="tab"
                data-story-view-target="archive"
                aria-selected="true"
                aria-controls="story-archive-panel"
                data-i18n="history.photoArchive"
              >${r("history.photoArchive")}</button>
              <button
                class="story-slider__tab"
                id="story-interview-tab"
                type="button"
                role="tab"
                data-story-view-target="interview"
                aria-selected="false"
                aria-controls="story-interview-panel"
                data-i18n="history.whyUs"
              >${r("history.whyUs")}</button>
            </div>
            <button
              class="pixel-rally"
              type="button"
              data-pixel-rally
              data-motion-label="${r("history.pixelCarLabel")}"
              data-static-label="${r("history.pixelCarStaticLabel")}"
              aria-label="${r("history.pixelCarLabel")}"
              title="${r("history.pixelCarTitle")}"
              data-i18n-attr="data-motion-label:history.pixelCarLabel|data-static-label:history.pixelCarStaticLabel|aria-label:history.pixelCarLabel|title:history.pixelCarTitle"
            >
              <canvas class="pixel-rally__canvas" width="256" height="45" aria-hidden="true"></canvas>
            </button>
          </div>
          <div class="story-slider__viewport" data-story-slider-viewport>
            <div class="story-slider__track" data-story-slider-track>
              <section
                class="story-slider__panel story-slider__panel--archive"
                id="story-archive-panel"
                role="tabpanel"
                aria-labelledby="story-archive-tab"
              >
                <div
                  class="story-carousel reveal"
                  role="region"
                  aria-roledescription="${r("history.carouselRole")}"
                  aria-label="${r("history.carouselLabel")}"
                  data-i18n-attr="aria-roledescription:history.carouselRole|aria-label:history.carouselLabel"
                  tabindex="0"
                >
                  <div class="story-carousel__stage">
                    <div class="story-visual">
                      <img class="story-visual__backdrop" src="${A.src}" alt="" aria-hidden="true" loading="lazy" decoding="async" />
                      <img class="story-visual__image" src="${A.src}" alt="${A.alt}" loading="lazy" decoding="async" />
                    </div>

                    <article class="story-copy" aria-labelledby="story-title">
                      <p class="story-copy__eyebrow">
                        <span data-story-chapter>${g(A.chapter)}</span>
                        / <span data-i18n="history.personalArchive">${r("history.personalArchive")}</span>
                      </p>
                      <h3 id="story-title" data-story-title>${g(A.title)}</h3>
                      <p data-story-caption>${g(A.caption)}</p>
                      <div class="story-controls">
                        <button
                          type="button"
                          data-story-prev
                          aria-label="${r("history.previousPhoto")}"
                          data-i18n-attr="aria-label:history.previousPhoto"
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 12H5M11 6l-6 6 6 6" />
                          </svg>
                        </button>
                        <p class="story-counter"><strong data-story-current>01</strong><span aria-hidden="true"> / </span><span>${String(p.length).padStart(2,"0")}</span></p>
                        <button
                          type="button"
                          data-story-next
                          aria-label="${r("history.nextPhoto")}"
                          data-i18n-attr="aria-label:history.nextPhoto"
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                          </svg>
                        </button>
                      </div>
                      <div
                        class="story-progress"
                        role="progressbar"
                        aria-label="${r("history.progress")}"
                        data-i18n-attr="aria-label:history.progress"
                        aria-valuemin="1"
                        aria-valuemax="${p.length}"
                        aria-valuenow="1"
                        aria-valuetext="${r("history.photoCount",{current:1,total:p.length})}"
                      ><span></span></div>
                    </article>
                  </div>

                  <ol
                    class="story-thumbnails"
                    aria-label="${r("history.allPhotos")}"
                    data-i18n-attr="aria-label:history.allPhotos"
                  >
                    ${Se}
                  </ol>
                  <p class="sr-only" data-story-status aria-live="polite" aria-atomic="true"></p>
                </div>
              </section>
              <section
                class="story-slider__panel story-slider__panel--interview"
                id="story-interview-panel"
                role="tabpanel"
                aria-labelledby="story-interview-tab"
                aria-hidden="true"
                inert
              >
                <article class="story-blog-placeholder story-interview reveal" aria-labelledby="owner-blog-title">
                  <div class="story-interview__intro">
                    <p class="section-index" data-i18n="history.interviewIndex">${r("history.interviewIndex")}</p>
                    <h3 id="owner-blog-title" data-i18n="history.interviewTitle">${r("history.interviewTitle")}</h3>
                    <p data-i18n="history.interviewLead">${r("history.interviewLead")}</p>
                  </div>
                  <ol
                    class="owner-interview"
                    aria-label="${r("history.interviewLabel")}"
                    data-i18n-attr="aria-label:history.interviewLabel"
                  >
                    ${xe}
                  </ol>
                </article>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contacts" id="contacts" aria-labelledby="contacts-title">
      <div class="container contacts-grid">
        <div class="contacts__info reveal">
          <p class="section-index" data-i18n="contacts.index">${r("contacts.index")}</p>
          <h2 id="contacts-title">
            <span class="contacts-title__plain" data-i18n="contacts.title">${r("contacts.title")}</span><br />
            <span class="contacts-title__plain contacts-title__connector" data-i18n="contacts.titleWith">${r("contacts.titleWith")}</span>
            <span class="contacts-title__brand">GARAGE F1</span>
          </h2>
          <div class="contacts__details">
            <div>
              <span data-i18n="contacts.hoursLabel">${r("contacts.hoursLabel")}</span>
              <strong data-i18n="contacts.hours">${r("contacts.hours")}</strong>
            </div>
            <div>
              <span data-i18n="contacts.addressLabel">${r("contacts.addressLabel")}</span>
              <strong>${c.address}</strong>
            </div>
          </div>
          <div class="contact-actions">
            <a class="button button--dark" href="${c.maps}" ${y} data-i18n="contacts.route">${r("contacts.route")}</a>
            <a class="button button--light" href="${c.whatsapp}" ${y} data-i18n="contacts.whatsapp">${r("contacts.whatsapp")}</a>
          </div>
          <div
            class="socials"
            aria-label="${r("a11y.socialNetworks")}"
            data-i18n-attr="aria-label:a11y.socialNetworks"
          >${Re}</div>
        </div>

        <aside class="booking-card info-card reveal" id="booking" aria-labelledby="booking-title">
          <p class="section-index" data-i18n="contacts.bookingIndex">${r("contacts.bookingIndex")}</p>
          <h2 id="booking-title" data-i18n="contacts.bookingTitle">${r("contacts.bookingTitle")}</h2>
          <p data-i18n="contacts.bookingLead">${r("contacts.bookingLead")}</p>
          <ol class="booking-steps">
            ${r("contacts.steps").map((e,t)=>`
              <li>
                <span>${String(t+1).padStart(2,"0")}</span>
                <div>
                  <strong data-i18n="contacts.steps.${t}.title">${e.title}</strong>
                  <p data-i18n="contacts.steps.${t}.text">${e.text}</p>
                </div>
              </li>
            `).join("")}
          </ol>
          <div class="info-card__actions">
            <a class="button button--primary" href="${c.whatsapp}" ${y} data-i18n="contacts.whatsapp">${r("contacts.whatsapp")}</a>
            <a class="button button--outline" href="tel:${c.phone}" data-i18n="contacts.call">${r("contacts.call")}</a>
          </div>
        </aside>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-main">
      <a
        class="brand brand--footer"
        href="#home"
        aria-label="${r("a11y.brandTop")}"
        data-i18n-attr="aria-label:a11y.brandTop"
      >
        <img
          src="${o("images/garage/logo/logo-white.png")}"
          alt="${r("a11y.logoAlt")}"
          data-i18n-attr="alt:a11y.logoAlt"
          width="2306"
          height="845"
          loading="lazy"
        />
      </a>
      <nav
        aria-label="${r("a11y.footerNav")}"
        data-i18n-attr="aria-label:a11y.footerNav"
      >
        ${P()}
      </nav>
      <a class="footer-phone" href="tel:${c.phone}">${c.phoneDisplay}</a>
    </div>
    <div class="container footer-bottom">
      <span>© ${new Date().getFullYear()} GARAGE F1</span>
      <span>${c.address}</span>
    </div>
  </footer>

  <nav
    class="mobile-actions"
    aria-label="${r("a11y.quickActions")}"
    data-i18n-attr="aria-label:a11y.quickActions"
  >
    <a href="tel:${c.phone}" data-i18n="mobileActions.call">${r("mobileActions.call")}</a>
    <a href="#booking" data-i18n="mobileActions.book">${r("mobileActions.book")}</a>
    <a href="${c.maps}" ${y} data-i18n="mobileActions.route">${r("mobileActions.route")}</a>
  </nav>
`;const G=document.querySelector(".menu-toggle"),ee=document.querySelector(".mobile-menu");function M(e){G.setAttribute("aria-expanded",String(e)),G.setAttribute("aria-label",r(e?"a11y.closeMenu":"a11y.openMenu")),ee.hidden=!e,document.body.classList.toggle("menu-open",e)}G.addEventListener("click",()=>M(G.getAttribute("aria-expanded")!=="true"));ee.querySelectorAll("a").forEach(e=>e.addEventListener("click",()=>M(!1)));const R=[...document.querySelectorAll("[data-language-switcher]")].map(e=>({root:e,trigger:e.querySelector("[data-language-trigger]"),menu:e.querySelector('[role="listbox"]'),options:[...e.querySelectorAll("[data-language-option]")],status:e.querySelector("[data-language-status]")}));function E(e,{restoreFocus:t=!1}={}){e.trigger.setAttribute("aria-expanded","false"),e.menu.hidden=!0,t&&e.trigger.focus({preventScroll:!0})}function ke(e=null){R.forEach(t=>{t!==e&&E(t)})}function Y(e,{focusOption:t=!0}={}){ke(e),e.trigger.setAttribute("aria-expanded","true"),e.menu.hidden=!1,t&&(e.options.find(i=>i.getAttribute("aria-selected")==="true")??e.options[0])?.focus({preventScroll:!0})}function O({announce:e=!1}={}){const t=W();R.forEach(a=>{a.root.querySelector("[data-language-current]").textContent=t.toUpperCase(),a.options.forEach(i=>{i.setAttribute("aria-selected",String(i.dataset.languageOption===t))}),e&&(a.status.textContent="",requestAnimationFrame(()=>{a.status.textContent=r("language.changed",{language:r(`language.names.${t}`)})}))})}function Le(e,t){const a=me(t);E(e,{restoreFocus:!0}),a||O({announce:!0})}R.forEach(e=>{e.trigger.addEventListener("click",()=>{e.trigger.getAttribute("aria-expanded")==="true"?E(e):Y(e,{focusOption:!1})}),e.trigger.addEventListener("keydown",t=>{if(!["ArrowDown","ArrowUp"].includes(t.key))return;t.preventDefault(),Y(e);const a=Math.max(0,e.options.findIndex(s=>s.getAttribute("aria-selected")==="true")),i=t.key==="ArrowUp"?(a-1+e.options.length)%e.options.length:a;e.options[i]?.focus({preventScroll:!0})}),e.options.forEach((t,a)=>{t.addEventListener("click",()=>Le(e,t.dataset.languageOption)),t.addEventListener("keydown",i=>{const s={ArrowDown:()=>e.options[(a+1)%e.options.length],ArrowUp:()=>e.options[(a-1+e.options.length)%e.options.length],Home:()=>e.options[0],End:()=>e.options.at(-1)};if(i.key==="Escape"){i.preventDefault(),i.stopPropagation(),E(e,{restoreFocus:!0});return}s[i.key]&&(i.preventDefault(),s[i.key]()?.focus({preventScroll:!0}))})})});document.addEventListener("pointerdown",e=>{R.forEach(t=>{t.root.contains(e.target)||E(t)})});document.addEventListener("keydown",e=>{if(e.key!=="Escape")return;const t=R.find(a=>a.trigger.getAttribute("aria-expanded")==="true");if(t){E(t,{restoreFocus:!0});return}G.getAttribute("aria-expanded")==="true"&&M(!1)});const $=document.querySelector("[data-story-slider]"),te=$.querySelector("[data-story-slider-viewport]"),v=[...$.querySelectorAll("[role=tab]")],Fe=[...$.querySelectorAll("[data-story-view-target]")],N=[...$.querySelectorAll("[role=tabpanel]")];function k(){const e=N.find(t=>t.id===($.dataset.storyView==="interview"?"story-interview-panel":"story-archive-panel"));e&&(te.style.height=`${e.offsetHeight}px`)}function B(e,{focus:t=!0}={}){const a=e==="interview"?"interview":"archive",i=a==="interview"?"story-interview-panel":"story-archive-panel";$.dataset.storyView=a,te.scrollLeft=0,v.forEach(s=>s.setAttribute("aria-selected",String(s.dataset.storyViewTarget===a))),N.forEach(s=>{const n=s.id!==i;s.setAttribute("aria-hidden",String(n)),s.toggleAttribute("inert",n),"inert"in s&&(s.inert=n)}),requestAnimationFrame(k),t&&v.find(s=>s.dataset.storyViewTarget===a)?.focus({preventScroll:!0})}Fe.forEach(e=>{e.addEventListener("click",()=>B(e.dataset.storyViewTarget))});v.forEach((e,t)=>{e.addEventListener("keydown",a=>{if(!["ArrowLeft","ArrowRight"].includes(a.key))return;a.preventDefault();const i=a.key==="ArrowRight"?(t+1)%v.length:(t-1+v.length)%v.length,s=v[i];B(s.dataset.storyViewTarget)})});window.location.hash==="#owner-blog"&&window.history.replaceState(window.history.state,"",`${window.location.pathname}${window.location.search}`);B("archive",{focus:!1});window.addEventListener("load",k,{once:!0});window.addEventListener("resize",k);if("ResizeObserver"in window){const e=new ResizeObserver(k);N.forEach(t=>e.observe(t))}const d=document.querySelector(".story-carousel"),S=d.querySelector(".story-visual");let L=d.querySelector(".story-visual__image");const X=d.querySelector(".story-visual__backdrop"),ae=d.querySelector("[data-story-chapter]"),ie=d.querySelector("[data-story-title]"),re=d.querySelector("[data-story-caption]"),_e=d.querySelector("[data-story-current]"),_=d.querySelector(".story-progress"),qe=d.querySelector("[data-story-status]"),K=d.querySelector(".story-thumbnails"),C=[...d.querySelectorAll("[data-story-index]")],T=window.matchMedia("(prefers-reduced-motion: reduce)");let u=0,F=0,w=null;function se(e){return{...p[e],...r(`history.gallery.${e}`)}}function Ce(e){return(e+p.length)%p.length}function Me(e){F+=1;const t=F;if(T.matches){L.src=e.src,L.alt=e.alt,X.src=e.src;return}const a=L,i=a.cloneNode();i.className="story-visual__image story-visual__image--incoming",i.src=e.src,i.alt=e.alt,S.append(i);const s=()=>{if(t!==F){i.remove();return}X.src=e.src,a.classList.add("is-leaving"),requestAnimationFrame(()=>{requestAnimationFrame(()=>i.classList.add("is-visible"))});let n=!1;const l=()=>{if(!n){if(n=!0,t!==F){i.remove();return}a.remove(),i.classList.remove("story-visual__image--incoming","is-visible"),L=i}};i.addEventListener("transitionend",l,{once:!0}),window.setTimeout(l,700)};i.complete?s():(i.addEventListener("load",s,{once:!0}),i.addEventListener("error",s,{once:!0}))}function ne(){const e=se(u),t=u+1;S.querySelectorAll(".story-visual__image").forEach(a=>{a.alt=e.alt}),ae.textContent=g(e.chapter),ie.textContent=g(e.title),re.textContent=g(e.caption),_.setAttribute("aria-valuetext",r("history.photoCount",{current:t,total:p.length})),C.forEach((a,i)=>{a.setAttribute("aria-label",r("history.showPhoto",{current:i+1,title:r(`history.gallery.${i}.title`)}))})}function b(e,{announce:t=!0}={}){u=Ce(e);const a=se(u),i=u+1,s=C[u];Me(a),ae.textContent=g(a.chapter),ie.textContent=g(a.title),re.textContent=g(a.caption),_e.textContent=String(i).padStart(2,"0"),_.style.setProperty("--story-progress",`${i/p.length*100}%`),_.setAttribute("aria-valuenow",String(i)),_.setAttribute("aria-valuetext",r("history.photoCount",{current:i,total:p.length})),C.forEach((l,h)=>{l.setAttribute("aria-current",String(h===u))});const n=s.offsetLeft-(K.clientWidth-s.offsetWidth)/2;K.scrollTo({left:n,behavior:T.matches?"auto":"smooth"}),t&&(qe.textContent=r("history.announcement",{current:i,total:p.length,chapter:a.chapter,title:a.title}))}d.querySelector("[data-story-prev]").addEventListener("click",()=>b(u-1));d.querySelector("[data-story-next]").addEventListener("click",()=>b(u+1));C.forEach(e=>{e.addEventListener("click",()=>b(Number(e.dataset.storyIndex)))});d.addEventListener("keydown",e=>{const t={ArrowLeft:()=>b(u-1),ArrowRight:()=>b(u+1),Home:()=>b(0),End:()=>b(p.length-1)};t[e.key]&&(e.preventDefault(),t[e.key]())});S.addEventListener("pointerdown",e=>{e.isPrimary&&(w={x:e.clientX,y:e.clientY})});S.addEventListener("pointerup",e=>{if(!w||!e.isPrimary)return;const t=e.clientX-w.x,a=e.clientY-w.y;w=null,!(Math.abs(t)<45||Math.abs(t)<=Math.abs(a))&&b(u+(t<0?1:-1))});S.addEventListener("pointercancel",()=>{w=null});S.addEventListener("dragstart",e=>e.preventDefault());const Te=[...document.querySelectorAll(".owner-interview details")];async function Pe(e,t){if(e.dataset.animating==="true")return;const a=e.querySelector(".owner-interview__answer");if(!a)return;if(T.matches||typeof a.animate!="function"){e.open=t;return}e.dataset.animating="true",t&&(e.open=!0);const i=t?0:a.getBoundingClientRect().height,s=t?a.scrollHeight:0,n=a.animate([{height:`${i}px`,opacity:t?0:1,transform:t?"translateY(-0.45rem)":"translateY(0)"},{height:`${s}px`,opacity:t?1:0,transform:t?"translateY(0)":"translateY(-0.45rem)"}],{duration:t?440:340,easing:"cubic-bezier(.22, .61, .36, 1)",fill:"both"});try{await n.finished}catch{delete e.dataset.animating;return}t||(e.open=!1),n.cancel(),delete e.dataset.animating}Te.forEach(e=>{e.querySelector("summary").addEventListener("click",a=>{a.preventDefault(),Pe(e,!e.open)})});document.addEventListener("languagechange",()=>{ge(Z),M(G.getAttribute("aria-expanded")==="true"),ne(),O({announce:!0}),requestAnimationFrame(k)});Ge();O();ne();if(!T.matches&&"IntersectionObserver"in window){document.documentElement.classList.add("has-motion");const e=new IntersectionObserver(t=>{t.forEach(a=>{a.isIntersecting&&(a.target.classList.add("is-visible"),e.unobserve(a.target))})},{rootMargin:"0px 0px -8%",threshold:.08});document.querySelectorAll(".reveal, .wheel-reveal").forEach(t=>e.observe(t))}
