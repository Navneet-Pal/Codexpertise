import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GetAvgRating from '../../../utils/avgRating';
import RatingStars from '../../Common/RatingStars'

const Course_Card = ({ course, Height }) => {

    const [avgReviewCount, setAvgReviewCount] = useState(0);
    // console.log("course dekh rhe h",course)

    useEffect(() => {

        const count = GetAvgRating(course.ratingAndReviews)
        setAvgReviewCount(count)

    }, [course])

  return (
    <div className='text-white'>
        <Link to={`/courses/${course._id}`}>

            <div className="rounded-lg">
                <img src={course?.thumbnail} alt='course thumbnail' className={`${Height} w-full rounded-xl object-cover `} />
            </div>

            <div>

                <p className="text-xl text-richblack-5">{course?.courseName}</p>
                <p className="text-sm text-richblack-50">
                    {course?.instructor?.firstname} {course?.instructor?.lastname}
                </p>

                <div className="flex items-center gap-2">

                    <span className="text-yellow-5">{avgReviewCount || 0}</span>
                    
                    <RatingStars Review_Count={avgReviewCount} />

                    <span className="text-richblack-400">
                        {course?.ratingAndReview?.length} Ratings
                    </span>

                </div>
                
                <p className="text-xl text-richblack-5">Rs. {course?.price}</p>

            </div>

        </Link>
    </div>
  )
}

export default Course_Card