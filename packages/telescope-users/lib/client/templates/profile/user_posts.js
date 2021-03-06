Template.user_posts.helpers({
  arguments: function () {
    var user = this;
    return {
      template: "posts_list_compact",
      options: {
        currentUser: user,
        fieldLabel: i18n.t("postedAt"),
        fieldValue: function (post) {
          return moment(post.postedAt).format("HH:mm DD/MM/YYYY");
        }
      },
      terms: {
        view: 'userPosts',
        userId: user._id,
        limit: 5,
        enableCache: false,
        subscribeToUsers: false
      }
    };
  }
});
