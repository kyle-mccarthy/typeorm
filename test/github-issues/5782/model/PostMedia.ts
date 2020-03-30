import { Media } from './../entity/MediaEntity';
import { Post } from './../entity/PostEntity';

export class PostMedia implements Media {
  mediaId: number;
  postId: number;
  media: Media;
  post?: Post;
  order: number | null;

  get id(): number {
    return this.media.id;
  }

  get source(): string {
    return this.media.source;
  }
}
