from tastypie.authorization import Authorization
from tastypie import fields
from tastypie.resources import ModelResource
from polls.models import Poll, Choice


class PollResource(ModelResource):
    class Meta:
        queryset = Poll.objects.all()
        resource_name = 'polls'
        authorization = Authorization()

class ChoiceResource(ModelResource):
    poll = fields.ForeignKey(PollResource, 'poll')
    class Meta:
        queryset = Choice.objects.all()
        resource_name = 'choices'
        authorization = Authorization()