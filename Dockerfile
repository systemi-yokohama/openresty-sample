FROM node:15-slim

RUN \
  apt update && \
  apt install -y wget && \
  apt-get -y install --no-install-recommends wget gnupg ca-certificates && \
  wget -O - https://openresty.org/package/pubkey.gpg | apt-key add - && \
  codename=`grep -Po 'VERSION="[0-9]+ \(\K[^)]+' /etc/os-release` && \
  echo "deb http://openresty.org/package/debian $codename openresty" \
    | tee /etc/apt/sources.list.d/openresty.list && \
  apt-get update && \
  apt-get -y install openresty && \
  npm install -g npm@latest
