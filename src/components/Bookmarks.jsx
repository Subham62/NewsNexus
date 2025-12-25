import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class Bookmarks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: []
    };
  }

  componentDidMount() {
    const bookmarks = JSON.parse(localStorage.getItem('newsBookmarks')) || [];
    this.setState({ bookmarks });
  }

  render() {
    return (
      <>
        <h1 className='text-center' style={{margin: '40px 0px'}}>
          📖 Your Saved Articles
        </h1>
        
        {this.state.bookmarks.length === 0 ? (
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div style={{
                  textAlign: 'center',
                  padding: '60px 40px',
                  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  marginTop: '40px'
                }}>
                  <div style={{
                    fontSize: '80px',
                    marginBottom: '20px',
                    animation: 'pulse 2s infinite'
                  }}>
                    📚
                  </div>
                  <h3 style={{
                    color: '#2c3e50',
                    marginBottom: '15px',
                    fontWeight: '600'
                  }}>
                    No Bookmarks Yet!
                  </h3>
                  <p style={{
                    color: '#5a6c7d',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    marginBottom: '10px'
                  }}>
                    Start saving articles you find interesting
                  </p>
                  <p style={{
                    color: '#7f8c8d',
                    fontSize: '14px',
                    marginBottom: '25px'
                  }}>
                    Click on the <span style={{
                      background: 'white',
                      padding: '2px 8px',
                      borderRadius: '15px',
                      fontSize: '16px',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                    }}>🤍</span> heart icon on any article to save it here
                  </p>
                  <a href="/" className='btn btn-dark btn-lg' style={{
                    borderRadius: '25px',
                    padding: '12px 35px',
                    fontWeight: '500'
                  }}>
                    Browse News
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='container'>
            <div className="row">
              {this.state.bookmarks.map((element, index)=>{
                return <div className="col-md-3 mb-4" key={element.articleId || index}>
                  <NewsItem  
                    title={element.title} 
                    description={element.description} 
                    imageUrl={element.imageUrl} 
                    newsUrl={element.newsUrl} 
                    author={element.author} 
                    date={element.date} 
                    source={element.source}
                    articleId={element.articleId}
                  />
                </div>
              })}
            </div>
          </div>
        )}

        <style jsx="true">{`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }
        `}</style>
      </>
    )
  }
}

export default Bookmarks
