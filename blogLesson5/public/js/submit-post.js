tinymce.init({ selector:'textarea' });

var app                                 =   new Vue({
    el:                                     '#app',
    data: {
        form: {
            _csrf:                          $('input[name=_csrf]').val(),
        },
        is_submitting:                      false,
        show_alert:                         false,
        alert_class:                        '',
        alert_msg:                          ''
    },
    methods: {
        submit: function(){
            this.is_submitting          =   true;
            this.show_alert             =   true;
            this.alert_class            =   'infomsg';
            this.alert_msg              =   'Please wait while your post is being processed.';
        }
    }
});