Settings.addField({
  fieldName: 'emailNotifications',
  fieldSchema: {
    type: Boolean,
    optional: true,
    defaultValue: true,
    autoform: {
      group: 'notifications',
      instructions: 'Enable email notifications for new posts and new comments (requires restart).'
    }
  }
});

// make it possible to disable notifications on a per-comment basis
Comments.addField(
  {
    fieldName: 'disableNotifications',
    fieldSchema: {
      type: Boolean,
      optional: true,
      autoform: {
        omit: true
      }
    }
  }
);

// Add notifications options to user profile settings
Users.addField([
  {
    fieldName: 'telescope.notifications.users',
    fieldSchema: {
      label: 'Người dùng mới',
      type: Boolean,
      optional: true,
      defaultValue: false,
      editableBy: ['admin'],
      autoform: {
        group: 'Nhận thông báo qua email'
      }
    }
  },
  {
    fieldName: 'telescope.notifications.posts',
    fieldSchema: {
      label: 'Bài mới',
      type: Boolean,
      optional: true,
      defaultValue: false,
      editableBy: ['admin', 'member'],
      autoform: {
        group: 'Nhận thông báo qua email'
      }
    }
  },
  {
    fieldName: 'telescope.notifications.comments',
    fieldSchema: {
      label: 'Bình luận trên bài của tôi',
      type: Boolean,
      optional: true,
      defaultValue: true,
      editableBy: ['admin', 'member'],
      autoform: {
        group: 'Nhận thông báo qua email'
      }
    }
  },
  {
    fieldName: 'telescope.notifications.replies',
    fieldSchema: {
      label: 'Trả lời bình luận của tôi',
      type: Boolean,
      optional: true,
      defaultValue: true,
      editableBy: ['admin', 'member'],
      autoform: {
        group: 'Nhận thông báo qua email'
      }
    }
  }
]);
