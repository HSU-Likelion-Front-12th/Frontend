import "./App.css";
import { useState } from "react";

function App() {
    const [comments, setComments] = useState([
        {
            id: 1,
            content: "분좋카 너무 좋아요~",
            likes: 0,
            date: "2024-04-12",
            editing: false,
        },
        {
            id: 2,
            content: "서이추 해주세요~",
            likes: 0,
            date: "2024-04-12",
            editing: false,
        },
        {
            id: 3,
            content: "좋은 글 잘 보고 갑니다~!",
            likes: 0,
            date: "2024-04-12",
            editing: false,
        },
    ]);

    const [newComment, setNewComment] = useState("");
    const [updatedContent, setUpdatedContent] = useState("");

    const handleEdit = (id) => {
        const updatedComments = comments.map((comment) => {
            if (comment.id === id) {
                setUpdatedContent(comment.content);
                return { ...comment, editing: true };
            }

            return comment;
        });
        setComments(updatedComments);
    };

    const handleDelete = (id) => {
        const updatedComments = comments.filter((comment) => comment.id !== id);
        setComments(updatedComments);
    };

    const handleSaveEdit = (id) => {
        const updatedComments = comments.map((comment) => {
            if (comment.id === id) {
                return { ...comment, content: updatedContent, editing: false };
            }
            return comment;
        });
        setComments(updatedComments);
        setUpdatedContent("");
    };

    return (
        <div className="App">
            <div className="black-nav">
                <h4>댓글 작성하기</h4>
            </div>
            {comments.map((comment) => (
                <div className="list" key={comment.id}>
                    {comment.editing ? (
                        <div>
                            <input
                                type="text"
                                value={updatedContent}
                                onChange={(e) => {
                                    setUpdatedContent(e.target.value);
                                }}
                            />
                            <button onClick={() => handleSaveEdit(comment.id)}>
                                완료
                            </button>
                        </div>
                    ) : (
                        <span>{comment.content}</span>
                    )}
                    <span
                        onClick={() => {
                            const updatedLikes = [...comments];
                            updatedLikes.map((it) => {
                                if (it.id == comment.id) {
                                    it.likes++;
                                }
                            });
                            setComments(updatedLikes);
                        }}
                    >
                        👍
                    </span>
                    {comment.likes}
                    <p>{comment.date}</p>

                    <button onClick={() => handleEdit(comment.id)}>수정</button>
                    <button onClick={() => handleDelete(comment.id)}>
                        삭제
                    </button>
                    <hr />
                </div>
            ))}
            <div className="publish">
                <input
                    value={newComment}
                    onChange={(e) => {
                        setNewComment(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        const newId = comments.length + 1;
                        const newDate = new Date().toISOString().slice(0, 10);
                        setComments([
                            {
                                id: newId,
                                content: newComment,
                                likes: 0,
                                date: newDate,
                                editing: false,
                            },
                            ...comments,
                        ]);
                        setNewComment("");
                    }}
                >
                    글쓰기
                </button>
            </div>
        </div>
    );
}

export default App;
