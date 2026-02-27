import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import { courses, categories } from "@/data/courses";

export default function HomePage() {
  const featuredCourses = courses.filter((c) => c.bestseller).slice(0, 4);
  const popularCourses = courses.slice(0, 8);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-purple-700/50 text-purple-200 text-xs font-medium rounded-full mb-4 border border-purple-600/30">
              New courses added every week
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Learn without{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                limits
              </span>
            </h1>
            <p className="text-lg text-purple-200 mb-8 leading-relaxed">
              Start, switch, or advance your career with over 5,000 courses from world-class
              instructors. Gain in-demand skills at your own pace.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Explore Courses
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-purple-400 text-purple-100 font-semibold rounded-lg hover:bg-purple-800/50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-purple-600">5,000+</div>
              <div className="text-sm text-gray-600 mt-1">Courses</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-purple-600">10M+</div>
              <div className="text-sm text-gray-600 mt-1">Students</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-purple-600">500+</div>
              <div className="text-sm text-gray-600 mt-1">Expert Instructors</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-purple-600">4.7</div>
              <div className="text-sm text-gray-600 mt-1">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Browse by Category</h2>
        <p className="text-gray-600 mb-8">Explore our most popular categories</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const icons: Record<string, string> = {
              "Web Development": "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
              "Data Science": "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
              "Mobile Development": "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
              "Programming Languages": "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
              Design: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
              Business: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
              Marketing: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
              Photography: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z",
            };
            return (
              <Link
                key={category}
                href={`/courses?category=${encodeURIComponent(category)}`}
                className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-purple-200 transition-colors">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icons[category] || icons["Web Development"]} />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-800 group-hover:text-purple-600 transition-colors">
                  {category}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Featured Courses</h2>
              <p className="text-gray-600">Hand-picked by our team of experts</p>
            </div>
            <Link
              href="/courses"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
            >
              View all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Most Popular</h2>
            <p className="text-gray-600">Courses loved by thousands of students</p>
          </div>
          <Link
            href="/courses"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
          >
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start learning today
          </h2>
          <p className="text-purple-200 text-lg mb-8 max-w-xl mx-auto">
            Join millions of learners worldwide. Get unlimited access to thousands of courses.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-8 py-3.5 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Started for Free
          </Link>
        </div>
      </section>
    </div>
  );
}
