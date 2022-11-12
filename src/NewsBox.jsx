import React,{useEffect} from 'react';
import Card from "./Card";
import { useState } from 'react';
import Spinner from './Spinner';
import Heading from './Heading';

function NewsBox(props) {
  const [data, setdata] = useState([]);
  const [load,setload] = useState(true);
  const getNews = async () => {
    const val = await fetch(`https://inshorts.deta.dev/news?category=${props.category}`);
    setload(true);
    const parsedVal = await val.json();
    setdata(parsedVal.data);
    setload(false);
  }
  useEffect(() => {
    getNews();
    setTimeout(() => {}, 5000);
  },[]);
  
  return (
    <>
    {load && <Spinner/>}
    {!load && <Heading category={props.category}/>}
    {!load && data.map((element) => {
        return <Card key={element.id} image={element.imageUrl} title={element.title} text={element.content.slice(0, 220) + "..."} link={element.readMoreUrl?element.readMoreUrl:element.url} time={element.time} date={element.date} />
      })
    }
    </>
  );
}
export default NewsBox;