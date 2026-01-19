import {Button} from "@/components/ui/button";

export default function Home() {
  return (
      <div>
          <h1 className="text-3xl font-bold underline">Hello World</h1>
          <Button className={'flex bg-background transition-all text-black'}>
              Hello World
          </Button>
    </div>
  );
}
