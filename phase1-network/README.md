# Phase 1: Network (VPC, SG, NACL)

I built a VPC (`10.0.0.0/16`) with one public and one private subnet, an internet gateway, a public route table, a security group and a network ACL.

The public subnet is public because its route table sends `0.0.0.0/0` to the internet gateway. The private subnet has no such route.

## What I learned
- Security groups are stateful and attach to servers. NACLs are stateless and attach to subnets, so they need return-traffic rules.
- A subnet CIDR must fit inside the VPC CIDR.



## Screenshots

**VPC and subnets**

![VPC](../docs/screenshots/01-vpc.png)
![Subnets](../docs/screenshots/02-subnets.png)
![Public subnet](../docs/screenshots/05-public-subnet.png)
![Private subnet](../docs/screenshots/06-private-subnet.png)

**Internet access**

![Internet gateway](../docs/screenshots/03-igw.png)
![Route tables](../docs/screenshots/04-route-tables.png)
![VPC resource map](../docs/screenshots/10-vpc-map.png)

**Security**

![Security group](../docs/screenshots/07-sg-rules.png)
![NACL inbound](../docs/screenshots/08-nacl-inbound.png)
![NACL outbound](../docs/screenshots/09-nacl-outbound.png)
