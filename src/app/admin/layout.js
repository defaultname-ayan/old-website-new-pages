import { getSession } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminLayout({ children }) {
  const session = await getSession();

  // If no session, redirect to login
  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Admin Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link
                  href="/admin/dashboard"
                  className="text-black font-bold text-xl"
                >
                  Admin Panel
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  href="/admin/dashboard"
                  className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Dashboard
                </Link>
                {session.role === "SUPER_ADMIN" && (
                  <Link
                    href="/admin/users"
                    className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Users
                  </Link>
                )}
                {(session.role === "SUPER_ADMIN" ||
                  session.role === "MODERATOR") && (
                  <>
                    <Link
                      href="/admin/blog"
                      className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/admin/jobs"
                      className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Jobs
                    </Link>
                    <Link
                      href="/admin/projects"
                      className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Projects
                    </Link>
                    <Link
                      href="/admin/team"
                      className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Team
                    </Link>
                    <Link
                      href="/admin/testimonials"
                      className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Testimonials
                    </Link>
                    <Link
                      href="/admin/fieldvisit"
                      className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Field Visit Entry
                    </Link>
                    <Link
                      href="/admin/metrics"
                      className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Metrics
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="ml-3 relative">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-black">
                    {session.name} ({session.role})
                  </span>
                  <form action="/api/auth/logout" method="POST">
                    <button
                      type="submit"
                      className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
                    >
                      Logout
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">{children}</div>
      </main>
    </div>
  );
}
