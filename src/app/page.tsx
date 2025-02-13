import { Textarea } from "@/components/ui/textarea";


export default function Home() {
  return (
    <main className="fixed h-full w-full flex flex-col bg-muted ">
      <div className="container h-full w-full flex flex-col py-8">
        <div></div>
        <form>
          <Textarea 
            className="w-full max-w-[600px] mx-auto text-lg"
            placeholder="What's on your mind?"
          />
        </form>
      </div>
    </main>
  );
}
