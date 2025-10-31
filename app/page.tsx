import { Card } from "@/components/ui/card";
import Weather from "./_components/Weather";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-4 p-4">
          <Card className="aspect-video w-225 max-w-full">

          </Card>
          <Card className="flex-1 flex items-start lg:items-end p-6">
            <Weather />
          </Card>
        </div>
      </div>
    </div>
  );
}
