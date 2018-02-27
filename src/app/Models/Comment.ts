export class Comment {
  constructor(commentDate, commentText, customerEmail) {
    this.commentDate = commentDate;
    this.commentText = commentText,
      this.customerEmail = customerEmail;
  }
  customerEmail: string;
  commentDate: Date;
  commentText: string;
}
