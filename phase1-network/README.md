# Phase 1: Network (VPC, SG, NACL)
![Architecture](../docs/screenshots/archi.png)

Overview

Created the foundational AWS networking infrastructure for the StudentHub project using Amazon Virtual Private Cloud (VPC). This phase establishes network isolation and prepares the environment for future EC2 deployments and application hosting.

Components Configured
VPC (studenthub-vpc): Created an isolated virtual network for project resources.
Public Subnet (public-1): Configured to support resources requiring direct internet connectivity.
Private Subnet (private-1): Reserved for resources that should not be directly accessible from the internet.
Internet Gateway (studenthub-igw): Created and attached to the VPC to enable internet connectivity for public subnet resources.
Public Route Table (public-rt): Configured a default route (0.0.0.0/0) pointing to the Internet Gateway.
Subnet Association: Associated the public subnet with the public route table while keeping the private subnet separate.
Architecture and Networking Concepts

This phase demonstrates the fundamentals of AWS networking, including VPC isolation, public and private subnet design, Internet Gateway configuration, route management , and subnet associations



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
