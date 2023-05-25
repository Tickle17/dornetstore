FROM ubuntu:latest
LABEL authors="vadimfrolov"

ENTRYPOINT ["top", "-b"]