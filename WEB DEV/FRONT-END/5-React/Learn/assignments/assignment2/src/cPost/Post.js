import "./Post.css"
export  default function Post({title='This is the post Title',body='This is the post body'}){

return (
  <div className="post">
     <h3 className="title">{title}</h3>
     <hr/>
     <p>{body}</p>
  </div>
)
}