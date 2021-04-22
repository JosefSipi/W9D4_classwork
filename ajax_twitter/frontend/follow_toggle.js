






function FollowToggle(el) {
    this.$el = $(el) 
    this.userId = $el.data.user-id;
    this.followState = $el.data.initial-follow-state;
}


new FollowToggle($('#follow-toggle'))