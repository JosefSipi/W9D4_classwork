






function FollowToggle(el) {
    this.$el = $(el) 
    this.userId = $el.data.user-id;
    
}


new FollowToggle($('#follow-toggle'))