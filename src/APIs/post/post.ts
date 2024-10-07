import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoadPosts } from './post.types';

export const loadPosts = createAsyncThunk(
  'post/loadPosts',
  ({ lastId }: ILoadPosts): number => lastId,
);
