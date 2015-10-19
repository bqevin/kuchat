

Chats = new Mongo.Collection("chats");

 

if (Meteor.isClient) {

  // This code only runs on the client

  Template.body.helpers({

    chats: function () {

      return Chats.find({}, {sort: {createdAt: -1}});

    }

  });


//Listens for events
Template.body.events({

    "submit .new-chat": function (event) {

      // Prevent default browser form submit

      event.preventDefault();

 

      // Get value from form element

      var text = event.target.text.value;

 

      // Insert a task into the collection

      Chats.insert({

        text: text,

        createdAt: new Date() // current time

      });

 

      // Clear form

      event.target.text.value = "";

    }

  });

//Doing Crud -- Delete and Update. Still on events listeners
  Template.chat.events({

    "click .toggle-checked": function () {

      // Set the checked property to the opposite of its current value

      Chats.update(this._id, {

        $set: {checked: ! this.checked}

      });

    },

    "click .delete": function () {

      Chats.remove(this._id);

    }

  });

}

