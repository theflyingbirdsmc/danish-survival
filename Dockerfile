FROM eclipse-temurin:21-jre
LABEL author="Simon Fugl"

# Copy server files to a tfb folder
COPY . /tfb/

WORKDIR /tfb

ARG MEMORY
ENV MEMORY=$MEMORY

RUN chmod +x *.jar
CMD  ["java", "-Xms128M", "-Xmx12288M", "-jar", "server.jar", "nogui"]