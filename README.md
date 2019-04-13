# Wellcome to DDMP User Interface.

It is the most popular and original DDMP python script. The code is exceptionally portable and has been used successfully on a very broad range of ubuntu systems and hardware.

## Contact

[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/darchnetwork/)
[![GitHub Issues](https://img.shields.io/badge/open%20issues-0-yellow.svg)](https://github.com/darchnetwork/ddmp/issues)

- Chat in [darchnetwork channel on Gitter](https://gitter.im/darchnetwork).
- Report bugs, issues or feature requests using [GitHub issues](https://github.com/darchnetwork/ddmp/issues).



## Getting Started

The DDMP UI Documentation site hosts the **[DDMP homepage](http://anonymsale.com/)**, which
has a Quick Start section.

Operating system | Status
---------------- | ----------
Ubuntu 16.04 | [![TravisCI](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://travis-ci.org/darchnetwork/darchnetwork-github)


```shell
sudo apt-get update -y && sudo apt-get upgrade -y && sudo apt-get install vim -y && sudo apt-get install python-dev -y && sudo apt-get install libevent-dev -y &&  sudo apt-get install python-virtualenv -y && apt-get install git -y
sudo apt-get install python3.7-dev
```

## Install python3.7

```shell
sudo apt-get install --reinstall language-pack-en -y
export LC_ALL="en_US.UTF-8"
export LC_CTYPE="en_US.UTF-8"
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt-get update
sudo apt-get install python3.7
sudo apt-get install python3-pip
apt install python-pip
pip install --upgrade virtualenv
```


## Other configurations..

```shell
cd opt
virtualenv -p python3 venv
cd venv
. bin/activate
git clone https://github.com/darchnetwork/ddmp.git
cd ddmp
pip install -r requirements.txt
pipenv install requests
```

## EDCSA Eliptic Curve algorithm and generate pubkey from private key
```shell
sudo apt-get install build-essential python3-dev
pip install pycryptodomex
python3 -m Cryptodome.SelfTest
pip install ethereum
pip install ecdsa
```

```python3
import codecs, ecdsa
from Crypto.Hash import keccak
private_key_bytes = codecs.decode('F37E27F4C7CA36E3CCE9042F42C6EA32FA231673E2FA90D92D348276460BE488', 'hex')
key = ecdsa.SigningKey.from_string(private_key_bytes,curve=ecdsa.SECP256k1).verifying_key
key_bytes = key.to_string()
key_hex = codecs.encode(key_bytes, 'hex')

public_key_bytes = codecs.decode(key_hex, 'hex')
keccak_hash = keccak.new(digest_bits=256)
keccak_hash.update(public_key_bytes)
keccak_digest = keccak_hash.hexdigest()
# Take the last 20 bytes
wallet_len = 40
wallet = '0x' + keccak_digest[-wallet_len:]
```





#deployment



```shell
sudo apt-get update
sudo apt-get install python3-pip python3-dev libpq-dev postgresql postgresql-contrib nginx
sudo ufw allow 8000
gunicorn --bind 0.0.0.0:8000 ddmp.wsgi
sudo nano /etc/systemd/system/gunicorn.service
```

if do not have opt/venv/run folder please create RUN folder. with mkdir cmd.


/etc/systemd/system/gunicorn.service
```shell
[Unit]
Description=hello
After=network.target

[Service]
User=root
Group=root
WorkingDirectory=/opt/venv/ddmp
ExecStart=/opt/venv/bin/gunicorn --access-logfile - --workers 3 --bind unix:/opt/venv/run/ddmp.sock ddmp.wsgi:application

[Install]
WantedBy=multi-user.target
```



Useful Gunicorn commands
```shell
sudo systemctl start gunicorn
sudo systemctl enable gunicorn
sudo systemctl status gunicorn
sudo systemctl daemon-reload
sudo systemctl restart gunicorn
```


Create csr for https.
```shell
openssl req -new -newkey rsa:2048 -nodes -keyout anonymsale.com.key -out anonymsale.com.csr
```



Nginx config.
```shell
upstream hello_app_server {
  # fail_timeout=0 means we always retry an upstream even if it failed
  # to return a good HTTP response (in case the Unicorn master nukes a
  # single worker for timing out).

  server unix:/opt/venv/run/darchweb.sock fail_timeout=0;
}

server {
    listen   80;
    server_name 167.99.70.31;

    client_max_body_size 4G;

    access_log /opt/venv/logs/nginx-access.log;
    error_log /opt/venv/logs/nginx-error.log;

    location /static/ {
        alias   /opt/venv/ddmp/ddmp/templates/static/;
    }

    location /media/ {
        alias   /opt/venv/ddmp/ddmp/templates/media_cdn/;
    }

    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_redirect off;
        if (!-f $request_filename) {
            proxy_pass http://hello_app_server;
            break;
        }
    }

    # Error pages
    error_page 500 502 503 504 /500.html;
    location = /500.html {
        root /opt/venv/ddmp/ddmp/templates/static/;
    }
}
```
