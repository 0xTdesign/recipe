import { WEBSITE_URL } from "config";
import "./Comments.css";
import CommentNewForm from "./CommentsNewForm";
import { handleSubmitFormAction } from "../../actions/commentAction";

export default async function Comments({ slug }: { slug: string }) {
  const commentsRes = await fetch(`${WEBSITE_URL}/api/comments/${slug}`);
  const { comments } = await commentsRes.json();
  console.log(comments);
  console.log(WEBSITE_URL);

  return (
    <div className="comment-section">
      <div className="line"></div>
      <p className="leave"></p>

      <div className="comment-container">
        {/* @ts-ignore */}
        <CommentNewForm slug={slug} saveCommentAction={handleSubmitFormAction} />
        <div className="dropdown">
          <span>View comments</span>
          <div className="dropdown-content">
            <div className="comments">
              {comments && (
                <ul>
                  {comments.map((comment: any) => {
                    return (
                      <li key={comment.uuid}>
                        Name: {comment.username}
                        <br /> Comment:
                        {comment.comment}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
