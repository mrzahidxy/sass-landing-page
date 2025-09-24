export default function RootLoading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4 bg-white text-gray-700">
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"
        aria-hidden="true"
      />
      <p className="text-sm font-medium">Preparing TaskMasterPro...</p>
    </div>
  );
}

