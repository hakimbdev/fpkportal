import Layout from "@/components/layout/layout";

export default function CheckStatusLoading() {
  return (
    <Layout>
      <div className="relative bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="h-10 w-64 bg-blue-500 animate-pulse rounded-md mb-4"></div>
          <div className="h-6 w-96 bg-blue-500 animate-pulse rounded-md"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              <div className="h-8 w-56 bg-gray-200 animate-pulse rounded-md"></div>
              <div className="flex">
                <div className="flex-1 h-10 bg-gray-200 animate-pulse rounded-l-md"></div>
                <div className="w-24 h-10 bg-gray-300 animate-pulse rounded-r-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 