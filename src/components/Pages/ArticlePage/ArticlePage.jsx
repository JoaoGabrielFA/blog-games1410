import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ArticlePage.css"
import { findArticle } from "../../../database/DataApi";
import React from "react";
import MoreArticles from "../../MoreArticles/MoreArticles";
import { calctime } from "../../../functions/calctime";

function ArticlePage() {
  window.scrollTo(0, 0);

  const { title } = useParams();
  const [article, setArticle] = useState([]);

  document.title = article.title;
  
  useEffect(() => {
    findArticle(title.replace(/-/g, " ")).then((resp) => {
      setArticle(resp);
    })
  }, [title])

  return (
    <>
      <div className="article-banner-case">
        <div className="article-banner-background" style={{ backgroundImage: `url(${article.banner})` }} alt="banner"></div>
        <div className="article-banner" style={{ backgroundImage: `url(${article.banner})` }} alt="banner"></div>
      </div>

      <main className="article-main">
        <section className="article-content">
          <div className="article-content-header">
            <h1>{article.title}</h1>
            <h5>{article.subtitle}</h5>
          </div>
          <div className="article-horizontal-ad"></div>
          <div className="article-content-main">
            <p>{article.text}</p>
            <h5>Por {article?.info?.autor}, {calctime(article.info?.time)}.</h5>
          </div>
        </section>
        <MoreArticles/>
      </main>
    </>
  )
}

export default ArticlePage;