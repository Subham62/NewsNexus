import React, { Component } from 'react'

export class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBookmarked: false
    };
  }

  componentDidMount() {
    // Check if article is already bookmarked
    const bookmarks = JSON.parse(localStorage.getItem('newsBookmarks')) || [];
    const isBookmarked = bookmarks.some(b => b.articleId === this.props.articleId);
    this.setState({ isBookmarked });
  }

  toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('newsBookmarks')) || [];
    const article = {
      articleId: this.props.articleId,
      title: this.props.title,
      description: this.props.description,
      imageUrl: this.props.imageUrl,
      newsUrl: this.props.newsUrl,
      author: this.props.author,
      date: this.props.date,
      source: this.props.source
    };

    if (this.state.isBookmarked) {
      // Remove bookmark
      const filtered = bookmarks.filter(b => b.articleId !== this.props.articleId);
      localStorage.setItem('newsBookmarks', JSON.stringify(filtered));
      this.setState({ isBookmarked: false });
    } else {
      // Add bookmark
      bookmarks.push(article);
      localStorage.setItem('newsBookmarks', JSON.stringify(bookmarks));
      this.setState({ isBookmarked: true });
    }
  }

  shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: this.props.title,
        text: this.props.description,
        url: this.props.newsUrl,
      }).catch(err => console.log('Error sharing:', err));
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(this.props.newsUrl);
      alert('Link copied to clipboard!');
    }
  }

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='h-100'>
        <div className="card h-100">
          <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'absolute',
              right: '0',
              left: '0',
              zIndex: 1,
              padding: '10px'
          }}>
            <button 
              onClick={this.toggleBookmark}
              style={{
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                cursor: 'pointer',
                fontSize: '18px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
              }}
            >
              {this.state.isBookmarked ? '❤️' : '🤍'}
            </button>
            <span className="badge rounded-pill bg-danger">
              {source.name}
            </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." style={{height: '200px', objectFit: 'cover'}}/>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title" style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              {title}
            </h5>
            <p className="card-text" style={{
              display: '-webkit-box',
              WebkitLineClamp: 6,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              {description}
            </p>
            <div className="mt-auto">
              <p className="card-text">
                <small className="text-muted">
                  By {!author ? "unknown" : author} on {new Date(date).toGMTString()}
                </small>
              </p>
              <div style={{display: 'flex', gap: '10px'}}>
                <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark" style={{flex: 1}}>
                  Read more
                </a>
                <button onClick={this.shareArticle} className="btn btn-sm btn-outline-dark" title="Share">
                  📤
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
