var hdblogUrl = "https://wmich.edu/7help/hdblog/api/v1/cas";


var component = Vue.component('announcement', {
    name: 'announcement',
    template: '#announcement-template',
    props: {
        description: String,
        type: String,
        url: String,
        current: Boolean
    },
    filters: {
    	getTheId: function(value) {
        	if (value !== "") {
        	   return 'be_' + value.substring(value.lastIndexOf("/") + 1);
        	} else {
        		return '';
        	}
        }
    }
})

var app = new Vue({ 
    el: '#page',
    component: {
        announcement: component
    },
    data: {
        announcements: [],
        bnid: ''
    },
    mounted: function () {
        this.getOutages()
    },
    methods: {
        getOutages: function () {
            if(hdblogUrl) {
            	axios.get(hdblogUrl)
                    .then(function (response) {
                    	app.announcements = response.data;
                })
            }
        }
    },
    computed: {
        bnidError: function () {
        	var win = new RegExp("^\\d{9}$");
  			if(win.test(this.bnid)) {
                return true
            } else if(this.bnid.indexOf('@') > -1) {
                return true
            } else {
                return false
            }
        },
        bnidErrorMessage: function () {
            var win = new RegExp("^\\d{9}$");
            if(win.test(this.bnid)) {
                return 'Bronco NetID format error! \nHey It appears you may be entering your Western Identification number (WIN) instead of your Bronco NetID.'
            } else if(this.bnid.indexOf('@') > -1) {
                return 'Bronco NetID format error! \nIt appears you have entered your email address instead of your Bronco Net ID.'
            } else {
                return 'false'
            }
        }
    },
    filters: {
        decodeHtml: function (value) {
            var txt = document.createElement("textarea");
            txt.innerHTML = value;
            return $.trim(txt.value);
        }
    }
});

