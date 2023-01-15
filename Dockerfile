FROM zenika/alpine-chrome:89-with-node

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD 1
ENV PUPPETEER_EXECUTABLE_PATH /usr/bin/chromium-browser
ENV NODE_ENV dev
ENV PORT 8080
ENV URL_SUFFIX ""

USER root

WORKDIR /usr/src/app/

COPY . /usr/src/app/

COPY --chown=chrome package.json ./
COPY --chown=chrome . ./

RUN npm install

EXPOSE 8080
CMD ["npm", "start"]