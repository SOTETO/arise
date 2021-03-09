set -ex

# SET THE FOLLOWING VARIABLES
# docker hub username
USERNAME=soteto
# image name
IMAGE=arise

docker build -t $USERNAME/$IMAGE:latest .
