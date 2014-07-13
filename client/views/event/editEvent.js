 Template.editEvent.editingDoc = function () {
  return Events.findOne({_id: Session.get("selectedDocId")});
};
