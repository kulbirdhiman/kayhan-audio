// components/ReviewForm.tsx
"use client";
import { useState } from "react";
import ReviewList from "./ReviewList";
interface ReviewFormData {
  name: string;
  rating: number;
  comment: string;
}

const emojis = ["😞", "🙁", "😐", "😊", "😁"];

const ReviewForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [rating, setRating] = useState<number>(1);
  const [comment, setComment] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle form submission
    const reviewData: ReviewFormData = { name, rating, comment };
    console.log(reviewData);

    // Simulate a successful submission
    setSubmitted(true);
  };

  return (
    <>
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Submit Your Review</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
              className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
              className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Emoji Rating */}
        <div className="text-center">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
            Rating:
          </label>
          <div className="flex justify-center space-x-4 mt-2">
            {emojis.map((emoji, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setRating(index + 1)}
                className={`text-4xl transition-colors duration-300 ${
                  rating === index + 1 ? "text-yellow-500" : "text-gray-500"
                } hover:text-yellow-500`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Comment */}
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
            Comment:
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Your Comment"
            required
            className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Review
        </button>
      </form>
    </div>
    <ReviewList />
    </>
  );
};

export default ReviewForm;
