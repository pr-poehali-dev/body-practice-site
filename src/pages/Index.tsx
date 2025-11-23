import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'method', 'services', 'philosophy', 'about', 'contacts'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'services', label: 'Услуги' },
    { id: 'philosophy', label: 'Философия' },
    { id: 'about', label: 'Обо мне' },
    { id: 'contacts', label: 'Контакты' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-light tracking-wider">V.G. Method</div>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm tracking-wide transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary font-medium' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
                  Valeria Gedz
                </h1>
                <div className="h-px w-24 bg-secondary"></div>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                Private-практики для тех, кто выбирает лучшее
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                V.G. Method — это персональный протокол возвращения к вашим истокам здоровья, синтез
                точности медицинского подхода и мудрости натуропатических практик
              </p>
              <Button
                size="lg"
                className="mt-6 px-8 py-6 text-base tracking-wide"
                onClick={() => scrollToSection('contacts')}
              >
                Записаться на консультацию
              </Button>
            </div>
            <div className="animate-fade-in-up">
              <img
                src="https://cdn.poehali.dev/projects/a3d578d9-4631-4679-81f8-bb11479d6b4e/files/be19256c-4d3b-4646-9096-408c1e86b66b.jpg"
                alt="V.G. Method"
                className="w-full h-[600px] object-cover rounded-sm shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="method" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-light">Метод V.G.</h2>
            <div className="h-px w-16 bg-secondary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-none bg-background/50">
              <CardContent className="pt-8 space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mx-auto">
                  <Icon name="Sparkles" size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-light">Персонализация</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Полное погружение в процесс трансформации, где вы становитесь соавтором своего
                  обновлённого состояния
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-none bg-background/50">
              <CardContent className="pt-8 space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mx-auto">
                  <Icon name="Heart" size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-light">Натуропатия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Синтез медицинской точности и вековой мудрости натуропатических практик для
                  глубинного восстановления
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-none bg-background/50">
              <CardContent className="pt-8 space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mx-auto">
                  <Icon name="Shield" size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-light">Private-формат</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Эксклюзивный подход к каждому клиенту. Конфиденциальность и индивидуальная
                  программа восстановления
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-light">Услуги</h2>
            <div className="h-px w-16 bg-secondary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-border/50 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-3xl font-light">Персональная диагностика</h3>
                  <div className="h-px w-12 bg-secondary"></div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Глубокий анализ текущего состояния организма с применением современных методов
                  диагностики и натуропатического подхода
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Комплексная оценка состояния здоровья</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Индивидуальный протокол рекомендаций</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Сопровождение в течение месяца</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-4"
                  onClick={() => scrollToSection('contacts')}
                >
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-border/50 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-3xl font-light">Годовая программа</h3>
                  <div className="h-px w-12 bg-secondary"></div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Полное погружение в процесс трансформации с постоянной поддержкой и корректировкой
                  программы восстановления
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Ежемесячные персональные сессии</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Постоянная связь и корректировка протокола</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Системная трансформация за год</span>
                  </li>
                </ul>
                <Button className="w-full mt-4" onClick={() => scrollToSection('contacts')}>
                  Начать трансформацию
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="philosophy" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-4xl md:text-5xl font-light">Философия</h2>
            <div className="h-px w-16 bg-secondary mx-auto"></div>
          </div>
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p className="text-center italic text-xl">
              "Для тех, кто исчерпал возможности стандартной медицины и готов к глубинному диалогу с
              собственным телом"
            </p>
            <p>
              V.G. Method — это не набор шаблонных решений. Это персонализированная система
              самовосстановления, где каждый протокол создаётся индивидуально, учитывая уникальность
              вашего организма и жизненной ситуации.
            </p>
            <p>
              Мы работаем с теми, кто ценит внимание к деталям, готов инвестировать в своё здоровье
              и понимает ценность экспертного сопровождения. Private-формат гарантирует полную
              конфиденциальность и максимальную вовлечённость в процесс трансформации.
            </p>
            <p>
              Наш подход объединяет точность современной медицины с мудростью натуропатических
              практик, создавая синергию, которая позволяет организму раскрыть свой природный
              потенциал к самовосстановлению.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl font-light">Valeria Gedz</h2>
                <div className="h-px w-16 bg-secondary"></div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Эксперт по премиальным телесным практикам и натуропатии с многолетним опытом работы
                с клиентами, которые выбирают индивидуальный подход к здоровью.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Моя миссия — помочь вам вернуться к истокам вашего здоровья, раскрыть природный
                потенциал организма и создать устойчивую систему самовосстановления, которая будет
                работать на вас всю жизнь.
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="GraduationCap" size={24} className="text-secondary" />
                  <span>Сертифицированный натуропат</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Award" size={24} className="text-secondary" />
                  <span>Эксперт по телесным практикам</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Users" size={24} className="text-secondary" />
                  <span>Private-формат работы</span>
                </div>
              </div>
            </div>
            <div className="bg-muted/30 rounded-sm p-8 space-y-6">
              <h3 className="text-2xl font-light">Специализация</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Персональные протоколы восстановления</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Натуропатические практики и омоложение</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Системная диагностика организма</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Работа с хроническими состояниями</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Программы долгосрочного сопровождения</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-light">Начните свой путь</h2>
            <div className="h-px w-16 bg-primary-foreground/30 mx-auto"></div>
            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Запишитесь на первичную консультацию, чтобы обсудить вашу ситуацию и определить
              оптимальный протокол работы
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
                <CardContent className="pt-6 text-center space-y-3">
                  <Icon name="Mail" size={32} className="mx-auto text-primary-foreground" />
                  <p className="text-sm">valeria@vgmethod.com</p>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
                <CardContent className="pt-6 text-center space-y-3">
                  <Icon name="Phone" size={32} className="mx-auto text-primary-foreground" />
                  <p className="text-sm">+7 (999) 123-45-67</p>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
                <CardContent className="pt-6 text-center space-y-3">
                  <Icon name="MessageCircle" size={32} className="mx-auto text-primary-foreground" />
                  <p className="text-sm">WhatsApp / Telegram</p>
                </CardContent>
              </Card>
            </div>
            <Button
              size="lg"
              variant="secondary"
              className="mt-8 px-8 py-6 text-base tracking-wide"
            >
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 V.G. Method — Valeria Gedz. Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
