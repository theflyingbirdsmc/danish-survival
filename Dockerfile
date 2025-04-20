FROM itzg/mc-proxy:java21
LABEL author="Simon Fugl"

# Copy server files to a server directory
COPY . /data