const IMAGES = {
  hero: "https://cdn.poehali.dev/projects/98d8f3aa-24b2-49dd-98ee-838f3f87bb35/files/41c1f2e8-4462-464a-896e-99dd30408b44.jpg",
  burger: "https://cdn.poehali.dev/projects/98d8f3aa-24b2-49dd-98ee-838f3f87bb35/files/c2d8505a-30b6-4875-aaee-6c5fe9952d9c.jpg",
  milkshake: "https://cdn.poehali.dev/projects/98d8f3aa-24b2-49dd-98ee-838f3f87bb35/files/dcd20166-f18b-410e-b3de-1486698194f5.jpg",
  pizza: "https://cdn.poehali.dev/projects/98d8f3aa-24b2-49dd-98ee-838f3f87bb35/files/0a45e518-48f7-497c-9437-2e79b4db635a.jpg",
  gallery1: "https://cdn.poehali.dev/projects/98d8f3aa-24b2-49dd-98ee-838f3f87bb35/files/d4f22881-6b41-415b-ba26-201ed45d713c.jpg",
  gallery2: "https://cdn.poehali.dev/projects/98d8f3aa-24b2-49dd-98ee-838f3f87bb35/files/97145c1a-bed8-4a8d-a64f-776db6540c8e.jpg",
  gallery3: "https://cdn.poehali.dev/projects/98d8f3aa-24b2-49dd-98ee-838f3f87bb35/files/d7d4ca22-58f6-4226-8436-8afb7b434079.jpg",
  gallery4: "https://cdn.poehali.dev/projects/98d8f3aa-24b2-49dd-98ee-838f3f87bb35/files/9ddc9263-e389-45ec-881b-9f538696b03b.jpg",
};

export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">КассетА</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Афиша</a>
          <a href="#">Адрес</a>
        </nav>
        <button className="btn-cta">Забронировать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ПЕРЕМОТАЙ
              <br />
              В <span>90-е</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Ретро-кафе, где играет Nirvana, на столах стоят кассетники, а молочный коктейль
              такой, как ты помнишь с детства.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Смотреть меню
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Забронировать стол
              </button>
            </div>
          </div>
          <div className="hero-img" style={{ backgroundImage: `url(${IMAGES.hero})` }}>
            <div className="sticker">
              ХИТЫ
              <br />
              90-х
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #КАССЕТА
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              VHS ❤️
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * КАССЕТНАЯ АТМОСФЕРА * МОЛОЧНЫЕ КОКТЕЙЛИ * ПЛЕЙЛИСТ 90-х * ОТКРЫТЫ ДО 23:00 * НОСТАЛЬГИЯ НА ВКУС *
            КАССЕТНАЯ АТМОСФЕРА * МОЛОЧНЫЕ КОКТЕЙЛИ * ПЛЕЙЛИСТ 90-х * ОТКРЫТЫ ДО 23:00 * НОСТАЛЬГИЯ НА ВКУС
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ХИТ ПАРАД</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img src={IMAGES.burger} alt="Бургер Нирвана" />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Бургер «Нирвана»</h3>
                  <span className="price">490 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Сочная котлета, хрустящий лук, фирменный соус «гранж» и маринованные огурчики.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)", color: "white" }}>
                Легенда меню
              </span>
              <img src={IMAGES.milkshake} alt="Коктейль Бумбокс" />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Коктейль «Бумбокс»</h3>
                  <span className="price">320 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Клубника, ваниль, молоко и лёд — как в детстве у бабушки.</p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Новинка
              </span>
              <img src={IMAGES.pizza} alt="Пицца Тамагочи" />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Пицца «Тамагочи»</h3>
                  <span className="price">650 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Четыре сыра, пепперони и базилик на хрустящем тонком тесте.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">АТМОСФЕРА? ЗАСЧИТАНА.</h2>
            <p className="vibe-text">
              Кассеты на полках, неоновые вывески, диваны из 90-х и плейлист, который ты знаешь
              наизусть. Мы не просто кормим — мы возвращаем тебя туда, где всё было проще и
              вкуснее. Приходи один, с друзьями или на свидание — тут хорошо всем.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @kassetA
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img src={IMAGES.gallery1} alt="Атмосфера кафе" />
            </div>
            <div className="social-item">
              <img src={IMAGES.gallery2} alt="Гости кафе" />
            </div>
            <div className="social-item">
              <img src={IMAGES.gallery3} alt="Неоновые вывески" />
            </div>
            <div className="social-item">
              <img src={IMAGES.gallery4} alt="Десерты" />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">КассетА</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Ретро-кафе в стиле 90-х. Где кассеты не кончаются, а вкус — как в детстве. С любовью к эпохе.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Меню</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>О нас</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Политика</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Контакты</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Чт: 11:00 – 23:00</li>
            <li>Пт–Сб: 11:00 – 01:00</li>
            <li>Вс: 12:00 – 22:00</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li><a href="https://instagram.com/kassetA" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }}>@kassetA</a></li>
            <li><a href="tel:+79619963779" style={{ color: "inherit", textDecoration: "none" }}>+7 (961) 996-37-79</a></li>
            <li>пр. Строителей, 45, Барнаул</li>
          </ul>
        </div>
      </footer>
    </>
  );
}