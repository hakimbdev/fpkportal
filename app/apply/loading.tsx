import Layout from "@/components/layout/layout";

export default function ApplyLoading() {
  return (
    <Layout>
      <div className="relative bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="h-10 w-64 bg-blue-500 animate-pulse rounded-md mb-4"></div>
          <div className="h-6 w-96 bg-blue-500 animate-pulse rounded-md"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="space-y-6">
            <div className="h-8 w-48 bg-gray-200 animate-pulse rounded-md"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="h-5 w-24 bg-gray-200 animate-pulse rounded-md"></div>
                <div className="h-10 w-full bg-gray-200 animate-pulse rounded-md"></div>
              </div>
              <div className="space-y-2">
                <div className="h-5 w-24 bg-gray-200 animate-pulse rounded-md"></div>
                <div className="h-10 w-full bg-gray-200 animate-pulse rounded-md"></div>
              </div>
              <div className="space-y-2">
                <div className="h-5 w-24 bg-gray-200 animate-pulse rounded-md"></div>
                <div className="h-10 w-full bg-gray-200 animate-pulse rounded-md"></div>
              </div>
              <div className="space-y-2">
                <div className="h-5 w-24 bg-gray-200 animate-pulse rounded-md"></div>
                <div className="h-10 w-full bg-gray-200 animate-pulse rounded-md"></div>
              </div>
            </div>
            <div className="h-10 w-32 bg-gray-200 animate-pulse rounded-md mx-auto"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 