import React from "react";
import { FaStar, FaCheckCircle, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const ReviewsRatings = () => {
  const reviews = [
    {
      id: 1,
      name: "Ombir Singh",
      date: "November 16, 2022",
      verified: true,
      rating: 5,
      title: "Ibell Tig Welding Machine Is Good For The Price",
      description:
        "I have been using this machine for almost a year now and it has been working great. It is a very versatile machine that can be used for both flux core and solid wire welding. The machine is very easy to use and has a very user friendly interface. The machine comes with a 1 year warranty which is a great plus.",
      avatar: "https://i.pravatar.cc/50?img=1",
      likes: 0,
      dislikes: 1,
    },
    {
      id: 2,
      name: "Mamta",
      date: "November 16, 2022",
      verified: true,
      rating: 5,
      title: "Ibell Tig Welding Machine Is Good For The Price",
      description:
        "I have been using this machine for almost a year now and it has been working great. It is a very versatile machine that can be used for both flux core and solid wire welding. The machine is very easy to use and has a very user friendly interface. The machine comes with a 1 year warranty which is a great plus.",
      avatar: "https://i.pravatar.cc/50?img=2",
      likes: 0,
      dislikes: 1,
    },
  ];

  const averageRating = 4.6;
  const totalReviews = 7;
  const distribution = [
    { stars: 5, count: 4 },
    { stars: 4, count: 3 },
    { stars: 3, count: 0 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="mx-auto max-w-5xl rounded-lg bg-white p-6 shadow">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="text-lg font-semibold text-gray-800">Reviews & Ratings</h2>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            Write a Review
          </button>
        </div>

        {/* Rating Summary */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Average Rating */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-6">
            <p className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              {averageRating} <FaStar className="text-blue-600" />
            </p>
            <p className="text-sm text-gray-500 mt-1">Average Rating</p>
            <p className="text-xs text-gray-400">Based on {totalReviews} Reviews</p>
          </div>

          {/* Distribution */}
          <div className="md:col-span-2 flex flex-col justify-center gap-2">
            {distribution.map((d) => (
              <div key={d.stars} className="flex items-center gap-2">
                <span className="w-6 text-sm font-medium text-gray-700">{d.stars}</span>
                <FaStar className="text-yellow-400" />
                <div className="relative h-2 flex-1 overflow-hidden rounded bg-gray-200">
                  <div
                    className="absolute left-0 top-0 h-2 bg-blue-500"
                    style={{ width: `${(d.count / totalReviews) * 100}%` }}
                  ></div>
                </div>
                <span className="w-6 text-right text-sm text-gray-600">{d.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="mt-8 space-y-6">
          {reviews.map((r) => (
            <div key={r.id} className="border-b pb-6 last:border-b-0">
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800">{r.name}</h3>
                      <p className="text-xs text-gray-500">{r.date}</p>
                    </div>
                  </div>
                  {/* Verified */}
                  {r.verified && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-green-600">
                      <FaCheckCircle /> Verified Purchase
                    </p>
                  )}
                  {/* Stars */}
                  <div className="mt-2 flex items-center gap-1 text-green-500">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  {/* Title */}
                  <p className="mt-2 font-medium text-gray-900">{r.title}</p>
                  {/* Description */}
                  <p className="mt-1 text-sm text-gray-600 leading-6">{r.description}</p>

                  {/* Like/Dislike */}
                  <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
                    <button className="flex items-center gap-1 hover:text-blue-600">
                      <FaThumbsUp /> {r.likes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-red-600">
                      <FaThumbsDown /> {r.dislikes}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsRatings;
