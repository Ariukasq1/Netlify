FROM node:10.16-slim
WORKDIR /erxes-mn/
RUN chown -R node:node /erxes-mn
COPY --chown=node:node src /erxes-mn
USER node
EXPOSE 8080
ENTRYPOINT [ "yarn", "start" ]
