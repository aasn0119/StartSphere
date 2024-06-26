import React from 'react';
import ArticleNavbar from './ArticleNavbar';
import api from '../../../api/axios';
import { useSelector } from 'react-redux';
const Articles = ({ article,setArticle,allArticles,setAllArticles}) => {
  const userData = useSelector((state) => state.auth.userData);

  const handleDeleteArticle=async()=>{
    try {
        const response=await api.delete(`/article/articles/${article._id}`,{
          headers: {
            'Authorization': `Bearer ${userData.Token}`,
          },
        })
        alert("Article deleted successfully")
        setAllArticles(allArticles.filter(item=>item._id!==article._id))
        setArticle(null)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className=" flex-grow p-10 bg-slate-900 text-white overflow-y-auto no-scrollbar">
      <ArticleNavbar Author={article ? article.author : null} handleDeleteArticle={handleDeleteArticle}/>
      <hr/>
      {article ? (
        <div className="content ">
          <h2 className="font-semibold text-2xl mb-4 mt-5">{article.title}</h2>
          {article.content.map((block, index) => {
            if (block.type === 'text') {
              return <p key={index} className="mb-4">{block.value}</p>;
            } else if (block.type === 'image') {
              return <img key={index} className="h-auto w-1/2 mb-6 m-auto" src={block.value} alt="" />;
            } else if (block.type === 'video') {
              return <video key={index} className="h-auto w-1/2 mb-6 m-auto" src={block.value} controls />;
            }
            else if(block.type === 'heading'){
              return <h2 key={index} className="text-xl font-bold mb-4">{block.value}</h2>;
            }else if ( block.type === 'subheading') {
              return <h4 key={index} className="font-semibold mb-4">{block.value}</h4>;
            } else if (block.type === 'list'){
              return <ul key={index} className="list-disc list-inside mb-4">{block.value.split(',').map((item, i) => <li key={i}>{item}</li>)}</ul>;
            } else {
              return null;
            }
          })}
        </div>
      ) : (
        <p>Select an article to read</p>
      )}
    </div>
  );
};

export default Articles;
