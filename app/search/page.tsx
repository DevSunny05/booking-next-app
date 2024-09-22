import { fetchResults } from "@/lib/fetchResults";
import { notFound } from "next/navigation";

type Props={
    searchParams:SearchParams
}

export type SearchParams={
    url:URL;
    group_adults:string;
    group_children:string;
    no_rooms:string;
    checkIn:string;
    checkOut:string;
    
}

const SearchPage =async ({searchParams}:Props) => {
    if(!searchParams.url) return notFound();

    const results=await fetchResults(searchParams)

    // if(!results) return <div>No Results...</div>

  return (
    <div>Search result</div>
  )
}

export default SearchPage