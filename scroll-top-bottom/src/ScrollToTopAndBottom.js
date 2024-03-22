import React, { useRef } from "react";
import useFetch from "./useFetch";

const ScrollToTopAndBottom = () => {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null)
  console.log(bottomRef)

  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({behavior:'smooth'})
  }

  const handleScrollToTop = () =>{
    window.scrollTo({
        top: 0,
        left:0,
        behavior:'smooth'
    })
  }

  if(error){
    return <h1>Error occured ! Please try again</h1>
  }

  if(loading){
    return <h1>Loading ! Please wait</h1>
  }

  console.log(data);
  return (
    <div>
      <h1>Scroll To Top And Bottom</h1>
      <h3>This is top section</h3>
      <button onClick={handleScrollToBottom}>Scrll to Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll to Top</button>
      <div ref={bottomRef}>
        <h3>This is the bottom of the page</h3>
      </div>
    </div>
  );
};

export default ScrollToTopAndBottom;
