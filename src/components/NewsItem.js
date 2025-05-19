import React, { Component } from 'react'

export class NewsItem extends Component {
  static propTypes = {}
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
        <div style = {  {
            display : 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
        }
        }>
        <span class=" badge rounded-pill bg-danger" >
                {source.name}
                {/* <span class="visually-hidden">unread messages</span> */}
              </span>
        </div>
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"> {title}
            </h5>
            <p className="card-text">{description}</p>
            <p class="card-text"><small class="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem