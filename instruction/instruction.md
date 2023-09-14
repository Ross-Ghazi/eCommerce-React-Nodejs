# Step by Step Instruction

## start cdk:

- Inside cdk folder: cdk init --language typescript

(run this command just when you want to start cdk project from beginning to create a boilerplate)

<br />

## set up AWS credential:

- type `aws configure`, put aws_access_key_id,aws_secret_access_key, us-west-2 and other stuff empty
  So you should have config and credentials files as below

- type `code ~/.aws/config` to see config file

![Alt text](image-3.png)

- type `code ~/.aws/credentials` to see credentials file

![Alt text](image-5.png)

- to ensure you are connected write: `aws s3 ls`

![Alt text](image-4.png)

<br />
