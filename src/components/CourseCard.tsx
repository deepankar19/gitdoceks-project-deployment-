import Link from "next/link";
import type { Course } from "@/data/courses";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= Math.floor(rating) ? "text-yellow-400" : star - 0.5 <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.id}`} className="group block">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative overflow-hidden aspect-video">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {course.bestseller && (
            <span className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded">
              BESTSELLER
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-gray-900 text-sm leading-tight line-clamp-2 mb-1 group-hover:text-purple-600 transition-colors">
            {course.title}
          </h3>
          <p className="text-xs text-gray-500 mb-2">{course.instructor}</p>

          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-sm font-bold text-yellow-700">{course.rating}</span>
            <StarRating rating={course.rating} />
            <span className="text-xs text-gray-500">({course.reviews.toLocaleString()})</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">${course.price}</span>
            <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
