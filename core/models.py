#-*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
import datetime
from django.utils import timezone
import pytz, datetime

class User(models.Model):
    name = models.CharField(max_length=1000,blank=True , null=True)
    surname = models.CharField(max_length=1000,blank=True , null=True)
    email = models.EmailField(max_length=1000,blank=True , null=True)
    password = models.CharField(max_length=1000,blank=True , null=True)
    ethereumaddress = models.CharField(max_length=1000,blank=True, null=True)
    privatekey = models.CharField(max_length=1000,blank=True, null=True)
    publickey = models.CharField(max_length=5000,blank=True, null=True)
    moneycode =  models.CharField(max_length=1000,blank=True, null=True)
    random_base32  =  models.CharField(max_length=1000,blank=True, null=True)
    mailverifycode  =  models.CharField(max_length=1000,blank=True, null=True)
    twofactorenabled = models.BooleanField('twofactorenabled')
    profilephoto =  models.FileField(blank=True , null=True)
    birthday = models.DateTimeField(blank=True,null=True)
    darchbalance = models.DecimalField(max_digits=25, decimal_places=8, default="0")
    ethbalance = models.DecimalField(max_digits=25, decimal_places=8, default="0")
    isitverified =  models.CharField(max_length=1000,blank=True, null=True,default="normal")
    regdate = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '%s %s %s %s' % (self.id, self.email, self.name, self.password)



class ProductList(models.Model):
    king = models.ForeignKey(User, blank=True , null=True, on_delete=models.PROTECT)
    headline = models.CharField(max_length=1000,blank=True , null=True)
    explain = models.CharField(max_length=1000,blank=True , null=True)
    imagelist = models.CharField(max_length=5000,blank=True , null=True)
    showdemo = models.CharField(max_length=1000,blank=True , null=True)
    category = models.CharField(max_length=1000,blank=True , null=True)
    productprice = models.DecimalField(max_digits=25, decimal_places=8, default="0")
    pname = models.CharField(max_length=1000,blank=True , null=True)
    pid = models.CharField(max_length=1000,blank=True , null=True)
    regdate = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '%s %s' % (self.headline, self.category)


class RequestList(models.Model):
    sender = models.ForeignKey(User, blank=True , null=True, related_name="senders_name", on_delete=models.PROTECT)
    requester = models.ForeignKey(User, blank=True , null=True, related_name="requesters_name", on_delete=models.PROTECT)
    pname = models.CharField(max_length=1000,blank=True , null=True)
    hash = models.CharField(max_length=1000,blank=True , null=True)
    pubkey = models.CharField(max_length=5000,blank=True , null=True)
    pid = models.CharField(max_length=1000,blank=True , null=True)
    regdate = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '%s %s' % (self.pname, self.hash)


class UrlList(models.Model):
    sender = models.ForeignKey(User, blank=True , null=True, on_delete=models.PROTECT)
    urltype = models.CharField(max_length=1000,blank=True , null=True)
    whichproductsurl = models.ForeignKey(ProductList, blank=True , null=True, on_delete=models.PROTECT)
    regdate = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '%s' % (self.urltype)


class TransmitList(models.Model):
    sender = models.ForeignKey(User, blank=True , null=True, related_name="tsenders_name", on_delete=models.PROTECT)
    requester = models.ForeignKey(User, blank=True , null=True, related_name="trequester_name", on_delete=models.PROTECT)
    amount = models.DecimalField(max_digits=25, decimal_places=8, default="0")
    pname = models.CharField(max_length=1000,blank=True , null=True)
    indexify = models.CharField(max_length=1000,blank=True , null=True)
    smessage = models.CharField(max_length=5000,blank=True , null=True)
    pid = models.CharField(max_length=1000,blank=True , null=True)
    regdate = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return '%s' % (self.pname)

class CommentandStarList(models.Model):
    csender = models.ForeignKey(User, blank=True , null=True, on_delete=models.PROTECT)
    whichcomment = models.CharField(max_length=1000,blank=True , null=True)
    startcount = models.DecimalField(max_digits=5, decimal_places=2, default="0")
    regdate = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '%s' % (self.whichcomment)
