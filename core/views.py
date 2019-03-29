#-*- coding: utf-8 -*-
import uuid , json , string , random, urllib, base64, os, sys, math, pytz, time, collections, simplejson, requests
from django.utils.encoding import smart_str
from ecdsa import SigningKey, SECP256k1, NIST384p, BadSignatureError, VerifyingKey
from django.http import *
from django import template
from decimal import *
from django.shortcuts import *
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.clickjacking import xframe_options_exempt
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from core.models import *
from django.conf import settings
from django.db.models import Q
from time import time as tmx
from datetime import datetime
from time import time as tmx
import time
import json, arrow, re
data = {}
from django.db.models import Max, Min, Count, Sum
from decimal import Decimal
from ethereum import utils
from eth_utils import address
import os
import codecs, ecdsa
from Crypto.Hash import keccak
from ecies.utils import generate_eth_key, generate_key
from ecies import encrypt, decrypt


@csrf_exempt
def landing(request):
    return render(request, "landing.html", locals())





def generate(request):
    private_key = utils.sha3(os.urandom(4096))
    raw_address = utils.privtoaddr(private_key)
    addressif = address.to_normalized_address(raw_address)
    keyether = utils.encode_hex(private_key)
    sk = SigningKey.from_string(bytes.fromhex(keyether), curve=SECP256k1)
    public_key = sk.get_verifying_key() #public_key
    pkey = public_key.to_string().hex().strip()
    data = b'https://darchnetwork.com/'
    encryptedval = encrypt(pkey, data)
    print("encryptedval", utils.encode_hex(encryptedval))
    decryptedvalue = decrypt(keyether, encryptedval)
    print("decrypted value is here",decryptedvalue)
    #public_key = public_key.to_string().hex()
    return render(request, "skeleton.html", locals())


@csrf_exempt
def encryption(request):
    return render(request, "enc.html", locals())

@csrf_exempt
def encpost(request):
    if request.method == 'POST':
        datareponse = {}
        pubhex = request.POST.get('requesterspkey')
        data = request.POST.get('encdata')#.encode()

        try:
            encdata = encrypt(pubhex, data.encode())
        except ValueError:
            datareponse["info"] = "Please fill public key correctly"
            datareponse["response"] = "non"
            return HttpResponse(json.dumps(datareponse), content_type = "application/json")
        print(type(encdata))
        print(encdata)
        asd = utils.encode_hex(encdata)

        datareponse["info"] = asd
        datareponse["response"] = "ok"
        return HttpResponse(json.dumps(datareponse), content_type = "application/json")
    else:
        return HttpResponse('Fail')

@csrf_exempt
def decryption(request):
    return render(request, "dec.html", locals())

@csrf_exempt
def depost(request):
    if request.method == 'POST':
        datareponse = {}
        keyether = request.POST.get('privatekey')
        decdata = request.POST.get('decdata')
        xxxxxx = utils.decode_hex(decdata)

        print(keyether)
        print(decdata)
        print(xxxxxx)

        decryptedvalue = decrypt(keyether, xxxxxx)
        print("decryptedvalue",decryptedvalue)

        print("decryptedvaluestr",decryptedvalue.decode('utf-8'))


        datareponse["info"] = decryptedvalue.decode('utf-8')
        datareponse["response"] = "ok"
        return HttpResponse(json.dumps(datareponse), content_type = "application/json")
    else:
        return HttpResponse(json.dumps(datareponse), content_type = "application/json")
