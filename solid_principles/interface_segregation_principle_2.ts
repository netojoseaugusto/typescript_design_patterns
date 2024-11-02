interface Post {
  title: string;
  content: string;
}

interface Comment {
  comment: string;
}

interface PostCreator {
  createPost(post: Post): void;
}

interface CommentCreator {
  createComment(comment: Comment): void;
}

interface PostSharer {
  shareComment(post: Post): void;
}

class Admin implements PostCreator, CommentCreator, PostSharer {
  createPost(post: Post): void {
    console.log("Admin is creating a post");
  }

  createComment(comment: Comment): void {
    console.log("Admin is creating a comment");
  }

  shareComment(post: Post): void {
    console.log("Admin is sharing a post");
  }
}

class RegularUser implements CommentCreator, PostSharer {
  createComment(comment: Comment): void {
    console.log("User is creating a comment");
  }

  shareComment(post: Post): void {
    console.log("User is sharing a post");
  }
}
