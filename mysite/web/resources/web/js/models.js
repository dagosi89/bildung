// Generated by CoffeeScript 1.3.3
(function() {
  var Choice, Choices, Poll, Polls,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Poll = (function(_super) {

    __extends(Poll, _super);

    function Poll() {
      return Poll.__super__.constructor.apply(this, arguments);
    }

    Poll.prototype.urlRoot = '/api/v1/polls/';

    return Poll;

  })(Backbone.Model);

  Polls = (function(_super) {

    __extends(Polls, _super);

    function Polls() {
      return Polls.__super__.constructor.apply(this, arguments);
    }

    Polls.prototype.model = Poll;

    Polls.prototype.url = "/api/v1/polls/";

    Polls.prototype.parse = function(data) {
      console.log(data);
      return data.objects;
    };

    return Polls;

  })(Backbone.Collection);

  Choice = (function(_super) {

    __extends(Choice, _super);

    function Choice() {
      return Choice.__super__.constructor.apply(this, arguments);
    }

    Choice.prototype.urlRoot = '/api/v1/choices/';

    return Choice;

  })(Backbone.Model);

  Choices = (function(_super) {

    __extends(Choices, _super);

    function Choices() {
      return Choices.__super__.constructor.apply(this, arguments);
    }

    Choices.prototype.model = Choice;

    Choices.prototype.url = '/api/v1/choices/';

    Choices.prototype.parse = function(data) {
      return data.objects;
    };

    return Choices;

  })(Backbone.Collection);

}).call(this);
