export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-t-blue-600 border-blue-200 rounded-full animate-spin"></div>
        <h3 className="text-lg font-medium">Loading Admissions Form...</h3>
      </div>
    </div>
  )
} 