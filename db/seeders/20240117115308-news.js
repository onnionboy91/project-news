'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'News',
      [
        {
          tittle: 'Starlink запустила тариф для провайдеров Community Gateways со скоростью до 10 Гбит/с и ценой от $75 тыс. в месяц',
          description: 'В начале января 2024 года компания Starlink запустила тариф для провайдеров и операторов связи в удалённый регионах мира в зонах своего присутствия под названием Community Gateways. В рамках этого предложения корпоративным заказчикам предоставляются специальные сетевые комплекты для организации каналов связи со скоростью до 10 Гбит/с и стоимостью от $75 тыс. в месяц. Предполагается, что услуга Community Gateways позволит провайдерам обеспечить свои филиалы или заказчиков высокоскоростной связью в отдалённых районах, где есть поселения или предприятия. В рамках этого корпоративного тарифа SpaceX предоставляет сетевой наземный комплекс, обеспечивающий широкополосную связь со скоростью до 10 Гбит/с с использованием орбитальной группировки спутников Starlink',
          img: 'https://habrastorage.org/r/w1560/webt/eu/9q/7e/eu9q7e2n1-dihmia2ao_76mwr0u.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tittle: 'Исследователи из ОАЭ представили нейросеть, правдоподобно имитирующую почерк человека',
          description: 'Исследователи из Университета искусственного интеллекта Мухаммада ибн Заида (MBZUAI, Mohamed bin Zayed University of Artificial Intelligence) разработали нейросеть, которая правдоподобно имитирует почерк человека. Особенность технологии в том, что для обучения модели используется небольшой фрагмент рукописного текста.   Пока нейросеть может работать с текстами на английском и французском языках, а исследователи продолжают обучать модель на арабских источниках. Изначально планировалось использовать генеративно-состязательную сеть, но в итоге решили перейти на ViT (Vision Transformers). Также отмечается, что для обучения модели достаточно всего несколько абзацев текста.Полученный метод сравнили с другими доступными решениями и провели опрос среди небольшой группы из сотни человек. Им предоставили исходную рукопись и сгенерированные на его основе образцы. В итоге более 80% опрошенных выбрали вариант, созданный нейросетью исследователей из ОАЭ.В Университете отмечают, что релиз такой модели сопряжён с рисками. К примеру, ею могут воспользоваться злоумышленники. Поэтому сейчас исследователи работают над системой, которая сможет быстро отличать сгенерированный почерк от оригинального.       ',
          img: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/ac2/54f/6d8/ac254f6d8b478392550764deb7b6e683.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tittle: 'Политика Apple App Store теперь позволяет разработчикам из США проводить внешние платежи',
          description: 'Apple обновила политику App Store, позволив разработчикам из США проводить внешние платежи. Создатели игр и приложений по-прежнему будут платить Apple, однако вместо комиссии в 30% теперь будет полагаться 27% или 12%, если разработчик участвует в программе App Store Small Business Program.',
          img: 'https://habrastorage.org/r/w1560/webt/sp/zj/ui/spzjuiffmgprz2eowrh_uava5ko.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tittle: 'Вышел Wine 9.0 с начальной поддержкой Wayland',
          description: 'Поддержка Wayland позволяет экспериментально использовать нативную поддержку Wayland в качестве альтернативы X11/XWayland. Однако функция пока не включена по умолчанию.В Wine 9.0 включили поддержку Arm64 и улучшенный режим WoW64, хотя он также пока не включен по умолчанию.Также в новой версии:обновлён драйвер Vulkan;улучшили Direct3D;завершили работу над DirectMusic внедрили экспорт протоколов URI/URL как обработчиков URL на Linux-рабочем столе;начали использовать версию Windows 10 по умолчанию в новых префиксах Wine.В версию внедрили сотни исправлений и функций для запуска современных Windows-игр и приложений вне экосистемы Microsoft.Wine 9.0 поставляется со всеми последними пакетами и зависимостями, включая VKD3D 1.10, более новую версию Mono, Zlib 1.3 и другие. В вышедшем в январе 2023 года Wine 8.0 завершили работу по переводу модулей Wine в формат PE, внедрили Print Processor, поддержку эффектов в Direct2D, новый компилятор шейдеров для языка HLSL в Direct3D, а также улучшили поддержку игровых контроллеров.',
          img: 'https://habrastorage.org/getpro/habr/upload_files/cb3/89d/911/cb389d911b6c28832b3bcbf5625a7994.JPG',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tittle: 'В Картах Google появилась возможность прокладывать маршруты внутри туннелей',
          description: 'В Google Карты внедрят инструмент, который позволит более эффективно прокладывать маршруты внутри туннелей. Версия приложения для Android начнёт использовать маячки Bluetooth для отслеживания местоположения в тех местах, куда не могут дойти сигналы GPS.Сигналы Bluetooth будут передавать данные о местоположении на смартфон. Затем приложение будет использовать эту информацию вместе с мобильным подключением устройства, чтобы «предоставлять данные о дорожном движении в реальном времени, как при обычном подключении GPS».Функция будет работать только в том случае, если в туннеле работают маячки Bluetooth.Google внедряет новую опцию после покупки сервиса навигации Waze в 2013 году. У него уже есть партнёрские отношения с властями Нью-Йорка, Чикаго, Бостона, Парижа, Рио-де-Жанейро, Брюсселя и других городов, где установлены Bluetooth-маячки. В 2022 году команду Waze объединили с группой, контролирующей Google Карты.Чтобы включить функцию в Картах Google, нужно выбрать свой профиль, перейти в «Настройки» > «Настройки навигации», прокрутить страницу вниз и включить туннельные маяки Bluetooth (Bluetooth tunnel beacons), а затем кликнуть «Разрешить» в уведомлении на их включение. ',
          img: 'https://habrastorage.org/getpro/habr/upload_files/54d/ae9/1f3/54dae91f3edea685c40a82c4a24fbe03.JPG',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tittle: 'Synopsys приобрела компанию в сфере программной инженерии Ansys за $35 млрд',
          description: 'Американский производитель программного обеспечения для проектирования микросхем Synopsys объявил о приобретении компании в сфере программной инженерии Ansys за $35 млрд. Сделка стала крупнейшей в технологическом секторе после того, как Broadcom купила VMware за $69 млрд в прошлом году.',
          img: 'https://habrastorage.org/r/w1560/webt/yx/mx/xt/yxmxxtazokgtbmgf7xyrgtxe4nc.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tittle: 'CROC&TALK. Руководитель 1С в потоке: как управлять собой и командой',
          description: '25 января встречаемся у нас в офисе на CROC&TALK: «Руководитель 1С в потоке: как управлять собой и командой».Наши Оля и Юля поделятся опытом управления командойна примерах из практики и расскажут, на чем руководителю следует фокусироваться в новом году. На доклады — по полчаса времени, после — время для вопросов и нетворкинга. А в самом конце сыграем в игру по постановке задач и управлению командой',
          img: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/2f7/92b/118/2f792b11848937bc844b739c009c460e.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tittle: 'Google удалила игру из загрузок пользователей без их ведома',
          description: 'Пользователи смартфонов с Android, вероятно, столкнулись с тем, что Google удалила из их загрузок игру Wayward Souls. Ранее она исчезла из Google Play.Wayward Souls, выпущенная в 2014 году для Android, представляет собой классическую ролевую игру, имеющую сходство с Secrets of Mana и другими классическими играми. Она по-прежнему доступна для других платформ, но при попытке перейти на страницу загрузки в Google Play Store появляется ошибка 404. До удаления игры из магазина у неё был рейтинг 4,0, 10 тысяч обзоров и более 100 тысяч загрузок.В некоторых случаях Google удаляет из Play Store приложения и игры, которые были признаны вредоносными или проблемными в других отношениях. Однако удаление Wayward Souls, похоже, не связано с этим. Возможно, что разработчики сами исключили её, либо игру признали нарушающей политику разработки или соглашения Google о распространении.Компания заявляет, что пользователи Android могут продолжать использовать удалённые из магазина игры и приложения. Однако возврат денег за покупку возможен только в определённых случаях, в том числе, когда кто-то другой совершил покупку, используя учётную запись или карту пользователя. В ЕС и Великобритании владельцы смартфонов могут получить возмещение в течение 48 часов после совершения покупки.Таким образом, покупателям игры Wayward Souls не положена компенсация.Пользователи Android могут сохранять установленные приложения и игры. Google не сможет удалить их, если на устройстве не установлен Google Play.',
          img: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/f73/03c/96b/f7303c96b2cdee92967782a09c9d5629.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tittle: 'Система охлаждения для серверных стоек на 300 кВт',
          description: `Aligned представила новую систему жидкостного охлаждения под названием DeltaFlow, способную увеличить плотность размещения вычислительных мощностей до 300 кВт на стойку, как сообщает ресурс Datacenter Dynamics.`,
          img: 'https://habrastorage.org/r/w1560/webt/a4/bu/4n/a4bu4nxo0m6ukzrnxovturydsf0.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tittle: 'Raspberry Pi RP2040 Macropad получил поддержку магнитных модулей для расширения',
          description: 'Разработчик Салим Бенбузиян создал Macropad Ocreeb MK2 на базе Raspberry Pi RP2040, который использует магниты для добавления и удаления модулей.По словам Бенбузиана, идея MK2 заключалась в том, чтобы создать макропад с набором дополнительных модулей, которые можно было бы легко прикрепить в различных конфигурациях с помощью магнитов. Проект потребовалось разрабатывать с нуля, включая различные индивидуальные печатные платы, а также корпуса для каждого модуля. Бенбузиян использовал Fusion 360 для проектирования печатных плат и внешних корпусов. Платы он заказал в Интернете, но корпуса напечатал на 3D-принтере UltraCraft Reflex от HeyGear.Основная питающая плата — это Xiao RP2040. Основной модуль макропада также оснащён OLED-экраном. На внешних краях всех модулей имеются магниты, а на нижней стороне установлены светодиоды RGB. Панель также получила поворотные энкодеры, дополнительные кнопки и ползунки. Она использует прошивку KMF, а также платформу Seesaw от Adafruit.',
          img: 'https://habrastorage.org/getpro/habr/upload_files/070/181/07c/07018107cccb3599de373c1452dc5172.JPG',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tittle: 'Google обновила предупреждение Chrome о режиме инкогнито после иска об отслеживании',
          description: 'После того, как пользователи обвинили Google в незаконном отслеживании активности просмотра даже в режиме инкогнито Chrome, компания незаметно обновила описание этой функции. Изменённый текст можно найти в последней Canary-сборке Google Chrome версии 122.0.6251.0. Он звучит так: «Другие пользователи устройства не увидят вашу активность, поэтому вы сможете просматривать страницы более конфиденциально. Это не повлияет на сбор данных веб-сайтами, которые вы посещаете, и службами, которые они используют, включая Google. Загрузки, закладки и элементы списка чтения будут сохранены».Старый текст не включал информацию об отслеживании Google: «Теперь вы можете просматривать страницы конфиденциально, и другие люди, использующие это устройство, не увидят вашу активность. Однако загрузки, закладки и элементы списка чтения будут сохранены».Таким образом, активность пользователя по-прежнему может быть доступна посещаемым сайтам, администратору системы, в том числе работодателю или учебному заведению, а также интернет-провайдеру. Обновлённый текст предоставляет пользователям «ещё больше информации о режиме инкогнито», заявил представитель Google Хосе Кастаньеда.',
          img: 'https://habrastorage.org/getpro/habr/upload_files/d98/db3/3de/d98db33de135503ac47ebda76977434b.JPG',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tittle: 'Исходные коды оригинальных тайтлов Doom, Doom II и инструментарий idsetup официально получили лицензию GPL-2.0',
          description: '16 января 2024 года в репозитории id Software на GitHub произошло долгожданное изменение для многих разработчиков в мире. Исходные коды оригинальных тайтлов Doom, Doom II и инструментарий idsetup официально получили лицензию GPL-2.0.Профильные эксперты и разработчики игр считают, что лицензия GPL позволит Doom жить и развиваться вечно.10 декабря 2023 года в день празднования 30-летия выпуска Doom (культовой игры 1993 года выпуска) Джон Ромеро выпустил новый эпизод для Doom под названием Sigil II. В дополнении SIGIL II v1.0 Megawad бесплатно доступны девять одиночных уровней и два уровня только для режима Deathmatch. Для запуска Sigil II потребуется официальная версия оригинальной игры Doom.В начале 2016 года Ромеро создал новый уровень E1M8B для оригинальной игры Doom.',
          img: 'https://habrastorage.org/r/w1560/webt/xt/pb/jy/xtpbjyvnzjo-frnn9c-yyfq8se0.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('News', null, {})
  }
};
