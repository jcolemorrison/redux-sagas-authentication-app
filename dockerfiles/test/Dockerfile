# Start with Node
FROM node:6.9.5

# Install Yarn, because lolnpm
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# Make yarn available to SH, and thus your compose file
ENV PATH="/root/.yarn/bin:${PATH}"

# All operations that are run from on this image will assume
# this to be the directory the commands are run from
WORKDIR /usr/src/app/
