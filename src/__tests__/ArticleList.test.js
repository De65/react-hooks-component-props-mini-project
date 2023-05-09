import React from "react";
import Article from "./Article";
function ArticleList(props){
  const allArticles=data.posts.map((post)=>{
     <Article
              key={post.id}
              title={post.title}
              date={post.date}
          preview={post.preview}
          minutes={post.minutes}

    />
  })
  return(
    <main>
        {allArticles}
    </main>
  )
}
export default ArticleList