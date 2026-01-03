import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const equipmentData = [
  {
    id: 1,
    name: "Экскаватор",
    description: "Гусеничный экскаватор для земляных работ",
    image: "https://cdn.poehali.dev/projects/848cd30d-d4a1-4e1a-8c6e-d2aee870d48b/files/10004228-7d53-4d2c-b20a-3c8879fa6afc.jpg",
    icon: "Shovel"
  },
  {
    id: 2,
    name: "Бульдозер",
    description: "Мощный бульдозер для планировки территории",
    image: "https://cdn.poehali.dev/projects/848cd30d-d4a1-4e1a-8c6e-d2aee870d48b/files/be639b76-b8b8-4ba0-a2ca-109442cb8376.jpg",
    icon: "Hammer"
  },
  {
    id: 3,
    name: "Кран",
    description: "Автокран грузоподъёмностью до 25 тонн",
    image: "https://cdn.poehali.dev/projects/848cd30d-d4a1-4e1a-8c6e-d2aee870d48b/files/388e4715-da0c-4892-9f6b-02ee94e7acad.jpg",
    icon: "Truck"
  },
  {
    id: 4,
    name: "Погрузчик",
    description: "Фронтальный погрузчик для сыпучих материалов",
    image: "https://cdn.poehali.dev/projects/848cd30d-d4a1-4e1a-8c6e-d2aee870d48b/files/be639b76-b8b8-4ba0-a2ca-109442cb8376.jpg",
    icon: "Container"
  }
];

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary flex items-center gap-2">
            <Icon name="Wrench" size={32} className="text-primary" />
            ООО СТ РАВИКА
          </h1>
          <nav className="hidden md:flex gap-6">
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors font-medium">
              Каталог
            </a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors font-medium">
              Контакты
            </a>
          </nav>
          <a href="tel:+79270624639">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
              Аренда спецтехники
              <span className="block text-primary">под любые задачи</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Современная техника с опытными операторами. Работаем 24/7 по всему городу
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                <Icon name="Search" size={20} className="mr-2" />
                Выбрать технику
              </Button>
              <Button size="lg" variant="outline" className="border-2 text-lg px-8 py-6">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <Icon name="Truck" size={400} className="text-primary" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 animate-scale-in">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-2">Работаем 24/7</h3>
                <p className="text-muted-foreground">Круглосуточная подача техники на объект</p>
              </div>
            </div>
            <div className="flex items-start gap-4 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Shield" size={24} className="text-secondary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-2">Полная страховка</h3>
                <p className="text-muted-foreground">Все риски застрахованы</p>
              </div>
            </div>
            <div className="flex items-start gap-4 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Users" size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-2">Опытные операторы</h3>
                <p className="text-muted-foreground">Профессионалы с опытом от 5 лет</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Каталог техники
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современное оборудование для любых строительных и земляных работ
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentData.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Icon name={item.icon as any} size={24} className="text-primary" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">{item.name}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Свяжитесь с нами
              </h2>
              <p className="text-xl text-muted-foreground">
                Оставьте заявку и мы перезвоним в течение 15 минут
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg mb-1">Телефон</h3>
                        <a href="tel:+79270624639" className="text-primary text-xl font-semibold hover:underline">
                          +7 (927) 062-46-39
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg mb-1">Email</h3>
                        <a href="mailto:info@specteh.ru" className="text-secondary text-xl font-semibold hover:underline">
                          info@specteh.ru
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg mb-1">Адрес</h3>
                        <p className="text-muted-foreground text-lg">
                          г. Москва, ул. Строительная, 15
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Оставить заявку</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input 
                        type="tel"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Сообщение"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                        className="resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 text-lg">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4 flex items-center gap-2">
                <Icon name="Wrench" size={28} className="text-primary" />
                ООО СТ РАВИКА
              </h3>
              <p className="text-background/80">
                Профессиональная аренда спецтехники с 2010 года
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Навигация</h4>
              <ul className="space-y-2">
                <li><a href="#catalog" className="text-background/80 hover:text-primary transition-colors">Каталог</a></li>
                <li><a href="#contacts" className="text-background/80 hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (927) 062-46-39
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@specteh.ru
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 ООО СТ РАВИКА. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
}