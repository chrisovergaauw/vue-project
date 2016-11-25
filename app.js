new Vue({

  // Target the div with an id of 'events'
  el: '#events',

  // register any values or collections that hold data for the app
    data: {
        event: {name: '', description: '', date: ''},
        events: [
                {
                    id: 1,
                    name: 'TIFF',
                    description: 'Toronto International Film Festival.',
                    url: 'http://www.google.com',
                    date: '2015-09-10',
                },
                {
                    id: 2,
                    name: 'The Martian Premiere',
                    description: 'The Martian comes to theatres.',
                    url: 'http://www.google.com',
                    date: '2015-10-02',
                },
                {
                    id: 3,
                    name: 'SXSW',
                    description: 'Music film and interactive festival in Austin, TX.',
                    url: 'http://www.google.com',
                    date: '2016-03-11',
                },
        ],
    },

  // function will run when app loads
    created: function() {
        // When the application loads,
        // we want to call the method that initializes some data
        console.log('ready function called');
//        this.fetchEvents();
    },

  // methods we want to use in our app are registered here
    methods: {

//        fetchEvents: function() {
//            let events = [
//
//                {
//                    id: 1,
//                    name: 'TIFF',
//                    description: 'Toronto International Film Festival.',
//                    date: '2015-09-10',
//                },
//                {
//                    id: 2,
//                    name: 'The Marian Premiere',
//                    description: 'The Martian comes to theatres.',
//                    date: '2015-10-02',
//                },
//                {
//                    id: 3,
//                    name: 'SXSW',
//                    description: 'Music film and interactive festival in Austin, TX.',
//                    date: '2016-03-11',
//                },
//            ];
//            // push data on array
//          //  this.$set('events', events);
//        },

        addEvent: function() {
            if (this.event.name) {
                this.events.push(this.event);
                this.event = {name: '', description: '', date: ''};
            }
        },

        deleteEvent: function(index) {
            if(confirm('Are you sure you want to delete this event?')) {
                // $remove is a Vue convenience method similar to splice
                this.events.splice(index, 1);
            }
        },
    },

});


