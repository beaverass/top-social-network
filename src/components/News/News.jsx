import React from 'react';

const News = (props) => {
    let newsElement = props.newsPage.news.map(n => <div key={n.id}>{n.newsName}</div>);

    let textAreaRef = React.createRef();

    let onTextChange = () => {
        let text = textAreaRef.current.value;
        props.updateNewNewsText(text);
    }

    const onAddNews = () => {
        props.addNews();
    }



    return (
        <div>
            {newsElement}
            <div>
                <div>
                    <textarea onChange={onTextChange} ref={textAreaRef} value={props.newsPage.newNewsText}/>
                </div>
                <div>
                    <button onClick={onAddNews} >
                        Add news
                    </button>
                </div>
            </div>
        </div>
    );
};

export default News;