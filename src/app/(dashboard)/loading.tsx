function SkeletonNavBar() {
  return <div className="h-16 w-full animate-pulse bg-gray-300"></div>;
}

function SkeletonPage() {
  return (
    <div className="p-5 space-y-4">
      <div className="h-8 w-1/4 animate-pulse bg-gray-300 rounded"></div>
      <div className="h-40 w-full animate-pulse bg-gray-300 rounded"></div>
    </div>
  );
}

export default function Loading() {
  return (
    <>
      <SkeletonNavBar />
      <main className="pt-5">
        <SkeletonPage />
      </main>
    </>
  );
}
