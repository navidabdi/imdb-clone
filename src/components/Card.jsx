import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div className="cursor-pointer bg-white dark:bg-[#010b23] sm:hover:shadow-slate-400 sm:shadow-md rounded-lg overflow-hidden transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={500}
          className="dark:opacity-80 group-hover:opacity-100 transition-opacity duration-200 w-full h-[300px] object-cover"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available"
        ></Image>
        <div className="py-10 px-5">
          <h2 className="truncate text-2xl font-bold mb-2">
            {result.title || result.name}
          </h2>
          <p className="line-clamp-2 text-md mb-5">{result.overview}</p>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
