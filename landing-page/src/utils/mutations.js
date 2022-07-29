import { gql } from '@apollo/client';

export const ADD_REMINDER = gql`
  mutation addreminder($reminderText: String!) {
    addReminder(reminderText: $reminderText) {
      _id
      reminderText
      reminderAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;