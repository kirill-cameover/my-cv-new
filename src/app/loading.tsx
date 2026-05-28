export default function Loading() {
  return (
    <div className="container py-20">
      <div className="space-y-8">
        <div className="h-12 w-2/3 animate-pulse rounded-lg bg-card" />
        <div className="h-4 w-1/2 animate-pulse rounded-lg bg-card" />
        <div className="h-4 w-3/4 animate-pulse rounded-lg bg-card" />
        <div className="h-64 w-full animate-pulse rounded-2xl bg-card" />
      </div>
    </div>
  );
}
