# Phase 3: Ec2

What I built
![phase3 architecture](screenshots/phase3-archi.png)

In this phase of the StudentHub Cloud Platform project, I worked on Amazon EC2 (Elastic Compute Cloud) to understand how compute infrastructure is configured in AWS.

Explored EC2 instance configuration and launch settings.

### EC2 instance running
![EC2 instance running](screenshots/01-ec2-instance-running.png)


Worked with the networking foundation established in Phase 1.

Reviewed instance networking and security group configurations.

### EC2 instance details (subnet, security group, IAM role)
![EC2 details](screenshots/02-ec2-instance-details.png)

Learned how EC2 provides virtual servers for hosting and running applications.

### StudentHub page
![StudentHub page](screenshots/04-terminal-create-page.png)

### StudentHub out
![StudentHub out](screenshots/05-nginx-studenthub-page.png)



Captured screenshots to document the implementation process.


## What I learned

- **Public subnet + public IP:** the subnet gives a route to the Internet Gateway, but the instance also needs a public IP to be reachable. 

- **Security group vs NACL:** the security group works at the server level. The NACL works at the subnet level and is stateless, so it needs rules in both directions.

- **Troubleshooting:** SSH timed out because my IP changed and the NACL still had the old one. A timeout means traffic is blocked on the way, so I check the layers in order: public IP, route table, NACL, security group, my current IP.

- **IAM role:** the server uses `ec2-role`, so no access keys are stored on it.

- **Key safety:** the `.pem` key is set to `chmod 400` and is never uploaded to GitHub.

- **Nginx:** a web server that listens on port 80. I tested it with `curl -I localhost` before the browser.

- **Linux basics:** `cd`, `ls`, `touch`, `vim`, `mv`, `sudo`.
