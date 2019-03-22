# Wellcome to DDMP User Interface.

It is the most popular and original DDMP python script. The code is exceptionally portable and has been used successfully on a very broad range of ubuntu systems and hardware.

## Contact

[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/darchnetwork/)
[![GitHub Issues](https://img.shields.io/badge/open%20issues-0-yellow.svg)](https://github.com/darchnetwork/ddmp/issues)

- Chat in [darchnetwork channel on Gitter](https://gitter.im/darchnetwork).
- Report bugs, issues or feature requests using [GitHub issues](https://github.com/darchnetwork/ddmp/issues).



## Getting Started

The DDMP UI Documentation site hosts the **[DDMP homepage](http://167.99.70.31/)**, which
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

# EDCSA Eliptic Curve algorithm and generate pubkey from private key
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
