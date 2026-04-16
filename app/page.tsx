import HomeComponent from "@/components/Home";
import TodoAndPhotoList from "@/components/TodoAndPhotoList";

export default function Landing() {
  return (
    <div className="size-full flex flex-col items-center justify-center gap-8 bg-slate-200 p-4">
      <HomeComponent />
      <TodoAndPhotoList />
    </div>
  );
}
