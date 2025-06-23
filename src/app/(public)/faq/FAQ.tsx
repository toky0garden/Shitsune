import { Card, CardContent } from "@/components/ui/card";
import {
  MessageSquareTextIcon,
  UsersIcon,
  RocketIcon,
  NewspaperIcon,
} from "lucide-react";

export const getStaticProps = async () => {
  return { props: {} };
};

export function FAQ() {
  return (
    <Card className="max-w-3xl mx-auto border-none shadow-none bg-transparent">
      {/* SWIPER СДЕЛАТЬ */}

      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard
            icon={<MessageSquareTextIcon className="w-6 h-6" />}
            title="Микроблогинг"
            description="Публикуйте короткие сообщения и мысли"
          />
          <FeatureCard
            icon={<UsersIcon className="w-6 h-6" />}
            title="Социальное взаимодействие"
            description="Общайтесь с другими пользователями"
          />
          <FeatureCard
            icon={<RocketIcon className="w-6 h-6" />}
            title="Мгновенная связь"
            description="Быстрый обмен сообщениями в чатах"
          />
          <FeatureCard
            icon={<NewspaperIcon className="w-6 h-6" />}
            title="Лента новостей"
            description="Следите за обновлениями"
          />
        </div>
      </CardContent>
    </Card>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg">
      <div className="p-3 mb-4 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
