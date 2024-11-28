import { MenuBuilder } from "@/components/menu-builder";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="container px-4 py-16 mx-auto">
      <div className="mx-auto space-y-8 max-w-5xl">
        <header className="space-y-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            Menu Maker
          </h1>
          <p className="text-xl text-slate-600">
            Créez et personnalisez facilement vos menus
          </p>
        </header>

        <Card className="shadow-xl">
          <CardContent className="p-6">
            <MenuBuilder />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
