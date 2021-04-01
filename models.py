from peewee import *

db = SqliteDatabase('wiki.db')

class person(Model):
    
    title = CharField()
    image = CharField()
    text_wiki = TextField(null=True)

    class Meta:
        database = db

class item(Model):

    title = CharField()
    image = CharField()
    cost = IntegerField()
    about = TextField()

    class Meta:
        database = db
    
        